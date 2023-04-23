import React from 'react';
import { usarCart } from '../../context/Cart';
import ItemCarrito from '../ItemCarrito';

const Cart = () => {

    const {cart, totalPrecio} = usarCart();

    return (
        <div>
            {cart.map((product) => <ItemCarrito key={product.id} product={product}/>)}
            <p>Total: {totalPrecio()}</p>
        </div>
    )
}

export default Cart;