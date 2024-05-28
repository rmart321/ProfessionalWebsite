/* eslint-disable react/prop-types */
// import React from 'react'

const SkillsIcons = ({src, alt}) => {
  return (
    <div className="skillsIcon">
        <img className="icon" src={src} alt={alt}/>
    </div>
  )
}

export default SkillsIcons