import React, { useState, useEffect, useRef } from 'react';
import './Experience.css';

function Experience() {
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [companies, setCompanies] = useState(0);
  const ref = useRef(null);

  const countUp = (setValue, endValue) => {
    let startValue = 0;
    const duration = 2000; // duration in milliseconds
    const increment = endValue / (duration / 50); // Adjust the increment value
    const counter = setInterval(() => {
      startValue += increment;
      if (startValue >= endValue) {
        startValue = endValue;
        clearInterval(counter);
      }
      setValue(Math.ceil(startValue));
    }, 50);
  };

  const handleScroll = ([entry]) => {
    if (entry.isIntersecting) {
      countUp(setYears, 3);
      countUp(setProjects, 5);
      countUp(setCompanies, 8);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, { threshold: 0.1 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='experience' id="Experience" ref={ref}>
      <div className="achievement">
        <div className="circle">{years}+</div>
        <span>years</span>
        <span>Experience</span>
      </div>

      <div className='achievement'>
        <div className="circle">{projects}+</div>
        <span>completed</span>
        <span>Projects</span>
      </div>

      <div className='achievement'>
        <div className="circle">{companies}+</div>
        <span>companies</span>
        <span>work</span>
      </div>
    </div>
  );
}

export default Experience;



