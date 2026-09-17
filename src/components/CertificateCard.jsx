function CertificateCard({ certificate }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-zinc-200/50">

      {/* Certificate Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
        <img
          src={certificate.image}
          alt={certificate.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />

        {/* Category Badge */}
        <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-700 backdrop-blur-sm">
          {certificate.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">

        {/* Title */}
        <h3 className="text-xl font-bold leading-tight tracking-tight text-zinc-950">
          {certificate.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-6 text-zinc-500">
          {certificate.description}
        </p>

        {/* Link */}
        {certificate.link && (
          <div className="mt-auto pt-6">
            <a
              href={certificate.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-sm font-semibold text-zinc-700 transition-colors duration-300 hover:text-emerald-600"
            >
              View Certificate
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>
        )}
      </div>

      {/* Bottom Accent */}
      <div className="h-0.5 w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full" />
    </article>
  );
}

export default CertificateCard;