import BlogList from "../../components/Bloglist/BlogList";
import BlogPost from "../../components/Blogpost/BlogPost";
//import Hero from "../components/Hero/HeroSection"

const Blog = () => {
  return (
    <div>
        {/*<h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
          Blog Page
        </h1>
     <Hero/>*/}
        <BlogPost/>
        <h3 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
          More Updates
        </h3>
        <BlogList/>
        
    </div>
  )
}

export default Blog