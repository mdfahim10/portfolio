function Button({
  children,
  href = "#",
  variant = "primary",
  target,
  rel,
  download,
  className = "",
}) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-emerald-600 text-white hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/20",

    secondary:
      "border border-zinc-300 bg-white text-zinc-900 hover:-translate-y-0.5 hover:border-emerald-500 hover:text-emerald-600",

    dark:
      "bg-zinc-950 text-white hover:-translate-y-0.5 hover:bg-zinc-800",

    ghost:
      "text-zinc-600 hover:text-emerald-600",
  };

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      download={download}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
    >
      {children}
    </a>
  );
}

export default Button;