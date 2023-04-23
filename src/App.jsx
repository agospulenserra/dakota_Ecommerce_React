import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import React from 'react';
import Cart from './components/Cart';

function App() {
  
  return (
    <div>
      <Cart>
        <Navbar carritoIcono="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cart" element={<Cart />}  />
          <Route path='/products' element={<ItemListContainer />}/>
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
      </Cart>
      
    </div>
  )

}

export default App
