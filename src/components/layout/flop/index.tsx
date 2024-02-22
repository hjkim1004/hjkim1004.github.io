import React, {useEffect} from 'react';
import {IconButton} from "@mui/material";
import {FaMessage} from "react-icons/fa6";

const FlopMenu = () => {
    const kakaoChannelButtonClick = () => {
        window.location.href = 'http://pf.kakao.com/_byerG/chat';
    }

    return (
        <div className="flopmenu">
            <IconButton onClick={kakaoChannelButtonClick}>
                <FaMessage />
            </IconButton>
        </div>
    );
};

export default FlopMenu;
