import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";

function About() {
  return (
    <section
      id="about"
      className="border-b border-zinc-100 bg-white px-6 py-24 text-zinc-900 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

          {/* Left Side */}
          <div>
            <SectionTitle
              eyebrow="About Me"
              title="Turning ideas into"
              highlight="working software."
              description="A brief introduction to my background, technical interests, and approach to development."
            />

            <div className="mt-8">
              <Button href="#skills" variant="secondary">
                Explore My Skills
              </Button>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-6">

            <p className="text-base leading-8 text-zinc-600 sm:text-lg">
              I'm Md Fahim, a Software Developer and B.Tech Information
              Technology graduate with hands-on experience building
              full-stack web applications.
            </p>

            <p className="text-base leading-8 text-zinc-600 sm:text-lg">
              My primary development stack includes React.js, Node.js,
              Express.js, MongoDB, and JavaScript. I also work with MySQL
              and Java, with a strong focus on Data Structures &
              Algorithms, Object-Oriented Programming, and DBMS.
            </p>

            <p className="text-base leading-8 text-zinc-600 sm:text-lg">
              I enjoy building applications that solve practical problems,
              from responsive user interfaces and RESTful APIs to
              authentication, database integration, and complete CRUD
              workflows.
            </p>

            <p className="text-base leading-8 text-zinc-600 sm:text-lg">
              Through projects and industrial training, I have gained
              practical experience with MVC architecture, API integration,
              authentication and authorization, and modern development
              tools such as Git, GitHub, Vercel, and Render.
            </p>

            {/* Highlights */}
            <div className="grid gap-4 pt-6 sm:grid-cols-3">

              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-200">
                <p className="text-2xl font-bold text-zinc-950">
                  B.Tech
                </p>

                <p className="mt-2 text-sm leading-5 text-zinc-500">
                  Information Technology
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-200">
                <p className="text-2xl font-bold text-zinc-950">
                  MERN
                </p>

                <p className="mt-2 text-sm leading-5 text-zinc-500">
                  Full-Stack Development
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-200">
                <p className="text-2xl font-bold text-zinc-950">
                  Java
                </p>

                <p className="mt-2 text-sm leading-5 text-zinc-500">
                  DSA & Problem Solving
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;