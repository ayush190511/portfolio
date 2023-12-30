import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Home />
        <Skills />
        <About/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
