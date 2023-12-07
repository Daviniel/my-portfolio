import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import './MyTyped.css';
import './MyTypedResponse.css';

export default function MyTyped() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Daviniel Nascimento',
      ],
      startDelay: 300,
      typeSpeed: 100,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="my-typed-animation">
      <span ref={el}></span>
    </div>
  );
}