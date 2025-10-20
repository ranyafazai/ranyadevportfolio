import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaTools, FaProjectDiagram, FaBriefcase, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home', icon: FaHome },
    { name: 'About', href: '#about', icon: FaUser },
    { name: 'Skills', href: '#skills', icon: FaTools },
    { name: 'Projects', href: '#projects', icon: FaProjectDiagram },
    { name: 'Experience', href: '#experience', icon: FaBriefcase },
    { name: 'Contact', href: '#contact', icon: FaEnvelope },
  ];

  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.aside
      initial={false}
      animate={{ width: open ? 200 : 56 }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="fixed top-20 left-0 z-40 h-[calc(100vh-5rem)] bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-r border-gray-200 dark:border-gray-800 shadow-sm flex flex-col"
    >
      <div className="flex items-center justify-between px-3 py-3">
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-md bg-primary-50 dark:bg-primary-900 text-primary-700 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-800 transition-colors"
          aria-label="Toggle sidebar"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
        {open && (
          <span className="ml-2 text-sm font-semibold gradient-text">Menu</span>
        )}
      </div>

      <nav className="mt-2 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => scrollToSection(item.href)}
            className={`w-full flex items-center ${open ? 'justify-start px-4' : 'justify-center'} py-3 text-gray-700 dark:text-gray-300 hover:text-primary-700 dark:hover:text-primary-300 hover:bg-primary-50/70 dark:hover:bg-primary-900/20 transition-colors`}
          >
            <item.icon className="text-lg" />
            {open && <span className="ml-3 text-sm font-medium">{item.name}</span>}
          </button>
        ))}
      </nav>
    </motion.aside>
  );
};

export default Sidebar;


