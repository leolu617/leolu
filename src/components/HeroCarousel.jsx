import React, { useState } from "react";

import {
  ChevronLeft,
  ChevronRight
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";


const slides = [

{
title:"Building Data-Driven Solutions",

description:
"Project Manager | Data Engineer | Business Analytics",

button:"View Projects",

image:"/images/data-bg.jpg"

},


{
title:"Enterprise Data Platform",

description:
"ETL | BI Dashboard | Cloud Architecture",

button:"Explore Solution",

image:"/images/cloud-bg.jpg"

},


{
title:"Digital Experience Platform",

description:
"Adobe Experience Manager Website",

button:"Case Study",

image:"/images/aem-bg.jpg"

}

];



function HeroCarousel(){


const [index,setIndex]=useState(0);



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



return (

<section
className="
relative
h-screen
overflow-hidden
"
>


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
duration:0.8
}}

className="
absolute
inset-0
bg-cover
bg-center
"

style={{

backgroundImage:
`url(${slides[index].image})`

}}

>


<div
className="
absolute
inset-0
bg-black/50
"
/>



<div
className="
relative
z-10
h-full
flex
items-center
px-20
text-white
"
>


<div>


<h1
className="
text-6xl
font-bold
"
>

{slides[index].title}

</h1>



<p
className="
text-xl
mt-6
"
>

{slides[index].description}

</p>



<button
className="
mt-10
bg-blue-600
px-8
py-3
rounded-lg
"
>

{slides[index].button}

</button>



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
z-20
bg-white/20
p-3
rounded-full
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
z-20
bg-white/20
p-3
rounded-full
"

>

<ChevronRight />

</button>



</section>


)

}


export default HeroCarousel;