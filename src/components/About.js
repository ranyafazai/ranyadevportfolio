import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaUsers, FaHeart } from 'react-icons/fa';

const About = () => {
  const stats = [
    { number: '1.5', label: 'Years of training', icon: FaCode },
    { number: '4+', label: 'Projects delivered', icon: FaRocket },
    { number: '100%', label: 'Determination', icon: FaHeart },
    { number: 'MERN', label: 'Stack mastered', icon: FaUsers },
  ];

  const technologies = [
    'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 
    'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'Git'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="heading-2 mb-4">About me</h2>
            <p className="text-large text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover my journey, skills, and passion for web development
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="heading-3 mb-4">My story</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  Hi! I’m Ranya, a newly trained Full‑Stack Developer with a solid foundation in modern
                  web technologies. I completed a 1.5‑year intensive program at ReBootKamp (RBK) Tunis,
                  where I honed my frontend and backend skills.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  I’m a collaborative team player and dedicated problem solver, always eager to learn
                  and contribute to innovative projects. My training focused on team‑based, real‑world
                  project work.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I master the MERN stack and I’m ready to apply my skills to real‑world challenges to
                  create meaningful digital experiences.
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Technologies I use
                </h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium transition-colors duration-200 hover:bg-primary-200 dark:hover:bg-primary-800"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Stats */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg text-center card-hover"
                  >
                    <div className="flex justify-center mb-3">
                      <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-full">
                        <stat.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 p-6 rounded-xl"
              >
                <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                  My philosophy
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  "I believe code should be not only functional, but also elegant, maintainable,
                  and accessible. Every project is an opportunity to learn and create something
                  exceptional."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
