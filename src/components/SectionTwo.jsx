import React, { useState, useEffect, useRef } from "react";
import "./SectionTwo.css";
import Projects from "./Projects";

function SectionTwo() {
  const [isVisible, setIsVisible] = useState(false);
  const [project, setProject] = useState(0);
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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isElementInView = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
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

  const handleProjectClick = (projectValue, changeClass) => {
    const projectDesc = document.getElementById("projectDesc");
    projectDesc.classList.remove("book", "net", "todo", "food");
    projectDesc.classList.add("remove");
    console.log(changeClass)

    setTimeout(() => {
      projectDesc.classList.remove("remove");
      projectDesc.classList.add(changeClass);
      setProject(projectValue);
    }, 100);
  };

  return (
    <>
      <div
        id="sectionTwo"
        ref={sectionRef}
        className="relative flex-row bg-black min-h-screen text  px-32 py-28"
      >
        <svg
          width="457"
          height="400"
          viewBox="0 0 760 665"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-5 left-5"
        >
          <path
            d="M760 0C760 59.0945 712.094 107 653 107L0 107V0L760 0V0Z"
            fill="#B1EF07"
          />
          <path
            d="M126 665C56.4121 665 0 608.588 0 539L0 17H126L126 665V665Z"
            fill="#B1EF07"
          />
        </svg>

        <div className="flex gap-5 px-28 ">
          <div className="desc">
            <h1
              //   className="animate-charcter "
              className={`font-extralight text-7xl text-white  pt-28
              ${isVisible ? "animate-visible" : "animate-charcter"}`}
            >
              Welcome
            </h1>
            <h6
              id="projectDesc"
              className="font-sans text-lg text-gray-300 space-y-3 pt-5 text-justify "
            >
              {project === 0 && welcome}
              {project === 1 && todo}
              {project === 2 && net}
              {project === 3 && book}
              {project === 4 && food}
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

            <ul className="font-sans text-lg text-gray-300 space-y-3 pt-5 text-justify text-center">
              <li>
                <a
                  className="cursor-pointer"
                  onClick={() => handleProjectClick(1, "todo")}
                >
                  Done Right
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer"
                  onClick={() => handleProjectClick(2, "net")}
                >
                  Netflix clone
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer"
                  onClick={() => handleProjectClick(3, "book")}
                >
                  Book
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer"
                  onClick={() => handleProjectClick(4, "food")}
                >
                  Food
                </a>
              </li>
            </ul>
          </div>
        </div>
        <svg
          width="457"
          height="400"
          viewBox="0 0 700 665"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-5 right-5"
        >
          <path
            d="M0 665C0 605.906 47.9055 558 107 558L700 558V665L0 665V665Z"
            fill="#B1EF07"
          />
          <path
            d="M700 0L700 648H583.947L583.947 116.053C583.947 51.9586 635.906 0 700 0V0Z"
            fill="#B1EF07"
          />
        </svg>
      </div>
    </>
  );
}

export default SectionTwo;
