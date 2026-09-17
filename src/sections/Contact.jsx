import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white px-6 py-24 text-zinc-900 lg:px-10 lg:py-32"
    >
      {/* Background Accent */}
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-emerald-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-emerald-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          {/* Left Content */}
          <div>
            <SectionTitle
              eyebrow="Get In Touch"
              title="Let's build something"
              highlight="meaningful."
              description="I'm open to software development opportunities, internships, and interesting projects. If you'd like to connect, feel free to reach out."
            />

            {/* Email */}
            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
                Email
              </p>

              <a
                href="mailto:mdfahim.it.26@gmail.com"
                className="mt-2 inline-block text-lg font-semibold text-zinc-900 transition-colors duration-300 hover:text-emerald-600 sm:text-xl"
              >
                mdfahim.it.26@gmail.com
              </a>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                href="mailto:mdfahim.it.26@gmail.com"
                variant="primary"
              >
                Send Me an Email
              </Button>

              <Button
                href="/resume.pdf"
                variant="secondary"
              >
                Download CV
              </Button>
            </div>
          </div>

          {/* Right Information Card */}
          <div className="lg:justify-self-end">
            <div className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-zinc-200/50 sm:p-8 lg:w-[380px]">
              {/* Status */}
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">
                  Currently
                </p>

                <span className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Available
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-bold tracking-tight text-zinc-950">
                Open to opportunities.
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                Looking for opportunities where I can contribute to real
                projects, learn from experienced developers, and grow as a
                software engineer.
              </p>

              {/* Details */}
              <div className="mt-8 space-y-6 border-t border-zinc-200 pt-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">
                    Location
                  </p>

                  <p className="mt-2 text-sm font-medium text-zinc-800">
                    Vaishali, Bihar, India
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">
                    Focus
                  </p>

                  <p className="mt-2 text-sm font-medium text-zinc-800">
                    Software Development · MERN · Java
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">
                    Availability
                  </p>

                  <p className="mt-2 text-sm font-medium text-emerald-600">
                    Open to opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 border-t border-zinc-200 pt-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-zinc-500">
              Have an opportunity or an idea worth discussing?
            </p>

            <a
              href="mailto:mdfahim.it.26@gmail.com"
              className="text-sm font-semibold text-zinc-900 transition-colors duration-300 hover:text-emerald-600"
            >
              Let's talk ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;