import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ServiceModal({ isOpen, onClose, service }) {
    const { t } = useTranslation();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (e) => {
            if (e.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleEscape);
        setIsMounted(true);

        return () => {
            window.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, onClose]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!isMounted) return null;

    const serviceDetails = t(`serviceDetails.${service}`, { returnObjects: true });

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-50"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="bg-white rounded-xl shadow-xl w-full max-w-2xl z-10 relative overflow-hidden"
                    >
                        <div className="h-2 bg-gradient-to-r from-bvs-purple to-bvs-light-purple" />

                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                            <X size={20} />
                        </button>

                        <div className="p-6 md:p-8">
                            <h3 className="text-2xl font-bold mb-4">{serviceDetails.title}</h3>
                            <p className="text-gray-600 mb-6">{serviceDetails.description}</p>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Process */}
                                <div>
                                    <h4 className="font-semibold text-lg mb-3 text-bvs-purple">Process</h4>
                                    <ul className="space-y-2">
                                        {serviceDetails.process?.map((step, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-bvs-light-purple text-bvs-purple text-xs font-semibold mr-3 mt-1">
                                                    {index + 1}
                                                </span>
                                                <span>{step}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Technologies */}
                                <div>
                                    <h4 className="font-semibold text-lg mb-3 text-bvs-purple">Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {serviceDetails.technologies?.map((tech, index) => (
                                            <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="mt-8 flex justify-center">
                                <button
                                    onClick={onClose}
                                    className="px-6 py-2 bg-bvs-purple text-white rounded-lg hover:bg-bvs-purple/90 transition-colors"
                                >
                                    {t("services.closeModal")}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
