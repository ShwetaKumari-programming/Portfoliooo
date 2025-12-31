import About from "./components/About";
import Activities from "./components/Activities";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./index.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Activities />
    </>
  );
}
