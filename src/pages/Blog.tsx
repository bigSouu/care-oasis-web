
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, User, Tag, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      title: "10 Tips for Maintaining Heart Health",
      excerpt: "Learn simple yet effective ways to keep your heart healthy and reduce the risk of cardiovascular disease.",
      author: "Dr. Sarah Johnson",
      date: "March 15, 2024",
      category: "Cardiology",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"
    },
    {
      title: "Understanding Mental Health in Modern Times",
      excerpt: "Exploring the importance of mental health awareness and available treatment options in today's world.",
      author: "Dr. Michael Chen",
      date: "March 12, 2024",
      category: "Mental Health",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop"
    },
    {
      title: "The Future of Telemedicine",
      excerpt: "How digital healthcare is revolutionizing patient care and making medical services more accessible.",
      author: "Dr. Emily Rodriguez",
      date: "March 8, 2024",
      category: "Technology",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop"
    },
    {
      title: "Nutrition Guidelines for Healthy Living",
      excerpt: "Expert advice on maintaining a balanced diet and making informed food choices for optimal health.",
      author: "Dr. James Wilson",
      date: "March 5, 2024",
      category: "Nutrition",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop"
    },
    {
      title: "Preventive Care: Your First Line of Defense",
      excerpt: "Understanding the importance of regular checkups and preventive measures in maintaining good health.",
      author: "Dr. Lisa Thompson",
      date: "March 1, 2024",
      category: "Preventive Care",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop"
    },
    {
      title: "Managing Chronic Conditions Effectively",
      excerpt: "Strategies and tips for living well with chronic health conditions while maintaining quality of life.",
      author: "Dr. Robert Davis",
      date: "February 28, 2024",
      category: "Chronic Care",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="clinic-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Health Blog</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Stay informed with the latest health news, medical insights, and expert advice 
              from our team of healthcare professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="clinic-card overflow-hidden animate-fade-in">
            <div className="lg:flex">
              <div className="lg:w-1/2">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <Tag className="h-4 w-4 text-[#85211d] mr-2" />
                  <span className="text-[#85211d] font-medium">{blogPosts[0].category}</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{blogPosts[0].title}</h2>
                <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <User className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-gray-600">{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {blogPosts[0].date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {blogPosts[0].readTime}
                    </div>
                  </div>
                </div>
                <Button className="bg-[#85211d] hover:bg-[#f4c2c2] hover:text-[#85211d] transition-all duration-300">
                  Read Full Article
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gradient-to-br from-[#f4c2c2]/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-lg text-gray-600">Expert insights on health and wellness</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
            {blogPosts.slice(1).map((post, index) => (
              <article key={index} className="clinic-card overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Tag className="h-4 w-4 text-[#85211d] mr-2" />
                    <span className="text-[#85211d] font-medium text-sm">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full border-[#85211d] text-[#85211d] hover:bg-[#85211d] hover:text-white">
                    Read More
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
