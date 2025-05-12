
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from '../assets/images/logo_bvs.png';
import { FaLinkedin, FaInstagram, FaGithub, FaBehanceSquare } from "react-icons/fa";
export default function Footer() {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();
    const navItems = [
        { id: "home", label: t("nav.home") },
        { id: "about", label: t("nav.about") },
        { id: "services", label: t("nav.services") },
        { id: "portfolio", label: t("nav.portfolio") },
        { id: "pricing", label: t("nav.pricing") }
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop, // Header yüksekliğini hesaba kat
                behavior: "smooth",
            });
        }
    };

    return (
        <footer className="bg-bvs-dark text-white pt-16 pb-8  px-2 lg:px-20">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-10 mb-10">
                    {/* Company Info */}
                    <div>
                        <div className="text-2xl font-bold mb-4 flex items-center">
                            <span className="text-bvs-light-purple">BVS</span> Design
                            <div className="ml-4 bg-gray-300 rounded-full">
                                <img className="w-14" src={logo} alt="logo" />
                            </div>

                        </div>
                        <p className="text-gray-300 mb-4">
                            {t("footer.title")}
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://www.instagram.com/bvsdesign_"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 hover:bg-white/20 backdrop-blur p-2 rounded-full transition-all hover:scale-105 duration-200"
                            >
                                <FaInstagram className="text-white w-5 h-5" />
                            </a>
                            <a
                                href="https://www.behance.net/nihatnal"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 hover:bg-white/20 backdrop-blur p-2 rounded-full transition-all hover:scale-105 duration-200"
                            >
                                <FaBehanceSquare className="text-white w-5 h-5" />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/nihat-onal-82a4412a0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 hover:bg-white/20 backdrop-blur p-2 rounded-full transition-all hover:scale-105 duration-200"
                            >
                                <FaLinkedin className="text-white w-5 h-5" />
                            </a>



                            <a
                                href="https://github.com/nihatonal"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 hover:bg-white/20 backdrop-blur p-2 rounded-full transition-all hover:scale-105 duration-200"
                            >
                                <FaGithub className="text-white w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">{t("footer.links")}</h3>
                        <div className="space-y-2 flex flex-col items-start">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">{t("footer.services")}</h3>
                        <ul className="space-y-2">
                            <li>
                                <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors">
                                    {t("services.webDev")}
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors">
                                    {t("services.ecommerce")}
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors">
                                    {t("services.uiDesign")}
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors">
                                    {t("services.maintenance")}
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors">
                                    {t("services.seo")}
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                                    {t("footer.privacy")}
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms-of-service" className="text-gray-300 hover:text-white transition-colors">
                                    {t("footer.terms")}
                                </Link>
                            </li>
                            <li>
                                <Link to="/cookie-policy" className="text-gray-300 hover:text-white transition-colors">
                                    {t("footer.cookies")}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
                    <p>&copy; {currentYear} BVS Design. {t("footer.rights")}</p>
                </div>
            </div>
        </footer>
    );
}