import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Works from './routes/Works';
import Navbar from './component/Nav';
import Footer from './component/Footer'
import Service from './routes/Service';
function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/h' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/w' element={<Works />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/' element={<Service />} />
      </Routes>
      <Footer />
     
    </>
  );
}

export default App;
