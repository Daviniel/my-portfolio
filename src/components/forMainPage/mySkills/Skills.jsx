import React from 'react';
import './Skills.css';
import './SkillsResponse.css';
import SlideSkill from '../../../Slideshow/slideskill/SlideSkill';

import skillimg from '../../../img/icon/project-img.svg';

export default function Skills() {
  return (
    <div className="skill-content" name="habilidades">
      <div className="img-skill">
        <img className="img-skill-icon-left" src={ skillimg } alt="skill-icon" width="850px"/>
      </div>
      <div className="skill-list-ul">
        <SlideSkill />
      </div>
    </div>
  );
}
