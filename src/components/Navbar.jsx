import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Certificates", href: "#certificates" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <a href="#home" className="group">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-tight text-zinc-950">
              Md Fahim
            </span>

            <span className="h-2 w-2 rounded-full bg-emerald-500 transition-transform duration-300 group-hover:scale-125" />
          </div>

          <p className="mt-0.5 text-xs text-zinc-500">
            Software Developer
          </p>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-600 transition-colors duration-200 hover:text-emerald-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/20 lg:inline-flex"
        >
          Let's Talk
          <span className="ml-2">↗</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 text-zinc-800 transition hover:border-emerald-500 hover:text-emerald-600 lg:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-zinc-200 bg-white px-6 py-5 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-zinc-700 transition hover:bg-emerald-50 hover:text-emerald-600"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-lg bg-emerald-600 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Let's Talk ↗
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;