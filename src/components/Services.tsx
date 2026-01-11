import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";

const Services = () => {
  const { t } = useLanguage();
  const services = [
    {
      category: t("products.viscoPhi.category"),
      title: t("products.viscoPhi.title"),
      description: t("products.viscoPhi.description"),
      features: [
        t("products.viscoPhi.feature1"),
        t("products.viscoPhi.feature2"),
        t("products.viscoPhi.feature3"),
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      href: "/products/intra-articular",
    },
    {
      category: t("products.visOcu.category"),
      title: t("products.visOcu.title"),
      description: t("products.visOcu.description"),
      features: [
        t("products.visOcu.feature1"),
        t("products.visOcu.feature2"),
        t("products.visOcu.feature3"),
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      href: "/products/intraocular",
    },
    {
      category: t("products.philExir.category"),
      title: t("products.philExir.title"),
      description: t("products.philExir.description"),
      features: [
        t("products.philExir.feature1"),
        t("products.philExir.feature2"),
        t("products.philExir.feature3"),
        t("products.philExir.feature4"),
      ],
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      href: "/products/dermal-fillers",
    },
  ];

  return (
    <section
      id="services"
      className="section-padding bg-gradient-to-br from-gray-50/30 via-white/50 to-gray-50/30"
    >
      <div className="container-max">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
            {t("products.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500`}
              ></div>
              <div className="relative z-10">
                <div
                  className={`inline-block ${service.bgColor} text-primary-600 rounded-lg px-4 py-2 mb-4 text-sm font-semibold`}
                >
                  {service.category}
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start text-sm text-gray-500"
                    >
                      <div className="w-2 h-2 bg-accent-500 rounded-full mr-3 flex-shrink-0 mt-2"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.href}
                  className="group/btn inline-flex items-center text-primary-500 font-semibold hover:text-primary-600 transition-colors duration-200"
                >
                  <span>{t("products.cta")}</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-heading font-bold mb-4">
            {t("products.ctaTitle")}
          </h3>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            {t("products.ctaDescription")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {t("products.ctaButton1")}
            </a>
            <a
              href="tel:02164724194"
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              {t("products.ctaButton2")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
