import React from "react";

function About() {
  return (
    <section id="about" className="py-24">

      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-[320px_1fr] gap-12 items-center">

          {/* Left Image */}
          <div>

            <img
              src={`${import.meta.env.BASE_URL}images/me.png`}
              alt="Leo Lu"
              className="
                 w-64
                max-w-md
                mx-auto
                rounded-3xl
                shadow-2xl
                object-cover
				
			
              "
            />

          </div>

          {/* Right Content */}
          <div>

            <h2 className="text-4xl font-bold mb-8">
              About Me
            </h2>
			
			
	

            <p className="text-lg leading-8 text-slate-900">
              PMP certified Project Manager with experience in
              financial systems, BI platforms, ETL architecture,
              and enterprise website implementation.
            </p>

            <p className="text-lg leading-8 text-slate-900 mt-6">
              Over the past several years, I have led cross-functional
              projects across data integration, enterprise platforms,
              and digital transformation initiatives.
            </p>

            <p className="text-lg leading-8 text-slate-900 mt-6">
              My focus is bridging business objectives and technical
              execution through project management, data engineering,
              cloud architecture, and analytics solutions.
            </p>
			
			
			


          </div>

        </div>

      </div>

    </section>
  );
}

export default About;