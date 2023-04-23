import React, { useEffect, useState } from 'react';
import styles from './counter.module.css';

const Counter = ({initial, agregarCantidad, stock}) => {

    const [count, setCount] = useState(initial)

    const sumar = () =>{
        setCount(count + 1)
    }

    const restar = () =>{
        setCount(count - 1)
    }

    useEffect(() => {
        setCount(initial)
    }, [initial])
    

    return (
        <div>
            <button className={styles.buttonCounter} onClick={sumar} disabled={count >= stock}>+</button>
            <span>{count}</span>
            <button className={styles.buttonCounter} onClick={restar} disabled={count <= 1}>-</button>
            <div>
                <button className={styles.add} onClick={() => agregarCantidad(count)} disabled={stock <= 0}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Counter;