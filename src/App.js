import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './Header';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import { Box } from '@mui/material';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <Box sx={{ textAlign: 'center', height: '100vh', background: "linear-gradient(135deg, rgba(234,21,198,1) 0%, rgba(21,198,234,1) 50%, rgba(198,234,21,1) 100%);", }}>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/projects' element={ <Projects/> }/>
          <Route path='/about' element={ <About/> }/>
          <Route path='/contact' element={ <Contact/> }/>
        </Routes>
        <Footer/>
      </Router>
    </Box>
  );
}

export default App;
