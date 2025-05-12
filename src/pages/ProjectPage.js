import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer"; // Projeleri ayrı dosyadan almak daha iyi olur.

// Page Component
export default function ProjectPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams();
    const { t } = useTranslation();
    const projects = t("projects", { returnObjects: true });
    const project = projects.find((p) => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleBackToPortfolio = () => {
        if (location.pathname === '/') {
            // Ana sayfadaysa doğrudan scroll yap
            const section = document.getElementById('portfolio');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Başka bir sayfadaysa önce anasayfaya yönlendir, sonra scroll yap
            navigate('/', { replace: false });
            // Kısa bir bekleme ile scroll yapılacak section ID’yi kaydet
            sessionStorage.setItem('scrollTo', "portfolio");
        }
    };

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center text-center">
                <div>
                    <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
                    <Link to="/#portfolio" className="text-bvs-purple hover:underline">
                        {t("portfolio.backToPortfolio")}
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <>
            <Header />
            <main className="pt-24 pb-20">
                <div className="container mx-auto px-4">
                    {/* Back link */}
                    <button onClick={handleBackToPortfolio} className="inline-flex items-center text-bvs-purple hover:underline mb-8">
                        <ArrowLeft size={18} className="mr-1" />
                        {t("projectDetail.all")}
                    </button>

                    {/* Project title & category */}
                    <div className="mb-10">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl md:text-4xl font-bold mb-3"
                        >
                            {project.title}
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex flex-wrap gap-3 items-center"
                        >
                            <span className="px-3 py-1 bg-bvs-lightPurple text-bvs-gray text-sm rounded-full">
                                {project.category}
                            </span>
                            <span className="text-gray-500">{t("projectDetail.client")}: {project.client}</span>
                        </motion.div>
                    </div>

                    {/* Main image */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mb-12"
                    >
                        <img
                            src={project.images[0]}
                            alt={project.title}
                            className="w-full h-auto rounded-xl shadow-md object-cover max-h-96"
                        />
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Main content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="md:col-span-2"
                        >
                            <h2 className="text-2xl font-bold mb-4">{t("projectDetail.overview")}</h2>
                            <p className="text-gray-700 mb-8">{project.description}</p>

                            <h3 className="text-xl font-bold mb-3">{t("projectDetail.challenge")}</h3>
                            <p className="text-gray-700 mb-8">{project.challenge}</p>

                            <h3 className="text-xl font-bold mb-3">{t("projectDetail.solution")}</h3>
                            <p className="text-gray-700 mb-8">{project.solution}</p>

                            {/* Additional images */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {project.images.slice(1).map((image, index) => (
                                    <div key={index} className="rounded-lg overflow-hidden shadow-sm">
                                        <img
                                            src={image}
                                            alt={`${project.title} screenshot ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>

                            <h3 className="text-xl font-bold mb-3">{t("projectDetail.results")}</h3>
                            <ul className="list-disc pl-5 mb-8 text-gray-700 space-y-1">
                                {project.results.map((result, index) => (
                                    <li key={index}>{result}</li>
                                ))}
                            </ul>

                            {/* Testimonial */}
                            {project.testimonial && (
                                <div className="bg-gray-50 border-l-4 border-bvs-purple p-5 rounded-r-lg mb-8">
                                    <p className="italic text-gray-700 mb-3">"{project.testimonial.content}"</p>
                                    <p className="font-semibold">{project.testimonial.author}</p>
                                    <p className="text-sm text-gray-600">{project.testimonial.company}</p>
                                </div>
                            )}
                        </motion.div>

                        {/* Sidebar */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <h3 className="font-bold text-lg mb-4">{t("projectDetail.technologiesUsed")}</h3>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="font-bold text-lg mb-4">{t("projectDetail.contactTitle")}</h3>
                                <p className="text-gray-600 mb-4">{t("projectDetail.contactText")}</p>
                                <Link
                                    to="/#contact"
                                    className="block text-center w-full py-3 bg-bvs-purple text-white rounded-[8px] hover:bg-bvs-purple/90 transition-colors"
                                >
                                    {t("projectDetail.contactButton")}
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Related projects section could be added here */}
                </div>
            </main>
            <Footer />
        </>
    );
}
