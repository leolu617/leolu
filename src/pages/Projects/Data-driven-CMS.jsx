import React from "react";


import {

Database,
Cloud,
BarChart3,
Download

} from "lucide-react";


import {
motion
}
from "framer-motion";


// ============================================
// Interactive Case Study Component
//
// 功能：
// - 將 PPT 每頁轉換成圖片展示
// - 使用 PresentationViewer Component
// - 提供 Web-based Case Study 閱讀體驗
// - 支援 Scroll Animation / Hover Effect
//
// 目前狀態：
// Disabled
// 保留未來擴充使用
//
// ============================================

// import PresentationViewer
// from "../components/PresentationViewer";



function ETLProject(){



// ============================================
// Interactive Case Study Slides
//
// 用途：
// - 儲存 PPT 轉換後圖片路徑
// - 提供 PresentationViewer 使用
//
// 目前 PDF Viewer 為主要展示方式
// 暫時停用
//
// ============================================


/*

const slides=[


`${import.meta.env.BASE_URL}images/projects/etl/Slide1.PNG`,

`${import.meta.env.BASE_URL}images/projects/etl/Slide2.PNG`,

`${import.meta.env.BASE_URL}images/projects/etl/Slide3.PNG`,

`${import.meta.env.BASE_URL}images/projects/etl/Slide4.PNG`,

`${import.meta.env.BASE_URL}images/projects/etl/Slide5.PNG`,

`${import.meta.env.BASE_URL}images/projects/etl/Slide6.PNG`,

`${import.meta.env.BASE_URL}images/projects/etl/Slide7.PNG`,

`${import.meta.env.BASE_URL}images/projects/etl/Slide8.PNG`,

`${import.meta.env.BASE_URL}images/projects/etl/Slide9.PNG`,

`${import.meta.env.BASE_URL}images/projects/etl/Slide10.PNG`,

`${import.meta.env.BASE_URL}images/projects/etl/Slide11.PNG`,

`${import.meta.env.BASE_URL}images/projects/etl/Slide12.PNG`,

`${import.meta.env.BASE_URL}images/projects/etl/Slide13.PNG`,

`${import.meta.env.BASE_URL}images/projects/etl/Slide14.PNG`,

`${import.meta.env.BASE_URL}images/projects/etl/Slide15.PNG`,

`${import.meta.env.BASE_URL}images/projects/etl/Slide16.PNG`,

`${import.meta.env.BASE_URL}images/projects/etl/Slide17.PNG`


];

*/


const pdf =

`${import.meta.env.BASE_URL}documents/CMS_Project.pdf`;



return (

<div

className="
min-h-screen
bg-slate-950
text-white
"

>



{/* ================================
    Hero Section
================================ */}


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
y:50
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

PROJECT SHOWCASE

</p>



<h1

className="
text-6xl
font-bold
mt-6
"

>

Data Driven CMS

</h1>



<p

className="
text-xl
text-slate-300
mt-8
max-w-3xl
"

>

Building enterprise data solutions with
ETL pipeline, BI analytics and cloud architecture.

</p>


</motion.div>


</div>


</section>





{/* ================================
    Project Information
================================ */}



<section

className="
max-w-6xl
mx-auto
px-6
grid
md:grid-cols-3
gap-8
py-20
"

>



<Card

icon={<Database/>}

title="Role"

content={
<>
Project Manager
<br/>
Data Engineer
</>
}

/>



<Card

icon={<Cloud/>}

title="Technology"

content={
<>
ETL
<br/>
Informatica
<br/>
Oracle
<br/>
AWS
</>
}

/>



<Card

icon={<BarChart3/>}

title="Achievement"

content={
<>
2M+
<br/>
Records / Day
</>
}

/>



</section>






{/* ================================
    Project Presentation PDF Viewer

    功能：
    - 顯示完整 PDF 簡報
    - 提供 HR 快速閱讀完整成果
    - 保留 Download PDF 功能

================================ */}



<section

className="
py-24
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
justify-between
items-center
mb-10
"

>



<h2

className="
text-4xl
font-bold
"

>

Project Presentation

</h2>




<a

href={pdf}

download

className="
flex
items-center
gap-3
bg-blue-600
px-6
py-3
rounded-xl
hover:bg-blue-500
transition
"

>


<Download size={20}/>


Download PDF


</a>



</div>






{/* PDF Viewer */}



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


className="
bg-white
rounded-3xl
overflow-hidden
shadow-2xl
border
border-white/10
p-5
"


>



<iframe

src={pdf}

title="ETL Project PDF"

className="
w-full
h-[1200px]
rounded-2xl
"

/>


</motion.div>





{/* =================================================

Interactive Case Study

功能：
- 使用 PresentationViewer 展示 PPT 圖片
- 每頁 Slide 逐步呈現
- 支援 Scroll Animation

目前：
Disabled

未來啟用方式：
1. 開啟 PresentationViewer import
2. 開啟 slides array
3. 解除以下 JSX 註解


================================================= */}



{/*
<div

className="
mt-32
"

>


<h2

className="
text-4xl
font-bold
mb-12
"

>

Interactive Case Study

</h2>



<PresentationViewer

slides={slides}

/>


</div>
*/}



</div>


</section>



</div>


)

}





function Card({

icon,
title,
content

}){


return (

<div

className="
bg-white/10
backdrop-blur-xl
border
border-white/10
rounded-3xl
p-8
"

>


<div

className="
text-blue-400
"

>

{icon}

</div>



<h3

className="
text-2xl
font-bold
mt-5
"

>

{title}

</h3>



<p

className="
text-slate-300
mt-4
leading-relaxed
"

>

{content}

</p>



</div>

)

}



export default ETLProject;