import React from 'react';
import './Main.css';
import AboutMe from '../forMainPage/aboutMe/AboutMe';
import Skills from '../forMainPage/mySkills/Skills';
import Projects from '../forMainPage/myProjects/Projects';
import './MainResponse.css'
import linkdin from '../../img/icon/linkedin.svg';
import github from '../../img/icon/github.svg';
import developer from '../../img/icon/daviniel.png';
import scroll from '../../img/icon/scroll.png';
import MyTyped from '../../Typed/MyTyped';


export default function MainPage() {

  return (
    <>
      <main className="main">
        <div className="main__left">
          <h1>Olá, eu sou</h1>
          <span className='main__sentence'><MyTyped /></span>
          <h1>Desenvolvedor Full-Stack</h1>
          <div className='main__button'>
            <a href="https://www.linkedin.com/in/daviniel-nascimento-b598a2210/">
              <div className="main__button-linkedin">
                <img src={ linkdin } alt="linkedin"/>
                <p>linkedin</p>
              </div>
            </a>
            <a href="https://github.com/Daviniel">
              <div className="main__button-github">
                <img src={ github } alt="github"/>
                <p>Github</p>
              </div>
            </a>
          </div>
        </div>
        <div className="main__right">
            <img src={ developer } alt="developer-icon" width="400px" />
        </div>
        <div className="scroll" data-menu="suave"><a href="#about" > <p> scroll down </p> <img src={ scroll } alt="Setinha indicando para rolar a tela para baixo"/></a></div>
      </main>
      <AboutMe />
      <Skills />
      <Projects />
    </>
  );
}
