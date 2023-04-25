import React, { useState } from 'react';
import db from '../../../db/firebase-config';
import { addDoc } from 'firebase/firestore';
import { usarCart } from '../../context/Cart';
import styles from './checkout.module.css';

const Checkout = () => {


    const [inputNombre, setInputNombre] = useState("");
    const [inputApellido, setInputApellido] = useState("");
    const [inputTelefono, setInputTelefono] = useState("");
    const [inputMail1, setInputMail1] = useState("");
    const [inputMail2, setInputMail2] = useState("");

    const handleInputNombre = (e) => {
      setInputNombre(e.target.value);
    };
    const handleInputApellido = (e) => {
        setInputApellido(e.target.value);
    };
    const handleInputTelefono = (e) => {
        setInputTelefono(e.target.value);
    };
    const handleInputMail1 = (e) => {
        setInputMail1(e.target.value);
    };
    const handleInputMail2 = (e) => {
        setInputMail2(e.target.value);
    };

    const {cart, totalPrecio} = usarCart()
    const fecha = new Date()
    
    const handleSubmit = async(product, e) => {
        e.preventDefault();
        const item = {
            usuario:{
                nombre: inputNombre,
                apeliido: inputApellido,
                telefono: inputTelefono,
                mail: inputMail1,
            },
            producto:{
                titulo: product.title,
                cantidad: product.cantidad,
                precio: product.precio,
                total: totalPrecio(),
                id: key
            },
            fecha: fecha
        };
        await addDoc(db, "orden", item);
        setInputNombre("");
        setInputApellido("");
        setInputTelefono("");
        setInputMail1("");
        setInputMail2("");
    };
  
    return (
      <form className={styles.contenedor} onSubmit={cart.forEach((product) => handleSubmit(product))}>
        <input
          type="text"
          placeholder="ingresa tu nombre"
          onChange={handleInputNombre}
          value={inputNombre}
        />
        <input
          type="text"
          placeholder="ingresa tu apellido"
          onChange={handleInputApellido}
          value={inputApellido}
        />
        <input
          type="text"
          placeholder="ingresa tu numero de telefono"
          onChange={handleInputTelefono}
          value={inputTelefono}
        />
        <input
          type="text"
          placeholder="ingresa tu mail"
          onChange={handleInputMail1}
          value={inputMail1}
        />
        <input
          type="text"
          placeholder="ingresa de nuevo tu mail"
          onChange={handleInputMail2}
          value={inputMail2}
        />
        <button disabled={inputMail1 !== inputMail2} type='submit'>Comprar</button>
      </form>
    );
};

export default Checkout