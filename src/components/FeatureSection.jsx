import React from "react";


function FeatureSection({

  image,
  eyebrow,
  title,
  description,
  reverse = false

}) {


  return (

    <section
      className="
      py-24
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
          lg:w-1/2
          "

        >


          <img

            src={image}

            alt={title}

            className="
            w-full
             w-[600px]
			 h-[300px]
            object-cover
            "

          />


        </div>






        {/* Content */}

        <div

          className="
          w-full
          lg:w-2/5
          px-8
          lg:px-20
          "

        >


          <p

            className="
            text-sm
            uppercase
            tracking-[0.25em]
            text-blue-600
            font-medium
            mb-6
            "

          >

            {eyebrow}

          </p>





          <h2

            className="
            text-5xl
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





        </div>



      </div>


    </section>

  );

}


export default FeatureSection;