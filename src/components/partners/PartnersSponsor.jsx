import HtsLogo from "../../assets/Htslogo.png";
import Najoda from "../../assets/Najoda.png";
import PearlsLogo from "../../assets/pearlslogo.png";
import EverCare from "../../assets/evercare.png";
import BenqLogo from "../../assets/benqlogo.png";

const partners = [
  { name: "HTS", logo: HtsLogo },
  { name: "Najoda Foundation", logo: Najoda },
  { name: "Pearls Healthcare", logo: PearlsLogo },
  { name: "EverCare Hospital", logo: EverCare },
  { name: "BenQ Medical", logo: BenqLogo },
];

const PartnersSponsor = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-6">
          Our Partners & Sponsors
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10">
          We are proud to collaborate with these amazing organizations.
        </p>

        {/* Grid layout for logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center p-4">
              <img
                src={partner.logo}
                alt={`${partner.name} Logo`}
                className="h-16 md:h-20 lg:h-24 object-contain grayscale hover:grayscale-0 hover:scale-105 transition-transform duration-300"
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
