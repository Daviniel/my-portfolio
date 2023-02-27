export default function initSlideSkill () {
    if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
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
          <h3 className="skill-title">Habilidades que Possuo ⚡</h3>
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
          <h6>Atualmente estou aprimorando meus conhecimentos em banco de dados MongoDB e Python. 🌱</h6>
        </div>
      </>
    );
}