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



import GlobalProjectNetwork
from "../components/GlobalProjectNetwork";


import RecentActivities from "../components/RecentActivities";



import FeatureSection from "../components/FeatureSection";


import FutureBanner from "../components/FutureBanner";


function Home(){

  return (

    <>

      <HeroCarousel />

      <About />
	  
	  <RecentActivities />
	  
      <Projects />
	  
	  
	  
	  
<div
className="
py-24
w-full
"
>

<FeatureSection

  image={`${import.meta.env.BASE_URL}images/bi.png`}

  eyebrow="Data Engineering "

  title="Insights from the Data Power Event"

  description="
 A reflection on the Data Power Event, highlighting key trends, data applications, and the impact of analytics on digital transformation.
  "
  
  buttonText="View Blogs"

    buttonLink="/preparing"

/>


<FeatureSection

  image={`${import.meta.env.BASE_URL}images/8bit.png`}

  eyebrow="Tech Insights"

  title="Modern CMS Architecture and Design Concepts"

  description="
  A conceptual exploration of next-generation CMS solutions,
  focusing on modular architecture, content flexibility, and seamless integration across digital platforms.
  "
  
  buttonText="View Blogs"

    buttonLink="/preparing"

  
reverse
/>


     </div>
	  
	  
<ScrollingDataWall />
	  
	  


	  


	  	   <FutureBanner />





{/*
	  	  <DataDashboard />

     <CertificationShowcase />
<GlobalProjectNetwork />

*/}

    </>

  );

}


export default Home;