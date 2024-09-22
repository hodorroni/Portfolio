import React, { useState, useEffect, useRef } from "react";
export default function ProjectsNumber() {
  const [number, setNumber] = useState(1);
  const [isInView, setIsInView] = useState(false);
  const contentRef = useRef(null);
  //observing the div that contains the number, when it reaches to 50% the useeffect below will shoot
  useEffect(() => {
    // Create an Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  //Incrementing the number within the div when it reaches to 50% visibality
  useEffect(() => {
    if (isInView) {
      setNumber(1);
      const intervalId = setInterval(() => {
        setNumber((prevNumber) => {
          if (prevNumber >= 3) {
            clearInterval(intervalId);
            return prevNumber;
          }
          return prevNumber + 1;
        });
      }, 400);

      // Cleanup the interval on component unmount or when out of view
      return () => clearInterval(intervalId);
    }
  }, [isInView]);

  return (
    <>
      <div className="content_container">
        <div className="content_image">
          <img
            src="https://monkeypuzzletraining.co.uk/wp-content/uploads/2023/01/xl-critical-thinking.jpg"
            alt="think person"
            loading="lazy"
            className="content_image_attr"
          ></img>
        </div>
        <div className="content_text" ref={contentRef}>
          <h1>{number}+</h1>
          <h3>Completed projects</h3>
          <p>
            As a programmer, I have a deep passion for learning and constantly
            pushing myself to take on new challenges. I'm always seeking
            opportunities to expand my knowledge and refine my skills.
          </p>
        </div>
      </div>
    </>
  );
}
