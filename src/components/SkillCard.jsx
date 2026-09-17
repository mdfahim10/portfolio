function SkillIcon({ title }) {
  if (title === "Programming") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <path d="m8 9-3 3 3 3" />
        <path d="m16 9 3 3-3 3" />
        <path d="m14 5-4 14" />
      </svg>
    );
  }

  if (title === "Frontend") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18" />
        <path d="M7 6.5h.01" />
        <path d="M10 6.5h.01" />
      </svg>
    );
  }

  if (title === "React") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-5 w-5"
      >
        <circle cx="12" cy="12" r="2" />
        <ellipse cx="12" cy="12" rx="9" ry="4" />
        <ellipse
          cx="12"
          cy="12"
          rx="9"
          ry="4"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="9"
          ry="4"
          transform="rotate(120 12 12)"
        />
      </svg>
    );
  }

  if (title === "Backend") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <rect x="4" y="3" width="16" height="7" rx="1.5" />
        <rect x="4" y="14" width="16" height="7" rx="1.5" />
        <path d="M8 6.5h.01" />
        <path d="M8 17.5h.01" />
        <path d="M12 10v4" />
      </svg>
    );
  }

  if (title === "Database") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
        <path d="M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7" />
      </svg>
    );
  }

  if (title === "Authentication & APIs") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <rect x="4" y="10" width="16" height="10" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        <circle cx="12" cy="15" r="1" />
      </svg>
    );
  }

  if (title === "Core CS") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <rect x="4" y="4" width="6" height="6" rx="1" />
        <rect x="14" y="4" width="6" height="6" rx="1" />
        <rect x="4" y="14" width="6" height="6" rx="1" />
        <rect x="14" y="14" width="6" height="6" rx="1" />
        <path d="M10 7h4M7 10v4M17 10v4M10 17h4" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      <path d="M14.7 6.3a4.2 4.2 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4.2 4.2 0 0 0 5.4-5.4l-2.4 2.4-2.1-2.1 2.5-2.3Z" />
    </svg>
  );
}

function SkillCard({ skill, index }) {
  const accents = [
    {
      icon: "bg-blue-50 text-blue-600",
      glow: "group-hover:bg-blue-50",
      border: "group-hover:border-blue-200",
      pill: "group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-700",
      line: "bg-blue-500",
    },
    {
      icon: "bg-orange-50 text-orange-600",
      glow: "group-hover:bg-orange-50",
      border: "group-hover:border-orange-200",
      pill: "group-hover:border-orange-200 group-hover:bg-orange-50 group-hover:text-orange-700",
      line: "bg-orange-500",
    },
    {
      icon: "bg-cyan-50 text-cyan-600",
      glow: "group-hover:bg-cyan-50",
      border: "group-hover:border-cyan-200",
      pill: "group-hover:border-cyan-200 group-hover:bg-cyan-50 group-hover:text-cyan-700",
      line: "bg-cyan-500",
    },
    {
      icon: "bg-green-50 text-green-600",
      glow: "group-hover:bg-green-50",
      border: "group-hover:border-green-200",
      pill: "group-hover:border-green-200 group-hover:bg-green-50 group-hover:text-green-700",
      line: "bg-green-500",
    },
    {
      icon: "bg-emerald-50 text-emerald-600",
      glow: "group-hover:bg-emerald-50",
      border: "group-hover:border-emerald-200",
      pill: "group-hover:border-emerald-200 group-hover:bg-emerald-50 group-hover:text-emerald-700",
      line: "bg-emerald-500",
    },
    {
      icon: "bg-violet-50 text-violet-600",
      glow: "group-hover:bg-violet-50",
      border: "group-hover:border-violet-200",
      pill: "group-hover:border-violet-200 group-hover:bg-violet-50 group-hover:text-violet-700",
      line: "bg-violet-500",
    },
    {
      icon: "bg-rose-50 text-rose-600",
      glow: "group-hover:bg-rose-50",
      border: "group-hover:border-rose-200",
      pill: "group-hover:border-rose-200 group-hover:bg-rose-50 group-hover:text-rose-700",
      line: "bg-rose-500",
    },
    {
      icon: "bg-amber-50 text-amber-600",
      glow: "group-hover:bg-amber-50",
      border: "group-hover:border-amber-200",
      pill: "group-hover:border-amber-200 group-hover:bg-amber-50 group-hover:text-amber-700",
      line: "bg-amber-500",
    },
  ];

  const accent = accents[index % accents.length];

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-200/60 ${accent.border}`}
    >
      {/* Soft Background Glow */}
      <div
        className={`pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60 ${accent.glow}`}
      />

      {/* Top Row */}
      <div className="relative flex items-start justify-between">
        {/* Icon */}
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${accent.icon} transition-transform duration-300 group-hover:scale-105`}
        >
          <SkillIcon title={skill.title} />
        </div>

        {/* Number */}
        <span className="text-xs font-semibold tracking-[0.15em] text-zinc-300">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Title */}
      <div className="relative mt-7">
        <h3 className="text-xl font-bold tracking-tight text-zinc-950">
          {skill.title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-zinc-500">
          {skill.description}
        </p>
      </div>

      {/* Skills */}
      <div className="relative mt-6 flex flex-wrap gap-2">
        {skill.skills.map((item) => (
          <span
            key={item}
            className={`rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-600 transition-all duration-300 ${accent.pill}`}
          >
            {item}
          </span>
        ))}
      </div>

      {/* Bottom Accent */}
      <div
        className={`absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full ${accent.line}`}
      />
    </article>
  );
}

export default SkillCard;