import React from 'react';
import Header from "@Layout/header";
import Footer from "@Layout/footer";
import '@Fonts/default.css'
import HomeSection from "@Pages/main/section/home";
import FlopMenu from "@Layout/flop";
import AboutSection from "@Pages/main/section/about";
import SkillSection from "@Pages/main/section/skill";

const MainPage = () => {
    return (
        <>
            <Header
                title="Twinkle" />

            <main className="content">
                <HomeSection />
                <AboutSection />
                <SkillSection />
            </main>
            <FlopMenu />
            <Footer/>
        </>
    );
};

export default MainPage;
