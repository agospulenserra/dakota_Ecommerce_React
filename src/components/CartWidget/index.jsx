import React from 'react';
import { usarCart } from '../../context/Cart';
import ItemCarrito from '../ItemCarrito';
import styles from './cartWidget.module.css';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../../db/firebase-config';
import ItemList from '../ItemList';
import Checkout from '../Checkout';

const CartWidget = () => {

    
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

    const {cart, totalPrecio} = usarCart() || {};

    if (cart.length === 0){
        return (
            <>
                <div className={styles.contenedor}>
                    <h2 className={styles.p}>Aun no se han agregado elementos al carrito</h2>
                </div>
                <section className={styles.section}>
                    <h3>Los productos mas elegidos</h3>
                    <div className={styles.wrapper}>
                        {products.slice(4).map((product) => ( <ItemList key={product.id} product={product}/> ))}
                    </div>
                </section>
            </>
        )
    }

    const goToCheckout = () =>{
        <>
            {cart.map((product) => <Checkout key={product.id} product={product} totalPrecio={totalPrecio()}/>)}
        </>
    }

    return (
        <div className={styles.contenedorPrincipal}>
            {cart.map((product) => <ItemCarrito key={product.id} product={product}/>)}
            <p className={styles.p}>Total: ${totalPrecio()}</p>
            <div className={styles.contendorButton}>
                <button className={styles.button} onClick={() => goToCheckout()}>Finalizar compra</button>
            </div>
        </div>
    )
}

export default CartWidget;