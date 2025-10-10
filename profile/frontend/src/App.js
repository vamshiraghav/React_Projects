import React from "react";
// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import SystemDesign from "./components/SystemDesign";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import CodingPlatforms from "./components/CodingPlatforms";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PutLocalApp from "./PutLocalApp";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          {/* About section content is integrated into Hero for better UX */}
        </section>
        <Skills />
        <Experience />
        <SystemDesign />
        <Projects />
        <Achievements />
        <CodingPlatforms />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/healthtrack" element={<PutLocalApp storageKey="put.app.v1" initialTheme="light" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
