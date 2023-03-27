import './App.css';
import Navbar from './Pages/Navbar';
import Homepage from './Pages/Homepage';
import About from './Pages/About';
import Vechiles from './Pages/Vechiles';
import MeetTeam from './Pages/MeetTeam';
import Testimonals from './Pages/Testimonals';
import Contact from './Pages/Contact';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/vechiles" element={<Vechiles />} />
          <Route path="/meettheteam" element={<MeetTeam />} />
          <Route path="/testimonals" element={<Testimonals />} />
          <Route path="/contact" element={<Contact />} />
         </Routes>
    </Router>
  )
}

export default App;
