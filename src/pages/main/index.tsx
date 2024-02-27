import React, {useEffect} from 'react';
import Header from "@Layout/header";
import Footer from "@Layout/footer";
import HomeSection from "@Pages/main/section/home";
import FlopMenu from "@Layout/flop";
import SkillSection from "@Pages/main/section/skill";
import ArchiveSection from "@Pages/main/section/archive";

import '@Style/lib/aos/2.3.1/aos.css'
import AOS from "aos";
import ProfileSection from "@Pages/main/section/profile";
import ScrollBar from "@Layout/scrollbar";

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
                <ProfileSection/>
                <SkillSection/>
                <ArchiveSection/>
            </main>
            <FlopMenu/>
            <Footer/>
        </>
    );
};

export default App;
