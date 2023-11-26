import React from "react";
import './SectionOne.css'

function SectionOne() {
  return (
    <div className="main flex-column flex-1 my-5 mx-32 bg-fixed min-h-screen">
      <h6 className="font-semibold text-gray-900">Hello! I'm Amar.</h6>
      <h4 className="text-black text-9xl font-bold my-3 space-y-2">
        Code with Confidence, Design with Purpose. <br />{" "}
        <span className="subtext">Your Web, Your Way.</span>
      </h4>
      <button className="bg-black text-white rounded-full py-2 px-3 my-2">
        Let's Talk
      </button>
    </div>
  );
}

export default SectionOne;
