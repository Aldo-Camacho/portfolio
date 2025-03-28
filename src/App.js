import React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Project from "./components/Project";
import About from "./components/About";
import { Box } from "@mui/material";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Box sx={{ textAlign: "center", height: "100vh", background: "linear-gradient(135deg, rgba(234,21,198,1) 0%, rgba(21,198,234,1) 50%, rgba(198,234,21,1) 100%);", }}>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/projects' element={ <Projects/> }/>
          <Route path='/projects/:id' element={ <Project/> }/>
          <Route path='/about' element={ <About/> }/>
          <Route path='/contact' element={ <Contact/> }/>
          <Route path="*" element={ <Navigate to="/" /> }/>
        </Routes>
        <Footer/>
      </Router>
    </Box>
  );
}

export default App;
