
import { useTranslation } from "react-i18next";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

export default function Portfolio() {
    const { t } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const [activeFilter, setActiveFilter] = useState("all");

    const filters = [
        { id: "all", name: t("portfolio.all") },
        { id: "web-design", name: t("portfolio.web-design") },
        { id: "web-development", name: t("portfolio.web-development") },
        { id: "ui-ux", name: t("portfolio.ui-ux") },
        { id: "web-application", name: t("portfolio.web-application") }
    ];


    const projects = [
        {
            id: 1,
            title: "E-commerce Website Redesign",
            category: "web-design",
            name: t("portfolio.web-design"),
            image: "/placeholder.svg",
            tags: ["React", "Tailwind", "Node.js"]
        },
        {
            id: 2,
            title: "Portfolio Website",
            category: "web-development",
            name: t("portfolio.web-development"),
            image: "/placeholder.svg",
            tags: ["React", "Framer Motion"]
        },
        {
            id: 3,
            title: "Mobile Application Dashboard",
            category: "ui-ux",
            name: t("portfolio.ui-ux"),
            image: "/placeholder.svg",
            tags: ["React Native", "Firebase"]
        },
        {
            id: 4,
            title: "Corporate Website",
            category: "web-development",
            name: t("portfolio.web-development"),
            image: "/placeholder.svg",
            tags: ["HTML", "CSS", "JavaScript"]
        },
        {
            id: 5,
            title: "Restaurant Ordering System",
            category: "web-application",
            name: t("portfolio.web-application"),
            image: "/placeholder.svg",
            tags: ["React", "MongoDB", "Express"]
        },
        {
            id: 6,
            title: "Travel Blog",
            category: "web-design",
            name: t("portfolio.web-design"),
            image: "/placeholder.svg",
            tags: ["WordPress", "Custom Theme"]
        }
    ];

    const filteredProjects = activeFilter === "all"
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <section id="portfolio" className="py-20 px-2 lg:px-20">
            <div className="container mx-auto px-4" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("portfolio.title")}</h2>
                    <p className="text-gray-600 max-w-xl mx-auto">{t("portfolio.subtitle")}</p>
                </motion.div>

                {/* Filters */}
                <motion.div
                    className="flex flex-wrap justify-center mb-10 gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {filters.map(filter => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`px-5 py-2 rounded-[8px] text-sm font-medium transition-colors ${activeFilter === filter.id
                                ? "bg-bvs-purple text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            {filter.name}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.15, // sırayla animasyon
                                delayChildren: 0.2
                            }
                        },
                        hidden: {}
                    }}
                >
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={{
                                hidden: { opacity: 0, y: 20, scale: 0.9 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: { duration: 0.6, ease: "easeOut" }
                                }
                            }}
                            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
                        >
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                                    <div>
                                        <div className="text-white font-semibold mb-2">{project.title}</div>
                                        <div className="flex flex-wrap gap-1">
                                            {project.tags.map((tag, i) => (
                                                <span key={i} className="text-xs bg-white bg-opacity-30 px-2 py-1 rounded-full text-white">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                                <p className="text-sm text-gray-500 capitalize mb-4">{project.name}</p>
                                <Link
                                    to={`/project/${project.id}`}
                                    className="inline-flex items-center text-bvs-purple hover:underline font-medium"
                                >
                                    {t("portfolio.viewProject")}
                                    <svg
                                        className="w-4 h-4 ml-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5l7 7-7 7"
                                        ></path>
                                    </svg>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View More Button */}
                <div className="text-center mt-12">
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="px-10 py-3 bg-white border border-bvs-purple text-bvs-purple hover:bg-bvs-purple hover:text-white transition-colors rounded-[8px] font-medium"
                    >
                        {t("portfolio.viewMore")}
                    </motion.button>
                </div>
            </div>
        </section>
    );
}