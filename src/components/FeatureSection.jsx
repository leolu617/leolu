import React from "react";



import { Link } from "react-router-dom";


function FeatureSection({

  image,
  eyebrow,
  title,
  description,
  reverse = false,
    buttonText,
  buttonLink

}) {


  return (

    <section
      className="

      bg-white
      "
    >


      <div

        className={`
        flex
        flex-col
        lg:flex-row
        items-center

        ${
          reverse
          ? "lg:flex-row-reverse"
          : ""
        }

        `}

      >



        {/* Image */}

        <div

          className="
          w-full
          lg:w-1/7
          "

        >


          <img

            src={image}

            alt={title}

            className="
            w-full
             w-[600px]
			 h-[600px]
            object-cover
            "

          />


        </div>






        {/* Content */}
<div

className="
w-full
lg:w-5/7
px-8
py-12
lg:px-20
lg:py-0
"

>


        <div
  className="
  flex
  items-center
  gap-4
  mb-6
  "
>

  {/* Blue Line */}
  <div
    className="
    w-1
    h-8
    bg-blue-600
    "
  />

  {/* Text */}
  <p
    className="
    text-sm
    uppercase
    tracking-[0.25em]
    text-blue-600
    font-medium
    "
  >
    {eyebrow}
  </p>

</div>





          <h2

            className="
            text-3xl
            font-bold
            text-slate-900
            leading-tight
            "

          >

            {title}

          </h2>






          <p

            className="
            mt-8
            text-lg
            text-slate-600
            leading-relaxed
            max-w-xl
            "

          >

            {description}


          </p>
		  
		  
{
buttonText && (

<Link

to={buttonLink}

className="
mt-10

inline-flex
items-center
justify-center

px-8
py-3

border
border-blue-600

text-blue-800
font-medium

hover:bg-blue-600
hover:text-white
hover:shadow-lg

transition-all
duration-300
"

>

{buttonText}

</Link>

)
}






        </div>



      </div>


    </section>

  );

}


export default FeatureSection;