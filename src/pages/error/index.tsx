import React, {useEffect} from 'react';
import NotFound from "@Pages/error/404";
import * as process from "process";

const App = () => {
    useEffect(() => {
        document.title = process.env.TITLE + " | 404 NOT FOUND";
    }, []);

    return (
        <>
            <main id="content">
                <NotFound/>
            </main>
        </>
    );
};

export default App;
