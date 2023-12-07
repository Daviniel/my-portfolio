import React, { useEffect } from 'react';
import { arrayDataProjects } from '../../../data/projects';
import './Projects.css';
import './ProjectsResponse.css';
import Aos from 'aos';
import "aos/dist/aos.css";

import codingProject from '../../../img/icon/coding.svg';

export default function Projects() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <div className="project-content" name="projetos">
      <div data-aos="fade-up">
        <h1 className="header-content-project">Projetos que desenvolvi até hoje 👨‍💻</h1>
        {
          arrayDataProjects.map((el, index) => {
            const { description, project, link } = el;
            return (
              <div className="div-project" key={ index }>
                <h3 className="title-project">{ project }</h3>
                <p className="description-project">
                  { description }
                </p>
                <p className="link-to-project"><a href={ link } target="_blank" rel="noreferrer">Link para o repositório</a></p>
              </div>
            )
          })
        }
        <a href="https://github.com/Daviniel?tab=repositories">Ver todos projetos...</a>
      </div>
      <div className="img-content">
        <img data-aos="fade-up" className="img-content-projects" src={ codingProject } alt="icon-developer"  width="700px"/>
      </div>
    </div>
  );
}
