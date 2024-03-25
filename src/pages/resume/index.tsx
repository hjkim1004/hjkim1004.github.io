import React from 'react';
import Header from "@Layout/header";
import Footer from "@Layout/footer";
import ScrollBar from "@Layout/scrollbar";
import DrawerSection from "@Layout/drawer";

const App = () => {
    return (
        <>
            <Header/>
            <ScrollBar />
            <main>
                Resume
            </main>
            <DrawerSection />
            <Footer />
        </>
    );
};

export default App;
