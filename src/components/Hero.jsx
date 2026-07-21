import React from "react";
import { motion } from "framer-motion";


function Hero() {

  return (

    <section
      className="
      h-screen
      bg-gradient-to-r
      from-blue-900
      to-slate-900
      text-white
      flex
      items-center
      "
    >

      <div className="max-w-7xl mx-auto px-8">


        <motion.h1

          initial={{
            opacity:0,
            y:50
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:1
          }}

          className="
          text-6xl
          font-bold
          mb-4
          "
        >

          Building Data-Driven Solutions

        </motion.h1>


        <motion.p

          initial={{
            opacity:0
          }}

          animate={{
            opacity:1
          }}

          transition={{
            delay:0.5
          }}

          className="text-xl"
        >

          Project Manager | Data Engineer | Business Analytics

        </motion.p>


      </div>

    </section>

  );

}


export default Hero;