import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import trTranslations from "@/translations/tr.json";
import enTranslations from "@/translations/en.json";
import deTranslations from "@/translations/de.json";

type Language = "tr" | "en" | "de";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, unknown>> = {
  tr: trTranslations,
  en: enTranslations,
  de: deTranslations,
};

const LanguageContext = createContext<
  LanguageContextType | undefined
>(undefined);

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguageState] = useState<Language>("tr");

  useEffect(() => {
    const savedLanguage = localStorage.getItem(
      "language"
    ) as Language;
    if (savedLanguage && ["tr", "en", "de"].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: unknown = translations[language];
    for (const k of keys) {
      value = (value as Record<string, unknown>)?.[k];
      if (value === undefined) break;
    }
    return typeof value === "string" ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error(
      "useLanguage must be used within a LanguageProvider"
    );
  }
  return context;
}
