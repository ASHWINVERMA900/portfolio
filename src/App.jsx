import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import './App.css'
import Navbar from './components/Navbar.jsx'
import { ThemeProvider, useTheme } from './context/ThemeContext.jsx'

function AppContent() {
  const { isDark } = useTheme();
  
  return (
    <div className={`min-h-screen scroll-smooth transition-colors duration-300 ${
      isDark 
        ? 'bg-slate-950 text-white' 
        : 'bg-white text-slate-900'
    }`}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
