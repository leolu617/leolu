import React, { useEffect, useState } from "react";

import {
Database,
Activity,
Server,
TrendingUp
} from "lucide-react";


import {
motion
}
from "framer-motion";





function CountNumber({
value,
suffix=""
}){


const [count,setCount]=useState(0);



useEffect(()=>{


let start=0;


const duration=1500;


const increment=value/(duration/30);



const timer=setInterval(()=>{


start+=increment;


if(start>=value){

start=value;

clearInterval(timer);

}


setCount(Math.floor(start));


},30);



return ()=>clearInterval(timer);



},[value]);



return (

<span>

{count.toLocaleString()}

{suffix}

</span>

)


}







function DataDashboard(){



const metrics=[


{
title:"Records Processed / Day",
value:2000000,
suffix:"+",
icon:<Database/>
},



{
title:"ETL Success Rate",
value:99.95,
suffix:"%",
icon:<Activity/>
},



{
title:"Enterprise Projects",
value:15,
suffix:"+",
icon:<Server/>
},



{
title:"Years Experience",
value:8,
suffix:"+",
icon:<TrendingUp/>
}



];




return (


<section

className="
py-32
bg-slate-950
text-white
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

DATA PLATFORM

</p>



<h2

className="
text-5xl
font-bold
mt-4
"

>

Interactive Data Dashboard

</h2>



<p

className="
text-slate-400
mt-5
text-lg
"

>

Real-world metrics from enterprise data engineering projects.

</p>


</motion.div>









{/* Metric Cards */}



<div

className="
grid
md:grid-cols-4
gap-6
mt-16
"

>



{

metrics.map((item,index)=>(



<motion.div


key={item.title}



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



transition={{

delay:index*0.15

}}



whileHover={{

y:-10

}}



className="

bg-white/10

backdrop-blur-xl

border

border-white/10

rounded-3xl

p-6

hover:border-cyan-400/50

transition

"

>



<div

className="
text-cyan-300
"

>

{item.icon}

</div>




<h3

className="
text-4xl
font-bold
mt-6
"

>


<CountNumber

value={item.value}

suffix={item.suffix}

/>


</h3>




<p

className="
text-slate-400
mt-3
"

>

{item.title}

</p>



</motion.div>



))


}



</div>









{/* Pipeline Status */}



<div

className="
mt-20
bg-white/5
border
border-white/10
rounded-3xl
p-10
"

>



<div

className="
flex
items-center
justify-between
"

>


<h3

className="
text-2xl
font-bold
"

>

Pipeline Status

</h3>



<span

className="
text-green-400
flex
items-center
gap-2
"

>


<span

className="
w-3
h-3
bg-green-400
rounded-full
animate-pulse
"

/>


Running

</span>


</div>







{/* Flow */}



<div

className="
mt-10
flex
items-center
justify-between
gap-4
"

>


{


[
"Source",
"ETL",
"Warehouse",
"BI"
]

.map((step,index)=>(


<React.Fragment

key={step}

>


<motion.div


animate={{

y:[0,-8,0]

}}



transition={{

duration:2,

repeat:Infinity,

delay:index*0.3

}}



className="

flex-1

text-center

bg-slate-800

rounded-2xl

py-6

border

border-cyan-400/20

"

>

{step}


</motion.div>



{

index!==3 &&


<div

className="
text-cyan-400
"

>

→

</div>


}



</React.Fragment>



))


}



</div>



</div>






</div>


</section>


)

}



export default DataDashboard;