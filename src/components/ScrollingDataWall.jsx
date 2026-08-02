import React, {
useEffect,
useState
} from "react";


import {
motion
}
from "framer-motion";


import {
Database,
Briefcase,
Clock,
GraduationCap
}
from "lucide-react";





function CountUp({
value,
suffix="",
start=false
}){


const [count,setCount]=useState(0);


useEffect(()=>{

if(!start || typeof value !== "number"){
	setCount(0);
return;
}


let current=0;


const timer=setInterval(()=>{


current += value / 50;


if(current >= value){

current=value;

clearInterval(timer);

}


setCount(
Math.floor(current)
);


},30);



return ()=>clearInterval(timer);



},[value,start]);



return (

<span>

{
typeof value==="number"
?
count.toLocaleString()
:
value
}

{suffix}


</span>

)


}










function ScrollingDataWall(){
const [visibleItems,setVisibleItems]=useState([]);


const data=[




{
value:8,
suffix:"+",
title:"Years of Experience in Information Technology and Digital Solutions",
icon:<Clock/>
},



{
value:40,
suffix:" %+",
title:"Improvement in operational efficiency through the implementation of enterprise-grade solutions, system integration, digital transformation, and data-driven initiatives.",
icon:<Briefcase/>
},


{
value:10,
suffix:"+",
title:"Members teams leading. Expertise in project and product management  to deliver enterprise solutions. Certified as a PMP(Project Management Professional) and PSM I(Scrum Master).",
icon:<Database/>
},


{
value:10,
suffix:"+",
title:"Business Certifications and Professional Development Programs",
icon:<Briefcase/>
},


{
value:"Business Analytics & Data Insights",
suffix:"",
title:"Transforming business data into actionable insights through analytics, visualization, and data-driven decision-making to support strategic growth.",
icon:<GraduationCap/>
}



];







return (

<section

className="
relative
py-32
bg-black
overflow-hidden
text-white
"

>



{/* Background Particles */}


<div

className="
absolute
inset-0
"

>


{

Array.from({
length:40
}).map((_,i)=>(






<motion.div


key={i}


animate={{

y:[0,-100,0],

opacity:[0.2,0.8,0.2]

}}



transition={{

duration:4+Math.random()*5,

repeat:Infinity,

delay:i*0.2

}}



className="

absolute

w-1

h-1

bg-cyan-300

rounded-full

"

style={{

left:`${Math.random()*100}%`,

top:`${Math.random()*100}%`

}}


/>



))


}



</div>









<div

className="
relative
max-w-5xl
mx-auto
px-6
"

>



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
tracking-[0.4em]
"

>

IMPACT METRICS

</p>


<h2

className="
text-3xl
font-bold
mt-3
"

>

Data Driven Achievement

</h2>


</motion.div>









<div

className="
mt-10
space-y-10
"

>



{
data.map((item,index)=>(


<motion.div


onViewportEnter={()=>{

setVisibleItems(prev=>{

if(prev.includes(index)){
return prev;
}

return [
...prev,
index
];

});
}}

onViewportLeave={()=>{

setVisibleItems(prev=>

prev.filter(
(itemIndex)=>itemIndex !== index
)

);

}}


key={item.title}



initial={{

opacity:0,

x:index%2===0?-100:100

}}



whileInView={{

opacity:1,

x:0

}}



viewport={{


once:false,

amount:0.1

}}



transition={{

duration:0.8

}}



className="
relative
flex
items-stretch
gap-10
"

>




{/* Icon + Timeline Line */}

<div

className="
relative
w-20
flex
justify-center
items-center
"

>


{/* Timeline Line */}
{
index !== data.length - 1 &&

<div

className="
absolute
left-1/2
top-[calc(50%+40px)]
bottom-[-100px]
-translate-x-1/2
border-l
border-cyan-400/30
z-0
"

/>

}


{/* Circle */}

<div

className="
relative
z-10
w-20
h-20
shrink-0
rounded-full
bg-slate-950
border
border-cyan-300/50
flex
items-center
justify-center
text-cyan-300
shadow-[0_0_30px_rgba(34,211,238,0.4)]
"

>

{item.icon}

</div>


</div>








{/* Content Card */}


<div

className="

bg-white/10

backdrop-blur-xl

border

border-white/10

rounded-3xl

px-10

py-8

flex-1

hover:border-cyan-300/50

transition

"

>


<h3

className="
text-3xl
text-cyan-300
"

>


<CountUp

value={item.value}

suffix={item.suffix}
start={visibleItems.includes(index)}

/>


</h3>






<p

className="
text-xl
text-slate-300
mt-3
"

>

{item.title}

</p>





</div>





</motion.div>



))
}

</div>



</div>


</section>


)

}



export default ScrollingDataWall;