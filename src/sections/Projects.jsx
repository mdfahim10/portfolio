import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-white px-6 py-24 text-zinc-900 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle
            eyebrow="Selected Work"
            title="Things I've"
            highlight="built."
            description="A selection of projects that demonstrate my experience with full-stack development, modern web technologies, and problem solving."
          />

          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />

            <span className="text-sm font-medium text-zinc-400">
              {String(projects.length).padStart(2, "0")} Projects
            </span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.number}
              project={project}
            />
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-10 flex items-center justify-between border-t border-zinc-200 pt-6">
          <p className="text-sm text-zinc-400">
            Built with modern web technologies and hands-on development.
          </p>

          <span className="hidden text-xs font-medium uppercase tracking-[0.15em] text-zinc-300 sm:block">
            Selected Projects
          </span>
        </div>
      </div>
    </section>
  );
}

export default Projects;