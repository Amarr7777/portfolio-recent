import React, { useState, useEffect, useRef } from "react";
import "./SectionTwo.css";

function SectionTwo() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const handleScroll = () => {
      if (isElementInView(section)) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isElementInView = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  return (
    <div
      id="sectionTwo"
      ref={sectionRef}
      className='flex-row bg-black min-h-screen text  px-32 py-40'
    >
      <h1 
    //   className="animate-charcter "
      className = {`font-extralight text-7xl text-white
      ${isVisible ? 'animate-visible' : 'animate-charcter' }`}
      >
        Welcome
      </h1>
    </div>
  );
}

export default SectionTwo;
