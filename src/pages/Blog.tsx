
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, User, Tag, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      title: "Malaria Prevention in Ghana: Essential Tips for Rainy Season",
      excerpt: "Learn effective strategies to protect yourself and your family from malaria during Ghana's rainy season, including proper use of mosquito nets and preventive measures.",
      author: "Dr. Kwame Asante",
      date: "March 15, 2024",
      category: "Infectious Diseases",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop"
    },
    {
      title: "Managing Hypertension in Ghanaian Communities",
      excerpt: "Understanding blood pressure control in Ghana's context, including dietary modifications with local foods and accessible treatment options.",
      author: "Dr. Akosua Osei",
      date: "March 12, 2024",
      category: "Cardiovascular Health",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"
    },
    {
      title: "Nutrition and Child Health: Combating Malnutrition in Ghana",
      excerpt: "Addressing nutritional challenges in Ghanaian children with locally available foods and practical feeding strategies for parents.",
      author: "Dr. Yaw Mensah",
      date: "March 8, 2024",
      category: "Pediatric Care",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop"
    },
    {
      title: "Diabetes Management with Traditional Ghanaian Foods",
      excerpt: "How to manage diabetes effectively using traditional Ghanaian foods and lifestyle modifications suitable for local communities.",
      author: "Dr. Ama Darko",
      date: "March 5, 2024",
      category: "Diabetes Care",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop"
    },
    {
      title: "Maternal Health in Rural Ghana: Antenatal Care Essentials",
      excerpt: "Important guidelines for expectant mothers in rural Ghana, including antenatal care schedules and birth preparedness.",
      author: "Dr. Efua Amponsah",
      date: "March 1, 2024",
      category: "Maternal Health",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop"
    },
    {
      title: "Mental Health Awareness in Ghanaian Society",
      excerpt: "Breaking stigma around mental health in Ghana and promoting accessible mental health resources in local communities.",
      author: "Dr. Kofi Boateng",
      date: "February 28, 2024",
      category: "Mental Health",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop"
    },
    {
      title: "Cholera Prevention During Ghana's Rainy Season",
      excerpt: "Essential sanitation practices and water safety measures to prevent cholera outbreaks in Ghanaian communities during heavy rains.",
      author: "Dr. Nana Adjei",
      date: "February 25, 2024",
      category: "Public Health",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop"
    },
    {
      title: "Traditional Medicine and Modern Healthcare in Ghana",
      excerpt: "Exploring the integration of traditional healing practices with modern medical care in Ghana's healthcare system.",
      author: "Dr. Kweku Mensah",
      date: "February 22, 2024",
      category: "Traditional Medicine",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop"
    },
    {
      title: "Preventing Buruli Ulcer in Ghana's Endemic Areas",
      excerpt: "Understanding Buruli ulcer transmission and prevention strategies for communities in Ghana's endemic regions.",
      author: "Dr. Akua Serwaa",
      date: "February 18, 2024",
      category: "Infectious Diseases",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=600&h=400&fit=crop"
    },
    {
      title: "Family Planning and Reproductive Health in Ghana",
      excerpt: "Comprehensive guide to family planning options and reproductive health services available across Ghana.",
      author: "Dr. Abena Okyere",
      date: "February 15, 2024",
      category: "Reproductive Health",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop"
    },
    {
      title: "Managing Sickle Cell Disease in Ghana",
      excerpt: "Treatment strategies and lifestyle modifications for managing sickle cell disease in Ghana's healthcare context.",
      author: "Dr. Samuel Amoah",
      date: "February 12, 2024",
      category: "Genetic Disorders",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"
    },
    {
      title: "Clean Water Access and Health in Rural Ghana",
      excerpt: "The critical link between clean water access and community health outcomes in rural Ghanaian villages.",
      author: "Dr. Yaa Asantewaa",
      date: "February 8, 2024",
      category: "Public Health",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop"
    },
    {
      title: "Treating Neglected Tropical Diseases in Ghana",
      excerpt: "Comprehensive approach to diagnosing and treating common neglected tropical diseases affecting Ghanaian communities.",
      author: "Dr. Kwame Nkrumah",
      date: "February 5, 2024",
      category: "Tropical Medicine",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop"
    },
    {
      title: "Eye Care and Vision Health in Ghana",
      excerpt: "Preventing and treating common eye conditions in Ghana, including cataract, glaucoma, and river blindness prevention.",
      author: "Dr. Adwoa Appiah",
      date: "February 1, 2024",
      category: "Ophthalmology",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop"
    },
    {
      title: "Community Health Workers: Ghana's Healthcare Heroes",
      excerpt: "The vital role of community health workers in extending healthcare access to remote areas across Ghana.",
      author: "Dr. Kofi Asante",
      date: "January 28, 2024",
      category: "Community Health",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop"
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
              tailored for Ghanaian communities and healthcare needs.
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
            <p className="text-lg text-gray-600">Expert insights on health and wellness for Ghanaian communities</p>
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
