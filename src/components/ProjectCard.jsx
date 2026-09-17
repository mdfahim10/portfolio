function ProjectCard({ project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-zinc-200/50">
      
      {/* Project Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        
        {/* Category */}
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-600">
          {project.category}
        </p>

        {/* Title */}
        <h3 className="mt-2 text-xl font-bold tracking-tight text-zinc-950">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-500">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[11px] font-medium text-zinc-600 transition-colors duration-300 group-hover:border-emerald-100 group-hover:bg-emerald-50 group-hover:text-emerald-700"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-auto flex items-center gap-4 border-t border-zinc-100 pt-5">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-semibold text-zinc-600 transition-colors duration-300 hover:text-emerald-600"
          >
            GitHub ↗
          </a>

          <span className="text-zinc-300">•</span>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-semibold text-zinc-600 transition-colors duration-300 hover:text-emerald-600"
          >
            Live Demo ↗
          </a>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="h-0.5 w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full" />
    </article>
  );
}

export default ProjectCard;