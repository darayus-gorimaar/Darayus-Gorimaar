import React from 'react';
import '../styles/FuturisticSkillBox.css';

const FuturisticSkillBox = ({ iconSrc, skillName }) => {
  return (
    <div className="skill-box">
      <div className="skill-content">
        <div className="icon-container">
          <img src={iconSrc || "/placeholder.svg?height=64&width=64"} alt={`${skillName} icon`} />
        </div>
        <h3 className="skill-name">{skillName}</h3>
        <div className="underline"></div>
      </div>
    </div>
  );
};

export default FuturisticSkillBox;

