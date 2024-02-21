import React from 'react';
import Header from "@Layout/header";
import Footer from "@Layout/footer";
import '@Fonts/default.css'
import './test.css'
import logo from "@Pages/introduction/react.svg";

const Introduction = () => {
    return (
        <div className="test">
            <Header />
            <main className="content">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </main>
            <Footer/>
        </div>
    );
};

export default Introduction;
