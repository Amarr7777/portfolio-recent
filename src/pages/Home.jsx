import React from "react";
import Nav from "../components/Nav";
import './Home.css';
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";

function Home() {
  return (
    <>
      <Nav />
      <SectionOne/>
      <SectionTwo/>  
    </>
  );
}

export default Home;
