import React, { createContext, useContext, useState } from 'react'

const CarritoContext = createContext([]);
export const usarCart = () => useContext(CarritoContext)

const Cart = ({children}) => {

    const [cart, setCart] = useState([])

    const limpiarCarrito = () => setCart([])

    const eliminarDelCarrito = (id) => setCart(cart.filter(producto => producto.id !== id));

    const agregarAlCarrito = (item, cantidadActualizada) =>{
        const carritoActualizado = cart.filter(product => product.id !== item.id)
        carritoActualizado.push({...item, cantidad: cantidadActualizada})
        setCart(carritoActualizado)
    }

    const totalProductos = () => cart.reduce((acc, producto) => acc + producto.cantidad, 0)

    const totalPrecio = () =>{
        return cart.reduce((acc, producto) => acc + producto.cantidad * producto.precio, 0)
    }

    console.log('carrito', cart)

    const existeEnCarrito = (id) => cart.find(product => product.id === id) ? true : false ;

    return (
        <CarritoContext.Provider value={{ 
            limpiarCarrito,
            eliminarDelCarrito, 
            agregarAlCarrito, 
            existeEnCarrito, 
            totalPrecio, 
            totalProductos,
            cart,
            }}>
            {children}
        </CarritoContext.Provider>
    );
    
};

export default Cart