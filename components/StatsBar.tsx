"use client";

import { Heart, Users, Shield, Zap } from "lucide-react";

const StatsBar = () => {
  const stats = [
    {
      icon: Heart,
      number: "15+",
      label: "Yıl Deneyim",
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
    {
      icon: Users,
      number: "500+",
      label: "Mutlu Hasta",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: Shield,
      number: "50+",
      label: "Ürün Çeşidi",
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      icon: Zap,
      number: "24/7",
      label: "Acil Destek",
      color: "text-accent-500",
      bgColor: "bg-accent-50",
    },
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100 stats-entrance">
      <div className="container-max px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group stats-item">
              <div
                className={`flex items-center justify-center w-20 h-20 ${stat.bgColor} rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl`}
              >
                <stat.icon
                  className={`h-10 w-10 ${stat.color} group-hover:scale-110 transition-transform duration-300`}
                />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium text-lg group-hover:text-gray-800 transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
