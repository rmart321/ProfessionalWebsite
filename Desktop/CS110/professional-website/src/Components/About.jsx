// import React from 'react'
import { Button } from "react-bootstrap"

const About = () => {
  return (
    <div className='aboutSection'>
        <div className='aboutText'>
          <h1 id='about'>About Me!</h1>
          <p>
            My CS background isn&apos;t as straight forward as others who have decided to pursue this 
            engineering field. I knew I loved to do Math and Science but when I got to college, I had
            no idea what to pursue as a career. As an undeclared student, I took LOTS of classes, but 
            the one that grabbed my attention the most was Computer Science. I&apos;m now wrapping up my 
            final year at the University of California- Riverside. My target areas of Computer Science 
            that I enjoy most include Web Design and Database Management. 
          </p>
        </div>
        <div className='aboutRes'>
          <div id='imageWrap'>
            <img src="resIcon.png" alt="Resume Icon"/>
            <Button className='btn-lg opacity-50' variant='dark'><a target='_blank' href='My Resume.pdf'>Resume</a></Button>
          </div>
        </div>
      </div>
  )
}

export default About