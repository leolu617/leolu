import React from "react";

const projects = [
  {
    title: "AEM Enterprise Website",
    desc: "Led website redesign using Adobe Experience Manager"
  },
  {
    title: "Financial BI Dashboard",
    desc: "Designed executive KPI dashboard"
  },
  {
    title: "ETL Data Platform",
    desc: "Processed 2M+ records daily"
  }
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-gray-100 py-24"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-semibold">
                {p.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {p.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;