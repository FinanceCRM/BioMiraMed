"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  Play,
  ChevronLeft,
  ChevronRight,
  Heart,
} from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      title: "Sağlıkta Yenilik",
      subtitle: "Bilimde Güven",
      description:
        "Modern sağlık teknolojileri ile geleceği şekillendiriyoruz. İnovatif çözümlerimizle sağlık sektöründe fark yaratıyoruz.",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      cta: "Ürünlerimizi Keşfet",
    },
    {
      title: "Gelişmiş Teknoloji",
      subtitle: "Güvenilir Çözümler",
      description:
        "15 yılı aşkın deneyimimizle, sağlık profesyonellerine en kaliteli teknolojik çözümleri sunuyoruz.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      cta: "Hizmetlerimizi İncele",
    },
    {
      title: "Hasta Odaklı",
      subtitle: "Çözümler",
      description:
        "Her hasta için en uygun tedavi sürecini destekleyen, yenilikçi medikal teknolojiler geliştiriyoruz.",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      cta: "Randevu Al",
    },
    {
      title: "Uzman Ekip",
      subtitle: "Profesyonel Hizmet",
      description:
        "Alanında uzman doktor ve teknisyenlerden oluşan ekibimizle, size en iyi sağlık hizmetini sunuyoruz.",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      cta: "Ekibimizi Tanıyın",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      handleSlideChange((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleSlideChange = (
    newSlide: number | ((prev: number) => number)
  ) => {
    setIsTransitioning(true);
    setTimeout(() => {
      if (typeof newSlide === "function") {
        setCurrentSlide(newSlide);
      } else {
        setCurrentSlide(newSlide);
      }
      setTimeout(() => setIsTransitioning(false), 100);
    }, 300);
  };

  const nextSlide = () => {
    handleSlideChange((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    handleSlideChange(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background Container */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            }`}
          >
            {/* Background Image with Parallax Effect */}
            <div
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[8000ms] ease-linear ${
                index === currentSlide ? "scale-110" : "scale-100"
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/85 to-primary-700/75"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary-900/30"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center pb-32 pt-32">
        <div className="container-max px-4">
          <div className="max-w-5xl">
            <div
              className={`transition-all duration-700 ease-out ${
                isTransitioning
                  ? "opacity-0 translate-y-8 scale-95"
                  : "opacity-100 translate-y-0 scale-100"
              }`}
            >
              {/* Badge */}
              <div className="inline-flex items-center bg-white/15 backdrop-blur-md rounded-full px-8 py-3 mb-8 border border-white/20 shadow-lg">
                <Heart className="h-6 w-6 text-accent-400 mr-3" />
                <span className="text-white font-semibold text-lg">
                  Sağlık Teknolojileri Lideri
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold mb-8 leading-[0.9] text-white">
                {slides[currentSlide].title}
                <span className="text-accent-400 block mt-2">
                  {slides[currentSlide].subtitle}
                </span>
              </h1>

              <p className="text-2xl md:text-3xl mb-12 text-gray-100 max-w-4xl leading-relaxed font-light">
                {slides[currentSlide].description}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-20">
                <a
                  href="#services"
                  className="group bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-accent-500/30 transform hover:scale-105 flex items-center justify-center"
                >
                  {slides[currentSlide].cta}
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </a>

                <button className="group hero-btn bg-white/15 backdrop-blur-md hover:bg-white/25 text-white border-2 border-white/30 hover:border-white/50 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center">
                  <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                  Tanıtım Videosu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/15 backdrop-blur-md hover:bg-white/25 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 hover:border-white/40 shadow-lg"
      >
        <ChevronLeft className="h-7 w-7" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/15 backdrop-blur-md hover:bg-white/25 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 hover:border-white/40 shadow-lg"
      >
        <ChevronRight className="h-7 w-7" />
      </button>

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 z-20 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`relative overflow-hidden rounded-full transition-all duration-500 ${
              index === currentSlide
                ? "bg-accent-500 w-12 h-4 shadow-lg shadow-accent-500/30"
                : "bg-white/40 hover:bg-white/60 w-4 h-4"
            }`}
          >
            {index === currentSlide && (
              <div className="absolute inset-0 bg-accent-400 animate-pulse"></div>
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
