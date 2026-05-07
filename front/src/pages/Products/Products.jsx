// import { useEffect, useState } from 'react';
// import CardProduct from '../../components/CardProduct/CardProduct';
// import styles from './Products.module.css';

// function Products() {

//     const [ products, setProducts ] = useState( [] );
//     const [ loading, setLoading ] = useState( true );
//     const [ error, setError ] = useState( null );

//     useEffect( () => {
//         const fetchProducts = async () => {
//             try {
//                 setLoading( true );
//                 const response = await fetch( "http://localhost:5173/Data/product.json" );

//                 if( ! response.ok ) throw new Error( `HTTP Error ${ response.status }`  );

//                 const data = await response.json();
//                 setProducts( data );
//             }
//             catch( e ) {
//                 setError( e.message );
//                 console.log( e )
//             }
//             finally {
//                 setLoading( false );
//             }
//         }
//         fetchProducts();
//     }, []);

//   return (
//         <div className={ styles.products }>
//             <h1>Productos</h1>
//             <div>
//                 <h2>Lista de productos hackers</h2>
//                 {products.map( product => (
//                     <CardProduct
//                         key={ product.id }
//                         name={ product.name }
//                         category={ product.category }
//                         description={ product.description }
//                     />
//                 ))}
//             </div>
//         </div>
//     );


//     // {
//     //   id: 1,
//     //   name: "Café Latte",
//     //   category: "beverages",
//     //   description: "Suave espresso con leche vaporizada y una pequeña capa de espuma."
//     // },
//     // {
//     //   id: 2,
//     //   name: "Pastel de Chocolate",
//     //   category: "foods",
//     //   description: "Delicioso bizcocho de chocolate oscuro con cobertura cremosa."
//     // },
//     // {
//     //   id: 3,
//     //   name: "Jugo Verde",
//     //   category: "beverages",
//     //   description: "Mezcla refrescante de espinaca, manzana verde, apio y limón."
//     // }
  
// }

// export { products };
