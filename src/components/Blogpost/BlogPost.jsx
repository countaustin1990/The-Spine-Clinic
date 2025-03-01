import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Seventh from '../../assets/seventh.jpg';
import Kaytoken from '../../assets/Kaytoken.jpg'
import Nineth from '../../assets/nineth.webp';
import Tenth from '../../assets/tenth.jpg';
 
const BlogCarousel = () => {
  // Blog posts data
  const posts = [
    {
      title: 'Understanding Orthopedic Surgery',
      content: 'Orthopedic surgery is a specialty focusing on conditions involving the musculoskeletal system.',
      date: 'September 5, 2024',
      author: 'Dr. John Doe',
      image: Kaytoken,
    },
    {
      title: 'Advancements in Joint Replacement',
      content: 'New technologies are revolutionizing the way joint replacements are performed...',
      date: 'August 22, 2024',
      author: 'Dr. Jane Smith',
      image: Nineth,
    },
    {
      title: 'Rehabilitation Post-Orthopedic Surgery',
      content: 'Rehabilitation is crucial for a complete recovery following orthopedic surgery...',
      date: 'August 10, 2024',
      author: 'Dr. Robert Lee',
      image: Tenth,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const staticPost = {
    title: 'How Orthopedic Surgery Helps Improve Lives',
    content:
      'Orthopedic surgery plays a key role in improving mobility and reducing pain for individuals suffering from musculoskeletal conditions. This article dives deep into how these surgeries bring about transformative changes, making patients more independent and improving their overall quality of life.',
    author: 'Dr. Sarah Brown',
    date: 'September 4, 2024',
    image: Seventh,
  };

  return (
    <section className="py-12 px-10 container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Carousel Column */}
        <div className="w-full">
          <Slider {...settings}>
            {posts.map((post, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <span className="mr-4">{post.date}</span>
                    <span>by {post.author}</span>
                  </div>
                  <p>{post.content}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Static Blog Post Column */}
        <div className="w-full bg-white shadow-lg rounded-lg p-6">
          <img
            src={staticPost.image}
            alt={staticPost.title}
            className="w-full h-64 object-cover mb-6"
          />
          <h1 className="text-4xl font-bold mb-4">{staticPost.title}</h1>
          <div className="flex items-center text-gray-500 text-sm mb-4">
            <span className="mr-4">{staticPost.date}</span>
            <span>by {staticPost.author}</span>
          </div>
          <p>{staticPost.content}</p>
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;
