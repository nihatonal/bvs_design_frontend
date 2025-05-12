import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import profil from '../assets/images/about.jpg'
export default function AboutMe() {
    const { t } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const statistics = [
        { value: 6, label: t("about.statistics.experience") },
        { value: 15, label: t("about.statistics.projects") },
        { value: 98, label: t("about.statistics.clients") }
    ];

    return (
        <section id="about" className="px-2 lg:px-20 py-20 bg-gray-50 overflow-x-hidden">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    ref={ref}
                >
                    {t("about.title")}
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="relative">
                            <div className="absolute -inset-4  bg-bvs-lightPurple/20 rounded-xl -rotate-6"></div>
                            <div className="absolute -inset-4 bg-bvs-purple/20 rounded-xl rotate-3"></div>
                            <img
                                src={profil}
                                alt="Alex Smith - Web Designer"
                                className="relative z-10 w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>

                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h3 className="text-2xl md:text-3xl font-semibold mb-6">
                            {t("about.subtitle")}
                        </h3>

                        <p className="text-gray-600 mb-6">{t("about.paragraph1")}</p>
                        <p className="text-gray-600 mb-10">{t("about.paragraph2")}</p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 text-center">
                            {statistics.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white p-4 rounded-lg shadow-sm"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                >
                                    <span className="text-3xl font-bold text-bvs-purple block mb-1">
                                        {stat.value}+
                                    </span>
                                    <span className="text-sm text-gray-500">
                                        {stat.label}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
