import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import db from '../../../db/firebase-config';
import ItemDetail from '../ItemDetail';
import Spinner from '../Spinner';
import styles from './itemDetailContainer.module.css'


const ItemDetailContainer = () => {
    
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const {id}= useParams();
  const productRef = doc(db, "items", id);

  const getItem = async () => {
    try{

      const productCollection = await getDoc(productRef);
      const prodt = { id: productCollection.id, ...productCollection.data() }
      setProduct(prodt)

    }catch(error) {

        console.log("ERROR: " + error);

    }
      
  };

  useEffect(() => {

    getItem()

  }, [id]);

  const loadingg = () =>{
    if (loading) {
      return <Spinner />;
    }else{
      setLoading(false)
    }
  }
  

  return (

    <div className={styles.section}>
      { !product ? loadingg() : <ItemDetail product={product}/>}
    </div>

  )

}

export default ItemDetailContainer;