import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import React from 'react';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cart" element={<Cart />}  />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/products' element={<ItemListContainer />}/>
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
      
    </div>
  )

}

export default App
