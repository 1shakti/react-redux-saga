import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartList from "./pages/cartList";
import Home from "./pages/home";

function App() {


  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cartList" element={<CartList />} />
      </Routes>
    </Router>
  );
}

export default App;
