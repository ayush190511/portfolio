import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Scroll from "./components/scroller/Scroll";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Scroll/>
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
