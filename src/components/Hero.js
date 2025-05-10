
import { motion } from "framer-motion";

import { useTranslation } from 'react-i18next';
export default function Hero() {

    const { t } = useTranslation();
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex flex-col justify-center py-4 px-2 lg:px-20 lg:py-0">
            {/* Background elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-20 right-0 w-96 h-96 bg-bvs-light-purple rounded-full filter blur-3xl opacity-20"></div>
                <div className="absolute bottom-20 left-10 w-80 h-80 bg-bvs-purple rounded-full filter blur-3xl opacity-10"></div>
            </div>

            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center pt-20 lg:pt-0">
                {/* Text Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="order-2 lg:order-1"
                >
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-[#1A237E]"
                    >
                        {t('hero.title.part1')}{' '} <span className="gradient-text">{t('hero.title.part2')}{' '}</span> {t('hero.title.part3')}
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl"
                    >
                        {t('hero.description')}
                    </motion.p>

                    <motion.div variants={itemVariants} className="mt-14 lg:mt-0 grid grid-cols-2 gap-4">
                        <button className="bg-primary hover:bg-primary/90 py-2 px-6 text-white rounded-[8px]"> {t('hero.cta_1')}</button>
                        <button className="btn-outline py-2 px-6 text-[#9F8CFD] border border-1 border-primary/40 hover:bg-stone-200/50 hover:text-gray-600 rounded-[8px]"> {t('hero.cta_2')}</button>
                    </motion.div>
                </motion.div>

                {/* Image/Visual */}
                <motion.div
                    className="order-1 lg:order-2 flex justify-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="relative w-full max-w-lg">
                        <div className="absolute -top-4 -left-4 w-72 h-72 bg-bvs-purple rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
                        <div className="absolute -bottom-8 right-4 w-72 h-72 bg-bvs-light-purple rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>

                        <div className="relative">
                            <div className="bg-white rounded-2xl shadow-xl p-2">
                                <div className="rounded-xl bg-gray-50 p-8 flex flex-col items-center">
                                    <div className="w-16 h-2 bg-gray-200 rounded-full mb-4"></div>
                                    <div className="w-full h-40 rounded-lg bg-gray-200 mb-4"></div>
                                    <div className="w-full flex gap-4">
                                        <div className="w-1/2 h-20 rounded-lg bg-gray-200"></div>
                                        <div className="w-1/2 h-20 rounded-lg bg-gray-200"></div>
                                    </div>
                                    <div className="mt-6 w-full flex justify-center">
                                        <div className="w-32 h-8 rounded-md bg-bvs-purple"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-16 lg:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <div className="w-8 h-12 border-2 border-gray-400 rounded-full flex justify-center mb-1">
                    <motion.div
                        className="w-1 h-2 bg-gray-400 rounded-full mt-2"
                        animate={{
                            y: [0, 12, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "loop"
                        }}
                    ></motion.div>
                </div>
                <span className="text-sm text-gray-400"> {t('hero.scroll')}</span>
            </motion.div>
        </section>
    );
}