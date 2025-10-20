import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, 
  FaDocker, FaAws, FaPython, FaDatabase, FaMobile, FaServer, FaUsers, FaCode
} from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiMongodb, SiExpress, SiNextdotjs, SiVuedotjs } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      color: 'from-primary-400 to-secondary-400',
      skills: [
        { name: 'HTML5', icon: FaHtml5, level: 95 },
        { name: 'CSS3', icon: FaCss3Alt, level: 90 },
        { name: 'JavaScript', icon: FaJs, level: 90 },
        { name: 'TypeScript', icon: SiTypescript, level: 85 },
        { name: 'React', icon: FaReact, level: 90 },
        { name: 'Next.js', icon: SiNextdotjs, level: 80 },
        { name: 'Tailwind CSS', icon: FaCss3Alt, level: 85 },
      ]
    },
    {
      title: 'Backend',
      color: 'from-secondary-400 to-primary-400',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, level: 85 },
        { name: 'Express', icon: SiExpress, level: 80 },
        { name: 'REST APIs', icon: FaServer, level: 85 },
      ]
    },
    {
      title: 'Databases',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, level: 80 },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 75 },
        { name: 'Database Design', icon: FaDatabase, level: 80 },
      ]
    },
    {
      title: 'Tools & Methods',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git', icon: FaGitAlt, level: 90 },
        { name: 'GitHub', icon: FaGitAlt, level: 90 },
        { name: 'Agile Workflow', icon: FaUsers, level: 85 },
        { name: 'Problem Solving', icon: FaCode, level: 90 },
        { name: 'Team Collaboration', icon: FaUsers, level: 90 },
      ]
    }
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

  const skillVariants = {
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
    <section id="skills" className="section-padding">
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
            <h2 className="heading-2 mb-4">My skills</h2>
            <p className="text-large text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Technologies and tools I use to build great web applications
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Category Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.color} mb-4`}>
                    <span className="text-2xl font-bold text-white">
                      {category.title.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.1 }}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg group-hover:bg-primary-100 dark:group-hover:bg-primary-900 transition-colors duration-200">
                            <skill.icon className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200" />
                          </div>
                          <span className="font-medium text-gray-900 dark:text-white">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">
              Other skills
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Responsive Design', 'UI/UX Design', 'Agile/Scrum', 'Testing',
                'Performance Optimization', 'SEO', 'Web Security', 'API Integration',
                'State Management', 'Version Control', 'Code Review', 'Documentation'
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-700 dark:hover:text-primary-300 transition-all duration-200"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
