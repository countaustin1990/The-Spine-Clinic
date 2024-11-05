
import { FaBone, FaXRay, FaSyringe, FaHospital, FaHandHoldingHeart } from 'react-icons/fa';
import ServicesHero from '../../components/Serviceshero/ServicesHero';



const services = [
  {
    id: 1,
    icon: <FaBone className="text-blue-500 text-4xl" />,
    title: 'Orthopedic Surgery',
    description: 'Comprehensive orthopedic surgical procedures to address bone and joint issues.'
  },
  {
    id: 2,
    icon: <FaXRay className="text-blue-500 text-4xl" />,
    title: 'Diagnostic Imaging',
    description: 'Advanced diagnostic imaging services including X-rays and MRIs to accurately diagnose orthopedic conditions.'
  },
  {
    id: 3,
    icon: <FaSyringe className="text-blue-500 text-4xl" />,
    title: 'Injection Therapy',
    description: 'Pain management and treatment through various injection therapies including corticosteroid injections.'
  },
  {
    id: 4,
    icon: <FaHospital className="text-blue-500 text-4xl" />,
    title: 'Rehabilitation Services',
    description: 'Post-surgery rehabilitation programs to ensure optimal recovery and regain full function.'
  },
  {
    id: 5,
    icon: <FaHandHoldingHeart className="text-blue-500 text-4xl" />,
    title: 'Patient Care',
    description: 'Personalized patient care and support throughout the treatment process.'
  },
];

export default function ServicesPage() {
  return (
    <section className="bg-gray-100 py-16">
      <ServicesHero/>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <div key={service.id} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4 flex justify-center">
                {service.icon}
              </div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
