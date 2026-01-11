"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft, MessageCircle } from "lucide-react";

export default function DermalFillersPage() {
  const { t } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const filters = [
    t("products.detail.dermalFillers.filter1"),
    t("products.detail.dermalFillers.filter2"),
    t("products.detail.dermalFillers.filter3"),
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
              {t("products.detail.dermalFillers.title")}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
              {t("products.detail.dermalFillers.description")}
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

          {/* Main Content Card */}
          <div className="bg-white rounded-3xl p-12 shadow-lg border border-primary-100 mb-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-600 mb-6">
                PhilExir™
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                PhilExir™ is a cutting-edge injectable designed to revitalize
                facial contours and awaken skin radiance, helping you look
                refreshed, lifted, and beautifully renewed.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {filters.map((filter) => (
                  <span
                    key={filter}
                    className="px-6 py-2 bg-primary-50 text-primary-600 rounded-full font-medium border border-primary-100"
                  >
                    {filter}
                  </span>
                ))}
              </div>
            </div>
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

