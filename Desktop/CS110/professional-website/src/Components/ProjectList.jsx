// import React from 'react'
import { Card } from 'react-bootstrap'

const ProjectList = () => {
  return (
    <div className='List'>
      <Card className='List-Item' data-bs-theme='dark' border='info' style={{ width: '22rem' }}>
        <Card.Img variant="top" src="8puzzle.jpg" />
        <Card.Body>
          <Card.Title>8-Puzzle AI Solver</Card.Title>
          <Card.Text>
            In this role, I was responsible for developing and implementing an A* search algorithm to solve the 8-puzzle problem. My
            responsibilities included organizing the codebase, writing the main search algorithm, and creating a user interface for the
            command-line interface (CLI). This project has different heuristic functions to solve the puzzle and even tests which is most
            efficient amongst those.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='List-Item' data-bs-theme='dark' border='info' style={{ width: '22rem' }}>
        <Card.Img variant="top" src="airplaneIcon.jpg" />
        <Card.Body>
          <Card.Title>Flight Big Data Analysis</Card.Title>
          <Card.Text>
            In this role, I was responsible for performing data analysis on a 30GB CSV file of flight data using Apache Spark and
            PySpark. My tasks involved implementing the user interface, structuring the codebase, and using PySpark and Pandas to
            graph various data trends. Other features set to be completed include an ML model and further cleaning of the data.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='List-Item' data-bs-theme='dark' border='info' style={{ width: '22rem' }}>
        <Card.Img variant="top" src="amazon.jpeg" />
        <Card.Body>
          <Card.Title>Mock Amazon Database System</Card.Title>
          <Card.Text>
            In this project, I developed a SQL driver in Java for a mock Amazon Database system. This system manages various users,
            stores, warehouses, orders, and other related entities. My responsibilities encompassed developing the Command Line
            Interface (CLI), implementing SQL queries to retrieve necessary data, and building the database from the ground up,
            including creating diagrams and transforming them into tables in our PostgreSQL database instance.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ProjectList