import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./components/pages/Home/Home.jsx";
import NewWorkout from "./components/pages/NewWorkout/NewWorkout.jsx";


const App = () => {
  return (
  
    <BrowserRouter>
  
     
        <Routes> 
          <Route path='/' element={<Home />}/>
          <Route path='/NewWorkout' element={<NewWorkout />}/>
        </Routes>
    
   </BrowserRouter>
  );
}

export default App;
