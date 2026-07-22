import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  ChevronLeft,
  ChevronRight
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";



const slides = [


{
title:"Enterprise Data Integration Platform Project",

description:
"Project Manager | Data Engineer | Business Analytics",

button:"View Project",

path:"/projects/data-integration-platform",

image:`${import.meta.env.BASE_URL}images/banner-etl.png`

},



{
title:"Data-driven CMS Project",

description:
"CMS | Project Manager | Adobe Experience Manager",

button:"View Project",

path:"/projects/data-driven-cms",

image:`${import.meta.env.BASE_URL}images/banner2.png`

},



{
title:"AI Content Platform",

description:
"CMS | AI | RAG",

//button:"Explore Solution",

button:null,


path:"/projects/aem",

image:`${import.meta.env.BASE_URL}images/banner3.png`

}


];





function HeroCarousel(){


const navigate = useNavigate();


const [index,setIndex]=useState(0);



const [mouse,setMouse]=useState({

x:50,
y:50

});





function next(){

setIndex(
(index+1)%slides.length
);

}



function prev(){

setIndex(
(index-1+slides.length)%slides.length
);

}





function handleMouseMove(e){


const rect=e.currentTarget.getBoundingClientRect();


setMouse({

x:
((e.clientX-rect.left)/rect.width)*100,


y:
((e.clientY-rect.top)/rect.height)*100


});


}






function handleNavigate(){


if(slides[index].path){

navigate(slides[index].path);

}


}





return (

<section

onMouseMove={handleMouseMove}

className="
relative
h-screen
overflow-hidden
"


>





{/* Spotlight */}

<div

className="
absolute
inset-0
z-20
pointer-events-none
"

style={{

background:

`radial-gradient(
600px circle at ${mouse.x}% ${mouse.y}%,
rgba(186,230,253,0.12),
transparent 45%
)`

}}


/>








<AnimatePresence>


<motion.div


key={index}


initial={{

opacity:0

}}


animate={{

opacity:1

}}


exit={{

opacity:0

}}


transition={{

duration:1.2

}}



className="
absolute
inset-0
overflow-hidden
z-10
"


>





<motion.img


src={slides[index].image}


className="
absolute
inset-0
w-full
h-full
object-cover
"


initial={{

scale:1

}}


animate={{

scale:1.18

}}


transition={{

duration:8,

ease:"easeOut"

}}


/>







<div

className="
absolute
inset-0
bg-gradient-to-r
from-slate-950/95
via-slate-950/75
to-transparent
"

/>








<div

className="
relative
z-30
h-full
flex
items-center
px-20
text-white
"


>


<div>



<motion.h1


initial={{

opacity:0,

y:40

}}


animate={{

opacity:1,

y:0

}}


transition={{

duration:0.8

}}


className="
text-6xl
font-bold
"


>


{slides[index].title}


</motion.h1>







<motion.p


initial={{

opacity:0,

y:30

}}


animate={{

opacity:1,

y:0

}}


transition={{

duration:1

}}


className="
text-xl
mt-6
"


>


{slides[index].description}


</motion.p>




{/* 多一層判斷button是否為null */}


{
slides[index].button && (


<motion.button


onClick={handleNavigate}



whileHover={{

scale:1.05

}}


whileTap={{

scale:0.95

}}



transition={{

duration:0.2

}}



className="
mt-10
bg-blue-600
px-8
py-3
rounded-lg
hover:bg-blue-700
transition
cursor-pointer
"


>


{slides[index].button}


</motion.button>

)
}



</div>


</div>




</motion.div>


</AnimatePresence>









<button

onClick={prev}

className="
absolute
left-5
top-1/2
z-40
bg-white/20
p-3
rounded-full
hover:bg-white/40
transition
"

>

<ChevronLeft />

</button>







<button

onClick={next}

className="
absolute
right-5
top-1/2
z-40
bg-white/20
p-3
rounded-full
hover:bg-white/40
transition
"

>

<ChevronRight />

</button>






</section>


)

}



export default HeroCarousel;