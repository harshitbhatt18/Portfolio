"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { skills } from '@/data/portfolio'
import { 
  SiCplusplus, SiPython, SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, 
  SiExpress, SiMongodb, SiGit, SiLinux, SiDocker, SiAmazon, 
  SiPostgresql, SiVite, SiSupabase, SiTailwindcss,
  SiHtml5, SiCss3, SiTypescript, SiVercel, SiGithub,
  SiCodeforces, SiLeetcode, SiCodechef
} from 'react-icons/si'
import { 
  FaBrain, FaCode, FaCogs, FaSearch, FaBug, FaDatabase, FaServer, FaCloud, FaJava
} from 'react-icons/fa'

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  // Icon mapping for technologies
  const iconMap: { [key: string]: { icon: React.ReactNode; color: string; description: string } } = {
    'C++': { 
      icon: <SiCplusplus className="w-full h-full" />, 
      color: '#00599C',
      description: 'Systems programming & competitive coding'
    },
    'Python': { 
      icon: <SiPython className="w-full h-full" />, 
      color: '#3776AB',
      description: 'Machine learning & backend development'
    },
    'Java': { 
      icon: <FaJava className="w-full h-full" />, 
      color: '#ED8B00',
      description: 'Enterprise applications & OOP'
    },
    'React': { 
      icon: <SiReact className="w-full h-full" />, 
      color: '#61DAFB',
      description: 'Interactive UI components & SPAs'
    },
    'Next.js': { 
      icon: <SiNextdotjs className="w-full h-full" />, 
      color: '#000000',
      description: 'Full-stack React framework'
    },
    'Node.js': { 
      icon: <SiNodedotjs className="w-full h-full" />, 
      color: '#339933',
      description: 'Server-side JavaScript runtime'
    },
    'Express.js': { 
      icon: <SiExpress className="w-full h-full" />, 
      color: '#000000',
      description: 'Minimal web framework for Node.js'
    },
    'MongoDB': { 
      icon: <SiMongodb className="w-full h-full" />, 
      color: '#47A248',
      description: 'NoSQL document database'
    },
    'Git': { 
      icon: <SiGit className="w-full h-full" />, 
      color: '#F05032',
      description: 'Version control & collaboration'
    },
    'Linux': { 
      icon: <SiLinux className="w-full h-full" />, 
      color: '#FCC624',
      description: 'Unix systems & shell scripting'
    },
    'Docker': { 
      icon: <SiDocker className="w-full h-full" />, 
      color: '#2496ED',
      description: 'Containerization & deployment'
    },
    'AWS': { 
      icon: <SiAmazon className="w-full h-full" />, 
      color: '#232F3E',
      description: 'Cloud computing & infrastructure'
    },
    'PostgreSQL': { 
      icon: <SiPostgresql className="w-full h-full" />, 
      color: '#336791',
      description: 'Relational database management'
    },
    'Vite': { 
      icon: <SiVite className="w-full h-full" />, 
      color: '#646CFF',
      description: 'Fast build tool & dev server'
    },
    'Supabase': { 
      icon: <SiSupabase className="w-full h-full" />, 
      color: '#3ECF8E',
      description: 'Backend as a service platform'
    },
    'Data Structures & Algorithms': { 
      icon: <FaBrain className="w-full h-full" />, 
      color: '#FF6B6B',
      description: 'Efficient problem-solving techniques'
    },
    'Problem Solving': { 
      icon: <FaSearch className="w-full h-full" />, 
      color: '#4ECDC4',
      description: 'Analytical thinking & optimization'
    },
    'System Design': { 
      icon: <FaCogs className="w-full h-full" />, 
      color: '#45B7D1',
      description: 'Scalable architecture planning'
    },
    'Code Optimization': { 
      icon: <FaCode className="w-full h-full" />, 
      color: '#96CEB4',
      description: 'Performance & efficiency tuning'
    },
    'Debugging': { 
      icon: <FaBug className="w-full h-full" />, 
      color: '#FFEAA7',
      description: 'Issue identification & resolution'
    },
    'Ollama': { 
      icon: <FaBrain className="w-full h-full" />, 
      color: '#6C5CE7',
      description: 'Local LLM deployment & inference'
    }
  }

  // Flatten all skills with their categories
  const allSkills = skills.flatMap(category => 
    category.items.map(skill => ({
      ...skill,
      category: category.category,
      ...iconMap[skill.name]
    }))
  )

  // Additional technologies with icons
  const additionalTechs = [
    'Git', 'Linux', 'Docker', 'AWS', 'PostgreSQL', 'Vite', 'Ollama', 'Supabase'
  ].map(tech => ({
    name: tech,
    category: 'Additional Tools',
    ...iconMap[tech]
  }))

  // Combine all skills
  const allTechSkills = [...allSkills, ...additionalTechs]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            ⚡ Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My tech arsenal flowing in motion
          </p>
        </motion.div>

        {/* Extraordinary Conveyor Belt Skills */}
        <div className="relative mb-20 overflow-visible">
          {/* Dynamic background effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-3xl blur-2xl animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-l from-cyan-500/5 via-emerald-500/5 to-cyan-500/5 rounded-3xl blur-xl" style={{animationDelay: '1s'}} />
          
          <div className="relative z-10 py-12 px-4">
          {/* Skills moving left to right */}
          <div className="flex mask-gradient py-8" style={{overflow: 'hidden'}}>
            <motion.div
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                duration: 50,
                repeat: Infinity,
                ease: "linear"
              }}
              className="flex flex-shrink-0 gap-8 pr-8"
            >
              {/* First set of skills */}
              {allTechSkills.map((skill, index) => (
                <motion.div
                  key={`first-${skill.name}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.15,
                    y: -8,
                    zIndex: 50,
                    transition: { duration: 0.3 }
                  }}
                  className="group cursor-pointer flex-shrink-0 relative z-10 hover:z-50"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div 
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl shadow-xl border-2 border-white dark:border-gray-700 group-hover:border-4 transition-all duration-500 flex items-center justify-center relative overflow-hidden backdrop-blur-md"
                    style={{ 
                      background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}35, ${skill.color}15)`,
                      borderColor: hoveredSkill === skill.name ? skill.color : undefined,
                      boxShadow: hoveredSkill === skill.name 
                        ? `0 20px 40px ${skill.color}40, 0 0 20px ${skill.color}60, inset 0 1px 0 rgba(255,255,255,0.2)` 
                        : '0 8px 16px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)'
                    }}
                  >
                    <div 
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 relative"
                      style={{ 
                        color: skill.color,
                        filter: hoveredSkill === skill.name ? `drop-shadow(0 0 8px ${skill.color})` : 'none'
                      }}
                    >
                      {skill.icon}
                      
                      {/* Magical particles on hover */}
                      {hoveredSkill === skill.name && (
                        <>
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 rounded-full"
                              style={{ backgroundColor: skill.color }}
                              initial={{ 
                                x: 0, 
                                y: 0, 
                                opacity: 0,
                                scale: 0
                              }}
                              animate={{ 
                                x: Math.cos(i * 60 * Math.PI / 180) * 30,
                                y: Math.sin(i * 60 * Math.PI / 180) * 30,
                                opacity: [0, 1, 0],
                                scale: [0, 1.5, 0]
                              }}
                              transition={{ 
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.1,
                                ease: "easeOut"
                              }}
                            />
                          ))}
                        </>
                      )}
                    </div>
                    
                    {/* Glowing effect */}
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                      style={{ 
                        background: `radial-gradient(circle, ${skill.color}40, transparent 70%)`
                      }}
                    />

                    {/* Enhanced skill tooltip */}
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.5, rotateX: -90 }}
                      animate={{ 
                        opacity: hoveredSkill === skill.name ? 1 : 0,
                        y: hoveredSkill === skill.name ? -65 : 20,
                        scale: hoveredSkill === skill.name ? 1 : 0.5,
                        rotateX: hoveredSkill === skill.name ? 0 : -90
                      }}
                      transition={{ 
                        duration: 0.4,
                        type: "spring",
                        stiffness: 200,
                        damping: 15
                      }}
                      className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full pointer-events-none z-[100]"
                    >
                      <div 
                        className="relative px-4 py-3 rounded-2xl text-white font-bold text-sm whitespace-nowrap shadow-2xl backdrop-blur-md border border-white/20 min-w-max"
                        style={{ 
                          background: `linear-gradient(135deg, ${skill.color}E6, ${skill.color}CC)`,
                          boxShadow: `0 20px 40px ${skill.color}40, 0 0 20px ${skill.color}60`
                        }}
                      >
                        <div className="text-center">
                          <div className="text-lg font-extrabold tracking-wide">{skill.name}</div>
                          <div className="text-xs mt-1 opacity-90 font-medium">
                            {skill.description}
                          </div>
                        </div>
                        
                        {/* Animated arrow */}
                        <motion.div 
                          className="absolute top-full left-1/2 transform -translate-x-1/2"
                          animate={{ 
                            y: hoveredSkill === skill.name ? [0, -2, 0] : 0 
                          }}
                          transition={{ 
                            duration: 1.5, 
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <div 
                            className="w-0 h-0 border-l-6 border-r-6 border-t-6 border-transparent"
                            style={{ borderTopColor: skill.color }}
                          />
                        </motion.div>
                        
                        {/* Glowing border animation */}
                        <div 
                          className="absolute inset-0 rounded-2xl opacity-75"
                          style={{ 
                            background: `linear-gradient(45deg, ${skill.color}60, transparent, ${skill.color}60)`,
                            backgroundSize: '300% 300%',
                            animation: 'gradient-shift 2s ease infinite'
                          }}
                        />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {allTechSkills.map((skill, index) => (
                  <motion.div
                  key={`second-${skill.name}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.15,
                    y: -8,
                    zIndex: 50,
                    transition: { duration: 0.3 }
                  }}
                  className="group cursor-pointer flex-shrink-0 relative z-10 hover:z-50"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div 
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl shadow-xl border-2 border-white dark:border-gray-700 group-hover:border-4 transition-all duration-500 flex items-center justify-center relative overflow-hidden backdrop-blur-md"
                    style={{ 
                      background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}35, ${skill.color}15)`,
                      borderColor: hoveredSkill === skill.name ? skill.color : undefined,
                      boxShadow: hoveredSkill === skill.name 
                        ? `0 20px 40px ${skill.color}40, 0 0 20px ${skill.color}60, inset 0 1px 0 rgba(255,255,255,0.2)` 
                        : '0 8px 16px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)'
                    }}
                  >
                    <div 
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 relative"
                      style={{ 
                        color: skill.color,
                        filter: hoveredSkill === skill.name ? `drop-shadow(0 0 8px ${skill.color})` : 'none'
                      }}
                    >
                      {skill.icon}
                      
                      {/* Magical particles on hover */}
                      {hoveredSkill === skill.name && (
                        <>
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 rounded-full"
                              style={{ backgroundColor: skill.color }}
                              initial={{ 
                                x: 0, 
                                y: 0, 
                                opacity: 0,
                                scale: 0
                              }}
                              animate={{ 
                                x: Math.cos(i * 60 * Math.PI / 180) * 30,
                                y: Math.sin(i * 60 * Math.PI / 180) * 30,
                                opacity: [0, 1, 0],
                                scale: [0, 1.5, 0]
                              }}
                              transition={{ 
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.1,
                                ease: "easeOut"
                              }}
                            />
                          ))}
                        </>
                      )}
                    </div>
                    
                    {/* Glowing effect */}
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                      style={{ 
                        background: `radial-gradient(circle, ${skill.color}40, transparent 70%)`
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Skills moving right to left (counter direction) */}
          <div className="flex mask-gradient py-8 mt-10" style={{overflow: 'hidden'}}>
            <motion.div
              animate={{ x: ["-100%", "0%"] }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear"
              }}
              className="flex flex-shrink-0 gap-8 pr-8"
            >
              {/* Reverse order for counter movement */}
              {[...allTechSkills].reverse().map((skill, index) => (
                      <motion.div
                  key={`reverse-first-${skill.name}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                        viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.15,
                    y: -8,
                    zIndex: 50,
                    transition: { duration: 0.3 }
                  }}
                  className="group cursor-pointer flex-shrink-0 relative z-10 hover:z-50"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div 
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl shadow-xl border-2 border-white dark:border-gray-700 group-hover:border-4 transition-all duration-500 flex items-center justify-center relative overflow-hidden backdrop-blur-md"
                    style={{ 
                      background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}35, ${skill.color}15)`,
                      borderColor: hoveredSkill === skill.name ? skill.color : undefined,
                      boxShadow: hoveredSkill === skill.name 
                        ? `0 20px 40px ${skill.color}40, 0 0 20px ${skill.color}60, inset 0 1px 0 rgba(255,255,255,0.2)` 
                        : '0 8px 16px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)'
                    }}
                  >
                    <div 
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 relative"
                      style={{ 
                        color: skill.color,
                        filter: hoveredSkill === skill.name ? `drop-shadow(0 0 8px ${skill.color})` : 'none'
                      }}
                    >
                      {skill.icon}
                      
                      {/* Magical particles on hover */}
                      {hoveredSkill === skill.name && (
                        <>
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 rounded-full"
                              style={{ backgroundColor: skill.color }}
                              initial={{ 
                                x: 0, 
                                y: 0, 
                                opacity: 0,
                                scale: 0
                              }}
                              animate={{ 
                                x: Math.cos(i * 60 * Math.PI / 180) * 30,
                                y: Math.sin(i * 60 * Math.PI / 180) * 30,
                                opacity: [0, 1, 0],
                                scale: [0, 1.5, 0]
                              }}
                              transition={{ 
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.1,
                                ease: "easeOut"
                              }}
                            />
                          ))}
                        </>
                      )}
                    </div>
                    
                    {/* Glowing effect */}
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                      style={{ 
                        background: `radial-gradient(circle, ${skill.color}40, transparent 70%)`
                      }}
                      />
                    </div>
                  </motion.div>
                ))}
              
              {/* Duplicate set for seamless loop */}
              {[...allTechSkills].reverse().map((skill, index) => (
                <motion.div
                  key={`reverse-second-${skill.name}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.15,
                    y: -8,
                    zIndex: 50,
                    transition: { duration: 0.3 }
                  }}
                  className="group cursor-pointer flex-shrink-0 relative z-10 hover:z-50"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div 
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl shadow-xl border-2 border-white dark:border-gray-700 group-hover:border-4 transition-all duration-500 flex items-center justify-center relative overflow-hidden backdrop-blur-md"
                    style={{ 
                      background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}35, ${skill.color}15)`,
                      borderColor: hoveredSkill === skill.name ? skill.color : undefined,
                      boxShadow: hoveredSkill === skill.name 
                        ? `0 20px 40px ${skill.color}40, 0 0 20px ${skill.color}60, inset 0 1px 0 rgba(255,255,255,0.2)` 
                        : '0 8px 16px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)'
                    }}
                  >
                    <div 
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 relative"
                      style={{ 
                        color: skill.color,
                        filter: hoveredSkill === skill.name ? `drop-shadow(0 0 8px ${skill.color})` : 'none'
                      }}
                    >
                      {skill.icon}
                      
                      {/* Magical particles on hover */}
                      {hoveredSkill === skill.name && (
                        <>
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 rounded-full"
                              style={{ backgroundColor: skill.color }}
                              initial={{ 
                                x: 0, 
                                y: 0, 
                                opacity: 0,
                                scale: 0
                              }}
                              animate={{ 
                                x: Math.cos(i * 60 * Math.PI / 180) * 30,
                                y: Math.sin(i * 60 * Math.PI / 180) * 30,
                                opacity: [0, 1, 0],
                                scale: [0, 1.5, 0]
                              }}
                              transition={{ 
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.1,
                                ease: "easeOut"
                              }}
                            />
                          ))}
                        </>
                      )}
                    </div>
                    
                    {/* Glowing effect */}
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                      style={{ 
                        background: `radial-gradient(circle, ${skill.color}40, transparent 70%)`
                      }}
                    />
              </div>
            </motion.div>
          ))}
            </motion.div>
          </div>
          </div>
        </div>

        {/* Competitive Programming Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            🏆 Competitive Programming Profiles
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Codeforces */}
            <motion.a
              href="https://codeforces.com/profile/harshcodz18"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 group-hover:shadow-2xl group-hover:border-red-500 transition-all duration-500 relative overflow-hidden text-center">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center">
                    <SiCodeforces className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    Codeforces
                  </h4>
                  <p className="text-red-600 dark:text-red-400 font-semibold mb-2">Specialist Rating</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">@harshcodz18</p>
                </div>
              </div>
            </motion.a>

            {/* LeetCode */}
            <motion.a
              href="https://leetcode.com/bhatt_Harshit"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 group-hover:shadow-2xl group-hover:border-orange-500 transition-all duration-500 relative overflow-hidden text-center">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center">
                    <SiLeetcode className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                    LeetCode
                  </h4>
                  <p className="text-orange-600 dark:text-orange-400 font-semibold mb-2">Problem Solver</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">@bhatt_Harshit</p>
                </div>
              </div>
            </motion.a>

            {/* CodeChef */}
            <motion.a
              href="https://www.codechef.com/users/harshit_bhatt18"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 group-hover:shadow-2xl group-hover:border-amber-600 transition-all duration-500 relative overflow-hidden text-center">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-600/10 to-amber-700/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl flex items-center justify-center">
                    <SiCodechef className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    CodeChef
                  </h4>
                  <p className="text-amber-600 dark:text-amber-400 font-semibold mb-2">Competitive Coder</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">@harshit_bhatt18</p>
                </div>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
