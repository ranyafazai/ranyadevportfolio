import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDownload } from 'react-icons/fa';
import { HiCode } from 'react-icons/hi';
import { PROFILE_IMAGE_URL } from '../config/profile';

const Hero = () => {
  const [hasImage, setHasImage] = useState(true);
  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      href: 'https://github.com/ranyafazai',
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: 'https://linkedin.com/in/ranya-fazai-b80020386',
      color: 'hover:text-primary-500',
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      href: 'mailto:ranyafazaei@gmail.com',
      color: 'hover:text-red-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-200 dark:bg-primary-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-secondary-200 dark:bg-secondary-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-pulse delay-2000"></div>
      </div>

      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div className="relative inline-block group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 p-1 mx-auto"
              >
                {hasImage ? (
                  <img
                    src={PROFILE_IMAGE_URL}
                    alt="Photo de profil"
                    className="w-full h-full rounded-full object-cover bg-gray-200 dark:bg-gray-700"
                    onError={() => setHasImage(false)}
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <HiCode className="w-20 h-20 md:w-24 md:h-24 text-primary-600 dark:text-primary-400" />
                  </div>
                )}
              </motion.div>
              {/* Removed rotating ring */}
            </div>
          </motion.div>


          {/* Main Content */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="heading-1 mb-4">
              Hi, I’m <span className="gradient-text">Ranya Fazai</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-600 dark:text-gray-300 mb-6">
              Full‑Stack Developer
            </h2>
            <p className="text-large text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              A passionate and meticulous developer based in Tunis. Recently graduated from an intensive web development bootcamp, I build dynamic and responsive applications with the MERN stack.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6 mb-8"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className={`text-2xl text-gray-600 dark:text-gray-400 transition-colors duration-300 ${social.color}`}
                aria-label={social.name}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary flex items-center space-x-2"
            >
              <span>Contact me</span>
              <FaEnvelope />
            </motion.button>
            
            <motion.a
              href="/cv-rayen.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center space-x-2"
            >
              <span>Download CV</span>
              <FaDownload />
            </motion.a>
          </motion.div>

          {/* Scroll indicator removed */}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
