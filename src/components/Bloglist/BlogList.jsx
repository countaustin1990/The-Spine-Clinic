
import { FaRegCalendarAlt, FaUser } from 'react-icons/fa';

const posts = [
  {
    id: 1,
    title: 'Understanding Orthopedic Surgery',
    excerpt: 'A comprehensive guide to orthopedic surgery, including procedures, benefits, and recovery.',
    date: 'September 5, 2024',
    author: 'Dr. John Doe',
    image: 'https://via.placeholder.com/400x250',
  },
  {
    id: 2,
    title: 'Advancements in Physical Therapy',
    excerpt: 'Explore the latest advancements in physical therapy and their impact on patient recovery.',
    date: 'August 30, 2024',
    author: 'Dr. Jane Smith',
    image: 'https://via.placeholder.com/400x250',
  },
  // Add more posts here
   {
    id: 3,
    title: 'Advancements in Physical Therapy',
    excerpt: 'Explore the latest advancements in physical therapy and their impact on patient recovery.',
    date: 'August 30, 2024',
    author: 'Dr. Jane Smith',
    image: 'https://via.placeholder.com/400x250',
  },
   {
    id: 4,
    title: 'Advancements in Physical Therapy',
    excerpt: 'Explore the latest advancements in physical therapy and their impact on patient recovery.',
    date: 'August 30, 2024',
    author: 'Dr. Jane Smith',
    image: 'https://via.placeholder.com/400x250',
  },
  {
  id: 5,
    title: 'Advancements in Physical Therapy',
    excerpt: 'Explore the latest advancements in physical therapy and their impact on patient recovery.',
    date: 'August 30, 2024',
    author: 'Dr. Jane Smith',
    image: 'https://via.placeholder.com/400x250',
  },
  {
  id: 6,
    title: 'Advancements in Physical Therapy',
    excerpt: 'Explore the latest advancements in physical therapy and their impact on patient recovery.',
    date: 'August 30, 2024',
    author: 'Dr. Jane Smith',
    image: 'https://via.placeholder.com/400x250',
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
