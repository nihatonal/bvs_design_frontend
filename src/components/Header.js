
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";
export default function Header() {
    const { t, i18n } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const navItems = [
        { id: "home", label: t("nav.home") },
        { id: "about", label: t("nav.about") },
        { id: "services", label: t("nav.services") },
        { id: "pricing", label: t("nav.pricing") },
        { id: "portfolio", label: t("nav.portfolio") },
        { id: "contact", label: t("nav.contact") },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 70, // Header yüksekliğini hesaba kat
                behavior: "smooth",
            });
        }
    };
    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-50 px-2 lg:px-20 transition-all duration-300 ${isScrolled
                ? "bg-white bg-opacity-90 backdrop-blur-sm shadow-sm py-2"
                : "bg-transparent py-4"
                }`}
        >
            <div className="container mx-auto px-4 flex justify-start items-center">
                {/* Logo */}
                <a href="#home" className="text-2xl font-bold text-bvs-dark flex items-center">
                    <span className="text-bvs-purple">BVS</span>
                    <span className="hidden sm:inline-block ml-1">Design</span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex ml-auto items-center space-x-6">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="font-medium text-gray-700 hover:text-bvs-purple transition-colors"
                        >
                            {item.label}
                        </button>
                    ))}

                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden ml-auto">
                    <button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="flex flex-col items-center justify-center h-10 w-10 rounded-md"
                    >
                        <span
                            className={`bg-bvs-dark block h-0.5 w-6 rounded-sm transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                                }`}
                        />
                        <span
                            className={`bg-bvs-dark block h-0.5 w-6 rounded-sm my-1 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""
                                }`}
                        />
                        <span
                            className={`bg-bvs-dark block h-0.5 w-6 rounded-sm transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                                }`}
                        />
                    </button>
                </div>
                <div className="relative ml-4">
                    <button
                        onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                        className="flex items-center space-x-1 text-sm text-gray-700 hover:text-bvs-purple transition-colors"
                    >
                        <FaGlobe className="text-lg" />
                        <span className="hidden lg:block">
                            {i18n.language === "tr" ? "Türkçe" : i18n.language === "en" ? "English" : "Русский"}
                        </span>
                    </button>

                    {isLangMenuOpen && (
                        <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                            <button
                                onClick={() => {
                                    i18n.changeLanguage("en");
                                    setIsLangMenuOpen(false);
                                }}
                                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                            >
                                English
                            </button>
                            <button
                                onClick={() => {
                                    i18n.changeLanguage("tr");
                                    setIsLangMenuOpen(false);
                                }}
                                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                            >
                                Türkçe
                            </button>

                            <button
                                onClick={() => {
                                    i18n.changeLanguage("ru");
                                    setIsLangMenuOpen(false);
                                }}
                                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                            >
                                Русский
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden overflow-hidden bg-white"
                    >
                        <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
                            {navItems.map((item) => (

                                <button
                                    key={item.id}
                                    onClick={() => {
                                        scrollToSection(item.id)
                                        setIsMobileMenuOpen(false)
                                    }}
                                    className="font-medium text-gray-700 hover:text-bvs-purple transition-colors py-2"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}