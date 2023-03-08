import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./App.css";

const App = () => {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route
            index
            
            element={<Home />}
          />
          <Route
            path="services"
            
            element={<Services />}
          />
          <Route
            path="about"
            
            element={<About />}
          />
          <Route
            path="contact"
            
            element={<Contact />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
