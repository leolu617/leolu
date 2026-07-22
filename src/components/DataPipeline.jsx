import React from "react";

import {
Database,
Layers,
BarChart3,
Server,
ArrowDown
} from "lucide-react";


import {
motion
}
from "framer-motion";



function DataPipeline(){



const nodes=[


{
title:"Source System",
desc:"Enterprise Applications",
icon:<Server/>
},


{
title:"Database",
desc:"Oracle / MySQL",
icon:<Database/>
},


{
title:"ETL Pipeline",
desc:"Informatica",
icon:<Layers/>
},


{
title:"Data Warehouse",
desc:"Enterprise Data Platform",
icon:<Database/>
},


{
title:"BI Dashboard",
desc:"Analytics & Decision Making",
icon:<BarChart3/>
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

Enterprise Data Pipeline

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









{/* Metrics */}


<div

className="
grid
md:grid-cols-3
gap-6
mt-16
"

>


{


[
{
value:"2M+",
label:"Records / Day"
},

{
value:"99.9%",
label:"Pipeline Reliability"
},

{
value:"24/7",
label:"Enterprise Processing"
}

].map(item=>(


<div

className="
bg-white/10
border
border-white/10
rounded-2xl
p-6
text-center
"

>


<h3

className="
text-4xl
font-bold
text-cyan-300
"

>

{item.value}

</h3>


<p

className="
mt-3
text-slate-300
"

>

{item.label}

</p>


</div>


))


}



</div>









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

{node.icon}

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


{/* Moving Data */}


<motion.div


animate={{

y:[0,70]

}}


transition={{

duration:2,

repeat:Infinity,

ease:"linear"

}}



className="

absolute

left-[-5px]

top-0

w-3

h-3

rounded-full

bg-cyan-300

shadow-[0_0_20px_rgba(34,211,238,0.9)]

"

>



</motion.div>


<ArrowDown

className="
absolute
bottom-0
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