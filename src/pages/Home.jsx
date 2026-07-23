import React from "react";

import HeroCarousel from "../components/HeroCarousel";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";


import ScrollingDataWall
from "../components/ScrollingDataWall";


import DataDashboard
from "../components/DataDashboard";



import CertificationShowcase
from "../components/CertificationShowcase";



import TechMarquee
from "../components/TechMarquee";



import GlobalProjectNetwork
from "../components/GlobalProjectNetwork";


function Home(){

  return (

    <>

      <HeroCarousel />

      <About />
	  
	  <DataDashboard />
	  

      <Projects />
	  

<CertificationShowcase />

      <Skills />

{/* 
<GlobalProjectNetwork />
 */}

<ScrollingDataWall />

<TechMarquee />
    </>

  );

}


export default Home;