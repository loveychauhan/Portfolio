import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";

const App = () => {
  return (
    <div className="container max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
