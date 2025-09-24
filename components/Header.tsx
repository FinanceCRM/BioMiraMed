"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  Heart,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(
    null
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Ana Sayfa", href: "#home" },
    {
      name: "Hizmetler",
      href: "#services",
      dropdown: [
        {
          name: "Kardiyovasküler Çözümler",
          href: "#services",
          icon: "💓",
          description: "Kalp sağlığı için gelişmiş teknolojiler",
          color: "from-red-500 to-pink-500",
        },
        {
          name: "Laboratuvar Teknolojileri",
          href: "#services",
          icon: "🔬",
          description: "Hassas analiz ve test sistemleri",
          color: "from-blue-500 to-cyan-500",
        },
        {
          name: "Tanı Ekipmanları",
          href: "#services",
          icon: "🩺",
          description: "Modern görüntüleme ve tanı cihazları",
          color: "from-green-500 to-emerald-500",
        },
        {
          name: "Hasta Monitörizasyonu",
          href: "#services",
          icon: "📊",
          description: "7/24 hasta takip sistemleri",
          color: "from-purple-500 to-violet-500",
        },
        {
          name: "Enfeksiyon Kontrolü",
          href: "#services",
          icon: "🛡️",
          description: "Sterilizasyon ve hijyen çözümleri",
          color: "from-amber-500 to-orange-500",
        },
        {
          name: "Acil Tıp Çözümleri",
          href: "#services",
          icon: "⚡",
          description:
            "Kritik durumlarda hayat kurtaran teknolojiler",
          color: "from-rose-500 to-red-500",
        },
      ],
    },
    { name: "Hakkımızda", href: "#about" },
    { name: "Blog", href: "#blog" },
    { name: "İletişim", href: "#contact" },
  ];

  let dropdownTimeout: NodeJS.Timeout;

  const handleDropdownEnter = (itemName: string) => {
    clearTimeout(dropdownTimeout);
    setActiveDropdown(itemName);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // 150ms delay before closing
  };

  const handleDropdownStay = () => {
    clearTimeout(dropdownTimeout);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-800 text-white py-2 text-sm relative z-50">
        <div className="container-max px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center hover:text-accent-400 transition-colors duration-200">
                <Phone className="h-4 w-4 mr-2" />
                <span>+90 312 123 45 67</span>
              </div>
              <div className="flex items-center hover:text-accent-400 transition-colors duration-200">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@biomiramed.com</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4 text-primary-100">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span>7/24 Acil Destek Hattı</span>
              </div>
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
            <div className="flex items-center space-x-3 logo-container">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300">
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
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() =>
                    item.dropdown && handleDropdownEnter(item.name)
                  }
                  onMouseLeave={handleDropdownLeave}
                >
                  <a
                    href={item.href}
                    className={`nav-link relative font-medium transition-all duration-300 hover:scale-105 group flex items-center py-2 px-1 ${
                      isScrolled
                        ? "text-gray-700 hover:text-primary-500"
                        : "text-white hover:text-accent-400"
                    }`}
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                          activeDropdown === item.name
                            ? "rotate-180 text-accent-500"
                            : ""
                        }`}
                      />
                    )}
                  </a>

                  {/* Enhanced Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-96 bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden animate-fade-in dropdown-shadow"
                      onMouseEnter={handleDropdownStay}
                      onMouseLeave={handleDropdownLeave}
                    >
                      {/* Header */}
                      <div className="bg-gradient-to-r from-primary-500/90 to-primary-600/90 backdrop-blur-sm p-6 text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-primary-600/20"></div>
                        <div className="relative z-10">
                          <h3 className="text-lg font-heading font-bold mb-2">
                            Sağlık Teknolojileri
                          </h3>
                          <p className="text-primary-100 text-sm">
                            Uzman çözümlerimizi keşfedin
                          </p>
                        </div>
                      </div>

                      {/* Menu Items */}
                      <div className="p-3 max-h-80 overflow-y-auto">
                        {item.dropdown.map((dropdownItem, index) => (
                          <a
                            key={index}
                            href={dropdownItem.href}
                            className="dropdown-item flex items-center p-4 rounded-2xl hover:bg-white/60 hover:backdrop-blur-sm transition-all duration-300 group border-l-4 border-transparent hover:border-primary-500/50 mb-1"
                          >
                            <div
                              className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br ${dropdownItem.color} rounded-xl mr-4 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}
                            >
                              <span className="text-lg filter drop-shadow-sm">
                                {dropdownItem.icon}
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors duration-300 mb-1">
                                {dropdownItem.name}
                              </div>
                              <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                                {dropdownItem.description}
                              </div>
                            </div>
                            <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all duration-300" />
                          </a>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="bg-gradient-to-r from-gray-50/80 to-white/80 backdrop-blur-sm p-4 border-t border-white/30">
                        <a
                          href="#services"
                          className="flex items-center justify-center w-full py-3 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group"
                        >
                          <span>Tüm Hizmetleri Keşfet</span>
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:+903121234567"
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
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
                className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 relative overflow-hidden group"
              >
                <span className="relative z-10">Randevu Al</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-accent-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
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
                  <div key={item.name} className="mobile-menu-item">
                    <a
                      href={item.href}
                      className="block px-6 py-4 text-gray-700 hover:text-primary-500 hover:bg-primary-50 transition-all duration-200 border-l-4 border-transparent hover:border-primary-500 font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                    {/* Mobile Dropdown */}
                    {item.dropdown && (
                      <div className="pl-4 pb-2 bg-gray-50 mx-4 rounded-xl mt-2">
                        {item.dropdown.map(
                          (dropdownItem, dropdownIndex) => (
                            <a
                              key={dropdownIndex}
                              href={dropdownItem.href}
                              className="flex items-center px-4 py-3 text-sm text-gray-600 hover:text-primary-500 hover:bg-white transition-all duration-200 rounded-lg"
                              onClick={() =>
                                setIsMobileMenuOpen(false)
                              }
                            >
                              <span className="mr-3 text-lg">
                                {dropdownItem.icon}
                              </span>
                              <div>
                                <div className="font-medium">
                                  {dropdownItem.name}
                                </div>
                                <div className="text-xs text-gray-500">
                                  {dropdownItem.description}
                                </div>
                              </div>
                            </a>
                          )
                        )}
                      </div>
                    )}
                  </div>
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
