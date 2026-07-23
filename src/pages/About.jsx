import React from "react";




import {
  Database,
  Cloud,
  BarChart3,
  Code2,
  GraduationCap,
  Award,
  Briefcase
} from "lucide-react";

import { motion } from "framer-motion";





import DataPipeline 
from "../components/DataPipeline";


function About(){


return (








<div

className="
min-h-screen
bg-slate-950
text-white
"

>





{/* =========================
    Hero Section
========================= */}




<section

className="
relative
py-32
overflow-hidden
"

>


<div

className="
absolute
inset-0
bg-gradient-to-br
from-blue-950
via-slate-950
to-black
"

/>



<div

className="
relative
max-w-6xl
mx-auto
px-6
"

>


<motion.div

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:0.8
}}

>


<p

className="
text-blue-400
tracking-[0.3em]
"

>

ABOUT ME

</p>




<h1

className="
text-6xl
font-bold
mt-6
"
>

Leo Lu

</h1>



<h2

className="
text-3xl
mt-4
text-slate-300
"

>

Data Engineer
&
Project Manager

</h2>




<p

className="
mt-8
max-w-3xl
text-xl
text-slate-400
leading-relaxed
"

>

Building enterprise data solutions by combining
software engineering, data analytics and
business understanding.

Experienced in financial systems,
ETL pipelines, BI platforms,
cloud architecture and digital experience platforms.

</p>



<div

className="
flex
gap-4
mt-10
flex-wrap
"

>


<span className="
px-5
py-2
rounded-full
bg-blue-600/20
border
border-blue-400/30
">

Data Engineering

</span>


<span className="
px-5
py-2
rounded-full
bg-blue-600/20
border
border-blue-400/30
">

Project Management

</span>


<span className="
px-5
py-2
rounded-full
bg-blue-600/20
border
border-blue-400/30
">

Business Analytics

</span>


</div>


</motion.div>


</div>


</section>




<DataPipeline />




{/* =========================
    Professional Summary
========================= */}


<section

className="
max-w-6xl
mx-auto
px-6
py-20
"

>


<div

className="
grid
md:grid-cols-2
gap-12
"

>


<div>


<h2

className="
text-4xl
font-bold
"

>

Professional Summary

</h2>



<p

className="
mt-6
text-slate-300
leading-relaxed
"

>

With over 7 years of experience,
I have worked across banking,
system integration and enterprise IT projects.

My experience covers the complete lifecycle
from business requirement analysis,
system design,
data processing,
ETL development,
BI visualization,
to project delivery.

</p>



</div>





<div

className="
bg-white/10
rounded-3xl
p-8
backdrop-blur-xl
border
border-white/10
"

>


<div className="
space-y-6
">


<InfoItem

icon={<Briefcase/>}

title="Experience"

text="7+ Years Enterprise IT Experience"

/>


<InfoItem

icon={<Database/>}

title="Data Platform"

text="ETL | Informatica | Oracle | BI"

/>



<InfoItem

icon={<Cloud/>}

title="Cloud"

text="AWS | OpenShift | Cloud Architecture"

/>



</div>


</div>


</div>


</section>
















{/* =========================
 Technical Stack
========================= */}



<section

className="
max-w-6xl
mx-auto
px-6
py-20
"

>


<h2

className="
text-4xl
font-bold
mb-12
"

>

Technical Skills

</h2>



<div

className="
grid
md:grid-cols-4
gap-6
"

>


<SkillCard

icon={<Database/>}

title="Data"

items="SQL, ETL, Informatica"
/>



<SkillCard

icon={<Code2/>}

title="Development"

items="Java, Python, React"
/>



<SkillCard

icon={<BarChart3/>}

title="Analytics"

items="Power BI, FineBI, SAP Analytics"
/>



<SkillCard

icon={<Cloud/>}

title="Cloud"

items="AWS, OpenShift"
/>



</div>


</section>









{/* =========================
 Education
========================= */}



<section

className="
py-20
bg-slate-900
"

>


<div

className="
max-w-6xl
mx-auto
px-6
"


>


<h2

className="
text-4xl
font-bold
"

>

Education & Certification

</h2>



<div

className="
grid
md:grid-cols-2
gap-6
mt-10
"

>


<Card

icon={<GraduationCap/>}

title="Purdue University(Currently enrolled)"

text="Master of Science in Business Analytics"

/>



<Card

icon={<Award/>}

title="Professional Certification"

text="
PMP | PSM I | FineBI Professional
"

/>


</div>


</div>


</section>









{/* =========================
 CTA
========================= */}


<section

className="
py-24
text-center
"

>


<h2

className="
text-4xl
font-bold
"

>

Let's Build Something Together

</h2>



<p

className="
mt-5
text-slate-400
"

>

Explore my projects and technical journey.

</p>


</section>





</div>


)

}







function InfoItem({
icon,
title,
text
}){


return (

<div className="
flex
gap-4
items-center
">

<div className="
text-blue-400
">

{icon}

</div>

<div>

<h3 className="
font-bold
">

{title}

</h3>


<p className="
text-slate-400
">

{text}

</p>


</div>

</div>

)

}








function Timeline({
year,
title,
text
}){


return (

<div

className="
border-l
border-blue-500
pl-6
"

>


<p className="
text-blue-400
">

{year}

</p>


<h3 className="
text-2xl
font-bold
mt-2
">

{title}

</h3>


<p className="
text-slate-400
mt-2
">

{text}

</p>


</div>


)

}








function SkillCard({
icon,
title,
items
}){


return (

<div

className="
bg-white/10
rounded-3xl
p-6
border
border-white/10
"

>


<div className="
text-blue-400
">

{icon}

</div>


<h3 className="
text-xl
font-bold
mt-4
">

{title}

</h3>


<p className="
text-slate-400
mt-3
">

{items}

</p>


</div>


)

}







function Card({
icon,
title,
text
}){


return (

<div

className="
bg-white/10
p-8
rounded-3xl
border
border-white/10
"

>


<div className="
text-blue-400
">

{icon}

</div>


<h3 className="
text-2xl
font-bold
mt-4
">

{title}

</h3>


<p className="
text-slate-400
mt-3
">

{text}

</p>


</div>


)

}





export default About;