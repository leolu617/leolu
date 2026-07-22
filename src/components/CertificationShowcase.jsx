import React from "react";

import {
Award,
BadgeCheck,
Cloud,
Database,
Brain
} from "lucide-react";

import {
motion
}
from "framer-motion";



function CertificationShowcase(){


const certifications=[


{
title:"Project Management Professional",
short:"PMP",
issuer:"PMI",
icon:<Award/>
},


{
title:"Professional Scrum Master I",
short:"PSM I",
issuer:"Scrum.org",
icon:<BadgeCheck/>
},


{
title:"FineBI Associate",
short:"FineBI",
issuer:"FanRuan",
icon:<Database/>
},


{
title:"FineBI Professional",
short:"FineBI Pro",
issuer:"FanRuan",
icon:<Database/>
},


{
title:"AWS AI Certification",
short:"AWS AI",
issuer:"Amazon Web Services",
icon:<Cloud/>
},


{
title:"Business Analytics",
short:"MSBA",
issuer:"Purdue University",
icon:<Brain/>
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


{/* Title */}


<motion.div


initial={{

opacity:0,

y:50

}}


whileInView={{

opacity:1,

y:0

}}


viewport={{

once:true

}}


transition={{

duration:0.8

}}


>


<p

className="
text-cyan-400
tracking-[0.3em]
"

>

ACHIEVEMENTS

</p>



<h2

className="
text-5xl
font-bold
mt-4
"

>

Certification Showcase

</h2>



<p

className="
text-slate-400
mt-5
text-lg
"

>

Professional certifications and continuous learning journey.

</p>


</motion.div>









{/* Certification Cards */}



<div

className="
grid
md:grid-cols-3
gap-8
mt-16
"

>


{

certifications.map((cert,index)=>(



<motion.div


key={cert.title}



initial={{

opacity:0,

y:50

}}



whileInView={{

opacity:1,

y:0

}}



viewport={{

once:true

}}



transition={{

duration:0.6,

delay:index*0.1

}}



whileHover={{

y:-10,

scale:1.03

}}



className="

relative

bg-white/10

backdrop-blur-xl

border

border-white/10

rounded-3xl

p-8

overflow-hidden

group

"



>





{/* Glow Effect */}


<div

className="

absolute

inset-0

bg-gradient-to-br

from-blue-500/20

to-transparent

opacity-0

group-hover:opacity-100

transition

"

/>








<div

className="
relative
z-10
"

>


<div

className="
text-cyan-300
mb-6
"

>

{cert.icon}

</div>





<h3

className="
text-2xl
font-bold
"

>

{cert.short}

</h3>



<p

className="
mt-3
text-white
"

>

{cert.title}

</p>



<p

className="
mt-3
text-slate-400
"

>

{cert.issuer}

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


export default CertificationShowcase;