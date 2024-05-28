// import React from 'react'
import { Card } from 'react-bootstrap'
import IconList from './IconList'

const Skills = () => {
    const oneIcons = [
        { src: 'html-1.svg', alt: 'HTML logo' },
        { src: 'css-3.svg', alt: 'CSS logo' },
        { src: 'logo-javascript.svg', alt: 'Javascript Logo' },
        { src: 'nodejs-3.svg', alt: 'NodeJS logo' },
        { src: 'react-2.svg', alt: 'React Logo' },
        { src: 'c.svg', alt: 'C++ Logo' },
        { src: 'git-icon.svg', alt: 'Git Logo' },
        { src: 'python-4.svg', alt: 'Python Logo' },
        { src: 'apache_spark-ar21.svg', alt: 'Apache Spark Logo' },
        { src: 'mysql-ar21.svg', alt: 'MySQL Logo' }
      ];
  return (
    <div className='skillsSection'>
        <h1 id='skills'>Skills!</h1>
        <IconList icons={oneIcons}/>

        <Card className='mx-auto' id='education' style={{ width: '18rem' }} data-bs-theme='dark' border='info'>
            <Card.Img variant="top" src="ucrlogo4.png" className='opacity-50'/>
            <Card.ImgOverlay>
              <Card.Title><h4>Education</h4></Card.Title> <br />
                <Card.Text>
                  <h5>Bachelor of Computer Science</h5>
                  University of California - Riverside <br />
                  Expected in 2024 <br />
                </Card.Text>
            </Card.ImgOverlay>      
          </Card>
      </div>
  )
}

export default Skills