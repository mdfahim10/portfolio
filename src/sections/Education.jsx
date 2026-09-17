import SectionTitle from "../components/SectionTitle";
import education from "../data/education";

function Education() {
  return (
    <section
      id="education"
      className="bg-zinc-50 px-6 py-24 text-zinc-900 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle
            eyebrow="Education"
            title="My academic"
            highlight="background."
            description="The academic foundation behind my software development journey."
          />

        </div>

        {/* Education Cards */}
        <div className="grid gap-5 md:grid-cols-3">
          {education.map((item, index) => (
            <article
              key={`${item.degree}-${item.period}`}
              className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-200/50 sm:p-7 ${
                index === 0
                  ? "border-emerald-200"
                  : "border-zinc-200"
              }`}
            >
              {/* Left Accent */}
              <div
                className={`absolute left-0 top-0 h-full w-1 ${
                  index === 0
                    ? "bg-emerald-500"
                    : "bg-zinc-200 transition-colors duration-300 group-hover:bg-emerald-400"
                }`}
              />

              {/* Card Top */}
              <div className="flex items-start justify-between">
                <span
                  className={`text-xs font-bold tracking-[0.15em] ${
                    index === 0
                      ? "text-emerald-600"
                      : "text-zinc-400"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-[11px] font-semibold text-zinc-500">
                  {item.period}
                </span>
              </div>

              {/* Degree */}
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600">
                  {item.degree}
                </p>

                <h3 className="mt-2 text-xl font-bold tracking-tight text-zinc-950 sm:text-2xl">
                  {item.field}
                </h3>
              </div>

              {/* Institution */}
              <div className="mt-3">
                <p className="text-sm font-medium leading-6 text-zinc-700">
                  {item.institution}
                </p>

                {item.university && (
                  <p className="mt-1 text-sm text-zinc-400">
                    {item.university}
                  </p>
                )}
              </div>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-zinc-500">
                {item.description}
              </p>

              {/* Result */}
              <div className="mt-auto pt-5">
                <div className="border-t border-zinc-100 pt-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-zinc-400">
                    Result
                  </p>

                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-lg font-bold text-zinc-900">
                      {item.result}
                    </span>

                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
                        index === 0
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-zinc-100 text-zinc-500"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Accent */}
              <div
                className={`absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full ${
                  index === 0
                    ? "bg-emerald-500"
                    : "bg-zinc-300"
                }`}
              />
            </article>
          ))}
        </div>

        {/* Bottom Line */}
        <div className="mt-4 border-t border-zinc-200 pt-6">
          <p className="text-sm text-zinc-400">
            Academic foundation complemented by hands-on software development
            and project experience.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;