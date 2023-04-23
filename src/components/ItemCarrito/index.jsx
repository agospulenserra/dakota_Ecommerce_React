import React from 'react'
import { usarCart } from '../../context/Cart'

const ItemCarrito = ({product}) => {

    const {eliminarDelCarrito} = usarCart()

    return (

        <div>
            <img src={product.img1} alt="" />
            <div>
                <p>{product.title}</p>
                <p>Cantidad: {product.cantidad}</p>
                <p>Precio: {product.precio}</p>
                <p>Total: {product.precio * product.cantidad}</p>
                <button onClick={() => eliminarDelCarrito(product.id)}>Eliminar producto</button>
            </div>
        </div>

  )
}

export default ItemCarrito;