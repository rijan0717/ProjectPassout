import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;