import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaAward, FaCertificate } from 'react-icons/fa';
import educationData from '../data/education.json';

const Education = () => {
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

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="education" className="section-padding bg-gray-50 dark:bg-gray-800">
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
            <h2 className="heading-2 mb-4">Education & Certifications</h2>
            <p className="text-large text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My educational background and certifications that validate my skills
            </p>
          </motion.div>

          {/* Education Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationData.map((education, index) => (
              <motion.div
                key={education.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                    {education.degree.includes('Bootcamp') ? (
                      <FaCertificate className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                    ) : education.degree.includes('Certification') ? (
                      <FaAward className="w-8 h-8 text-yellow-500" />
                    ) : (
                      <FaGraduationCap className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {education.degree}
                  </h3>
                  <h4 className="text-lg font-medium text-primary-600 dark:text-primary-400 mb-3">
                    {education.institution}
                  </h4>
                  
                  {/* Duration and Location */}
                  <div className="flex flex-col space-y-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center justify-center space-x-2">
                      <FaCalendarAlt size={14} />
                      <span>{education.duration}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <FaMapMarkerAlt size={14} />
                      <span>{education.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {education.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2">
                    <h5 className="text-sm font-semibold text-gray-900 dark:text-white text-left">
                      Achievements:
                    </h5>
                    <ul className="text-left space-y-1">
                      {education.achievements.map((achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="flex items-start space-x-2 text-xs text-gray-600 dark:text-gray-300"
                        >
                          <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-1.5 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Learning */}
          <motion.div
            variants={itemVariants}
            className="mt-16"
          >
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Continuous learning
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
                I strongly believe in lifelong learning. I regularly take online courses, attend tech conferences,
                and contribute to open‑source projects to stay up to date with the latest technologies.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'Coursera', 'Udemy', 'FreeCodeCamp', 'MDN Web Docs',
                  'Stack Overflow', 'GitHub', 'Dev.to', 'Medium'
                ].map((platform, index) => (
                  <span
                    key={platform}
                    className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
