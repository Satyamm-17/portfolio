"use client"

export default function Skills() {
  const skillCategories = [
    {
      title: "Backend",
      skills: ["Python", "FastAPI", "Flask", "Django", "Node.js", "Express"],
    },
    {
      title: "Frontend",
      skills: ["JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    },
    {
      title: "DevOps & Tools",
      skills: ["Docker", "Git", "PostgreSQL", "MongoDB", "AWS", "CI/CD"],
    },
    {
      title: "AI & Modern Stack",
      skills: ["LLM Integration", "Machine Learning", "API Design", "REST/GraphQL", "System Design"],
    },
  ]

  return (
    <section id="skills" className="w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-2">
            <span className="text-foreground">Technical</span>
            <span className="text-primary ml-3">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="glow-border-primary rounded-lg p-6 bg-secondary/30 hover:bg-secondary/50 hover-scale transition-all duration-300 border border-primary/20"
            >
              <h3 className="text-xl font-bold text-primary mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm border border-primary/30 hover-scale hover:bg-primary/30 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
