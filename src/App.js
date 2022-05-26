import React from 'react'
import "./App.css"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navs from './Navbar/Navs';
import Tables from './Table/Tables';

function App() {
  return (
   <>
  
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Navs/>} />
   {/* <Route path="/Tables" element={<Tables/>} /> */}
   </Routes>
   </BrowserRouter>
   <Tables/>

   </>
  )
}

export default App