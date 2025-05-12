
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
export default function CTA() {
    const { t } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
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
        <section className="py-20 bg-gradient-to-r from-bvs-purple to-bvs-lightPurple text-white px-2 lg:px-20">
            <div className="container mx-auto px-4 text-center" ref={ref}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold mb-6"
                >
                    {t(`cta.title`)}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl max-w-4xl mx-auto mb-10 opacity-90"
                >
                    {t(`cta.subtitle`)}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <button
                        className="bg-white text-bvs-purple hover:bg-white/90 px-8 py-2 rounded-[8px] text-lg"
                        onClick={() => scrollToSection('contact')}
                    >
                        {t(`cta.button`)}
                    </button>
                </motion.div>
            </div>
        </section>
    );
}