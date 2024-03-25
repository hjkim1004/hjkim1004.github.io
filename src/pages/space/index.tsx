import React, {useEffect} from 'react';

import '@Style/lib/aos/2.3.1/aos.css'
import AOS from "aos";

import HomeSection from "@Pages/space/section/home";
import Header from "@Layout/header";
import DrawerSection from "@Layout/drawer";

const App = () => {
    useEffect(() => {
        AOS.init({duration: 1000});
    }, []);

    return (
        <>
            <Header/>
            <main id="content">
                <HomeSection />
            </main>
            <DrawerSection />
        </>
    );
};

export default App;
