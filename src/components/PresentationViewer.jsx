import React from "react";

import { motion } from "framer-motion";


function PresentationViewer({slides}){


return (

<section
className="
bg-slate-950
py-24
"
>


<div
className="
max-w-6xl
mx-auto
px-6
space-y-24
"
>


{
slides.map((slide,index)=>(


<motion.div

key={index}

initial={{
opacity:0,
y:80
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true,
amount:0.2
}}

transition={{
duration:0.8
}}

>


{/* Slide Number */}

<div
className="
text-slate-400
mb-5
text-lg
tracking-widest
"
>

SLIDE {String(index+1).padStart(2,"0")}

</div>




{/* Slide Image */}

<div

className="
rounded-3xl
overflow-hidden
shadow-2xl
border
border-white/10
bg-white
"

>


<motion.img

src={slide}

alt={`slide-${index+1}`}

className="
w-full
transition
duration-700
"

whileHover={{

scale:1.03

}}

/>


</div>



</motion.div>


))

}



</div>


</section>

)

}


export default PresentationViewer;