import  { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin, Code, Briefcase, Award, BookOpen } from 'lucide-react';

// Hero Component
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className={`container mx-auto px-4 sm:px-6 text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">Kishore S</h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 text-blue-200">Full Stack Developer</h2>
        <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200 px-4">
          Building scalable web and mobile applications with modern technologies
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
          <a href="#about" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105">
            About Me
          </a>
          <a href="#contact" className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

// About Component
const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-800">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-900">Full Stack Developer</h3>
            <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
              Detail-oriented full-stack developer with over 2.5 years of hands-on experience in building responsive web and mobile applications. Skilled in modern JavaScript frameworks like Angular and React, with strong expertise in TypeScript and cross-platform mobile development using Angular Ionic.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
              Experienced in backend development and API integration with Node.js and Python Flask, and well-versed in working with both SQL and NoSQL databases, including MongoDB.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <MapPin className="text-blue-600 flex-shrink-0" size={20} />
                <span className="text-gray-700 text-sm sm:text-base">Chennai, Tamil Nadu</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="text-blue-600 flex-shrink-0" size={20} />
                <span className="text-gray-700 text-sm sm:text-base">Available for Work</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-6 sm:p-8 rounded-lg">
            <h4 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">Key Strengths</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span className="text-gray-700 text-sm sm:text-base">Problem-Solving Skills</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span className="text-gray-700 text-sm sm:text-base">Leadership Skills</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span className="text-gray-700 text-sm sm:text-base">Agile Development Experience</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span className="text-gray-700 text-sm sm:text-base">Continuous Learning Mindset</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// Skills Component
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML5/CSS3", "JavaScript", "TypeScript", "Angular", "React", "Ionic Framework"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "Flask", "RESTful APIs"]
    },
    {
      title: "Database",
      skills: ["SQL", "MySQL", "PostgreSQL", "MongoDB"]
    },
    {
      title: "Tools",
      skills: ["Git", "Agile", "WebSocket", "Google Pub/Sub"]
    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-800">Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-blue-900 flex items-center gap-2">
                <Code size={24} className="flex-shrink-0" />
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="text-gray-700 flex items-center gap-2 text-sm sm:text-base">
                    <span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Experience Component
const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Vinsinfo Pvt Ltd",
      period: "Jul 2025 - Present",
      responsibilities: [
        "Design and develop scalable web applications using Angular or React with Python Flask/Django or Node.js",
        "Develop complex SQL queries and manage relational databases",
        "Create and integrate RESTful APIs for seamless data communication"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Vinsinfo Pvt Ltd",
      period: "Feb 2024 - Jul 2025",
      responsibilities: [
        "Developed dynamic and responsive single-page applications using Angular and TypeScript",
        "Ensured performance and cross-browser compatibility",
        "Actively learned new programming languages and technologies"
      ]
    },
    {
      title: "Associate Software Developer",
      company: "Vinsinfo Pvt Ltd",
      period: "Mar 2023 - Feb 2024",
      responsibilities: [
        "Worked with team members in agile environments",
        "Participated in code reviews and team meetings",
        "Applied best practices to development projects"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Work Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <Briefcase className="text-blue-600 mt-1" size={24} />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                  <p className="text-gray-500 text-sm">{exp.period}</p>
                </div>
              </div>
              <ul className="space-y-2 ml-10">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="text-gray-700 flex items-start gap-2">
                    <span className="text-blue-600 mt-1">→</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Component
const Projects = () => {
  const projects = [
    
    {
      title: "Parking Management System",
      tech: "React, Python, Google Pub/Sub, WebSocket",
      description: "Developed a comprehensive system with dual backend components for local and cloud processing. Enabled real-time communication using Google Pub/Sub queues and implemented live updates using WebSocket."
    },
    {
      title: "Social Media Application",
      tech: "Angular Ionic, PHP, Node.js",
      description: "Developed a social media application with features such as posting, liking, commenting, sharing, and user authentication. Included real-time messaging and following/unfollowing functionalities to enhance user interaction."
    },
    {
      title: "Referral-Based Commission System",
      tech: "Angular, Python Flask, SQLAlchemy",
      description: "Developed a dynamic web application to manage product referral commissions and bonuses based on user roles. Utilized SQLAlchemy as the ORM for flexible role-based commission structures and real-time bonus tracking."
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">{project.title}</h3>
              <p className="text-blue-600 text-sm mb-4 font-medium">{project.tech}</p>
              <p className="text-gray-700 leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-blue-50 p-8 rounded-lg max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-blue-900 flex items-center gap-2">
            <Award size={28} />
            Key Achievements
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">•</span>
              <div>
                <strong className="text-gray-800">API Development:</strong>
                <span className="text-gray-700"> Designed and implemented RESTful APIs that improved data exchange and communication between front-end and back-end services</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">•</span>
              <div>
                <strong className="text-gray-800">Optimized Performance:</strong>
                <span className="text-gray-700"> Improved application performance by 30% through effective code optimization, caching strategies, and database query refinement</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

// Education & Certifications Component
const Education = () => {
  const certifications = [
    "Crash Course On Python - Coursera",
    "Angular (Intermediate) - HackerRank",
    "Node.js (Intermediate) - HackerRank",
    "SQL (Intermediate) - HackerRank",
    "Introduction to MongoDB - Coursera",
    "IBM Front-End Developer - Coursera"
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Education & Certifications</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-blue-900 flex items-center gap-2">
              <BookOpen size={28} />
              Education
            </h3>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-800">Bachelor of Engineering</h4>
              <p className="text-blue-600 font-medium">Mechanical Engineering</p>
              <p className="text-gray-700 mt-2">National Engineering College - Kovilpatti</p>
              <p className="text-gray-600 mt-1">2019 - 2023</p>
              <p className="text-green-600 font-semibold mt-2">CGPA: 8.79/10</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-purple-900 flex items-center gap-2">
              <Award size={28} />
              Certifications
            </h3>
            <ul className="space-y-3">
              {certifications.map((cert, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-white p-3 rounded text-gray-700 hover:shadow-md transition-shadow">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span className="text-sm">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Component
const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg">
            <div className="space-y-6">
              <a href="tel:+919080206899" className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all">
                <Phone size={24} />
                <div>
                  <p className="text-sm text-gray-300">Phone</p>
                  <p className="font-semibold">+91 9080206899</p>
                </div>
              </a>
              <a href="mailto:talktokishoresolairaj@gmail.com" className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all">
                <Mail size={24} />
                <div>
                  <p className="text-sm text-gray-300">Email</p>
                  <p className="font-semibold">talktokishoresolairaj@gmail.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg">
                <MapPin size={24} />
                <div>
                  <p className="text-sm text-gray-300">Location</p>
                  <p className="font-semibold">Chennai, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20">
              <h3 className="text-xl font-semibold mb-4 text-center">Connect with me</h3>
              <div className="flex justify-center gap-6">
                <a href="https://github.com/KishoreSolairaj" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-4 rounded-full hover:bg-white/20 transition-all transform hover:scale-110">
                  <Github size={28} />
                </a>
                <a href="https://www.linkedin.com/in/kishoresolairaj" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-4 rounded-full hover:bg-white/20 transition-all transform hover:scale-110">
                  <Linkedin size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/10 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <a href="#hero" className={`text-xl font-bold ${scrolled ? 'text-blue-900' : 'text-white'}`}>
            Kishore S
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-4 xl:gap-6">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium hover:text-blue-600 transition-colors ${scrolled ? 'text-gray-700' : 'text-white hover:text-blue-300'}`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden ${scrolled ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400">© 2025 Kishore S. All rights reserved.</p>
        <p className="text-gray-500 mt-2">Full Stack Developer</p>
      </div>
    </footer>
  );
};

// Main App Component
export default function App() {
  return (
    <div className="font-sans">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}