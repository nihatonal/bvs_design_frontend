import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function TermsOfService() {
    const { t } = useTranslation();

    const sections = t("termsOfService.sections", { returnObjects: true });

    return (
        <><Header />

            <div className="max-w-3xl mx-auto px-4 py-12 text-sm leading-6 text-neutral-800">
                <Helmet>
                    <title>{t("termsOfService.meta.title")}</title>
                    <meta name="description" content={t("termsOfService.meta.description")} />
                </Helmet>

                <h1 className="text-2xl font-semibold mb-6">{t("termsOfService.title")}</h1>

                {sections.map((section, idx) => (
                    <div key={idx} className="mb-6">
                        <h2 className="font-semibold mb-2">{section.heading}</h2>
                        <p>{section.text}</p>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
}
