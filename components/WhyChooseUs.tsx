"use client";

import { Shield, Zap, Users, Award } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Güvenilir Kalite",
      description:
        "Uluslararası standartlarda üretim ve kalite kontrol süreçleri ile güvenilir ürünler sunuyoruz.",
    },
    {
      icon: Zap,
      title: "Hızlı Çözümler",
      description:
        "Acil ihtiyaçlarınıza 24/7 destek ve hızlı teslimat ile anında çözüm sağlıyoruz.",
    },
    {
      icon: Users,
      title: "Uzman Ekip",
      description:
        "Alanında uzman mühendis ve teknisyenlerden oluşan deneyimli ekibimizle hizmet veriyoruz.",
    },
    {
      icon: Award,
      title: "Sertifikalı Ürünler",
      description:
        "CE, ISO ve diğer uluslararası sertifikalara sahip, onaylanmış ürün portföyümüz bulunuyor.",
    },
  ];

  return (
    <section className="section-padding bg-primary-500">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Neden BiomiraMed?
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Sağlık teknolojileri alanında güvenilir partneriniz olmak
            için sürekli gelişim gösteriyoruz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6 mx-auto group-hover:bg-accent-500 transition-colors duration-300">
                <feature.icon className="h-10 w-10 text-white" />
              </div>

              <h3 className="text-xl font-heading font-semibold text-white mb-4">
                {feature.title}
              </h3>

              <p className="text-primary-100 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-heading font-semibold text-white mb-4">
              Projeleriniz için doğru çözümü birlikte bulalım
            </h3>
            <p className="text-primary-100 mb-6">
              Uzman ekibimiz, ihtiyaçlarınıza özel çözümler
              geliştirmek için sizinle çalışmaya hazır
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-secondary">
                Ücretsiz Danışmanlık
              </a>
              <a
                href="#services"
                className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
              >
                Ürünleri İncele
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
