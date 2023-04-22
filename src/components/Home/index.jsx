import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail';
import styles from './home.module.css'
import { collection, getDocs } from 'firebase/firestore';
import db from '../../../db/firebase-config';

const Home = () => {

  const [products, setProducts] = useState([]);
  const productRef = collection(db, "items");

  const getItems = async () => {
    try{

      const productsCollection = await getDocs(productRef);
      const prodts = productsCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProducts(prodts)

    }catch(error) {

      console.log("ERROR: " + error);

    }
        
  };

  useEffect(() => {

    getItems()

  }, [])

  return (
    
    <div>

      <div className={styles.hero}>
        <p>New in</p>
      </div>
      <section className={styles.section}>
        <h1>Dakota Tienda Online</h1>
        <p>Productos destacados</p>
        <div className={styles.wrapper}>
          {products.slice(4).map((product) => ( <ItemDetail key={product.id} product={product}/> ))}
        </div>
      </section>  
    </div>

  )
}

export default Home