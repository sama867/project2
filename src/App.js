
import './App.css';
import Navbar from './components/Navbar';
import { Routes,Route } from "react-router-dom";
import Home from"./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";



function App() {
  return (
    <>
    <Navbar/>
    <Routes>
  
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Service" element={<Service/>}/>
      <Route path="/Contact" element={<Contact/>}/>

    
    </Routes>
    </>

  );
}

export default App;
