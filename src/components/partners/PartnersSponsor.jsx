import HtsLogo from "../../assets/Htslogo.png";
import Najoda from "../../assets/Najoda.png";
import PearlsLogo from "../../assets/PearlsLogo.png";
import EverCare from "../../assets/EverCare.png";
import BenqLogo from "../../assets/BenqLogo.png";

const partners = [
  { name: "HTS Logo", logo: HtsLogo },
  { name: "Najoda", logo: Najoda },
  { name: "Pearls Logo", logo: PearlsLogo },
  { name: "EverCare", logo: EverCare },
  { name: "BenQ Logo", logo: BenqLogo },
];

const PartnersSponsors = () => {
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
            <div key={index} className="flex items-center justify-center h-24">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 md:h-20 lg:h-24 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSponsors;
