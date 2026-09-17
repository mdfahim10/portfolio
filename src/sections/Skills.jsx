import SectionTitle from "../components/SectionTitle";
import SkillCard from "../components/SkillCard";
import skills from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="bg-white px-6 py-24 text-zinc-900 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle
            eyebrow="Technical Skills"
            title="Technologies I"
            highlight="work with."
            description="A focused overview of the technologies, frameworks, and computer science fundamentals I use to build modern web applications."
          />
        </div>

        {/* Skills Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.title}
              skill={skill}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-10 flex flex-col gap-3 border-t border-zinc-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-zinc-400">
            Continuously learning, building, and improving.
          </p>

          <p className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-300">
            Java • MERN • Problem Solving
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;