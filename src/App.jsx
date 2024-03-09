import React, { useState } from "react";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todo from "./Components/Todo";
import About from "./Components/About";
import Counter from "./Components/Counter";
import Homepage from "./Components/Homepage";

function App() {
  return (
    <div className="m-10 p-10">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Todo" element={<Todo />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
