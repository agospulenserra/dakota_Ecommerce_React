import React from 'react';
import { usarCart } from '../../context/Cart';
import styles from './itemCarrito.module.css';

const ItemCarrito = ({product}) => {

    const {eliminarDelCarrito} = usarCart()

    return (

        <div className={styles.contenedor}>
            <img src={product.img1} alt="" />
            <div className={styles.contenedor2}>
                <h2>{product.title}</h2>
                <p>Cantidad: {product.cantidad}</p>
                <p>Precio: ${product.precio}</p>
                <p>Total por {product.cantidad} unidades: ${product.precio * product.cantidad}</p>
                <button onClick={() => eliminarDelCarrito(product.id)}>Eliminar producto</button>
            </div>
        </div>

  )
}

export default ItemCarrito;