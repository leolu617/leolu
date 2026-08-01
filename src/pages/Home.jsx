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
	  
	  
	  
	  
	  
	  
	  


<FeatureSection

  image={`${import.meta.env.BASE_URL}images/bi.png`}

  eyebrow="Data Engineering"

  title="Architecting Modern Data Platforms"

  description="
  Building scalable enterprise data platforms with
  cloud infrastructure, ETL pipelines, analytics,
  and AI-driven solutions.
  "

/>


<FeatureSection

  image={`${import.meta.env.BASE_URL}images/8bit.png`}

  eyebrow="Data Engineering"

  title="Architecting Modern Data Platforms"

  description="
  Building scalable enterprise data platforms with
  cloud infrastructure, ETL pipelines, analytics,
  and AI-driven solutions.
  "
reverse
/>



	  
	  
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