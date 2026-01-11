"use client";

import Image from "next/image";
import { Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat">
          <Image
            src="/assets/slide.jpeg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/85 to-primary-700/75"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary-900/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center pb-32 pt-32">
        <div className="container-max px-4">
          <div className="max-w-5xl">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/15 backdrop-blur-md rounded-full px-8 py-3 mb-8 border border-white/20 shadow-lg">
              <Heart className="h-6 w-6 text-accent-400 mr-3" />
              <span className="text-white font-semibold text-lg">
                {t("hero.badge")}
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold mb-8 leading-[0.9] text-white">
              {t("hero.title")}
              <span className="text-accent-400 block mt-2">
                {t("hero.subtitle")}
              </span>
            </h1>

            <p className="text-2xl md:text-3xl mb-12 text-gray-100 max-w-4xl leading-relaxed font-light">
              {t("hero.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
