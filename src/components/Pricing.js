
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";
export default function Pricing() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const { t } = useTranslation();
    const plans = [
        {
            key: "basic",
            highlighted: false
        },
        {
            key: "pro",
            highlighted: true
        },
        {
            key: "premium",
            highlighted: false
        }
    ].map(plan => ({
        ...plan,
        name: t(`pricing.${plan.key}.title`),
        price: t(`pricing.${plan.key}.price`),
        description: t(`pricing.${plan.key}.description`),
        features: t(`pricing.${plan.key}.features`, { returnObjects: true }),
        cta: t(`pricing.${plan.key}.cta`)
    }));

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

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
        <section id="pricing" className="py-20 bg-gray-50 px-2 lg:px-20">
            <div className="container mx-auto px-4" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t(`pricing.title`)}</h2>
                    <p className="text-gray-600 max-w-xl mx-auto">{t(`pricing.subtitle`)}</p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`rounded-xl overflow-hidden ${plan.highlighted
                                ? 'shadow-xl border-bvs-purple border-2 transform md:-translate-y-4 relative'
                                : 'shadow-md border border-gray-100'
                                }`}
                        >
                            {plan.highlighted && (
                                <div className="absolute top-6 right-4 -mr-4 -mt-4 bg-bvs-purple text-white text-xs font-bold px-3 py-1 rounded-full transform rotate-12">
                                    {t("pricing.popular")} {/* örnek: locale/common.json içinde "popular": "Popular" */}
                                </div>
                            )}

                            <div className={`p-6 md:p-8- bg-white ${plan.highlighted ? 'bg-gradient-to-b from-white to-bvs-light-purple/5' : ''}`}>
                                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                                <p className="text-gray-600 mb-4 text-sm">{plan.description}</p>
                                <div className="mb-6">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <div className={`flex-shrink-0 mr-2 mt-1 ${plan.highlighted ? 'text-bvs-purple' : 'text-gray-700'}`}>
                                                <Check size={18} />
                                            </div>
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    className={`w-full py-3 rounded-lg font-medium ${plan.highlighted
                                        ? 'bg-bvs-purple text-white hover:bg-bvs-purple/90'
                                        : 'bg-white border border-bvs-purple text-bvs-purple hover:bg-bvs-purple/5'
                                        } transition-colors`}
                                    onClick={() => scrollToSection('contact')}
                                >
                                    {plan.cta}
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.p
                    className="text-center mt-12 text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    {t(`pricing.custom`)}
                </motion.p>
            </div>
        </section >
    );
}