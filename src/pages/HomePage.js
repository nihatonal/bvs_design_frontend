import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Pricing from '../components/Pricing';
import Skills from '../components/Skills';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
function HomePage() {


    useEffect(() => {
        const scrollToId = sessionStorage.getItem('scrollTo');
        if (scrollToId) {
            const section = document.getElementById(scrollToId);
            if (section) {
                setTimeout(() => {
                    section.scrollIntoView({ behavior: 'smooth' });
                    sessionStorage.removeItem('scrollTo');
                }, 300); // Gerekirse biraz beklet
            }
        }
    }, []);
    return (
        <div>
            <Helmet>
                <title>BVS Design | Web Developer & Designer</title>
                <meta name="description" content="Experienced web developer & designer creating fast, responsive and user-friendly websites." />
                <meta name="keywords" content="Web Developer, Web Designer, Frontend Developer, React Developer, Portfolio" />
                <meta name="author" content="Nihat Onal" />

                {/* Open Graph / Facebook */}
                <meta property="og:title" content="Alex Smith | Web Developer & Designer" />
                <meta property="og:description" content="Experienced web developer & designer creating fast, responsive and user-friendly websites." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://alexsmith.dev/" />
                <meta property="og:image" content="https://alexsmith.dev/preview.jpg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Alex Smith | Web Developer & Designer" />
                <meta name="twitter:description" content="Experienced web developer & designer creating fast, responsive and user-friendly websites." />
                <meta name="twitter:image" content="https://alexsmith.dev/preview.jpg" />
            </Helmet>
            <Header />
            <Hero />
            <AboutMe />
            <Services />
            <Portfolio />
            <Pricing />
            <CTA />
            <Skills />
            <Contact />
            <Footer />
        </div>
    );
}

export default HomePage;