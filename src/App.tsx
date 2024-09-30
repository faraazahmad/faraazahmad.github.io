import Navbar from "./pages/Navbar";
import Intro from "./pages/Intro";
import AboutMe from "./pages/AboutMe";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import BlogPosts from "./pages/BlogPosts";
import Footer from "./pages/Footer";

import Social from "./components/Social";
import Email from "./components/Email";
import Top from "./components/Top";

import "./App.css";
import { useState } from "react";

function App() {
  const [scrollY, setScrollY] = useState(0);

  document.addEventListener("scroll", (e) => {
    setScrollY(window.scrollY);
  });

  return (
    <div className="bg-white">
      <div className="bg-white min-h-screen">
        <Navbar />
        <Intro />
        <AboutMe />
        <Experience />
        <Projects />
        <BlogPosts />
      </div>

      <Footer />

      <Top scrollY={scrollY} />
    </div>
  );
}

export default App;
