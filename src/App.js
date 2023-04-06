import './App.css';
import Navbar from './Pages/Navbar';
import Homepage from './Pages/Homepage';
import Vechiles from './Pages/Vechiles';
import About from './Pages/About'
import Footer from './Pages/Footer';
import Testimonals from './Pages/Testimonals';
import MeetTeam from './Pages/MeetTeam';
import Contact from './Pages/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/vechiles" element={<Vechiles />} />
        <Route path="/testimonials" element={<Testimonals />} />
        <Route path="/meetTeam" element={<MeetTeam />} /> 
        <Route path="/contactUs" element={<Contact />} />   
      </Routes>
      <Footer />
    </>
  )
}

export default App;
