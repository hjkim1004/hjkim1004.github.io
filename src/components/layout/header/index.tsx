import React, {useEffect, useState} from 'react';
import Logo from '@Images/star-bubble.png'

interface IHeaderProps {
    title: string
}
const Header = (props: IHeaderProps) => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.scrollY);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className={offset > 0 ? "header scrolled": "header"}>
            <div className="inner">
                <div className="header-logo">
                    <img src={Logo} alt="메인 로고 이미지"/>
                </div>
                <div className="header-title">{props.title}</div>
                <div className="flex-1"></div>
                <ul className="header-nav">
                    <li><a href="#section_home">Home</a></li>
                    <li><a href="#section_about">About</a></li>
                    <li><a href="#section_skill">Skills</a></li>
                    <li><a href="#section_archive">Archives</a></li>
                    <li><a href="#section_project">Projects</a></li>
                    <li><a href="#section_contact">Contact</a></li>
                </ul>
            </div>

        </header>
    );
};

export default Header;
