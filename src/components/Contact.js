import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/toast";
import { useTranslation } from "react-i18next";
import { FaLinkedin, FaInstagram, FaGithub, FaBehanceSquare } from "react-icons/fa";
export default function Contact() {
    const { t } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const { toast } = useToast();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: t("contact.submitSuccessTitle", "Message sent!"),
                description: t("contact.submitSuccessDesc", "Thanks for reaching out. I'll get back to you soon."),
            });
            setFormData({ name: "", email: "", subject: "", message: "" });
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <section id="contact" className="py-20 bg-gray-50 px-2 lg:px-20">
            <div className="container mx-auto px-4" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("contact.title")}</h2>
                    <p className="text-gray-600 max-w-xl mx-auto">{t("contact.subtitle")}</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white p-6 rounded-xl shadow-sm"
                    >
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    {t("contact.name")}
                                </label>
                                <Input
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    {t("contact.email")}
                                </label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    {t("contact.subject")}
                                </label>
                                <Input
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    {t("contact.message")}
                                </label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-2 text-white rounded-[8px] bg-bvs-purple hover:bg-bvs-purple/90"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center">
                                        <svg
                                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            ></path>
                                        </svg>
                                        {t("contact.processing", "Processing...")}
                                    </span>
                                ) : (
                                    t("contact.submit")
                                )}
                            </button>
                        </form>
                    </motion.div>
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
                            <h3 className="text-xl font-semibold mb-4">{t("contact.info")}</h3>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-bvs-lightPurple/20 p-3 rounded-full mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bvs-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-700">{t("contact.addressLabel", "Address")}</h4>
                                        <p className="text-gray-600">{t("contact.address")}</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-bvs-lightPurple/20 p-3 rounded-full mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bvs-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-700">{t("contact.emailLabel", "Email")}</h4>
                                        <p className="text-gray-600">contact@bvsdesign.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-bvs-lightPurple/20 p-3 rounded-full mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bvs-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-700">{t("contact.phoneLabel", "Phone")}</h4>
                                        <p className="text-gray-600">+1 (555) 123-4567</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-bvs-lightPurple/20 p-3 rounded-full mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bvs-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-700">{t("contact.workHoursLabel", "Working Hours")}</h4>
                                        <p className="text-gray-600">{t("contact.workHours")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-bvs-purple to-bvs-lightPurple p-6 text-white rounded-xl">
                            <h3 className="text-xl font-semibold mb-2">{t("contact.letsMeet")}</h3>
                            <p className="mb-4 opacity-90">{t("contact.letsMeetSub")}</p>
                            <div className="flex gap-4">
                                <a
                                    href="https://www.instagram.com/bvsdesign_"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full transition-colors"
                                >
                                    <FaInstagram className="text-white w-5 h-5" />
                                </a>
                                <a
                                    href="https://www.behance.net/nihatnal"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full transition-colors"
                                >
                                    <FaBehanceSquare className="text-white w-5 h-5" />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/nihat-onal-82a4412a0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full transition-colors"
                                >
                                    <FaLinkedin className="text-white w-5 h-5" />
                                </a>



                                <a
                                    href="https://github.com/nihatonal"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full transition-colors"
                                >
                                    <FaGithub className="text-white w-5 h-5" />
                                </a>
                            </div>

                        </div>
                    </motion.div>
                    {/* Diğer yarısını olduğu gibi bırakabilirim istersen — yukarıdaki form kısmı JSX'e dönüştürülmüş oldu. */}
                </div>
            </div>
        </section>
    );
}
