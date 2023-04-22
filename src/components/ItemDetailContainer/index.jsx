import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import db from '../../../db/firebase-config';

const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState([]);
    const {listId}= useParams();
    const productRef = doc(db, "items", listId);

    const getItems = async () => {
      try{

        const productCollection = await getDoc(productRef);
        const prodt = productCollection.doc.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProduct(prodt)

      }catch(error) {

          console.log("ERROR: " + error);

      }
        
  };

  useEffect(() => {

    getItems()

  }, [listId])

  return (

    <div className={styles.wrapper}>

        {product.map((product) => (

          <ItemDetail key={product.id} product={product}/>

        ))}

    </div>

  )

}

export default ItemDetailContainer