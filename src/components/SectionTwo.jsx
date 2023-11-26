import React, { useState, useEffect, useRef } from "react";
import "./SectionTwo.css";

function SectionTwo() {
  const [isVisible, setIsVisible] = useState(false);
  const [project, setProject] = useState(0);
  const [gitLink, setGitLink] = useState("https://github.com/Amarr7777");
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const handleScroll = () => {
      setIsVisible(isElementInView(section));
    };

    const debouncedHandleScroll = debounce(handleScroll, 100);

    window.addEventListener("scroll", debouncedHandleScroll);

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, []);

  const isElementInView = (el) => {
    if (!el) return false; // Check if the element exists
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  const welcome =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error architecto magni eum dolorum asperiores expedita distinction";
  const todo =
    "todo Lorem ipsum dolor sit amet consectetur adipisicing elit. Error architecto magni eum dolorum asperiores expedita distinction";
  const net =
    "netflix Lorem ipsum dolor sit amet consectetur adipisicing elit. Error architecto magni eum dolorum asperiores expedita distinction";
  const book =
    "book Lorem ipsum dolor sit amet consectetur adipisicing elit. Error architecto magni eum dolorum asperiores expedita distinction";
  const food =
    "food Lorem ipsum dolor sit amet consectetur adipisicing elit. Error architecto magni eum dolorum asperiores expedita distinction";
  const blue =
    "food Lorem ipsum dolor sit amet consectetur adipisicing elit. Error architecto magni eum dolorum asperiores expedita distinction";

  const handleProjectClick = (projectValue, changeClass) => {
    const projectDesc = document.getElementById("projectDesc");
    projectDesc.classList.remove("book", "net", "todo", "food");
    projectDesc.classList.add("remove");
    console.log(changeClass);

    setTimeout(() => {
      projectDesc.classList.remove("remove");
      projectDesc.classList.add(changeClass);
      setProject(projectValue);
      if (projectValue === 1) {
        setGitLink("https://github.com/Amarr7777/To-Do-App");
      } else if (projectValue === 2) {
        setGitLink("https://github.com/Akhilbaby77/netflix_c");
      } else if (projectValue === 3) {
        setGitLink("https://github.com/Amarr7777/bookstore");
      } else if (projectValue === 4) {
        setGitLink("https://github.com/Amarr7777/food-order-UI");
      } else if (projectValue === 5) {
        setGitLink("https://github.com/Amarr7777/blueFormAutomation");
      }
    }, 100);
  };

  return (
    <div className="bg-black min-h-screen">
      <div
        id="sectionTwo"
        ref={sectionRef}
        className={`relative flex-row bg-black min-h-screen text  px-32 py-28
        ${isVisible ? "sectionTwo" : "noSectionTwo"}`}
        // className="relative flex-row px-32 py-28"
      >
        <div className="flex gap-5 px-28 py-20 ">
          <div className="desc">
            <h1
              //   className="animate-charcter "
              className={`font-extralight text-7xl text-gray-300  pt-28
              ${isVisible ? "animate-visible" : "animate-charcter"}`}
            >
              Welcome
            </h1>
            <h6
              id="projectDesc"
              className={`font-extralight text-lg text-gray-300 space-y-3 pt-5 text-justify ${
                isVisible ? "h6-visible" : " "
              }`}
            >
              {project === 0 && welcome}
              {project === 1 && todo}
              {project === 2 && net}
              {project === 3 && book}
              {project === 4 && food}
              {project === 5 && blue}
              <a href={gitLink} className="mt-5 ">
                <br /> Github
                <hr className="w-12" />
              </a>
            </h6>
          </div>
          <div>
            <h1
              //   className="animate-charcter "
              className={`font-extralight text-7xl text-white  pt-28
              ${isVisible ? "animate1-visible" : "animate-charcter"}`}
            >
              Projects
            </h1>
            <ul
              className={`${
                isVisible ? "ul-visible " : " "
              }font-sans text-lg text-gray-300 space-y-3 pt-5 text-justify text-center`}
            >
              <li>
                <a
                  className="cursor-pointer font-extralight"
                  onClick={() => handleProjectClick(1, "todo")}
                >
                  Done Right
                  <hr className="w-20" />
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer font-extralight"
                  onClick={() => handleProjectClick(2, "net")}
                >
                  Netflix clone
                  <hr className="w-24" />
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer font-extralight"
                  onClick={() => handleProjectClick(3, "book")}
                >
                  Book
                  <hr className="w-10" />
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer font-extralight"
                  onClick={() => handleProjectClick(4, "food")}
                >
                  Food
                  <hr className="w-10" />
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer font-extralight"
                  onClick={() => handleProjectClick(5, "food")}
                >
                  Blue Form Automation
                  <hr className="w-44" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* svg */}
        <svg
          width="200"
          height="200"
          viewBox="0 0 648 648"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          // className="svgTop absolute top-32 left-28 -z-1"
          className={`${
            isVisible ? "svgTop" : ""
          } absolute top-32 left-28 -z-1 `}
        >
          <path
            d="M0 648L0 0H26L26 622C26 636.359 14.3594 648 0 648V648Z"
            fill="#B1EF07"
          />
          <path
            d="M0 0L648 0V0C648 14.3594 636.359 26 622 26L26 26C11.6406 26 0 14.3594 0 0V0Z"
            fill="#B1EF07"
          />
        </svg>

        <svg
          width="200"
          height="200"
          viewBox="0 0 648 648"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          // className="svgBottom absolute bottom-32 right-28"
          className={`${
            isVisible ? "svgBottom" : " "
          } absolute bottom-32 right-28  `}
        >
          <path
            d="M648 0L648 648H622L622 26C622 11.6406 633.641 0 648 0V0Z"
            fill="#B1EF07"
          />
          <path
            d="M648 648L0 648V648C0 633.641 11.6406 622 26 622L622 622C636.359 622 648 633.641 648 648V648Z"
            fill="#B1EF07"
          />
        </svg>
      </div>
    </div>
  );
}

export default SectionTwo;
