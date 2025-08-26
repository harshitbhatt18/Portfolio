export const personalInfo = {
  name: "Harshit Bhatt",
  role: "Software Developer | Full Stack & ML Enthusiast",
  tagline: "Building efficient solutions with clean code and algorithmic thinking",
  email: "bhattharshit18@gmail.com",
  phone: "+91 9897056498",
  location: "Dehradun, Uttarakhand",
  bio: "Passionate software developer with 3+ years of experience in C++ development and competitive programming. I love solving complex problems and building efficient, scalable solutions.",
  image: "/profilepic.jpg", 
  resume: "/resume.pdf"
}

export const socialLinks = {
  github: "https://github.com/harshitbhatt18",
  linkedin: "https://linkedin.com/in/bhattharshit18",
  // twitter: "https://twitter.com/johndoe",
  leetcode: "https://leetcode.com/bhatt_Harshit",
  codeforces: "https://codeforces.com/profile/harshcodz18"
}

export const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "C++", level: 90 },
      { name: "Python", level: 85 },
      { name: "Java", level: 70 }
    ]
  },
  {
    category: "Technologies & Frameworks",
    items: [
      { name: "React", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 70 },
      { name: "MongoDB", level: 75 }
    ]
  },
  {
    category: "Core Competencies",
    items: [
      { name: "Data Structures & Algorithms", level: 95 },
      { name: "Problem Solving", level: 90 },
      { name: "System Design", level: 75 },
      { name: "Code Optimization", level: 85 },
      { name: "Debugging", level: 90 }
    ]
  }
]

export const projects = [
  {
    id: 1,
    title: "Algoviz - OS Scheduler",
    description: "An interactive web application for visualizing CPU and Disk scheduling algorithms. This educational tool helps users understand how different scheduling algorithms work through animated visualizations.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
    technologies: ["React", "Node.js", "HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/harshitbhatt18/OS-Scheduler",
    liveUrl: "https://harshitpbl.netlify.app/",
    featured: true
  },
  {
    id: 2,
    title: "Documind : RAG with Cross-Encoder Re-Ranking",
    description: "A powerful document analysis and Q&A application using Retrieval-Augmented Generation (RAG) with advanced cross-encoder re-ranking for enhanced accuracy.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    technologies: ["Python", "RAG", "Cross-Encoder", "Ollama"],
    githubUrl: "https://github.com/harshitbhatt18/DocuMind",
    liveUrl: null,
    featured: true
  },
  {
    id: 3,
    title: "SpendAudit : Expense Tracker",
    description: "A modern expense tracking application built with React and Supabase, featuring real-time updates, comprehensive reporting, and secure authentication.",
    image: "https://images.unsplash.com/photo-1518373714866-3f1478910cc0?w=800&h=500&fit=crop",
    technologies: ["React.js", "Supabase", "Tailwind CSS"],
    githubUrl: "https://github.com/harshitbhatt18/SpendAudit",
    liveUrl: "https://spendaudit.netlify.app/",
    featured: false
  },
  {
    id: 4,
    title: "Handwritten Digit Recognizer",
    description: "A machine learning model that recognizes handwritten digits from images. It uses a convolutional neural network (CNN) to classify digits into their corresponding numbers.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop",
    technologies: ["Python", "TensorFlow", "Keras", "CNN", "MNIST Dataset"],
    githubUrl: "https://github.com/harshitbhatt18/Handwritten-digit-recognize",
    liveUrl: null,
    featured: false
  }
]

export const experience = [
  {
    id: 1,
    type: "work" as const,
    title: "Salesforce Developer Intern",
    company: "SmartBridge",
    location: "Remote",
    startDate: "May 2025",
    endDate: "July 2025",
    description: "Developed Salesforce CRM workflows for vehicle inventory, orders, and dealer management.",
    technologies: ["Java", "Apex", "Git"]
  },
  {
    id: 2,
    type: "education" as const,
    title: "Bachelor of Technology in Computer Science and Engineering",
    company: "Graphic Era Hill University",
    location: "Dehradun, Uttarakhand",
    startDate: "August 2022",
    endDate: "June 2026",
    description: null,
    technologies: ["C++", "Java", "Python", "Data Structures", "Algorithms"]
  },
  {
    id: 3,
    type: "education" as const,
    title: "Intermediate",
    company: "St. Francis School",
    location: "Tanakpur, Uttarakhand",
    startDate: "April 2020",
    endDate: "March 2022",
    description: null,
    technologies: []
  },
  {
    id: 4,
    type: "education" as const,
    title: "Matriculation",
    company: "St. Francis School",
    location: "Tanakpur, Uttarakhand",
    startDate: "April 2018",
    endDate: "March 2020",
    description: null,
    technologies: []
  }
]

export const achievements = [
  "📚 Attained the Specialist rating on Codeforces",
  "⭐ Selected for Amazon ML Summer School 2024",
  "🏆 Won First Prize in an intra-college coding competition.",
  // "🥇 Secured First Rank in “Bet on it” coding competition",
]
