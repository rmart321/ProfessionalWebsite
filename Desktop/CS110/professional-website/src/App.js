import './App.css'
import './Components/Footer.css'
import './Components/TopNav.css'
import './Components/SkillsIcons.css'
import './Components/IconList.css'
import './Components/ProjectList.css'
import './Components/About.css'
import './Components/Skills.css'
import './Components/Interests.css'
import Footer from './Components/Footer'
import TopNav from './Components/TopNav'
import Background from './Components/Background'
import About from './Components/About'
import Skills from './Components/Skills'
import ProjectList from './Components/ProjectList'
import Interests from './Components/Interests'

// import { Card } from 'react-bootstrap'
// import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div id='root'>
      <h1 id='home'>home</h1>
      <Background/>
      <TopNav/>
      <About/>
      
      <h1 className='mx-auto' id='projects'>Recent Projects!</h1>
      <ProjectList/>

      <Skills/>

      <h2 id='interests'>My Interests!</h2>
      <Interests/>
      
      <h3 id="contact">Contact:</h3>
        <a id='emailLink' href='mailto:roberto.m321@icloud.com' target='_blank'>
          <h4 id='email'>Email: roberto.m321@icloud.com</h4>
        </a>
      <Footer/>

      
    </div>
  )
}

export default App
