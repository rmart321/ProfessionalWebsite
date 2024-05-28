// import React from 'react'
import SkillsIcons from "./SkillsIcons"

const Footer = () => {
  const gitLink = 'github2.png';
  const linkedIn = 'linkedin4.png';
  return (
    <div id="foot">
      <div id="iconWrapper">
        <a href="https://github.com/rmart321?tab=repositories" target="_blank"><SkillsIcons src ={gitLink} alt ={'Github Icon'}/></a>
        <a href="https://linkedin.com/in/roberto-martinez-0063a9310" target="_blank"><SkillsIcons src ={linkedIn} alt ={'LinkedIn Icon'}/></a>
      </div>
    </div>
  )
}

export default Footer