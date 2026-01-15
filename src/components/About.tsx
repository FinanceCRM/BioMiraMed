import { useLanguage } from "@/contexts/LanguageContext";
import {
  CheckCircle,
  Users,
  Award,
  Globe,
  Heart,
  Target,
  Lightbulb,
  Shield,
} from "lucide-react";

const About = () => {
  const { t } = useLanguage();
  const achievements = [
    { icon: CheckCircle, text: "ISO 13485 Kalite Yönetim Sistemi" },
    { icon: Award, text: "CE Belgeli Ürün Portföyü" },
    { icon: Shield, text: "Uluslararası Kalite Standartları" },
  ];

  const values = [
    {
      icon: Users,
      title: t("about.values.expertTeam.title"),
      description: t("about.values.expertTeam.description"),
    },
    {
      icon: Shield,
      title: t("about.values.trustQuality.title"),
      description: t("about.values.trustQuality.description"),
    },
    {
      icon: Target,
      title: t("about.values.addedValue.title"),
      description: t("about.values.addedValue.description"),
    },
    {
      icon: Lightbulb,
      title: t("about.values.continuousInnovation.title"),
      description: t("about.values.continuousInnovation.description"),
    },
  ];

  return (
    <section
      id="about"
      className="section-padding bg-gradient-to-br from-white/80 to-gray-50/40"
    >
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
          <div className="relative">
            <div className="relative aspect-square bg-gradient-to-br from-primary-100 via-primary-50 to-white rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl flex items-center justify-center shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-500">
                  <Heart className="h-20 w-20 text-white" />
                </div>
              </div>
              <div className="absolute top-8 left-8 w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <div className="absolute bottom-8 right-8 w-16 h-16 bg-accent-600 rounded-2xl flex items-center justify-center shadow-lg animate-pulse delay-1000">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div className="absolute top-1/2 right-8 w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg animate-bounce">
                <Target className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center bg-primary-100 text-primary-600 rounded-full px-6 py-2 mb-6">
              <Heart className="h-5 w-5 mr-2" />
              <span className="font-semibold">
                {t("about.badge")}
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
              {t("about.title")}
              <span className="text-primary-500 block">
                {t("about.subtitle")}
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t("about.description1")}
            </p>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              {t("about.description2")}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors duration-300"
                >
                  <achievement.icon className="h-6 w-6 text-primary-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">
                    {achievement.text}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-center"
              >
                Hizmetlerimizi Keşfet
              </a>
              <a
                href="#contact"
                className="bg-white hover:bg-gray-50 text-primary-600 border-2 border-primary-500 px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-center"
              >
                İletişime Geç
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              {t("about.valuesTitle")}
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("about.valuesDescription")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6 mx-auto group-hover:bg-primary-500 transition-colors duration-300">
                  <value.icon className="h-8 w-8 text-primary-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
