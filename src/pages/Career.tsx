import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Briefcase,
  Users,
  TrendingUp,
  Heart,
  Award,
  Mail,
  Phone,
  User,
  FileText,
  Upload,
  Send,
} from "lucide-react";

export default function Career() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    coverLetter: "",
  });
  const [fileName, setFileName] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const whyJoinUs = [
    {
      icon: Users,
      title: t("career.collaborative.title"),
      description: t("career.collaborative.description"),
    },
    {
      icon: TrendingUp,
      title: t("career.development.title"),
      description: t("career.development.description"),
    },
    {
      icon: Heart,
      title: t("career.balance.title"),
      description: t("career.balance.description"),
    },
    {
      icon: Award,
      title: t("career.innovation.title"),
      description: t("career.innovation.description"),
    },
  ];

  return (
    <main className="min-h-screen">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-amber-900"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        <div className="relative z-10 container-max px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
            <span className="text-white">
              {t("career.heroTitle")}
            </span>{" "}
            <span className="text-accent-400">
              {t("career.heroSubtitle")}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
            {t("career.heroDescription")}
          </p>
          <a
            href="#apply"
            className="inline-flex items-center bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Briefcase className="h-5 w-5 mr-2" />
            {t("career.heroButton")}
          </a>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-600 mb-6">
              {t("career.whyTitle")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("career.whyDescription")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyJoinUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-primary-600 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-gray-50/30 via-white/50 to-gray-50/30">
        <div className="container-max">
          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-12 shadow-xl border border-gray-100 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Briefcase className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-600 mb-6">
              {t("career.openingsTitle")}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t("career.openingsDescription")}
            </p>
            <a
              href="mailto:info@biomiramed.com?subject=CV Gönderimi"
              className="inline-flex items-center bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Mail className="h-5 w-5 mr-2" />
              {t("career.openingsButton")}
            </a>
          </div>
        </div>
      </section>

      <section id="apply" className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-600 mb-4">
                {t("career.applyTitle")}
              </h2>
              <p className="text-xl text-gray-600">
                {t("career.applyDescription")}
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
            >
              <div className="space-y-6">
                <div>
                  <label className="flex items-center text-gray-700 font-medium mb-2">
                    <User className="h-5 w-5 mr-2 text-primary-600" />
                    {t("career.formName")}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t("contact.namePlaceholder")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="flex items-center text-gray-700 font-medium mb-2">
                    <Mail className="h-5 w-5 mr-2 text-primary-600" />
                    {t("career.formEmail")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t("contact.emailPlaceholder")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="flex items-center text-gray-700 font-medium mb-2">
                    <Phone className="h-5 w-5 mr-2 text-primary-600" />
                    {t("career.formPhone")}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={t("contact.phonePlaceholder")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="flex items-center text-gray-700 font-medium mb-2">
                    <Briefcase className="h-5 w-5 mr-2 text-primary-600" />
                    {t("career.formPosition")}
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    placeholder={t("career.formPosition")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="flex items-center text-gray-700 font-medium mb-2">
                    <Upload className="h-5 w-5 mr-2 text-primary-600" />
                    {t("career.formCV")}
                  </label>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center bg-primary-50 hover:bg-primary-100 text-primary-600 px-6 py-3 rounded-xl font-medium cursor-pointer transition-colors duration-200">
                      <Upload className="h-5 w-5 mr-2" />
                      {t("career.formSelectFile")}
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                    <span className="text-gray-500">
                      {fileName || t("career.formNoFile")}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    {t("career.formFileFormats")}
                  </p>
                </div>
                <div>
                  <label className="flex items-center text-gray-700 font-medium mb-2">
                    <FileText className="h-5 w-5 mr-2 text-primary-600" />
                    {t("career.formCoverLetter")}
                  </label>
                  <textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    placeholder={t(
                      "career.formCoverLetterPlaceholder"
                    )}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  {t("career.formSubmit")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
