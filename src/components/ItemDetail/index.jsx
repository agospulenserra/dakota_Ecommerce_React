import React from 'react';
import styles from './itemDetail.module.css';
import Counter from '../Counter';
import {usarCart} from '../../context/Cart';

const ItemDetail = ({product}) => {

  const {agregarAlCarrito} = usarCart()

  const agregarCantidad = (cantidad) => {
    agregarAlCarrito(product, cantidad)
  }

  return (
    <section className={styles.section}>
        <h2 className={styles.h2}>{product.title}</h2>
        <div className={styles.imgDiv}>
            <img src={product.img1} alt="imagen principal"/>
            <img src={product.img2} alt="imagen principal"/>
            <img src={product.img3} alt="imagen principal"/>
        </div>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.talles}>{product.talles}</p>
        <p className={styles.colores}>{product.colores}</p>
        <p className={styles.precio}>${product.precio}</p>
        <Counter initial={parseInt(0)} agregarCantidad={agregarCantidad} stock={10}/>

    </section>
  )
}

export default ItemDetail



