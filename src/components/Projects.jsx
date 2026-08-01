import React from "react";
import { Link } from "react-router-dom";


const projects = [
  {
    title: "Enterprise Data Platform",
    desc: "Building enterprise data solutions with ETL pipeline, BI analytics and cloud architecture.",
    link: "/projects/Data-Integration-Platform"
  },
  {
    title: "Data Driven CMS",
    desc: "Building enterprise data solutions with ETL pipeline, BI analytics and cloud architecture.",
    link: "/projects/Data-driven-CMS"
  },
  {
    title: "ETL Data Platform",
    desc: "Built enterprise ETL workflows and processed over 2M records daily.",
    link: "/projects/etl-data-platform"
  }
];



function Projects() {

  return (

    <section
      className="
      relative
     
	  
	   min-h-screen
      overflow-hidden
      "
    >


      {/* Background Video */}

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        "
      >

        <source
          src={`${import.meta.env.BASE_URL}videos/projects-bg.mp4`}
          type="video/mp4"
        />

      </video>



      {/* Dark Overlay */}

      <div
        className="
        absolute
        inset-0
        bg-black/60
        "
      />




      {/* Content */}


	  
<div
  className="
  relative
  z-10
  max-w-7xl
  mx-auto
  px-6
  pt-[40vh]
  pb-[5vh]
  "
>



        {/* Hero Text */}

        <p
          className="
          text-slate-300
          uppercase
          tracking-[0.25em]
          text-sm
          mb-5
          "
        >
          Featured Projects
        </p>



        <h1
          className="
          text-3xl
          md:text-5xl
          font-bold
          text-white
          max-w-4xl
          leading-tight
          "
        >
          Shape Data Into Value
        </h1>



        <p
          className="
          mt-8
          text-xl
          text-slate-200
          max-w-3xl
          leading-relaxed
          "
        >
          Building scalable data platforms,
          cloud solutions, and digital transformation
          initiatives through modern engineering practices.
        </p>





        {/* Project Cards */}

        <div
          className="
          mt-20
          grid
          md:grid-cols-3
          gap-8
          "
        >


          {projects.map((project, index) => (


            <Link
              key={index}
              to={project.link}
              className="
              block
              "
            >


              <div
                className="
                h-full
                bg-white/5
                backdrop-blur-xl
                border
                border-white/30
                rounded-3xl
                p-8
                shadow-2xl
                hover:bg-white/30
                hover:-translate-y-3
                transition-all
                duration-500
                "
              >


                <h2
                  className="
                  text-2xl
                  font-semibold
                  text-white
                  "
                >
                  {project.title}
                </h2>



                <p
                  className="
                  mt-5
                  text-slate-200
                  leading-relaxed
                  "
                >
                  {project.desc}
                </p>



                <div
                  className="
                  mt-8
                  text-sm
                  text-blue-200
                  font-medium
                  "
                >
                  View Project →
                </div>



              </div>


            </Link>


          ))}


        </div>


      </div>


    </section>

  );

}


export default Projects;