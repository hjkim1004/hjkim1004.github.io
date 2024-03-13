import React, {useEffect} from 'react';

import '@Style/lib/aos/2.3.1/aos.css'
import AOS from "aos";

import HomeSection from "@Pages/space/section/home";
import ScrollBar from "@Layout/scrollbar";
import Header from "@Layout/header";
import DrawerSection from "@Layout/drawer";
import FlopMenu from "@Layout/flop";
import Footer from "@Layout/footer";

const App = () => {
    useEffect(() => {
        AOS.init({duration: 1000});
    }, []);

    return (
        <>
            <main id="content">
                <HomeSection/>
            </main>
        </>
    );
};

export default App;
