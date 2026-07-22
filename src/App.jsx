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


// Project Detail Pages

import ETLProject 
from "./pages/Projects/Data-Integration-Platform";




function App() {


  return (

    <HashRouter>


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





          {/* =====================
              Project Detail Pages
          ====================== */}



          <Route

            path="/projects/data-integration-platform"

            element={<ETLProject />}

          />



        </Route>


      </Routes>


    </HashRouter>

  );


}



export default App;