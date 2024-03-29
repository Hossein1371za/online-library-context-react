import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Products from "./components/products/Products";
import Home from "./components/home/Home";
import Details from "./components/details/Details";
import Footer from "./components/footer/Footer";
import Library from "./components/library/Library";
import Login from "./components/aouth/Login";
import Register from "./components/aouth/Register";
import axios from "axios"

axios.defaults.withCredentials = true
const Core = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Banner />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Details />} />
          <Route path="/your-library" element={<Library />} />
          <Route path="/login" element={<Login/> } />
          <Route path="/register" element={<Register/> } />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default Core;
