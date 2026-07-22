import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Navbar() {

  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {

    function handleScroll() {

      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

    }


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };

  }, []);



  return (

    <nav
      className={`
        fixed
        w-full
        z-50
        transition-all
        duration-500

        ${
          scrolled
          ?
          "bg-blue-950 shadow-lg"
          :
          "bg-white shadow-md"
        }

      `}
    >


      <div
        className="
          max-w-7xl
          mx-auto
          flex
          justify-between
          items-center
          p-4
        "
      >


        {/* Logo + Brand */}

        <Link
          to="/"
          className="
            flex
            items-center
            gap-3
          "
        >


          <img
            src={`${import.meta.env.BASE_URL}images/logo.png`}
            className="h-12 w-12 object-contain"
            alt="Leo Lu"
          />


          <span
            className={`
              text-2xl
              font-extrabold
              tracking-[0.25em]
              transition-colors
              duration-500

              ${
                scrolled
                ?
                "text-white"
                :
                "text-slate-900"
              }

            `}
          >
            Leo Lu
          </span>


        </Link>



        {/* Menu */}

        <div
          className="
            space-x-6
          "
        >

          <Link
            to="/about"
            className={`
              transition-colors

              ${
                scrolled
                ?
                "text-white"
                :
                "text-slate-900"
              }
            `}
          >
            About
          </Link>


          <Link
            to="/projects"
            className={`
              transition-colors

              ${
                scrolled
                ?
                "text-white"
                :
                "text-slate-900"
              }
            `}
          >
            Projects
          </Link>


        </div>


      </div>


    </nav>

  );

}


export default Navbar;