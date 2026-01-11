import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    company: [
      { name: "Hakkımızda", href: "#about" },
      { name: "Hizmetlerimiz", href: "#services" },
      { name: "Referanslar", href: "#testimonials" },
      { name: "Kariyer", href: "#" },
    ],
    services: [
      { name: "Kardiyovasküler Çözümler", href: "#" },
      { name: "Laboratuvar Teknolojileri", href: "#" },
      { name: "Tanı Ekipmanları", href: "#" },
      { name: "Teknik Destek", href: "#" },
    ],
    resources: [
      { name: "Blog", href: "#blog" },
      { name: "Haberler", href: "#" },
      { name: "Dökümanlar", href: "#" },
      { name: "SSS", href: "#" },
    ],
    legal: [
      { name: "Gizlilik Politikası", href: "#" },
      { name: "Kullanım Şartları", href: "#" },
      { name: "KVKK", href: "#" },
      { name: "Çerez Politikası", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Instagram, href: "#", name: "Instagram" },
  ];

  return (
    <footer className="bg-primary-800 text-white relative">
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-accent-500 hover:bg-accent-600 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
      >
        <ArrowUp className="h-6 w-6" />
      </button>

      <div className="container-max px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="text-2xl font-heading font-bold text-white mb-4">
              BiomiraMed
            </div>
            <p className="text-primary-100 mb-6 leading-relaxed">
              Sağlık teknolojileri alanında 15 yılı aşkın
              deneyimimizle, yenilikçi çözümler sunarak sağlık
              sektörüne değer katıyoruz.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-accent-500 mr-3 flex-shrink-0" />
                <span className="text-primary-100">
                  0216 472 41 94
                </span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-accent-500 mr-3 flex-shrink-0" />
                <span className="text-primary-100">
                  info@biomiramed.com
                </span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-accent-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-primary-100">
                  Teknokent Mahallesi
                  <br />
                  Ankara, Türkiye
                </span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Şirket
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-100 hover:text-accent-500 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Hizmetler
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-100 hover:text-accent-500 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Kaynaklar
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-100 hover:text-accent-500 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-primary-700 rounded-2xl p-8 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-heading font-semibold text-white mb-4">
              Haberlerden Haberdar Olun
            </h3>
            <p className="text-primary-100 mb-6">
              Sağlık teknolojileri dünyasından son gelişmeleri e-posta
              ile alın
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresinizi girin"
                className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500"
              />
              <button className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 whitespace-nowrap">
                Abone Ol
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-primary-100 text-sm mb-4 md:mb-0">
              © 2024 BiomiraMed. Tüm hakları saklıdır.
            </div>
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-primary-700 hover:bg-accent-500 rounded-full flex items-center justify-center transition-colors duration-200 group"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5 text-primary-100 group-hover:text-white" />
                </a>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              {footerLinks.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-primary-100 hover:text-accent-500 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
