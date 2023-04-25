import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from './itemListContainer.module.css';
import db from "../../../db/firebase-config";
import { getDocs, collection, addDoc } from "firebase/firestore";
import ItemList from "../ItemList";


const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const {id}= useParams();
    const productRef = collection(db, "items");

    const getItems = async () => {
      try{

        const productsCollection = await getDocs(productRef);
        const prodts = productsCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

        if(id){

          setProducts(prodts.filter((product) => product.category == id))

        }else{
        
          setProducts(prodts)

        }
      }catch(error) {

          console.log("ERROR: " + error);

      }
        
  };

  useEffect(() => {

    getItems()

  }, [id])

  return (

    <div className={styles.wrapper}>

        {products.map((product) => (

          <ItemList key={product.id} product={product}/>

        ))}

    </div>

  )

}

export default ItemListContainer;