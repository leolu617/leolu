import React from "react";

import {
Database,
Layers,
BarChart3,
Server,
ArrowUp,
ChartBar
} from "lucide-react";


import {
motion
}
from "framer-motion";



function DataPipeline(){


const nodes=[


{
title:"Project Manager",
desc:"Leads Technologies",
icon:<ChartBar />
},


{
title:"Project Manager",
desc:"FucoTech",
icon:<ChartBar />
},


{
title:"Principal Engineer",
desc:"MIRLE IOTnet",
icon:<Layers/>
},


{
title:"Software Engineer",
desc:"COMWAVE",
icon:<Database/>
}


];





return (

<section

className="
py-32
bg-slate-900
overflow-hidden
"

>


<div

className="
max-w-6xl
mx-auto
px-6
"

>



{/* Header */}

<motion.div


initial={{

opacity:0,

y:40

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

DATA ARCHITECTURE

</p>




<h2

className="
text-5xl
font-bold
mt-4
"

>

Career Journey

</h2>



<p

className="
text-slate-400
mt-5
text-lg
"

>

Transforming raw enterprise data into actionable business insights.

</p>


</motion.div>









{/* Pipeline */}



<div

className="
mt-20
relative
"

>





{

nodes.map((node,index)=>(


<React.Fragment

key={node.title}

>


{/* Node */}



<motion.div


initial={{

opacity:0,

x:-50

}}



whileInView={{

opacity:1,

x:0

}}



viewport={{

once:true

}}



transition={{

duration:0.6,

delay:index*0.15

}}



className="

relative

flex

items-center

gap-8

"

>


<div

className="
w-20
h-20
rounded-full
bg-white/10
border
border-cyan-300/30
flex
items-center
justify-center
text-cyan-300
shadow-[0_0_30px_rgba(34,211,238,0.25)]
"

>




{
React.cloneElement(
node.icon,
{
size:40
}
)
}




</div>




<div>


<h3

className="
text-2xl
font-bold
"

>

{node.title}

</h3>


<p

className="
text-slate-400
mt-2
"

>

{node.desc}

</p>


</div>


</motion.div>









{/* Connection */}

{

index !== nodes.length-1 &&


<div


className="

relative

h-24

ml-10

border-l

border-cyan-400/30

"


>


{/* Moving Data Bottom -> Top */}



<motion.div


animate={{

y:[0,-70]

}}



transition={{

duration:2,

repeat:Infinity,

ease:"linear"

}}



className="

absolute

left-[-7px]

bottom-0

w-3

h-3

rounded-full

bg-cyan-300

shadow-[0_0_20px_rgba(34,211,238,0.9)]

"


>


</motion.div>








{/* Up Arrow */}



<ArrowUp


className="

absolute

top-0

-ml-[11px]

text-cyan-400

"

/>




</div>


}



</React.Fragment>


))


}





</div>


</div>


</section>


)

}



export default DataPipeline;