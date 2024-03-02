import React, {useEffect} from 'react';
import '@Style/lib/aos/2.3.1/aos.css'
import AOS from "aos";

import Header from "@Layout/header";
import Footer from "@Layout/footer";
import FlopMenu from "@Layout/flop";
import ScrollBar from "@Layout/scrollbar";
import DrawerSection from "@Layout/drawer";

import HomeSection from "@Pages/main/section/home";
import IntroductionSection from "@Pages/main/section/introduction";
import ProfileSection from "@Pages/main/section/profile";
import SkillSection from "@Pages/main/section/skill";
import ArchiveSection from "@Pages/main/section/archive";

const App = () => {
    useEffect(() => {
        AOS.init({duration: 1000});
    }, []);

    return (
        <>
            <ScrollBar/>
            <Header/>
            <main id="content">
                <HomeSection/>
                <IntroductionSection/>
                <ProfileSection/>
                <SkillSection/>
                <ArchiveSection/>
            </main>

            <DrawerSection />
            <FlopMenu/>
            <Footer/>
        </>
    );
};

export default App;
