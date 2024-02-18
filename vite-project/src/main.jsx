import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from './pages/layout.jsx';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import CurrencyInfo from './pages/CurrencyInfo.jsx';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/currency/:currency" element={<CurrencyInfo/>} ></Route>
      </Route>
    </Routes>    
    </BrowserRouter>
  )
}



ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)


console.log("rerender Main")