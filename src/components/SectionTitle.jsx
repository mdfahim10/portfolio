function SectionTitle({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
}) {
  const alignment =
    align === "center"
      ? "mx-auto text-center"
      : "text-left";

  return (
    <div className={`max-w-2xl ${alignment}`}>

      {/* Eyebrow */}
      {eyebrow && (
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-emerald-500" />

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
            {eyebrow}
          </p>
        </div>
      )}

      {/* Title */}
      <h2 className="text-4xl font-bold leading-tight tracking-tight text-zinc-950 sm:text-5xl">
        {title}

        {highlight && (
          <span className="text-emerald-600">
            {" "}
            {highlight}
          </span>
        )}
      </h2>

      {/* Description */}
      {description && (
        <p className="mt-5 text-base leading-7 text-zinc-500 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;