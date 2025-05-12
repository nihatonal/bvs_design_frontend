import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function PrivacyPolicy() {
    const { t } = useTranslation();

    return (
        <>

            <Header />

            <main className="pt-24 pb-20">
                <Helmet>
                    <title>{t("privacyPolicy.meta.title")}</title>
                    <meta name="description" content={t("privacyPolicy.meta.description")} />
                </Helmet>

                <div className="container mx-auto px-4 max-w-3xl">
                    <h1 className="text-3xl font-bold mb-6">{t("privacyPolicy.title")}</h1>

                    {t("privacyPolicy.sections", { returnObjects: true }).map((section, index) => (
                        <div key={index} className="mb-6">
                            <h2 className="text-xl font-semibold mb-2">{section.heading}</h2>
                            <p className="text-gray-700 whitespace-pre-line">{section.text}</p>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}
