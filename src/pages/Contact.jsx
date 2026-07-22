import React, {
useState
}
from "react";


import {
Mail,
Linkedin,
Github,
MapPin,
Send,
Database,
Cloud,
BarChart3,
BriefcaseBusiness
}
from "lucide-react";


import {
motion
}
from "framer-motion";





function Contact(){



const [form,setForm]=useState({

name:"",
email:"",
message:""

});





function handleChange(e){


setForm({

...form,

[e.target.name]:e.target.value

});


}






function handleSubmit(e){


e.preventDefault();


console.log(form);


alert(
"Message Sent Successfully!"
);


}








return (


<div

className="
min-h-screen
bg-[#F8F6F1]
text-slate-800
"

>







{/* ======================
    Hero Banner
====================== */}



<section

className="
relative
py-32
overflow-hidden
bg-gradient-to-br
from-slate-900
via-blue-950
to-slate-950
"

>


<div

className="
absolute
inset-0
bg-gradient-to-r
from-blue-950/70
via-transparent
to-transparent
"

/>




<div

className="
relative
max-w-6xl
mx-auto
px-6
text-white
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
text-yellow-400
tracking-[0.35em]
font-semibold
"

>

CONTACT

</p>





<h1

className="
text-6xl
font-bold
mt-6
leading-tight
"

>

Let's Build
<br/>
Enterprise Solutions

</h1>






<p

className="
mt-8
text-xl
max-w-3xl
text-slate-300
leading-relaxed
"

>

Open for opportunities involving
Data Engineering,
Project Management,
Business Analytics,
and Enterprise Digital Transformation.

</p>



</motion.div>


</div>


</section>









{/* ======================
Contact Cards
====================== */}



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
md:grid-cols-3
gap-8
"

>


<ContactCard

icon={<Mail/>}

title="Email"

text="Professional Inquiry"

value="leo.lu@email.com"

/>





<ContactCard

icon={<Linkedin/>}

title="LinkedIn"

text="Professional Network"

value="linkedin.com/in/leolu"

/>





<ContactCard

icon={<Github/>}

title="GitHub"

text="Technical Portfolio"

value="github.com/leolu"

/>



</div>


</section>









{/* ======================
Professional Collaboration
====================== */}



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
bg-white
rounded-3xl
shadow-xl
border
border-yellow-200
p-10
grid
md:grid-cols-2
gap-10
"

>





<div>


<div

className="
flex
items-center
gap-3
text-[#C9A227]
"

>


<BriefcaseBusiness/>


<h2

className="
text-3xl
font-bold
text-slate-900
"

>

Professional Collaboration

</h2>


</div>







<p

className="
mt-6
text-slate-600
leading-relaxed
"

>

I specialize in bridging technology
and business requirements.

With experience in enterprise systems,
data platforms,
ETL pipelines,
BI analytics,
and digital transformation projects,
I help organizations transform data
into business value.

</p>



</div>









<div

className="
bg-gradient-to-br
from-blue-950
to-slate-900
rounded-2xl
p-8
text-white
"

>


<h3

className="
text-2xl
font-bold
"

>

Current Focus

</h3>




<ul

className="
mt-6
space-y-4
text-slate-200
"

>


<li>
✦ Data Engineering Architecture
</li>


<li>
✦ Enterprise Data Platform
</li>


<li>
✦ Business Analytics Solution
</li>


<li>
✦ AI / RAG Application
</li>


</ul>


</div>





</div>


</section>









{/* ======================
Contact Form
====================== */}



<section

className="
max-w-6xl
mx-auto
px-6
pb-32
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



className="
bg-white
rounded-3xl
shadow-xl
border
border-yellow-200
p-10
"

>



<h2

className="
text-3xl
font-bold
text-slate-900
"

>

Send Message

</h2>



<p

className="
mt-3
text-slate-500
"

>

Feel free to contact me for
professional opportunities,
projects,
or enterprise collaboration.

</p>





<form

onSubmit={handleSubmit}

className="
mt-8
space-y-6
"

>


<input

name="name"

value={form.name}

onChange={handleChange}

placeholder="Your Name"

className="
w-full
px-5
py-4
rounded-xl
border
border-slate-200
focus:outline-none
focus:border-[#C9A227]
transition
"

/>






<input

name="email"

value={form.email}

onChange={handleChange}

placeholder="Email Address"

className="
w-full
px-5
py-4
rounded-xl
border
border-slate-200
focus:outline-none
focus:border-[#C9A227]
transition
"

/>





<textarea

name="message"

value={form.message}

onChange={handleChange}

rows="5"

placeholder="Your Message"

className="
w-full
px-5
py-4
rounded-xl
border
border-slate-200
focus:outline-none
focus:border-[#C9A227]
transition
"

/>






<button


className="
flex
items-center
gap-3
bg-blue-900
text-white
px-8
py-4
rounded-xl
font-semibold
hover:bg-blue-800
transition
"

>


<Send size={18}/>


Send Message


</button>



</form>




</motion.div>


</section>









{/* ======================
Location CTA
====================== */}



<section

className="
pb-32
"

>


<div

className="
max-w-4xl
mx-auto
px-6
text-center
"

>


<div

className="
inline-flex
items-center
gap-3
text-[#C9A227]
font-semibold
"

>

<MapPin/>

Taiwan

</div>






<h2

className="
text-4xl
font-bold
mt-6
text-slate-900
"

>

Ready for New Opportunities

</h2>




<p

className="
mt-5
text-slate-600
"

>

Feel free to reach out for collaboration,
projects,
or professional discussion.

</p>






</div>


</section>








</div>


)

}









function ContactCard({

icon,

title,

text,

value

}){


return (

<motion.div


whileHover={{

y:-8

}}



transition={{

duration:0.3

}}


className="
bg-white
rounded-3xl
p-8
shadow-lg
border
border-yellow-100
"

>


<div

className="
text-[#C9A227]
"

>

{icon}

</div>



<h3

className="
text-xl
font-bold
mt-5
"

>

{title}

</h3>




<p

className="
text-slate-500
mt-2
"

>

{text}

</p>




<p

className="
mt-4
font-semibold
"

>

{value}

</p>



</motion.div>


)

}








export default Contact;