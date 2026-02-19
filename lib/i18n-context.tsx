"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "th" | "en";

interface I18nContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    toggleLanguage: () => void;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>("th");

    useEffect(() => {
        const savedLang = localStorage.getItem("language") as Language;
        if (savedLang) {
            setLanguageState(savedLang);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("language", lang);
        document.documentElement.lang = lang;
    };

    const toggleLanguage = () => {
        setLanguage(language === "th" ? "en" : "th");
    };

    return (
        <I18nContext.Provider value={{ language, setLanguage, toggleLanguage }}>
            {children}
        </I18nContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(I18nContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within an I18nProvider");
    }
    return context;
}
