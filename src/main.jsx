import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Cart from "./context/Cart.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <Cart>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </Cart>
)
