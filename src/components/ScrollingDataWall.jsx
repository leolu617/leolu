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
Award,
GraduationCap
}
from "lucide-react";





function CountUp({
value,
suffix=""
}){


const [count,setCount]=useState(0);


useEffect(()=>{


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



},[value]);



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



const data=[


{
value:2000000,
suffix:"+",
title:"Records / Day",
icon:<Database/>
},


{
value:15,
suffix:"+",
title:"Enterprise Projects",
icon:<Briefcase/>
},



{
value:8,
suffix:"+",
title:"Years Experience",
icon:<Clock/>
},



{
value:"PMP",
suffix:"",
title:"Certified",
icon:<Award/>
},



{
value:"Purdue",
suffix:"",
title:"MSBA",
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
text-5xl
font-bold
mt-5
"

>

Data Driven Achievement

</h2>


</motion.div>









<div

className="
mt-20
space-y-10
"

>



{

data.map((item,index)=>(


<motion.div


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

once:true,

amount:0.4

}}



transition={{

duration:0.8

}}



className="

relative

flex

items-center

gap-10

"

>





{/* Line */}


{

index !== data.length-1 &&


<div

className="
absolute
left-10
top-24
h-20
border-l
border-cyan-400/30
"

/>

}







<div

className="
w-20
h-20
rounded-full
bg-cyan-400/10
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
text-5xl
font-bold
text-cyan-300
"

>


<CountUp

value={item.value}

suffix={item.suffix}

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