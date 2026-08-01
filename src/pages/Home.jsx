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


import RecentActivities from "../components/RecentActivities";



function Home(){

  return (

    <>

      <HeroCarousel />

      <About />
	  
	  <RecentActivities />
	  
      <Projects />
	  
	  <DataDashboard />
	  


	  

<CertificationShowcase />

     

{/* 
<GlobalProjectNetwork />
 */}

<ScrollingDataWall />

<TechMarquee />
    </>

  );

}


export default Home;