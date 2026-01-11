"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft, MessageCircle } from "lucide-react";

export default function IntraocularPage() {
  const { t } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const filters = [
    t("products.detail.intraocular.filter1"),
    t("products.detail.intraocular.filter2"),
    t("products.detail.intraocular.filter3"),
  ];

  const products = [
    {
      name: "VisOcu HPMC",
      description: "Stabil ön kamara bakımı için geliştirilmiş kohezyon.",
      tag: "Kohezif",
      image: "/assets/visocu hpmc kutu.jpg",
      imageAlt: "VisOcu HPMC",
    },
    {
      name: "VisOcu",
      description: "Çok yönlü oftalmik prosedürler için dengeli viskozite profili.",
      tag: "Dengeli",
      image: "/assets/Visocu.jpeg",
      imageAlt: "VisOcu",
    },
  ];

  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50/30 via-white/50 to-gray-50/30">
        <div className="container-max px-4">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span className="font-medium">{t("products.detail.back")}</span>
          </Link>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-600 mb-6">
              {t("products.detail.intraocular.title")}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
              {t("products.detail.intraocular.description")}
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() =>
                  setSelectedFilter(
                    selectedFilter === filter ? null : filter
                  )
                }
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedFilter === filter
                    ? "bg-primary-500 text-white shadow-lg"
                    : "bg-primary-50 text-primary-600 hover:bg-primary-100"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                <div className="relative h-64 mb-6 bg-gray-50 rounded-2xl overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="inline-block bg-gray-100 text-gray-700 rounded-lg px-4 py-2 mb-4 text-sm font-semibold">
                  {product.tag}
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                  {product.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-12 text-white">
            <div className="flex items-center justify-center mb-6">
              <MessageCircle className="h-8 w-8 mr-3" />
            </div>
            <Link
              href="#contact"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {t("products.detail.contactTitle")}
            </Link>
            <p className="text-primary-100 mt-4 text-sm">
              {t("products.detail.contactDescription")}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

