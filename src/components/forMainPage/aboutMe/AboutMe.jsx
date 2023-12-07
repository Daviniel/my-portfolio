import React, { useEffect } from 'react';
import './AboutMe.css';
import './AboutMeResponse.css';
import Aos from 'aos';
import "aos/dist/aos.css";

import DavinielDeveloper from '../../../assets/DavinielDeveloper.pdf';

import download from '../../../img/icon/download-da-nuvem.png';

import developer from '../../../img/icon/daviniel_sobre-mim.png';

export default function AboutMe() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <section className="about-me" id='about'>
      <div className="about-me__foto">
        <img src={ developer } alt="Uma selfie de Daviniel"/>
      </div>
      <div className="about-me__text">
        <h1>Sobre mim...</h1>
        <h2>Campina Grande, Paraíba</h2>
        <p>Atualmente sou Desenvolvedor Full-Stak, dia após dia busco aperfeiçoar os meus conhecimentos para poder me ingressar no mercado de desenvolvedor, podendo assim aplicar meus conhecimentos.</p>
        <div className='about__button'>
          <a href={ DavinielDeveloper } download="">
            <div className="about__button-download">
              <img src={ download } alt="download"/>
              <p>Currículo</p>
            </div>
          </a>
        </div>
      </div>
      
    </section>
  );
}
