"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      details: ["+90 312 123 45 67", "+90 312 123 45 68"],
      color: "text-primary-500",
    },
    {
      icon: Mail,
      title: "E-posta",
      details: ["info@biomiramed.com", "destek@biomiramed.com"],
      color: "text-accent-500",
    },
    {
      icon: MapPin,
      title: "Adres",
      details: ["Teknokent Mahallesi", "Ankara, Türkiye"],
      color: "text-primary-500",
    },
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      details: [
        "Pazartesi - Cuma: 08:00 - 18:00",
        "Cumartesi: 09:00 - 15:00",
      ],
      color: "text-accent-500",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
            İletişim
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Projeleriniz için bizimle iletişime geçin. Uzman ekibimiz
            size en uygun çözümü sunmak için hazır.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-lg bg-white shadow-md mr-4 ${info.color}`}
                  >
                    <info.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {info.title}
                    </h3>
                    {info.details.map((detail, detailIndex) => (
                      <p
                        key={detailIndex}
                        className="text-gray-600 text-sm"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 aspect-video bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl overflow-hidden">
              <div className="w-full h-full bg-primary-500/10 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary-500 mx-auto mb-2" />
                  <p className="text-primary-700 font-medium">
                    Harita Görünümü
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="Adınızı ve soyadınızı girin"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      E-posta *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="E-posta adresinizi girin"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="Telefon numaranızı girin"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Kurum/Şirket
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="Kurum veya şirket adı"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Konu *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Konu seçiniz</option>
                    <option value="product-inquiry">
                      Ürün Bilgisi
                    </option>
                    <option value="technical-support">
                      Teknik Destek
                    </option>
                    <option value="partnership">İş Ortaklığı</option>
                    <option value="other">Diğer</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Mesaj *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Mesajınızı buraya yazın..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full group"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  Mesaj Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
