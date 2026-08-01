import React from "react";


import TechMarquee
from "../components/TechMarquee";




import {
  Database,
  Cloud,
  BarChart3,
  Code2,
  Briefcase,
  BrainCircuit,
  Network,
  Award,
  Server,
  Layers
} from "lucide-react";


import {
  motion
} from "framer-motion";




function Skills(){



const skills=[


{
title:"Data Engineering",
level:"Advanced",
icon:<Database size={32}/>,
items:[
"SQL",
"ETL Pipeline",
"Informatica",
"Data Warehouse",
"Oracle / MySQL"
],

position:{
x:380,
y:40
}

},



{
title:"Cloud Architecture",
level:"Intermediate",
icon:<Cloud size={32}/>,
items:[
"AWS",
"OpenShift",
"Docker",
"Cloud Deployment"
],

position:{
x:780,
y:250
}

},




{
title:"Business Analytics",
level:"Advanced",
icon:<BarChart3 size={32}/>,
items:[
"Power BI",
"FineBI",
"SAP Analytics",
"Dashboard Design"
],

position:{
x:380,
y:620
}

},




{
title:"Software Development",
level:"Advanced",
icon:<Code2 size={32}/>,
items:[
"Java",
"Python",
"C#",
"React"
],

position:{
x:20,
y:250
}

},





{
title:"Project Management",
level:"Advanced",
icon:<Briefcase size={32}/>,
items:[
"PMP",
"Agile",
"Scrum",
"Enterprise Delivery"
],

position:{
x:780,
y:620
}

},





{
title:"AI & Data Intelligence",
level:"Growing",
icon:<BrainCircuit size={32}/>,
items:[
"RAG",
"LLM",
"AI Application",
"Data Innovation"
],

position:{
x:20,
y:620
}

}



];






const capability=[


{
name:"Data Engineering",
value:"90%"
},

{
name:"Cloud Architecture",
value:"75%"
},

{
name:"Analytics",
value:"90%"
},

{
name:"Project Management",
value:"85%"
},

{
name:"AI Application",
value:"70%"
}

];







return (


<div

className="
min-h-screen
bg-[#020617]
text-white
overflow-hidden
relative
"
>





{/* Background Grid */}

<div

className="
absolute
inset-0
opacity-20
pointer-events-none
"

style={{

backgroundImage:

`
linear-gradient(#334155 1px,transparent 1px),
linear-gradient(90deg,#334155 1px,transparent 1px)
`,

backgroundSize:"50px 50px"

}}

/>






{/* Header */}


<section

className="
relative
z-10
pt-32
text-center
"

>


<p

className="
text-cyan-400
tracking-[0.35em]
"

>

TECHNICAL ECOSYSTEM

</p>



<h1

className="
text-6xl
font-bold
mt-6
"

>

Skills Network

</h1>



<p

className="
mt-6
text-slate-400
text-xl
"

>

Enterprise Technology Stack & Data Architecture Capability

</p>


</section>







{/* Network Canvas */}


<section

className="
relative
z-10
max-w-6xl
mx-auto
h-[900px]
mt-10
"

>

{/* Connection Lines */}

<svg

className="
absolute
inset-0
w-full
h-full
pointer-events-none
"

>


{

skills.map((_,index)=>(


<line

key={index}

x1="50%"

y1="50%"

x2={
[
"50%",
"90%",
"50%",
"10%",
"85%",
"15%"
][index]
}

y2={
[
"15%",
"50%",
"85%",
"50%",
"80%",
"80%"
][index]
}

stroke="#22d3ee"

strokeOpacity="0.35"

strokeWidth="2"

/>


))

}


</svg>







{/* Core Node */}


<motion.div


animate={{

scale:[1,1.05,1]

}}


transition={{

duration:3,

repeat:Infinity

}}



className="

absolute

top-1/2

left-1/2

-translate-x-1/2

-translate-y-1/2

w-52

h-52

rounded-full

bg-gradient-to-br

from-cyan-500

to-blue-700

flex

flex-col

items-center

justify-center

shadow-[0_0_100px_rgba(34,211,238,0.7)]

z-20

"

>


<Network size={55}/>


<h2

className="
text-2xl
font-bold
mt-3
"

>

Leo Lu

</h2>



<p

className="
text-sm
"

>

Data Engineer

</p>



<p

className="
text-xs
text-cyan-100
"

>

Solution Architect

</p>



</motion.div>







{/* Draggable Skill Nodes */}


{

skills.map((skill,index)=>(


<motion.div


key={skill.title}



drag


dragMomentum={false}


dragElastic={0.1}



initial={{

opacity:0,

scale:0.8

}}



animate={{

opacity:1,

scale:1

}}



transition={{

duration:0.5,

delay:index*0.15

}}



whileHover={{

scale:1.08

}}



style={{

position:"absolute",

left:skill.position.x,

top:skill.position.y,

touchAction:"none"

}}



className="

w-64

cursor-grab

active:cursor-grabbing

bg-white/10

backdrop-blur-xl

border

border-cyan-400/20

rounded-3xl

p-6

shadow-xl

hover:border-cyan-300

select-none

"

>


<div

className="
text-cyan-300
"

>

{skill.icon}

</div>





<h3

className="
text-xl
font-bold
mt-4
"

>

{skill.title}

</h3>




<span

className="
inline-block
mt-3
px-3
py-1

rounded-full

bg-cyan-500/20

text-cyan-300

text-xs
"

>

{skill.level}

</span>






<ul

className="
mt-4
space-y-2
text-sm
text-slate-300
"

>


{

skill.items.map(item=>(


<li

key={item}

>

● {item}

</li>


))


}



</ul>



</motion.div>


))


}



</section>







{/* Component: TechMarquee */}


<TechMarquee />


{/* Technology Stack */}


<section

className="
max-w-6xl
mx-auto
px-6
pb-24
"

>


<div

className="
bg-white/10

backdrop-blur-xl

border

border-white/10

rounded-3xl

p-10
"

>


<h2

className="
text-3xl
font-bold
"

>

Enterprise Technology Stack

</h2>




<div

className="
grid

md:grid-cols-4

gap-6

mt-8
"

>


<StackCard

icon={<Server/>}

title="Backend"

text="Java | Python | API"

/>







<StackCard

icon={<Database/>}

title="Data"

text="ETL | Warehouse"

/>



<StackCard

icon={<Cloud/>}

title="Cloud"

text="AWS | OpenShift"

/>



<StackCard

icon={<Layers/>}

title="Analytics"

text="BI Platform"

/>



</div>


</div>


</section>









{/* Capability Matrix */}



<section

className="
max-w-6xl

mx-auto

px-6

pb-24
"

>


<div

className="
bg-white/10

backdrop-blur-xl

border

border-cyan-400/20

rounded-3xl

p-10
"

>


<h2

className="
text-3xl
font-bold
"

>

Capability Matrix

</h2>




<div

className="
mt-8

space-y-6
"

>


{

capability.map(item=>(


<div

key={item.name}

>


<div

className="
flex

justify-between

mb-2
"

>


<span>

{item.name}

</span>



<span

className="
text-cyan-400
"

>

{item.value}

</span>


</div>




<div

className="
h-3

bg-white/10

rounded-full

overflow-hidden
"

>


<div

className="
h-full

bg-gradient-to-r

from-cyan-400

to-blue-500

rounded-full
"

style={{

width:item.value

}}

/>


</div>


</div>


))


}



</div>


</div>


</section>









{/* Certification */}


<section

className="
pb-32
"

>


<div

className="
max-w-6xl

mx-auto

px-6
"

>


<div

className="
flex

items-center

gap-3
"

>


<Award

className="
text-yellow-400
"

/>



<h2

className="
text-3xl
font-bold
"

>

Certification

</h2>


</div>





<div

className="
grid

md:grid-cols-3

gap-6

mt-8
"

>


<Cert title="PMP"/>

<Cert title="PSM I"/>

<Cert title="FineBI Professional"/>


</div>


</div>


</section>






</div>


)

}









function StackCard({

icon,

title,

text

}){


return (

<div

className="
bg-black/20

rounded-xl

p-5

border

border-cyan-400/20
"

>


<div

className="
text-cyan-400
"

>

{icon}

</div>


<h3

className="
font-bold

mt-3
"

>

{title}

</h3>



<p

className="
text-sm

text-slate-400

mt-2
"

>

{text}

</p>


</div>

)

}









function Cert({

title

}){


return (

<div

className="
bg-white/10

border

border-yellow-400/30

rounded-xl

p-6
"

>


<h3

className="
text-yellow-400

font-bold
"

>

{title}

</h3>


</div>


)

}







export default Skills;