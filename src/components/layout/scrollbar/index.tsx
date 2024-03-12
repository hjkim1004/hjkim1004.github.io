import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {RootState} from "@Store/index";

const ScrollBar = () => {
    const [width, setWidth] = useState('0%')
    const offset = useSelector((state: RootState) => state.offset.value)

    useEffect(() => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        setWidth(scrolled.toString() + '%');
    }, [offset]);

    return (
        <div className="scroll-container">
            <div className="scroll-bar" id="myBar" style={{width: width}}></div>
        </div>
    );
};

export default ScrollBar;
