import React, { useEffect } from 'react';
import { arrayDataProjects } from '../../data/projectList';
import './Projects.css';

export default function ProjectsPage() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="section-projects">
      <div>
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
      </div>
    </div>
  );
}
