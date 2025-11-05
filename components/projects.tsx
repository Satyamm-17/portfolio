"use client"

import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "AI Content Generator",
      description:
        "A full-stack application that leverages LLMs to generate high-quality content. Built with Next.js, FastAPI, and PostgreSQL with real-time streaming capabilities.",
      tags: ["Next.js", "Python", "LLM", "PostgreSQL"],
      codeLink: "https://github.com",
      demoLink: "#",
    },
    {
      title: "Real-time Analytics Dashboard",
      description:
        "High-performance dashboard for tracking application metrics in real-time. Features WebSocket connections, optimized data pipelines, and interactive visualizations.",
      tags: ["React", "Node.js", "WebSocket", "MongoDB"],
      codeLink: "https://github.com",
      demoLink: "#",
    },
    {
      title: "Microservices Architecture",
      description:
        "Scalable backend system using Docker, Kubernetes, and event-driven architecture. Demonstrates best practices in system design and deployment.",
      tags: ["Docker", "Kubernetes", "Microservices", "Python"],
      codeLink: "https://github.com",
      demoLink: "#",
    },
  ]

  return (
    <section id="projects" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-2">
            <span className="text-foreground">Featured</span>
            <span className="text-primary ml-3">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="glow-border-primary rounded-lg p-6 bg-secondary/30 hover:bg-secondary/50 hover-scale transition-all duration-300 flex flex-col border border-primary/20"
            >
              <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
              <p className="text-foreground/70 mb-4 flex-grow">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-primary/20 text-primary rounded text-xs border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 pt-4 border-t border-primary/20">
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary/80 hover-scale transition-all duration-300"
                >
                  <Github size={18} />
                  <span className="text-sm">Code</span>
                </a>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary/80 hover-scale transition-all duration-300"
                >
                  <ExternalLink size={18} />
                  <span className="text-sm">Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
