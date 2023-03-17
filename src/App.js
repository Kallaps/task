import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Headers from "./components/Headers";
import Home from "./components/Home";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Headers />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
