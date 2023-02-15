import React from "react";
import "./App.css";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Product from "./Product";
import Footer from "./Footer.jsx";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Product />
      <Footer />
    </div>
  );
};

export default App;
