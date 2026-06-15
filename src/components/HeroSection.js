import React, { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import pic from './pic.png'; // Adjust the import path if necessary

const HeroSection = () => {
  const h1Ref = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const handleMouseOver = (event, speed) => {
      let iteration = 0;
      clearInterval(event.target.interval);

      event.target.interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if(index < iteration) {
              return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if(iteration >= event.target.dataset.value.length){ 
          clearInterval(event.target.interval);
        }

        iteration += 1 / 4;
      }, speed);
    };

    const h1Element = h1Ref.current;
    const pElement = pRef.current;

    const h1MouseOverEvent = new Event('mouseover');
    const pMouseOverEvent = new Event('mouseover');

    h1Element.addEventListener('mouseover', (event) => handleMouseOver(event, 30));
        pElement.addEventListener('mouseover', (event) => handleMouseOver(event, 20));

    h1Element.dispatchEvent(h1MouseOverEvent);
    pElement.dispatchEvent(pMouseOverEvent);


    return () => {
      h1Element.removeEventListener('mouseover', (event) => handleMouseOver(event, 30));
      pElement.removeEventListener('mouseover', (event) => handleMouseOver(event, 20));
      clearInterval(h1Element.interval);
      clearInterval(pElement.interval);
    };
  }, []);

  return (
    <div className="hero-section" id="hero">
      <Container className="hero-content">
        <h1 ref={h1Ref} data-value="KRISH SHAH">KRISH SHAH</h1>
        <p ref={pRef} data-value="SOFTWARE ENGINEER">SOFTWARE ENGINEER</p>
        <img
          src={pic} 
          alt="Krish Shah" 
          className="hero-image"
        />
      </Container>
    </div>
  );
}

export default HeroSection;
