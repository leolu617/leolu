import React, { useEffect, useState, useRef } from "react";

import { Link, useNavigate } from "react-router-dom";

import { ChevronDown } from "lucide-react";



function Navbar() {


  const navigate = useNavigate();

  const dropdownRef = useRef(null);


  const [scrolled,setScrolled] = useState(false);

  const [projectOpen,setProjectOpen] = useState(false);





  // =========================
  // Navigation + Scroll Top
  // =========================

  function navigateTop(path){


    navigate(path);


    window.scrollTo({

      top:0,

      behavior:"smooth"

    });


    setProjectOpen(false);

  }






  useEffect(()=>{


    function handleScroll(){


      setScrolled(
        window.scrollY > 50
      );


      // Scroll close dropdown
      setProjectOpen(false);

    }





    function handleClickOutside(e){


      if(

        dropdownRef.current &&

        !dropdownRef.current.contains(e.target)

      ){

        setProjectOpen(false);

      }

    }





    window.addEventListener(
      "scroll",
      handleScroll
    );


    document.addEventListener(
      "mousedown",
      handleClickOutside
    );




    return ()=>{


      window.removeEventListener(
        "scroll",
        handleScroll
      );


      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );


    };


  },[]);








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






{/* Logo */}


<Link

to="/"

onClick={()=>navigateTop("/")}

className="
flex
items-center
gap-3
"

>


<img

src={`${import.meta.env.BASE_URL}images/logo.png`}

className="
h-12
w-12
object-contain
"

alt="Leo Lu"

/>



<span

className={`

text-2xl

font-extrabold

tracking-[0.25em]


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

flex

items-center

space-x-6

"

>






{/* Home */}


<button

onClick={()=>navigateTop("/")}

className={

scrolled

?

"text-white"

:

"text-slate-900"

}

>

Home

</button>









{/* About */}


<button

onClick={()=>navigateTop("/about")}

className={

scrolled

?

"text-white"

:

"text-slate-900"

}

>

About

</button>









{/* Projects */}



<div

ref={dropdownRef}

className="relative"

>



<button

onClick={()=>setProjectOpen(!projectOpen)}

className={`

flex

items-center

gap-1


${
scrolled
?
"text-white"
:
"text-slate-900"
}

`

}

>

Projects


<ChevronDown

size={16}

className={

projectOpen
?
"rotate-180 transition"
:
"transition"

}

/>


</button>







{

projectOpen &&


<div

className="

absolute

top-10

left-0

w-64

rounded-xl

shadow-xl

bg-white

overflow-hidden

"

>


<button

onClick={()=>navigateTop(
"/projects/data-integration-platform"
)}

className="

block

w-full

text-left

px-5

py-3

text-slate-800

hover:bg-blue-50

hover:text-blue-600

"

>

Enterprise Data Platform

</button>





<button

onClick={()=>navigateTop(
"/projects/data-driven-cms"
)}

className="

block

w-full

text-left

px-5

py-3

text-slate-800

hover:bg-blue-50

hover:text-blue-600

"

>

Data Driven CMS

</button>



</div>


}



</div>









{/* Skills */}


<button

onClick={()=>navigateTop("/skills")}

className={

scrolled

?

"text-white"

:

"text-slate-900"

}

>

Skills

</button>









{/* Blogs */}


<button

onClick={()=>navigateTop("/blogs")}

className={

scrolled

?

"text-white"

:

"text-slate-900"

}

>

Blogs

</button>









{/* Contact */}


<button

onClick={()=>navigateTop("/contact")}

className={

scrolled

?

"text-white"

:

"text-slate-900"

}

>

Contact

</button>






</div>


</div>


</nav>


);


}



export default Navbar;