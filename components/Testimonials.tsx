"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Dr. Mehmet Yılmaz",
      position: "Başhekim",
      hospital: "Ankara Şehir Hastanesi",
      content:
        "BiomiraMed'in sunduğu teknolojik çözümler sayesinde hasta bakım kalitemizi önemli ölçüde artırdık. Özellikle kardiyovasküler ürünleri çok başarılı.",
      rating: 5,
      image: "/api/placeholder/80/80",
    },
    {
      name: "Prof. Dr. Ayşe Kaya",
      position: "Laboratuvar Direktörü",
      hospital: "İstanbul Tıp Fakültesi",
      content:
        "Laboratuvar ekipmanlarının kalitesi ve teknik destek hizmetleri mükemmel. Araştırmalarımızda güvenle kullanıyoruz.",
      rating: 5,
      image: "/api/placeholder/80/80",
    },
    {
      name: "Dr. Can Özdemir",
      position: "Acil Tıp Uzmanı",
      hospital: "Bursa Devlet Hastanesi",
      content:
        "Acil serviste kullandığımız monitörizasyon sistemleri sayesinde hasta takibimiz çok daha etkili hale geldi. Teşekkürler BiomiraMed.",
      rating: 5,
      image: "/api/placeholder/80/80",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
            Müşteri Görüşleri
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sağlık profesyonellerinin BiomiraMed deneyimleri
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="card p-8 md:p-12 text-center relative overflow-hidden">
            <Quote className="h-16 w-16 text-primary-100 mx-auto mb-6" />

            <div className="mb-8">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentSlide].rating)].map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-accent-500 fill-current"
                    />
                  )
                )}
              </div>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                "{testimonials[currentSlide].content}"
              </p>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full mr-4 flex items-center justify-center">
                <span className="text-primary-500 font-semibold text-lg">
                  {testimonials[currentSlide].name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-gray-900">
                  {testimonials[currentSlide].name}
                </h4>
                <p className="text-primary-500 font-medium">
                  {testimonials[currentSlide].position}
                </p>
                <p className="text-gray-600 text-sm">
                  {testimonials[currentSlide].hospital}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-primary-50"
            >
              <ChevronLeft className="h-6 w-6 text-primary-500" />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide
                      ? "bg-primary-500"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-primary-50"
            >
              <ChevronRight className="h-6 w-6 text-primary-500" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
