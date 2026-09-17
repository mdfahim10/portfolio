function ExperienceCard({ experience, index }) {
  return (
    <article className="group relative border-l border-zinc-800 pb-12 pl-8 last:pb-0 sm:pl-10">

      {/* Timeline Dot */}
      <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-zinc-700 ring-4 ring-[#080A0D] transition duration-300 group-hover:bg-emerald-400" />

      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-emerald-400">
            {experience.period}
          </p>

          <h3 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
            {experience.title}
          </h3>

          <p className="mt-1 text-sm text-zinc-500">
            {experience.organization}
          </p>
        </div>

        <span className="w-fit rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-500">
          {experience.type}
        </span>
      </div>

      {/* Description */}
      <p className="mt-6 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
        {experience.description}
      </p>

      {/* Responsibilities */}
      <ul className="mt-6 max-w-3xl space-y-3">
        {experience.points.map((point) => (
          <li
            key={point}
            className="flex gap-3 text-sm leading-6 text-zinc-500"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-700" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {/* Technologies */}
      <div className="mt-6 flex flex-wrap gap-2">
        {experience.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full bg-zinc-900 px-3 py-1.5 text-xs text-zinc-500"
          >
            {technology}
          </span>
        ))}
      </div>

      {/* Index */}
      <span className="absolute right-0 top-0 hidden text-xs tracking-[0.15em] text-zinc-800 sm:block">
        {String(index + 1).padStart(2, "0")}
      </span>

    </article>
  );
}

export default ExperienceCard;