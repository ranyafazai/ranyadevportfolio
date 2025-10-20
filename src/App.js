import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  // Removed unused loading state

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    } else {
      // Check system preference
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  useEffect(() => {
    // Apply dark mode class to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Save preference
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // Removed artificial loading delay

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Loading UI removed

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Sidebar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
