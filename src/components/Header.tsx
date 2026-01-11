import { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Menu,
  X,
  ChevronDown,
  Globe,
  Eye,
  Bone,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(!isHomePage);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(
    null
  );
  const dropdownTimeoutRef = useRef<ReturnType<
    typeof setTimeout
  > | null>(null);

  useEffect(() => {
    if (!isHomePage) {
      setIsScrolled(true);
    } else {
      setIsScrolled(window.scrollY > 50);
    }
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const getNavHref = (hash: string) => {
    if (hash.startsWith("#")) {
      return isHomePage ? hash : `/${hash}`;
    }
    return hash;
  };

  const navItems = [
    { name: t("nav.about"), href: getNavHref("#about") },
    {
      name: t("nav.products"),
      href: getNavHref("#products"),
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Intraocular Viscoelastics",
          nameTr:
            language === "tr"
              ? "İntraoküler Viskoelastikler"
              : language === "en"
              ? "Intraocular Viscoelastics"
              : "Intraokuläre Viskoelastika",
          href: "/products/intraocular",
          icon: Eye,
          description:
            language === "tr"
              ? "Göz cerrahisi için premium oftalmik viskoelastik çözümler"
              : language === "en"
              ? "Premium ophthalmic viscoelastic solutions for eye surgery"
              : "Premium ophthalmische viskoelastische Lösungen für die Augenchirurgie",
        },
        {
          name: "Intra-articular Viscoelastics",
          nameTr:
            language === "tr"
              ? "İntraartiküler Viskoelastikler"
              : language === "en"
              ? "Intra-articular Viscoelastics"
              : "Intraartikuläre Viskoelastika",
          href: "/products/intra-articular",
          icon: Bone,
          description:
            language === "tr"
              ? "Ortopedik uygulamalar için gelişmiş eklem enjeksiyonu çözümleri"
              : language === "en"
              ? "Advanced joint injection solutions for orthopedic applications"
              : "Fortschrittliche Gelenkinjektionslösungen für orthopädische Anwendungen",
        },
        {
          name: "Dermal Fillers",
          nameTr:
            language === "tr"
              ? "Dermal Dolgu & Kozmetik"
              : language === "en"
              ? "Dermal Fillers"
              : "Dermale Filler",
          href: "/products/dermal-fillers",
          icon: Sparkles,
          description:
            language === "tr"
              ? "Geliştirme için lüks estetik ürünler"
              : language === "en"
              ? "Luxury aesthetic products for enhancement"
              : "Luxus-ästhetische Produkte zur Verbesserung",
        },
      ],
    },
    { name: t("nav.media"), href: "/media" },
    { name: t("nav.career"), href: "/career" },
    { name: t("nav.contact"), href: getNavHref("#contact") },
  ];

  const languages = [
    { code: "tr" as const, name: "Türkçe" },
    { code: "en" as const, name: "English" },
    { code: "de" as const, name: "Deutsch" },
  ];

  const handleDropdownEnter = (itemName: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(itemName);
  };
  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };
  const handleDropdownStay = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
  };
  const handleLanguageSelect = (lang: {
    code: "tr" | "en" | "de";
    name: string;
  }) => {
    setLanguage(lang.code);
    setActiveDropdown(null);
  };

  const renderNavLink = (
    item: (typeof navItems)[0],
    href: string,
    children: React.ReactNode
  ) => {
    if (href.startsWith("#") || href.startsWith("/#")) {
      return (
        <a
          href={href}
          className={`nav-link relative font-medium transition-all duration-300 hover:scale-105 py-2 px-1 ${
            isScrolled || !isHomePage
              ? "text-gray-700 hover:text-primary-500"
              : "text-white hover:text-accent-400"
          }`}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        to={href}
        className={`nav-link relative font-medium transition-all duration-300 hover:scale-105 py-2 px-1 ${
          isScrolled || !isHomePage
            ? "text-gray-700 hover:text-primary-500"
            : "text-white hover:text-accent-400"
        }`}
      >
        {children}
      </Link>
    );
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled || !isHomePage
          ? "bg-white/95 backdrop-blur-lg shadow-2xl border-b border-gray-100"
          : "bg-white/10 backdrop-blur-sm"
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-20 px-4">
          <div className="flex items-center logo-container">
            <Link
              to="/"
              className="relative flex items-center justify-center"
            >
              <div className="relative h-14 md:h-16 flex items-center justify-center transition-all duration-300 hover:scale-105">
                <img
                  src="/assets/BIOMIRA LOGO-1.png"
                  alt="BiomiraMed Logo"
                  className="h-full object-contain drop-shadow-lg"
                />
              </div>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(item.name)}
                  onMouseLeave={handleDropdownLeave}
                >
                  {renderNavLink(
                    item,
                    item.href,
                    <>
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`ml-1 h-4 w-4 inline transition-transform duration-300 ${
                          activeDropdown === item.name
                            ? "rotate-180 text-accent-500"
                            : ""
                        }`}
                      />
                    </>
                  )}
                  {activeDropdown === item.name && (
                    <div
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-96 bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden z-[100]"
                      onMouseEnter={handleDropdownStay}
                      onMouseLeave={handleDropdownLeave}
                      style={{ animation: "fadeIn 0.2s ease-in" }}
                    >
                      <div className="p-4">
                        {item.dropdownItems?.map(
                          (dropdownItem, index) => (
                            <Link
                              key={index}
                              to={dropdownItem.href}
                              className="flex items-center p-4 rounded-2xl hover:bg-white/60 hover:backdrop-blur-sm transition-all duration-300 group border-l-4 border-transparent hover:border-primary-500/50 mb-2"
                            >
                              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-500/10 to-primary-600/10 rounded-xl mr-4 group-hover:from-primary-500/20 group-hover:to-primary-600/20 transition-all duration-300">
                                <dropdownItem.icon className="h-6 w-6 text-primary-600" />
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors duration-300 mb-1">
                                  {dropdownItem.nameTr}
                                </div>
                                <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                                  {dropdownItem.description}
                                </div>
                              </div>
                              <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all duration-300" />
                            </Link>
                          )
                        )}
                      </div>
                      <div className="bg-gradient-to-r from-gray-50/80 to-white/80 backdrop-blur-sm p-4 border-t border-white/30">
                        <a
                          href={getNavHref("#contact")}
                          className="flex items-center justify-center w-full py-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group"
                        >
                          <span>Uzmanla İletişime Geç</span>
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <span key={item.name}>
                  {renderNavLink(item, item.href, item.name)}
                </span>
              )
            )}

            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter("language")}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className={`nav-link relative font-medium transition-all duration-300 hover:scale-105 group flex items-center py-2 px-1 ${
                  isScrolled || !isHomePage
                    ? "text-gray-700 hover:text-primary-500"
                    : "text-white hover:text-accent-400"
                }`}
              >
                <Globe className="h-4 w-4 mr-2" />
                <span>{t("nav.language")}</span>
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                    activeDropdown === "language"
                      ? "rotate-180 text-accent-500"
                      : ""
                  }`}
                />
              </button>
              {activeDropdown === "language" && (
                <div
                  className="absolute top-full right-0 mt-3 w-48 bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden animate-fade-in"
                  onMouseEnter={handleDropdownStay}
                  onMouseLeave={handleDropdownLeave}
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageSelect(lang)}
                      className={`w-full text-left px-4 py-3 hover:bg-primary-50 transition-all duration-200 ${
                        language === lang.code
                          ? "bg-primary-100 text-primary-600 font-semibold"
                          : "text-gray-700 hover:text-primary-600"
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <button
            className="lg:hidden p-2 rounded-lg transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X
                className={`h-6 w-6 ${
                  isScrolled || !isHomePage
                    ? "text-gray-700"
                    : "text-white"
                }`}
              />
            ) : (
              <Menu
                className={`h-6 w-6 ${
                  isScrolled || !isHomePage
                    ? "text-gray-700"
                    : "text-white"
                }`}
              />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-lg shadow-2xl rounded-2xl mx-4 mb-4 overflow-hidden animate-fade-in">
            <nav className="py-6">
              {navItems.map((item) =>
                item.hasDropdown ? (
                  <div key={item.name}>
                    <div className="px-6 py-4 text-gray-700 font-medium border-l-4 border-transparent">
                      {item.name}
                    </div>
                    <div className="pl-4 pb-2 bg-gray-50 mx-4 rounded-xl mt-2">
                      {item.dropdownItems?.map(
                        (dropdownItem, index) => (
                          <Link
                            key={index}
                            to={dropdownItem.href}
                            className="flex items-center px-4 py-3 text-sm text-gray-600 hover:text-primary-500 hover:bg-white transition-all duration-200 rounded-lg"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <dropdownItem.icon className="h-5 w-5 mr-3 text-primary-600" />
                            <div>
                              <div className="font-medium">
                                {dropdownItem.nameTr}
                              </div>
                              <div className="text-xs text-gray-500">
                                {dropdownItem.description}
                              </div>
                            </div>
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                ) : item.href.startsWith("#") ||
                  item.href.startsWith("/#") ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-6 py-4 text-gray-700 hover:text-primary-500 hover:bg-primary-50 transition-all duration-200 border-l-4 border-transparent hover:border-primary-500 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-6 py-4 text-gray-700 hover:text-primary-500 hover:bg-primary-50 transition-all duration-200 border-l-4 border-transparent hover:border-primary-500 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
              <div className="px-6 py-4 border-t border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-700 font-medium flex items-center">
                    <Globe className="h-4 w-4 mr-2" />
                    {t("nav.language")}
                  </span>
                </div>
                <div className="space-y-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        handleLanguageSelect(lang);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                        language === lang.code
                          ? "bg-primary-100 text-primary-600 font-semibold"
                          : "text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
