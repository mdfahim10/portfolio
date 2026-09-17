import Button from "../components/Button";
import profileImage from "../assets/images/profile/profile.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white text-zinc-900"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute right-[-120px] top-20 h-72 w-72 rounded-full bg-emerald-100 blur-3xl" />
      <div className="pointer-events-none absolute left-[-150px] bottom-0 h-72 w-72 rounded-full bg-zinc-100 blur-3xl" />

      {/* Hero Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-28 lg:px-10 lg:py-32">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Left Content */}
          <div className="max-w-3xl">

            {/* Greeting */}
            <p className="mb-5 text-xl font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Hello, I'm Md Fahim
            </p>

            {/* Main Heading */}
            <h1 className="text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-zinc-950 sm:text-5xl md:text-6xl lg:text-7xl">
              Software Developer
              <br />
              <span className="text-zinc-400">
                building useful
              </span>
              <br />
              web applications.
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
              B.Tech Information Technology graduate focused on building
              reliable, responsive, and user-focused applications using
              modern web technologies.
            </p>

            {/* Core Skills */}
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-zinc-700">
              <span>Java</span>
              <span className="text-emerald-500">•</span>

              <span>MERN Stack</span>
              <span className="text-emerald-500">•</span>

              <span>REST APIs</span>
              <span className="text-emerald-500">•</span>

              <span>DSA</span>
            </div>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="#projects" variant="primary">
                View My Work
              </Button>

              <Button
                href="/resume.pdf"
                variant="secondary"
                target="_blank"
              >
                Get CV ↗
              </Button>
            </div>

            {/* Availability */}
            <div className="mt-8 flex items-center gap-2 text-sm text-zinc-500">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Open to opportunities
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">

              {/* Decorative Border */}
              <div className="absolute -inset-3 rounded-3xl border border-zinc-200" />

              {/* Image Container */}
              <div className="relative h-[360px] w-[300px] overflow-hidden rounded-2xl bg-zinc-100 shadow-xl sm:h-[420px] sm:w-[350px]">
                <img
                  src={profileImage}
                  alt="Md Fahim"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              {/* Small Badge */}
              <div className="absolute -bottom-5 -left-5 rounded-xl border border-zinc-200 bg-white px-5 py-4 shadow-lg">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                  Focus
                </p>

                <p className="mt-1 text-sm font-semibold text-zinc-900">
                  Full-Stack Development
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 border-b border-zinc-100" />
    </section>
  );
}

export default Hero;