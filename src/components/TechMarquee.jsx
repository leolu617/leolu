import React from "react";

import {
motion
}
from "framer-motion";



function TechMarquee(){


const technologies=[

{
name:"AWS",
type:"Cloud Platform"
},

{
name:"Oracle",
type:"Database"
},

{
name:"Power BI",
type:"Analytics"
},

{
name:"FineBI",
type:"BI Platform"
},

{
name:"Python",
type:"Programming"
},

{
name:"Java",
type:"Backend"
},

{
name:"Docker",
type:"Container"
},

{
name:"OpenShift",
type:"Cloud Native"
},

{
name:"Informatica",
type:"ETL"
},

{
name:"Adobe AEM",
type:"Experience Platform"
}


];




// Duplicate for infinite loop

const items=[
...technologies,
...technologies
];



return (

<section

className="
py-24
bg-slate-950
overflow-hidden
"

>


<div

className="
max-w-7xl
mx-auto
px-6
"

>


{/* Title */}


<motion.div


initial={{

opacity:0,

y:30

}}


whileInView={{

opacity:1,

y:0

}}



viewport={{

once:true

}}


>


<p

className="
text-cyan-400
tracking-[0.3em]
"

>

TECHNOLOGY STACK

</p>


<h2

className="
text-4xl
font-bold
mt-4
"

>

Trusted Technologies

</h2>


<p

className="
text-slate-400
mt-4
"

>

Enterprise technologies used to build scalable data solutions.

</p>


</motion.div>









{/* Marquee */}


<div

className="
relative
mt-16
"

>


{/* Left Fade */}


<div

className="
absolute
left-0
top-0
bottom-0
w-32
bg-gradient-to-r
from-slate-950
to-transparent
z-10
"

/>



{/* Right Fade */}


<div

className="
absolute
right-0
top-0
bottom-0
w-32
bg-gradient-to-l
from-slate-950
to-transparent
z-10
"

/>







<motion.div


className="
flex
gap-8
w-max
"

animate={{

x:["0%","-50%"]

}}



transition={{

duration:25,

repeat:Infinity,

ease:"linear"

}}



whileHover={{

animationPlayState:"paused"

}}


>



{

items.map((tech,index)=>(


<motion.div


key={index}



whileHover={{

scale:1.15,

y:-10

}}



transition={{

duration:0.3

}}



className="

w-52

h-32

flex

flex-col

items-center

justify-center

rounded-3xl

bg-white/10

backdrop-blur-xl

border

border-white/10

shadow-lg

hover:border-cyan-300/50

transition

cursor-pointer

"

>



<h3

className="
text-2xl
font-bold
text-white
"

>

{tech.name}

</h3>



<p

className="
text-sm
text-slate-400
mt-3
"

>

{tech.type}

</p>



</motion.div>



))


}



</motion.div>


</div>


</div>


</section>

)

}



export default TechMarquee;