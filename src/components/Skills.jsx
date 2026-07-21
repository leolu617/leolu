import React from "react";

function Skills() {

  const skills = [
    "Python",
    "SQL",
    "Informatica",
    "AWS",
    "Docker",
    "Power BI",
    "FineBI",
    "AEM",
    "Scrum",
    "PMP"
  ];

  return (
    <section
      id="skills"
      className="py-24"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-10">
          Technical Skills
        </h2>

        <div className="flex flex-wrap gap-4">

          {skills.map(skill => (
            <span
              key={skill}
              className="bg-blue-100 px-5 py-2 rounded-full"
            >
              {skill}
            </span>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;