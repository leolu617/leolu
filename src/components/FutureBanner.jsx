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
          TECHNOLOGY & INNOVATION
        </p>



        <h2
          className="
          text-5xl
          md:text-7xl
          font-bold
          text-white
          max-w-5xl
          leading-tight
          "
        >
          Shape how the future unfolds
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
          Building enterprise data platforms,
          cloud-native solutions, and AI-powered
          systems that accelerate digital transformation.
        </p>

      </div>

    </section>

  );

}

export default FutureBanner;