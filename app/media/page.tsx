"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { Package, Calendar, Image as ImageIcon, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

export default function MediaPage() {
  const { t } = useLanguage();
  const [openCategory, setOpenCategory] = useState<string | null>("product-packaging");

  const categories = [
    {
      id: "product-packaging",
      title: t("media.productPackaging"),
      icon: Package,
      count: 9,
      items: [
        {
          title: "ViscoPhi™ Packaging",
          subtitle: "ViscoPhi product packaging",
          image: "/assets/ViscoPhi kutu.jpg",
        },
        {
          title: "VisOcu HPMC Packaging",
          subtitle: "VisOcu HPMC product packaging",
          image: "/assets/visocu hpmc kutu.jpg",
        },
        {
          title: "VisOcu Open Box",
          subtitle: "VisOcu product open box view",
          image: "/assets/visocu açık kutu.jpg",
        },
        {
          title: "VisOcu HPMC Open Box",
          subtitle: "VisOcu HPMC open box view",
          image: "/assets/visocu hpmc açık kutu.jpg",
        },
        {
          title: "VisOcu HPMC Multi-pack",
          subtitle: "VisOcu HPMC multiple unit packaging",
          image: "/assets/visocu hpmc çoklu kutu.jpg",
        },
        {
          title: "VisOcu HA Multi-pack",
          subtitle: "VisOcu HA multiple unit packaging",
          image: "/assets/visocu ha çoklu kutu.jpg",
        },
        {
          title: "ViscoPhi Intro",
          subtitle: "ViscoPhi introduction packaging",
          image: "/assets/ViscoPhi-intro.jpeg",
        },
        {
          title: "ViscOge HPMC Packaging",
          subtitle: "ViscOge HPMC product packaging",
          image: "/assets/viscoge hpmc kutu.jpg",
        },
        {
          title: "VSP Catalog Box",
          subtitle: "VSP catalog packaging",
          image: "/assets/vsp katalog kutu.JPG",
        },
      ],
    },
    {
      id: "events",
      title: t("media.events"),
      icon: Calendar,
      count: 1,
      items: [
        {
          title: "Industry Conference 2024",
          subtitle: "Our participation in major biotechnology conferences",
          image: "/assets/slide.jpeg",
        },
      ],
    },
    {
      id: "gallery",
      title: t("media.gallery"),
      icon: ImageIcon,
      count: 1,
      items: [
        {
          title: "Product Showcase",
          subtitle: "Our innovative biotechnology solutions",
          image: "/assets/trio.jpeg",
        },
      ],
    },
  ];

  const toggleCategory = (categoryId: string) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
  };

  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50/30 via-white/50 to-gray-50/30">
        <div className="container-max px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              <span className="text-primary-600">{t("media.title")}</span>{" "}
              <span className="bg-gradient-to-r from-accent-500 to-accent-600 bg-clip-text text-transparent">
                {t("media.subtitle")}
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t("media.description")}
            </p>
          </div>

          {/* Categories */}
          <div className="space-y-4 mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              const isOpen = openCategory === category.id;

              return (
                <div
                  key={category.id}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
                >
                  {/* Category Header */}
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary-600" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-heading font-bold text-primary-600">
                          {category.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {category.count} {category.count === 1 ? t("media.item") : t("media.items")}
                        </p>
                      </div>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="h-6 w-6 text-primary-600" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-primary-600" />
                    )}
                  </button>

                  {/* Category Content */}
                  {isOpen && (
                    <div className="px-6 pb-6 animate-fade-in">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {category.items.map((item, index) => (
                          <div
                            key={index}
                            className="group bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                          >
                            <div className="relative h-48 bg-gray-100 overflow-hidden">
                              <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                            <div className="p-4">
                              <h4 className="font-heading font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                                {item.title}
                              </h4>
                              <p className="text-sm text-gray-600">{item.subtitle}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-12 text-white">
            <h3 className="text-2xl font-heading font-bold mb-4">
              {t("media.ctaTitle")}
            </h3>
            <Link
              href="#contact"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {t("media.ctaButton")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

