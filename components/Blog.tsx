"use client";

import { Calendar, User, ArrowRight, Tag } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Sağlık Teknolojilerinde Yapay Zeka Devrimi",
      excerpt:
        "Yapay zeka teknolojilerinin sağlık sektöründe nasıl devrim yarattığını ve gelecekteki potansiyelini keşfedin.",
      author: "Dr. Ahmet Yılmaz",
      date: "15 Mart 2024",
      category: "Teknoloji",
      image: "/api/placeholder/400/250",
      readTime: "5 dk okuma",
    },
    {
      id: 2,
      title: "Telemedicine: Uzaktan Sağlık Hizmetlerinin Geleceği",
      excerpt:
        "COVID-19 sonrası dönemde telemedicine uygulamalarının önemi ve BiomiraMed çözümleri.",
      author: "Prof. Dr. Ayşe Kaya",
      date: "10 Mart 2024",
      category: "Sağlık",
      image: "/api/placeholder/400/250",
      readTime: "7 dk okuma",
    },
    {
      id: 3,
      title: "Laboratuvar Otomasyonunda Yeni Trendler",
      excerpt:
        "Modern laboratuvarlarda otomasyon sistemlerinin rolü ve verimliliğe katkıları.",
      author: "Mühendis Can Özdemir",
      date: "5 Mart 2024",
      category: "İnovasyon",
      image: "/api/placeholder/400/250",
      readTime: "4 dk okuma",
    },
  ];

  const categories = [
    "Tümü",
    "Teknoloji",
    "Sağlık",
    "İnovasyon",
    "Araştırma",
  ];

  return (
    <section id="blog" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
            Blog & Haberler
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sağlık teknolojileri dünyasından son gelişmeler ve uzman
            görüşleri
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                index === 0
                  ? "bg-primary-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-primary-50 hover:text-primary-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="card overflow-hidden group"
            >
              {/* Image */}
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
                <div className="w-full h-full bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors duration-300">
                  <div className="text-center">
                    <Tag className="h-12 w-12 text-primary-500 mx-auto mb-2" />
                    <p className="text-primary-700 font-medium">
                      {post.category}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category & Read Time */}
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block bg-primary-100 text-primary-600 text-xs font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3 group-hover:text-primary-500 transition-colors duration-200">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{post.date}</span>
                  </div>
                </div>

                {/* Read More */}
                <div className="mt-4">
                  <button className="text-primary-500 font-medium hover:text-primary-600 transition-colors duration-200 group flex items-center">
                    Devamını Oku
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="btn-secondary">
            Daha Fazla Makale Yükle
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
