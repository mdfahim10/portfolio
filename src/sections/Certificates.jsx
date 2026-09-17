import SectionTitle from "../components/SectionTitle";
import CertificateCard from "../components/CertificateCard";
import certificates from "../data/certificates";

function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-zinc-50 px-6 py-24 text-zinc-900 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-14 lg:mb-16">
          <SectionTitle
            eyebrow="Certifications & Achievements"
            title="Learning beyond"
            highlight="the classroom."
            description="Certifications, internships, hackathons, and achievements that complement my academic and development journey."
          />
        </div>

        {/* Certificates Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.map((certificate) => (
            <CertificateCard
              key={certificate.title}
              certificate={certificate}
            />
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-10 border-t border-zinc-200 pt-6">
          <p className="text-sm text-zinc-400">
            Continuous learning through academics, internships, technical
            events, and practical development.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Certificates;