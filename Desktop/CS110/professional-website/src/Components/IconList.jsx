/* eslint-disable react/prop-types */
// import React from 'react';
import './IconList.css';
import SkillsIcons from './SkillsIcons';

const IconList = ({ icons }) => {
  return (
    <div className='Skills'>
      <div className='iList'>
        {icons.map((icon, index) => (
          <SkillsIcons key={index} src={icon.src} alt={icon.alt} />
        ))}
      </div>
    </div>
  );
}

export default IconList;