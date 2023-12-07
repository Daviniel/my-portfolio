import React, { useEffect, useState, useRef } from 'react';
import { arrayData } from "../../data/db";
import './SlideSkill.css';
import './SlideSkillResponse.css';

export default function SlideSkill() {
  const skill = ["JavaScript", "HTML", "CSS", "React", "Redux", "Git", "GitHub", "TypeScript", "Node", "Docker", "MySql", "Express"];
  const delay = 3500;
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const [data, setData] = useState([]);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    setData(arrayData)
  }, []);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === skill.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => { };
  }, [index]);


  return (
    <>
      <div className="container-slide">
        <h3 className="skill-title">Habilidades que Possuo ⚙️</h3>
        <div className="slideshow">
          <div
            className="slideshowSlider"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {
              data.map((el) => {
                const { id, skill, image } = el;
                return (
                  <div key={id} className="slide" >
                    <div className="div-skill">
                      <div className="div-content">
                        <span className="span-skill"><b>{skill}</b></span>
                        <img
                          className="img-skill-icon"
                          src={image}
                          alt={skill}
                          width="45px"
                        />
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="slideshowDots">
          {skill.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            >
            </div>
          ))}
        </div>
      </div>
      <div className="current-knowledge">
        <h6>Atualmente estou aprimorando meus conhecimentos em banco de dados. 🧑🏻‍💻</h6>
      </div>
    </>
  );
}

//https://tinloof.com/blog/how-to-build-an-auto-play-slideshow-with-react

