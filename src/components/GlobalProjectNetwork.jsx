import React from "react";

import {
Globe2,
MapPin,
Cloud,
Database
}
from "lucide-react";


import {
motion
}
from "framer-motion";



function GlobalProjectNetwork(){



const locations=[


{
name:"Taipei",
role:"Financial Data Platform",
x:"25%",
y:"45%"
},


{
name:"Singapore",
role:"APAC Digital Solutions",
x:"42%",
y:"65%"
},


{
name:"Tokyo",
role:"Enterprise Integration",
x:"58%",
y:"35%"
},


{
name:"United States",
role:"Cloud Architecture",
x:"78%",
y:"45%"
}



];





const connections=[

{
from:{
x:"25%",
y:"45%"
},
to:{
x:"42%",
y:"65%"
}
},


{
from:{
x:"42%",
y:"65%"
},
to:{
x:"58%",
y:"35%"
}
},


{
from:{
x:"58%",
y:"35%"
},
to:{
x:"78%",
y:"45%"
}
}

];





return (

<section

className="
relative
py-32
bg-slate-950
overflow-hidden
text-white
"

>


<div

className="
max-w-7xl
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

GLOBAL DELIVERY

</p>



<h2

className="
text-5xl
font-bold
mt-4
"

>

Global Project Network

</h2>



<p

className="
text-slate-400
mt-5
text-lg
"

>

Connecting enterprise data solutions across regions.

</p>


</motion.div>








{/* Globe Area */}


<div

className="
relative
h-[600px]
mt-20
"

>





{/* Background Grid */}


<div

className="
absolute
inset-0

bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.15),transparent_50%)]

"

/>




<div

className="
absolute
inset-10
rounded-full
border
border-cyan-400/20
"

>

</div>








{/* Connections */}

<svg

className="
absolute
inset-0
w-full
h-full
"

>


{

connections.map((line,index)=>(


<motion.line


key={index}


x1={line.from.x}

y1={line.from.y}

x2={line.to.x}

y2={line.to.y}



stroke="rgba(34,211,238,0.4)"

strokeWidth="2"



/>


))


}



</svg>









{/* Moving Data Points */}


{

connections.map((line,index)=>(


<motion.div


key={"flow"+index}



animate={{

x:["0%","300%"],

opacity:[0,1,0]

}}



transition={{

duration:3,

repeat:Infinity,

delay:index

}}



className="

absolute

w-3

h-3

rounded-full

bg-cyan-300

shadow-[0_0_20px_rgba(34,211,238,1)]

"



style={{

left:line.from.x,

top:line.from.y

}}



/>



))


}









{/* Locations */}



{

locations.map((city,index)=>(



<motion.div



key={city.name}



style={{

left:city.x,

top:city.y

}}



whileHover={{

scale:1.2

}}



animate={{

y:[0,-10,0]

}}



transition={{

duration:3,

repeat:Infinity,

delay:index*0.5

}}



className="

absolute

-translate-x-1/2

-translate-y-1/2

cursor-pointer

"

>




<div

className="
relative
"

>


<div

className="
w-14
h-14
rounded-full
bg-cyan-400/20
border
border-cyan-300
flex
items-center
justify-center
"

>

<MapPin

className="
text-cyan-300
"

/>


</div>





<div

className="
absolute
top-16
left-1/2
-translate-x-1/2
text-center
w-40
"

>


<h3

className="
font-bold
text-lg
"

>

{city.name}

</h3>


<p

className="
text-xs
text-slate-400
mt-1
"

>

{city.role}

</p>



</div>



</div>





</motion.div>



))


}



</div>









{/* Footer Metrics */}


<div

className="
grid
md:grid-cols-3
gap-6
mt-10
"

>



<div

className="
bg-white/10
rounded-2xl
p-6
border
border-white/10
"

>

<Globe2

className="
text-cyan-300
"

/>


<h3

className="
text-3xl
font-bold
mt-4
"

>

4 Regions

</h3>


<p

className="
text-slate-400
"

>

Asia Pacific + US

</p>


</div>






<div

className="
bg-white/10
rounded-2xl
p-6
border
border-white/10
"

>


<Database

className="
text-cyan-300
"

/>


<h3

className="
text-3xl
font-bold
mt-4
"

>

Enterprise Data

</h3>


<p

className="
text-slate-400
"

>

Platform Delivery

</p>


</div>







<div

className="
bg-white/10
rounded-2xl
p-6
border
border-white/10
"

>


<Cloud

className="
text-cyan-300
"

/>


<h3

className="
text-3xl
font-bold
mt-4
"

>

Cloud Ready

</h3>


<p

className="
text-slate-400
"

>

AWS / OpenShift

</p>


</div>



</div>







</div>


</section>


)

}



export default GlobalProjectNetwork;