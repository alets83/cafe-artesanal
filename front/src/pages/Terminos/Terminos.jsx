import { useEffect, useState } from 'react';
import React from 'react';
import CardComment from "../../components/CardComment/CardComment";
import styles from "./Terminos.module.css"


// const comments = [
//  {
//         "id": 1,
//         "title": "Excelente café latte",
//         "content": "El mejor café latte que he probado. Suave, bien balanceado y a la temperatura perfecta.",
//         "date": "2025-03-10",
//         "time": "10:30:00",
//         "products": [ "Café Latte" ]
//     },
//     {
//         "id": 2,
//         "title": "Pastel de chocolate increíble",
//         "content": "Muy húmedo y con un sabor intenso a chocolate. La cobertura no es empalagosa.",
//         "date": "2025-03-12",
//         "time": "15:45:00",
//         "products": [ "Pastel de Chocolate" ]
//     },
//     {
//         "id": 3,
//         "title": "Jugo verde refrescante",
//         "content": "Perfecto después del ejercicio. Se nota que usan ingredientes frescos.",
//         "date": "2025-03-14",
//         "time": "09:15:00",
//         "products": [ "Jugo Verde" ]
//     },
//     {
//         "id": 4,
//         "title": "Capuchino con mucha espuma",
//         "content": "Me encantó la espuma, pero el café estaba un poco amargo para mi gusto.",
//         "date": "2025-03-11",
//         "time": "11:20:00",
//         "products": [ "Capuchino" ]
//     },
//     {
//         "id": 5,
//         "title": "Cheesecake de fresa delicioso",
//         "content": "La fresa natural le da un toque fresco. La base crujiente perfecta.",
//         "date": "2025-03-13",
//         "time": "17:00:00",
//         "products": [ "Cheesecake de Fresa" ]
//     },
//     {
//         "id": 6,
//         "title": "Jugo de naranja muy natural",
//         "content": "Realmente recién exprimido. Sin azúcar añadido, tal como me gusta.",
//         "date": "2025-03-15",
//         "time": "08:30:00",
//         "products": [ "Jugo de Naranja" ]
//     },
//     {
//         "id": 7,
//         "title": "Caramel Macchiato espectacular",
//         "content": "Dulce en su punto justo. El toque de caramelo combina muy bien con el espresso.",
//         "date": "2025-03-09",
//         "time": "16:10:00",
//         "products": [ "Caramel Macchiato" ]
//     }

// ];

function Testimonios() {
  const [testimonios, setTestimonios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonios = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:8282/posts");
        
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