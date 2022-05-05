import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Works from "./components/Works";
import Skills from "./components/Skills";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route index element={<Hero />} /> */}
        <Route path="/" element={<Hero />} />
        <Route path="works" element={<Works />}>
          <Route path="skills" element={<Skills />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        {/* </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
