import React,{useState} from "react";


import {

Database,
Cloud,
BarChart3,
Brain,
FolderKanban,
Clock

} from "lucide-react";


import {motion} from "framer-motion";





const categories=[

"All",

"Data Engineering",

"Cloud",

"AI",

"Project Management",

"Analytics"

];






const blogs=[


{
title:
"Building Enterprise Data Pipeline with ETL Architecture",

description:
"How enterprise systems transform raw data into reliable business intelligence through ETL workflows.",

category:
"Data Engineering",

tags:[
"ETL",
"Informatica",
"Oracle"
],

date:
"2026.01",

read:
"8 min",

icon:<Database/>

},





{
title:
"Designing Cross-System Data Integration Platform",

description:
"Architecture considerations when connecting multiple enterprise systems.",

category:
"Project Management",

tags:[
"Integration",
"API",
"Architecture"
],

date:
"2026.02",

read:
"10 min",

icon:<FolderKanban/>

},






{
title:
"Cloud Architecture for Enterprise Applications",

description:
"A practical overview of AWS and OpenShift deployment patterns.",

category:
"Cloud",

tags:[
"AWS",
"OpenShift",
"Cloud Native"
],

date:
"2026.03",

read:
"7 min",

icon:<Cloud/>

},







{
title:
"Applying AI RAG Architecture in Enterprise CMS",

description:
"How Retrieval Augmented Generation improves enterprise content platforms.",

category:
"AI",

tags:[
"RAG",
"LLM",
"Vector Database"
],

date:
"2026.04",

read:
"12 min",

icon:<Brain/>

},






{
title:
"Building Business Analytics Dashboard",

description:
"From data modeling to BI visualization and decision support.",

category:
"Analytics",

tags:[
"Power BI",
"FineBI",
"SAP Analytics"
],

date:
"2026.05",

read:
"6 min",

icon:<BarChart3/>

}



];








function Blogs(){



const [active,setActive]=useState("All");




const filteredBlogs =

active==="All"

?

blogs

:

blogs.filter(

item=>item.category===active

);







return(


<div

className="
min-h-screen
bg-slate-50
text-slate-900
"

>










{/* =====================
Hero
===================== */}



<section

className="
relative
overflow-hidden
py-32
"

>


<div

className="
absolute
inset-0
bg-gradient-to-br
from-blue-50
via-white
to-cyan-50
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
text-blue-600
tracking-[0.3em]
font-semibold
"

>

BLOG & KNOWLEDGE HUB

</p>







<h1

className="
text-6xl
font-bold
mt-6
text-slate-900
"

>

Engineering Insights

</h1>







<p

className="
mt-8
max-w-3xl
text-xl
leading-relaxed
text-slate-600
"

>

Sharing experience and knowledge about

Data Engineering,

Enterprise Architecture,

Cloud Platform,

AI Applications and Project Delivery.

</p>







<div

className="
mt-10
flex
gap-4
flex-wrap
"

>


<span

className="
px-5
py-2
rounded-full
bg-blue-100
text-blue-700
"

>

Data Engineering

</span>



<span

className="
px-5
py-2
rounded-full
bg-cyan-100
text-cyan-700
"

>

AI & Cloud

</span>



<span

className="
px-5
py-2
rounded-full
bg-indigo-100
text-indigo-700
"

>

Enterprise Solution

</span>


</div>




</motion.div>


</div>


</section>













{/* =====================
Category
===================== */}



<section

className="
max-w-6xl
mx-auto
px-6
py-12
"

>


<div

className="
flex
flex-wrap
gap-4
"

>


{

categories.map(category=>(


<button


key={category}


onClick={()=>setActive(category)}


className={`

px-5

py-2

rounded-full

border

transition


${

active===category

?

"bg-blue-600 text-white border-blue-600 shadow-lg"

:

"bg-white text-slate-700 border-slate-200 hover:bg-blue-50"

}

`

}


>

{category}


</button>



))


}



</div>



</section>














{/* =====================
Cards
===================== */}



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
grid

md:grid-cols-3

gap-8

"

>


{


filteredBlogs.map((blog,index)=>(


<motion.div


key={blog.title}


initial={{

opacity:0,

y:40

}}


animate={{

opacity:1,

y:0

}}



transition={{

duration:0.5,

delay:index*0.1

}}



className="

bg-white

rounded-3xl

p-8

shadow-lg

border

border-slate-100

hover:-translate-y-2

hover:shadow-xl

transition

"


>







<div

className="
w-14
h-14
rounded-2xl
bg-blue-100
flex
items-center
justify-center
text-blue-600
"

>

{blog.icon}

</div>









<h2

className="
text-2xl
font-bold
mt-6
"

>

{blog.title}

</h2>








<p

className="
mt-4
text-slate-600
leading-relaxed
"

>

{blog.description}

</p>








<div

className="
flex
flex-wrap
gap-2
mt-6
"

>


{

blog.tags.map(tag=>(


<span

key={tag}

className="
px-3
py-1
rounded-full
text-sm
bg-slate-100
text-slate-600
"

>

{tag}

</span>


))


}


</div>








<div

className="
flex
items-center
justify-between
mt-8
text-sm
text-slate-500
"

>


<span>

{blog.date}

</span>



<span

className="
flex
items-center
gap-1
"

>

<Clock size={15}/>

{blog.read}

</span>



</div>








<button

className="
mt-8
text-blue-600
font-semibold
hover:text-blue-800
"

>

Read Article →

</button>







</motion.div>



))


}



</div>



</section>









{/* =====================
CTA
===================== */}



<section

className="
py-24
bg-gradient-to-r
from-blue-600
to-cyan-500
text-white
text-center
"

>


<h2

className="
text-4xl
font-bold
"

>

Let's Share Knowledge

</h2>


<p

className="
mt-5
text-blue-100
"

>

Explore my engineering journey and enterprise solutions.

</p>



</section>







</div>


)


}



export default Blogs;