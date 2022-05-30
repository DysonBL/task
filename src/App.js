import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navs from "./Navbar/Navs";
import Tables from "./Table/Tables";
import Hooks from "./ReactHooks/Hooks";

function App() {
  return (
    <>
      <Navs />
      <BrowserRouter>
        <Routes>
          <Route path="/Tables" element={<Tables />} />
          <Route path="/Hooks" element={<Hooks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
