import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import About from './components/About';
import Vechiles from './components/Vechiles';
import MeetTeam from './components/MeetTeam';
import Testimonals from './components/Testimonals';
import Contact from './components/Contact';
import { Router, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <>
      <Navbar />
    </>
     
      /* <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/vechiles" element={<Vechiles />} />
          <Route path="/meettheteam" element={<MeetTeam />} />
          <Route path="/testimonals" element={<Testimonals />} />
          <Route path="/contact" element={<Contact />} />
         </Routes> */

  );
}

export default App;
