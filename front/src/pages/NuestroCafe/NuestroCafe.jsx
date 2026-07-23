import { useEffect, useState } from 'react';
import React from 'react';
import CardProduct from '../../components/CardProduct/CardProduct';

function Products() {

    const [ products, setProducts ] = useState( [] );
    const [ loading, setLoading ] = useState( true );
    const [ error, setError ] = useState( null );

    useEffect( () => {
        const fetchProducts = async () => {
            try {
                setLoading( true );
                const response = await fetch( "http://localhost:8282/api/products" );

                if( ! response.ok ) throw new Error( `HTTP Error ${ response.status }`  );

                const data = await response.json();
                setProducts( data.data );
                // console.log (data);
                // console.log (data.success);
                // console.log (data.total);
                // console.log (data.datos);
            }
            catch( e ) {
                setError( e.message );
                console.log( e )
            }
            finally {
                setLoading( false );
            }
        }
        fetchProducts();
    }, []);

// const products = [ {
//       id: 1,
//       name: "Café Latte",
//       category: "beverages",
//       description: "Suave espresso con leche vaporizada y una pequeña capa de espuma."
//     },
//     {
//       id: 2,
//       name: "Pastel de Chocolate",
//       category: "foods",
//       description: "Delicioso bizcocho de chocolate oscuro con cobertura cremosa."
//     },
//     {
//       id: 3,
//       name: "Jugo Verde",
//       category: "beverages",
//       description: "Mezcla refrescante de espinaca, manzana verde, apio y limón."
//     }];


  return (
    <div className="container-web">
      <header className="hero">
        <div className="hero-content">
          <h1>Nuestra Selección</h1>
            <div className='block products'>
              {products.map( product => (
                <CardProduct
                  key={ product.id }
                  name={ product.name }
                  category={ product.category }
                  description={ product.description }
                  />
                ))} 
                </div>
          <p>Granos cultivados con pasión y respeto por la tierra.</p>
        </div>
      </header>

      <section className="features-grid">
        <div className="card">
          <h3>Origen Único</h3>
          <p>Proveniente de las mejores fincas de altura.</p>
        </div>
        <div className="card">
          <h3>Proceso Lavado</h3>
          <p>Resalta la acidez limpia y notas frutales.</p>
        </div>
        <div className="card">
          <h3>Variedad Arábica</h3>
          <p>Garantizamos calidad premium en cada taza.</p>
        </div>
      </section>
    </div>
  );
}

export default Products;
