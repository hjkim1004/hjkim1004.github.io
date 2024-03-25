import React from 'react';
import NotFoundImage from '@Images/error_404.jpg'
import {Button} from "@mui/material";
import {LazyLoadImage} from "react-lazy-load-image-component";

const NotFound = () => {
    return (
        <section className={"section"} id={"s_error"}>
            <div className={"section-card"}>
                <div className={"section-img"}>
                    <LazyLoadImage src={NotFoundImage} alt={"404 NOT FOUND"} title={"404 NOT FOUND"}/>
                </div>
                <h1 className={"section-title"}>
                    Oops! Page Not Found</h1>
                <div className={"section-desc"}>
                    We can't seem to find the page you're looking for
                </div>
                <div className={"section-content"}>
                    <Button variant={"contained"} color={"primary"} onClick={event => {
                        window.location.href = '/'
                    }}>
                        Go to Homepage
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
