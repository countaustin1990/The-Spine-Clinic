// PartnersSponsors.jsx

import { FaStryker, FaMedtronic, FaSurgicalMask, FaUserNurse, FaHospital } from "react-icons/fa";

export default function PartnersSponsors() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Partners & Sponsors</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Partner 1 */}
          <div className="flex flex-col items-center justify-center">
            <FaStryker className="text-gray-600 text-4xl mb-4" />
            <p className="text-gray-600">Stryker</p>
          </div>

          {/* Partner 2 */}
          <div className="flex flex-col items-center justify-center">
            <FaMedtronic className="text-gray-600 text-4xl mb-4" />
            <p className="text-gray-600">Medtronic</p>
          </div>

          {/* Partner 3 */}
          <div className="flex flex-col items-center justify-center">
            <FaSurgicalMask className="text-gray-600 text-4xl mb-4" />
            <p className="text-gray-600">Zimmer Biomet</p>
          </div>

          {/* Partner 4 */}
          <div className="flex flex-col items-center justify-center">
            <FaUserNurse className="text-gray-600 text-4xl mb-4" />
            <p className="text-gray-600">DePuy Synthes</p>
          </div>

          {/* Partner 5 */}
          <div className="flex flex-col items-center justify-center">
            <FaHospital className="text-gray-600 text-4xl mb-4" />
            <p className="text-gray-600">Smith & Nephew</p>
          </div>
        </div>
      </div>
    </section>
  );
}
