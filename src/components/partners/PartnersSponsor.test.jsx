import HtsLogo from "../../assets/Htslogo.png";
import NajodaLogo from "../../assets/Najodalogo.png";
import PearlsLogo from "../../assets/pearlslogo.png";
import Coptic from "../../assets/coptic.png";

const partners = [
  { name: "HTS", logo: HtsLogo },
  { name: "Najoda Foundation", logo: NajodaLogo},
  { name: "Pearls Healthcare", logo: PearlsLogo },
  { name: "Coptic Hospital", logo: Coptic },
];

const PartnersSponsor = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
          Our Partners & Sponsors
        </h2>
        <p className="text-gray-600 mb-10">
          We are proud to collaborate with these amazing organizations.
        </p>

        {/* Grid layout with 4 equal spacing */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center p-4">
              <img
                src={partner.logo}
                alt={partner.alt || `${partner.name} Logo`} // Use custom alt text for Najoda, default for others
                className="h-20 md:h-24 object-contain aspect-w-1 aspect-h-1 grayscale hover:grayscale-0 hover:scale-105 transition-transform duration-300"
                loading="lazy"
                aria-label={partner.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSponsor;
