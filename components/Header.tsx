"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, Heart } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Ana Sayfa", href: "#home" },
    { name: "Hizmetler", href: "#services" },
    { name: "Hakkımızda", href: "#about" },
    { name: "Blog", href: "#blog" },
    { name: "İletişim", href: "#contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-800 text-white py-2 text-sm">
        <div className="container-max px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+90 312 123 45 67</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@biomiramed.com</span>
              </div>
            </div>
            <div className="hidden md:block text-primary-100">
              7/24 Acil Destek Hattı
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed top-10 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-2xl border-b border-gray-100"
            : "bg-white/10 backdrop-blur-sm"
        }`}
      >
        <div className="container-max">
          <div className="flex items-center justify-between h-20 px-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="h-7 w-7 text-white" />
              </div>
              <div>
                <div
                  className={`text-2xl font-heading font-bold transition-colors duration-300 ${
                    isScrolled ? "text-primary-600" : "text-white"
                  }`}
                >
                  BiomiraMed
                </div>
                <div
                  className={`text-xs font-medium transition-colors duration-300 ${
                    isScrolled
                      ? "text-primary-400"
                      : "text-primary-100"
                  }`}
                >
                  Sağlık Teknolojileri
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative font-medium transition-all duration-300 hover:scale-105 group ${
                    isScrolled
                      ? "text-gray-700 hover:text-primary-500"
                      : "text-white hover:text-accent-400"
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:+903121234567"
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isScrolled
                    ? "text-primary-600 hover:bg-primary-50"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <Phone className="h-4 w-4" />
                <span>Ara</span>
              </a>
              <a
                href="#contact"
                className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Randevu Al
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X
                  className={`h-6 w-6 ${
                    isScrolled ? "text-gray-700" : "text-white"
                  }`}
                />
              ) : (
                <Menu
                  className={`h-6 w-6 ${
                    isScrolled ? "text-gray-700" : "text-white"
                  }`}
                />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-white/95 backdrop-blur-lg shadow-2xl rounded-2xl mx-4 mb-4 overflow-hidden animate-fade-in">
              <nav className="py-6">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-6 py-4 text-gray-700 hover:text-primary-500 hover:bg-primary-50 transition-all duration-200 border-l-4 border-transparent hover:border-primary-500"
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="px-6 pt-4 space-y-3">
                  <a
                    href="tel:+903121234567"
                    className="flex items-center justify-center space-x-2 w-full py-3 text-primary-600 border-2 border-primary-500 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-200"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Hemen Ara</span>
                  </a>
                  <a
                    href="#contact"
                    className="block w-full py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white text-center rounded-xl font-semibold shadow-lg"
                  >
                    Randevu Al
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
