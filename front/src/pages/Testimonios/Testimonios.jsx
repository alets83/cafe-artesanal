import { useEffect, useState } from 'react';
import React from 'react';
import CardComment from "../../components/CardComment/CardComment";
import styles from "./Testimonios.module.css"

function Testimonios() {
  const [testimonios, setTestimonios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonios = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:8282/api/posts");
        
        if (!response.ok) {
          throw new Error(`HTTP Error ${response.status}`);
        }
        
        const data = await response.json();
        // Ajusta aquí si tu API devuelve el array directo o dentro de .data
        const arrayData = data.data || data; 
        setTestimonios(arrayData);
      } catch (e) {
        setError(e.message);
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonios();
  }, []);

  if (loading) return <div>Cargando testimonios...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Testimonios</h1>
      <div className={styles.container}>
        {testimonios.map((comentario) => (
          <CardComment
            key={comentario.id}
            title={comentario.title}
            content={comentario.content}
            date={comentario.date}
            time={comentario.time}
            products={comentario.products}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonios;