
import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect, useMemo } from "react";
import { Card, CardContent } from './ui/card';
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink } from 'lucide-react';
export default function Portfolio() {
    const { t } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const [activeFilter, setActiveFilter] = useState("all");
    const [parsedProjects, setParsedProjects] = useState([]);

    const projects = useMemo(() => t("projects", { returnObjects: true }), [t]);

    useEffect(() => {
        const transformed = projects.map((item) => ({
            id: item.id,
            title: item.title,
            category: item.category,
            type: item.type, // 'type' değil 'category' olabilir senin JSON formatına göre
            name: item.client,       // 'name' değil 'client' olarak geçiyor olabilir
            image: item.images?.[0] || "/placeholder.svg",
            tags: item.technologies
        }));

        setParsedProjects(transformed);

    }, [projects]);

    const filters = [
        { id: "all", name: t("portfolio.all") },
        { id: "web-design", name: t("portfolio.web-design") },
        { id: "web-development", name: t("portfolio.web-development") },
        { id: "ui-ux", name: t("portfolio.ui-ux") },
        { id: "web-application", name: t("portfolio.web-application") }
    ];


    // const projects_ = [
    //     {
    //         id: 1,
    //         title: "E-commerce Website Redesign",
    //         category: "web-design",
    //         name: t("portfolio.web-design"),
    //         image: "/placeholder.svg",
    //         tags: ["React", "Tailwind", "Node.js"]
    //     },
    //     {
    //         id: 2,
    //         title: "Portfolio Website",
    //         category: "web-development",
    //         name: t("portfolio.web-development"),
    //         image: "/placeholder.svg",
    //         tags: ["React", "Framer Motion"]
    //     },
    //     {
    //         id: 3,
    //         title: "Mobile Application Dashboard",
    //         category: "ui-ux",
    //         name: t("portfolio.ui-ux"),
    //         image: "/placeholder.svg",
    //         tags: ["React Native", "Firebase"]
    //     },
    //     {
    //         id: 4,
    //         title: "Corporate Website",
    //         category: "web-development",
    //         name: t("portfolio.web-development"),
    //         image: "/placeholder.svg",
    //         tags: ["HTML", "CSS", "JavaScript"]
    //     },
    //     {
    //         id: 5,
    //         title: "Restaurant Ordering System",
    //         category: "web-application",
    //         name: t("portfolio.web-application"),
    //         image: "/placeholder.svg",
    //         tags: ["React", "MongoDB", "Express"]
    //     },
    //     {
    //         id: 6,
    //         title: "Travel Blog",
    //         category: "web-design",
    //         name: t("portfolio.web-design"),
    //         image: "/placeholder.svg",
    //         tags: ["WordPress", "Custom Theme"]
    //     }
    // ];

    const filteredProjects = activeFilter === "all"
        ? parsedProjects
        : parsedProjects.filter(project => project.type === activeFilter);
    console.log(activeFilter)
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
                        <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                            <div className="relative overflow-hidden h-48">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                                <div className="absolute bottom-0 left-0 bg-bvs-purple text-white px-4 py-1 text-sm">
                                    {project.category}
                                </div>
                            </div>

                            <CardContent className="p-6 flex-grow flex flex-col">
                                <h3 className="text-xl font-semibold mb-2 text-bvs-blue">{project.title}</h3>
                                <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>

                                <div className="mb-4">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tech => (
                                            <span
                                                key={tech}
                                                className="bg-bvs-lightPurple/10 text-bvs-purple px-3 py-1 rounded-full text-xs"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <Link
                                    to={`project/${project.id}`}
                                    className="flex items-center text-bvs-purple hover:text-bvs-lightPurple transition-colors gap-1 text-sm mt-auto"
                                >
                                    {t("portfolio.viewProject")} <ExternalLink size={14} />
                                </Link>
                            </CardContent>
                        </Card>
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