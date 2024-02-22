import React, {useEffect} from 'react';
import {SiVelog} from "react-icons/si";
import {RiKakaoTalkFill} from "react-icons/ri";
import {FaGithub} from "react-icons/fa";

const FlopMenu = () => {
    return (
        <div className="flop-list">
            <ul className="flop-menu">
                <li className="flop-item" data-name="kakao">
                    <a href="http://pf.kakao.com/_byerG/chat" target="_blank">
                        <div className="icon">
                            <RiKakaoTalkFill />
                        </div>
                        <div className="name">카톡 채널</div>
                    </a>
                </li>
                <li className="flop-item" data-name="blog">
                    <a href="https://velog.io/@developer_khj" target="_blank">
                        <div className="icon">
                            <SiVelog />
                        </div>
                        <div className="name">블로그</div>
                    </a>
                </li>
                <li className="flop-item" data-name="github">
                    <a href="http://github.com/hjkim1004" target="_blank">
                        <div className="icon">
                            <FaGithub />
                        </div>
                        <div className="name">깃허브</div>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default FlopMenu;
