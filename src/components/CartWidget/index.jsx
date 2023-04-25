import React from 'react';
import { usarCart } from '../../context/Cart';
import styles from './cartWidget.module.css';

const CartWidget = () => {

    const { totalProductos } = usarCart()

    const carritoIcono="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"

    return (
        <>
            <img src={carritoIcono} alt="icono del carrito" width="30" height="30"/>
            <p className={styles.pCarrito}>{totalProductos() || " "}</p>
        </>
        
    )
}

export default CartWidget;