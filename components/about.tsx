"use client"

export default function About() {
  return (
    <section id="about" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-2">
            <span className="text-foreground">About</span>
            <span className="text-primary ml-3">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              I'm a passionate developer who thrives at the intersection of creativity and technology. With a strong
              foundation in backend systems and a growing expertise in full-stack development, I love building solutions
              that are not just functional but also elegant and performant.
            </p>
            <p>
              My journey in development started with a curiosity about how things work under the hood. This has evolved
              into a professional practice focused on:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3">
                <span className="text-primary">→</span>
                <span>Backend development with Python and JavaScript</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">→</span>
                <span>Building scalable and maintainable systems</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">→</span>
                <span>AI integration and creative problem-solving</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">→</span>
                <span>Mentoring and knowledge sharing</span>
              </li>
            </ul>
          </div>

          <div className="glow-border-purple rounded-lg p-8 bg-background/50 space-y-4">
            <h3 className="text-xl font-bold text-primary">Quick Facts</h3>
            <div className="space-y-4 text-foreground/80">
              <div>
                <p className="text-sm text-foreground/60 mb-1">Location</p>
                <p className="font-medium">India</p>
              </div>
              <div>
                <p className="text-sm text-foreground/60 mb-1">Experience</p>
                <p className="font-medium">5+ Years in Development</p>
              </div>
              <div>
                <p className="text-sm text-foreground/60 mb-1">Specialties</p>
                <p className="font-medium">Backend, Full-Stack, AI Integration</p>
              </div>
              <div>
                <p className="text-sm text-foreground/60 mb-1">Currently</p>
                <p className="font-medium">Building innovative solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
