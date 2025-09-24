"use client";

import {
  Heart,
  Microscope,
  Stethoscope,
  Activity,
  Shield,
  Zap,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Kardiyovasküler Çözümler",
      description:
        "Kalp sağlığı için gelişmiş tanı ve tedavi teknolojileri ile hayat kurtaran çözümler sunuyoruz.",
      features: [
        "EKG Sistemleri",
        "Holter Monitörleri",
        "Defibrilatörler",
        "Pace Maker Sistemleri",
      ],
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      iconColor: "text-red-500",
    },
    {
      icon: Microscope,
      title: "Laboratuvar Teknolojileri",
      description:
        "Hassas ve hızlı laboratuvar analiz sistemleri ile doğru tanı için güvenilir sonuçlar.",
      features: [
        "Otomatik Analizörler",
        "PCR Sistemleri",
        "Mikroskoplar",
        "Kan Analiz Cihazları",
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
    },
    {
      icon: Stethoscope,
      title: "Tanı Ekipmanları",
      description:
        "Modern tanı ve görüntüleme teknolojileri ile erken teşhis ve etkili tedavi imkanı.",
      features: [
        "Ultrason Cihazları",
        "X-Ray Sistemleri",
        "MR Uyumlu Ürünler",
        "Endoskopi Sistemleri",
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-500",
    },
    {
      icon: Activity,
      title: "Hasta Monitörizasyonu",
      description:
        "Sürekli hasta takibi için akıllı sistemler ile 7/24 güvenli sağlık takibi.",
      features: [
        "Vital Monitörler",
        "Telemetri Sistemleri",
        "Mobil Uygulamalar",
        "IoT Sensörler",
      ],
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-500",
    },
    {
      icon: Shield,
      title: "Enfeksiyon Kontrolü",
      description:
        "Sterilizasyon ve hijyen çözümleri ile güvenli sağlık ortamları oluşturuyoruz.",
      features: [
        "UV Sterilizatörler",
        "HEPA Filtreler",
        "Dezenfektan Sistemleri",
        "Hava Temizleme",
      ],
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-500",
    },
    {
      icon: Zap,
      title: "Acil Tıp Çözümleri",
      description:
        "Acil durumlarda hayat kurtaran teknolojiler ile kritik anlarda güvenilir destek.",
      features: [
        "Defibrilatörler",
        "Ventillatörler",
        "Acil Müdahale Kitleri",
        "Ambulans Ekipmanları",
      ],
      color: "from-rose-500 to-red-500",
      bgColor: "bg-rose-50",
      iconColor: "text-rose-500",
    },
  ];

  return (
    <section
      id="services"
      className="section-padding bg-gradient-to-br from-gray-50/30 via-white/50 to-gray-50/30"
    >
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-primary-100 text-primary-600 rounded-full px-6 py-2 mb-6">
            <Heart className="h-5 w-5 mr-2" />
            <span className="font-semibold">Hizmetlerimiz</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
            Sağlık Teknolojileri
            <span className="text-primary-500 block">
              Çözümlerimiz
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Sağlık sektörünün ihtiyaçlarına yönelik kapsamlı teknoloji
            çözümleri sunuyoruz. Her alanda uzman ekibimizle, en
            kaliteli hizmeti sağlıyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Background Gradient */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500`}
              ></div>

              {/* Icon */}
              <div
                className={`relative z-10 flex items-center justify-center w-16 h-16 ${service.bgColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon
                  className={`h-8 w-8 ${service.iconColor}`}
                />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-500"
                    >
                      <div className="w-2 h-2 bg-accent-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className="group/btn flex items-center text-primary-500 font-semibold hover:text-primary-600 transition-colors duration-200">
                  <span>Detayları Gör</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-heading font-bold mb-4">
            İhtiyacınıza Özel Çözüm Arıyorsunuz?
          </h3>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Uzman ekibimiz, size özel sağlık teknolojisi çözümleri
            geliştirmek için hazır. Hemen iletişime geçin ve
            projelerinizi hayata geçirelim.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Ücretsiz Danışmanlık
            </a>
            <a
              href="tel:+903121234567"
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              Hemen Ara
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
