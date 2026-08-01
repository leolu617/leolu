import React from "react";


import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";



import MainLayout from "./layouts/MainLayout";



import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import ScrollToTop from "./components/ScrollToTop";

// Project Detail Pages

import ETLProject 
from "./pages/Projects/Data-Integration-Platform";


import CMSProject 
from "./pages/Projects/Data-driven-CMS";



function App() {


  return (

    <HashRouter>
<ScrollToTop />

      <Routes>


        <Route element={<MainLayout />}>



          {/* =====================
              Main Pages
          ====================== */}


          <Route
            path="/"
            element={<Home />}
          />



          <Route
            path="/about"
            element={<About />}
          />



          <Route
            path="/projects"
            element={<Projects />}
          />

          <Route
            path="/blogs"
            element={<Blogs />}
          />
		  
		  
          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/skills"
            element={<Skills />}
          />
		  



          {/* =====================
              Project Detail Pages
          ====================== */}



          <Route

            path="/projects/data-integration-platform"

            element={<ETLProject />}

          />
		  
		  
		   <Route

            path="/projects/data-driven-cms"

            element={<CMSProject />}

          />






        </Route>


      </Routes>


    </HashRouter>

  );


}



export default App;