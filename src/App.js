import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './components/Home'
import About from './components/About'
import Destination from './components/Destination'
import Travel from './components/Travel'
import {BrowserRouter , Routes, Route}from "react-router-dom"
function App(){
  return(
    <>
    {/* <h1 classname="bg-primary">React</h1>
    <p>This is a paragraph</p> */}
    <BrowserRouter>
    <Travel/>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/about" element={<About/>}/>
      <Route path ="/destination" element={<Destination/>}/>
      <Route path ="/travel" element={<Travel/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;