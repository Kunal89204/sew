import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from './components/products/Product'
import Contactus from "./components/Contactus";
import Snackpacking from './components/categories/Snackpacking'


const App = () => {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          {/* <Route path="/" index element={<Navbar />} /> */}
          <Route path="/Product"  element={<Product/>}   / >
          <Route path="/Contactus"  element={<Contactus/>}   / >
          <Route path="/Categories"  element={<Snackpacking/>}   / >
        </Routes>

      </Router>
    </>
  );
};

export default App;
