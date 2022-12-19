import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./components/pages/Home/Home.jsx";
import About from "./components/pages/about/About.jsx";
import Header from "./components/common/Header/Header.jsx";
import Layout from "./components/common/Layout.jsx";


const App = () => {
  return (
  
    <BrowserRouter>
  
     
        <Routes> 
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
    
   </BrowserRouter>
  );
}

export default App;
