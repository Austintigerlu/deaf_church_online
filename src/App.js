import {Route, Routes} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Announcement from "./pages/Announcement";
import Contact from "./pages/Contact";
import Donation from "./pages/Donation";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/gallery" element={<Gallery/>}/>
          <Route exact path="/announcements" element={<Announcement/>}/>
          <Route exact path="/donation" element={<Donation/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
