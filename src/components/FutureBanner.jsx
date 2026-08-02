import React from "react";

function FutureBanner() {

  return (

    <section
      className="
      relative
      w-full
      h-[700px]
      overflow-hidden
      "
    >

      {/* Left Video */}

      <div
        className="
        absolute
        left-0
        top-0
        w-1/2
        h-full
        "
      >

        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="
          w-full
          h-full
          object-cover
          "
        >

          <source
            src={`${import.meta.env.BASE_URL}videos/future-left.mp4`}
            type="video/mp4"
          />

        </video>

      </div>



      {/* Right Video */}

      <div
        className="
        absolute
        right-0
        top-0
        w-1/2
        h-full
        "
      >

        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="
          w-full
          h-full
          object-cover
          "
        >

          <source
            src={`${import.meta.env.BASE_URL}videos/future-right.mp4`}
            type="video/mp4"
          />

        </video>

      </div>



      {/* Overlay */}

      <div
        className="
        absolute
        inset-0
        bg-black/55
        "
      />



      {/* Center Content */}

      <div
        className="
        relative
        z-10
        h-full
        flex
        flex-col
        items-center
        justify-center
        text-center
        px-6
        "
      >

        <p
          className="
          uppercase
          tracking-[0.3em]
          text-slate-300
          text-sm
          mb-6
          "
        >
          BUSINESS X TECHNOLOGY X INNOVATION
        </p>



        <h2
          className="
          text-3xl
          md:text-5xl
          font-bold
          text-white
          max-w-5xl
          leading-tight
          "
        >
          Unveiling innovative solutions and data-driven applications
        </h2>



        <p
          className="
          mt-8
          text-lg
          md:text-xl
          text-slate-200
          max-w-3xl
          leading-relaxed
          "
        >	 
		 

		 
		  More details and updates will be unveiled soon.
        </p>
		
		
		
		
		<div
  className="
  mt-10

  inline-flex
  items-center
  justify-center

  px-8
  py-3

  border
  border-white/40

  bg-white/10
  backdrop-blur-md

  text-white
  text-xl
  font-semibold

  cursor-default
  "
>
  Coming Soon
</div>
		
		

      </div>

    </section>

  );

}

export default FutureBanner;