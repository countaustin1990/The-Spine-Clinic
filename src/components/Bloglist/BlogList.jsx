import { FaRegCalendarAlt, FaUser } from 'react-icons/fa';
import First from '../../assets/first.jpg';
import Second from '../../assets/second.jpg';
import Third from '../../assets/third.jpg';
import Fourth from '../../assets/fourth.webp';
import Fifth from '../../assets/fifth.jpg';
import Sixth from '../../assets/sixth.png';

const posts = [
  {
    id: 1,
    title: 'Understanding Orthopedic Surgery',
    excerpt: 'A comprehensive guide to orthopedic surgery, including procedures, benefits, and recovery.',
    date: 'September 5, 2024',
    author: 'Dr. John Doe',
    image: First, // Use the imported image
  },
  {
    id: 2,
    title: 'Advancements in Physical Therapy',
    excerpt: 'Explore the latest advancements in physical therapy and their impact on patient recovery.',
    date: 'August 30, 2024',
    author: 'Dr. Jane Smith',
    image: Second,
  },
  {
    id: 3,
    title: 'Global Trends in Orthopedic Surgery: New Technologies & Innovations',
    excerpt: 'Discover the latest advancements in orthopedic surgery, including bone reconstruction and robotic surgery technologies.',
    date: 'September 15, 2024',
    author: 'Dr. Michael Lee',
    image: Third,
  },
  {
    id: 4,
    title: 'Advancements in Physical Therapy and Recovery Strategies',
    excerpt: 'Explore the role of regenerative medicine and physiotherapy in enhancing patient outcomes post-surgery.',
    date: 'August 25, 2024',
    author: 'Dr. Patricia Smith',
    image: Fourth,
  },
  {
    id: 5,
    title: 'Orthopedic Surgery in Nigeria: Challenges & Opportunities',
    excerpt: 'A deep dive into the state of orthopedic surgery in Nigeria and ongoing efforts to improve healthcare infrastructure.',
    date: 'August 20, 2024',
    author: 'Dr. Richard Olamide',
    image: Fifth,
  },
  {
    id: 6,
    title: 'Regenerative Orthopedics: The Future of Joint Repair',
    excerpt: 'How regenerative medicine is transforming the orthopedic surgery landscape globally and in Nigeria.',
    date: 'August 18, 2024',
    author: 'Dr. Sarah Brown',
    image: Sixth,
  },
];

const BlogList = () => {
  return (
    <section className="py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-gray-500 text-sm">
                  <FaRegCalendarAlt className="mr-2" />
                  <span>{post.date}</span>
                  <span className="mx-2">|</span>
                  <FaUser className="mr-2" />
                  <span>{post.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
