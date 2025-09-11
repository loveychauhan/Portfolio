import About from "./sections/About";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";

const App = () => {
  return (
    <div className="container max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <section className="min-h-screen" />
      <section className="min-h-screen" />
      <section className="min-h-screen" />
    </div>
  );
};

export default App;
