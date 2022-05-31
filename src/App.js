import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navs from "./Navbar/Navs";
import Tables from "./Table/Tables";
import Hooks from "./ReactHooks/Hooks";
import Contexts from "./ReactHooks/Contexts";
import Memo from "./ReactHooks/Memo";
import Callback from "./ReactHooks/Callback";
import UseRef from "./ReactHooks/UseRef";
import UseReducer from "./ReactHooks/UseReducer";
import Url from "./ReactHooks/Url";

function App() {
  return (
    <>
      <Navs />
      <BrowserRouter>
        <Routes>
          <Route path="/Tables" element={<Tables />} />
          <Route path="/Hooks" element={<Hooks />} />
          <Route path="/Contexts" element={<Contexts/>}/>
          <Route path="/Memo" element={<Memo/>}/>
          <Route path="/Callback" element={<Callback/>}/>
          <Route path="/UseRef" element={<UseRef/>}/>
          <Route path="/UseReducer" element={<UseReducer/>}/>
          <Route path="/Url" element={<Url/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
