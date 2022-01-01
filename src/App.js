import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Category from "./pages/category/Category";
import Homepage from "./pages/homepage/Homepage";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/category/:slug/:id" element={<Category />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
