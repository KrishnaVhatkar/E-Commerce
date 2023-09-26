import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./components/pages/home/Home";
import Header from './components/header/Header.js'
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>

    </>
  );
};

export default App;
