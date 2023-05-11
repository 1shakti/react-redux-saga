import React from "react";
import Header from "./component/header/header";
import Main from "./component/main/main";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Temp from "./pages/temp";

function App() {


  return (

    <Router>
    <Header />
    <Main />      
      <Routes>
        <Route path="/temp" element={<Temp />} />
      </Routes>
    </Router>
  );
}

export default App;
