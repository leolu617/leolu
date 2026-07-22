import React, { useEffect, useState, useRef } from "react";

import { Link, useNavigate } from "react-router-dom";

import { ChevronDown } from "lucide-react";



function Navbar() {


  const navigate = useNavigate();


  const dropdownRef = useRef(null);



  const [scrolled, setScrolled] = useState(false);


  const [projectOpen, setProjectOpen] = useState(false);






  // Home Button

  function goHome(){


    navigate("/");


    window.scrollTo({

      top:0,

      behavior:"smooth"

    });


  }






  useEffect(()=>{



    function handleScroll(){


      if(window.scrollY > 50){

        setScrolled(true);

      }

      else{

        setScrolled(false);

      }



      // 滾動時關閉 Dropdown

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

onClick={()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

}}

className="flex items-center gap-3"

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

flex

items-center

space-x-6

"

>





{/* Home */}


<button

onClick={goHome}

className={

scrolled

?

"text-white transition"

:

"text-slate-900 transition"

}

>

Home

</button>









<Link

to="/about"

className={

scrolled

?

"text-white transition"

:

"text-slate-900 transition"

}

>

About

</Link>









{/* Projects Dropdown */}



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

relative


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



<ChevronDown

size={16}

className={`

transition-transform

duration-300


${
projectOpen
?
"rotate-180"
:
""
}

`}

/>





<span

className={`

absolute

left-0

right-0

-bottom-3

h-[2px]

bg-blue-400

transition-all


${
projectOpen
?
"opacity-100 scale-x-100"
:
"opacity-0 scale-x-0"
}

`}

/>



</button>







{/* Dropdown */}


{

projectOpen &&

<div

className="

absolute

top-10

left-0

w-64

rounded-xl

overflow-hidden

shadow-xl

border

border-white/10

bg-white

"

>


<Link

to="/projects/data-integration-platform"

onClick={()=>setProjectOpen(false)}

className="

block

px-5

py-3

text-slate-800

hover:bg-blue-50

hover:text-blue-600

transition

"

>


Enterprise Data Platform


</Link>






<Link

to="/projects/aem"

onClick={()=>setProjectOpen(false)}

className="

block

px-5

py-3

text-slate-800

hover:bg-blue-50

hover:text-blue-600

transition

"

>

Digital Experience Platform

</Link>





<Link

to="/projects/bi"

onClick={()=>setProjectOpen(false)}

className="

block

px-5

py-3

text-slate-800

hover:bg-blue-50

hover:text-blue-600

transition

"

>

BI Analytics Solution

</Link>



</div>


}



</div>









<Link

to="/skills"

className={

scrolled

?

"text-white transition"

:

"text-slate-900 transition"

}

>

Skills

</Link>





<Link

to="/blogs"

className={

scrolled

?

"text-white transition"

:

"text-slate-900 transition"

}

>

Blogs

</Link>





<Link

to="/contact"

className={

scrolled

?

"text-white transition"

:

"text-slate-900 transition"

}

>

Contact

</Link>







</div>


</div>


</nav>


);


}


export default Navbar;