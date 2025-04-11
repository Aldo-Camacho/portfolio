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
    <Box sx={{ textAlign: "center", background: "linear-gradient(135deg, rgba(209,46,145,1) 0%, rgba(46,145,209,1) 50%, rgba(145,209,46,1) 100%);", backgroundSize: "contain", backgroundPosition: "center", minHeight: "100vh", display:"flex", flexDirection: "column", justifyContent: "space-between" }}>
      <Router basename={ process.env.PUBLIC_URL }>
        <Header/>
        <Box sx={{ width: "100vw", overflow: "scroll", scrollbarWidth: "none", "::-webkit-scrollbar": {display: "none"}, "-ms-overflow-style:": {display: "none"} }}>
          <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="/projects" element={ <Projects/> }/>
            <Route path="/projects/:id" element={ <Project/> }/>
            <Route path="/about" element={ <About/> }/>
            <Route path="/contact" element={ <Contact/> }/>
            <Route path="*" element={ <Navigate to="/" /> }/>
          </Routes>
        </Box>
        <Footer/>
      </Router>
    </Box>
  );
}

export default App;
