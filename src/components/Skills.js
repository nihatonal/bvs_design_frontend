import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Skills() {
    const { t } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const skills = {
        frontend: [
            { name: "HTML5", level: 95 },
            { name: "CSS3", level: 90 },
            { name: "JavaScript", level: 85 },
            { name: "React", level: 90 },
            { name: "Tailwind", level: 85 }
        ],
        backend: [
            { name: "Node.js", level: 85 },
            { name: "Express", level: 85 },
            { name: "MongoDB", level: 75 },
            { name: "REST APIs", level: 85 }
        ],
        design: [
            { name: "Figma", level: 90 },
            { name: "UI/UX", level: 85 },
            { name: "Responsive Design", level: 95 },
            { name: "Typography", level: 80 }
        ]
    };

    const technologies = [
        { name: "React", icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
        { name: "HTML5", icon: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
        { name: "CSS3", icon: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
        { name: "JavaScript", icon: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
        { name: "Node.js", icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
        { name: "MongoDB", icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
        { name: "Tailwind", icon: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" },
        { name: "Figma", icon: "https://static.cdnlogo.com/logos/f/43/figma.svg" }
    ];

    const renderSkillBars = (skillCategory) => {
        return skillCategory.map((skill, index) => (
            <div key={index} className="mb-5">
                <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                </div>
                <div className="h-2.5 bg-gray-200 rounded-full">
                    <motion.div
                        className="h-full bg-gradient-to-r from-bvs-purple to-bvs-lightPurple rounded-full"
                        style={{ width: `${skill.level}%` }}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    />
                </div>
            </div>
        ));
    };

    return (
        <section id="skills" className="py-20 px-2 lg:px-20">
            <div className="container mx-auto px-4" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("skills.title")}</h2>
                    <p className="text-gray-600 max-w-xl mx-auto">{t("skills.subtitle")}</p>
                </motion.div>

                {/* Skills Bars */}
                <div className="grid md:grid-cols-3 gap-10 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-xl font-bold mb-6 text-bvs-purple">{t("skills.frontend")}</h3>
                        {renderSkillBars(skills.frontend)}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h3 className="text-xl font-bold mb-6 text-bvs-purple">{t("skills.backend")}</h3>
                        {renderSkillBars(skills.backend)}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <h3 className="text-xl font-bold mb-6 text-bvs-purple">{t("skills.design")}</h3>
                        {renderSkillBars(skills.design)}
                    </motion.div>
                </div>

                {/* Technologies Icons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <h3 className="text-2xl font-bold mb-10 text-center">{t("tech.title")}</h3>

                    <div className="flex flex-wrap justify-center gap-10">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center"
                                initial={{ opacity: 0, y: 10 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                                whileHover={{ scale: 1.1 }}
                            >
                                <div className="w-16 h-16 mb-3">
                                    <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                                </div>
                                <span className="text-sm text-gray-600">{tech.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
