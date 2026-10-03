import './App.css'
import Education from './components/Education'
import HackathonExperience from './components/HackathonExperience'
import Header from './components/Header'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
    return (
        <div className="cv-container">
            <Header />
            <Projects />
            <HackathonExperience />
            <Skills />
            <Education />
        </div>
    )
}

export default App
