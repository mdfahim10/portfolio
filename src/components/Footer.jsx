function Footer() {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Certificates", href: "#certificates" },
  ];

  return (
    <footer className="border-t border-zinc-200 bg-white px-6 py-10 lg:px-10">

      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">

          {/* Brand */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-2 text-lg font-bold tracking-tight text-zinc-950"
            >
              Md Fahim
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
            </a>

            <p className="mt-2 text-sm text-zinc-500">
              Software Developer • Java • MERN Stack
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-zinc-500 transition hover:text-emerald-600"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-zinc-200 pt-6 text-xs text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Md Fahim. All rights reserved.
          </p>

          <p>
            Built with React & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;