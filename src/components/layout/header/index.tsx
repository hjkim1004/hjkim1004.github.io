import React, {useEffect} from 'react';
import Logo from '@Images/star-bubble.png'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@Store/index";
import {IconButton} from "@mui/material";
import {SlMenu} from "react-icons/sl";
import {changeOffset} from "@Store/slice/offset";
import config from "@Data/config";
import {menus} from "@Data/link";
import {DrawerType, openDrawer} from "@Store/slice/drawer";
import {BsMoonStarsFill, BsSunFill} from "react-icons/bs";
import {changeTheme, ThemeType} from "@Store/slice/theme";

const Header = () => {
    const dispatch = useDispatch()
    const offset = useSelector((state: RootState) => state.offset.value)
    const theme = useSelector((state: RootState) => state.theme.value)

    useEffect(() => {
        const onScroll = () => dispatch(changeOffset(window.scrollY));

        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, {passive: true});
        return () => window.removeEventListener('scroll', onScroll);
    }, []);


    return (
        <header className={offset > 0 ? "header scrolled" : "header"}>
            <div className="inner">
                <div className="logo">
                    <img src={Logo} alt="메인 로고 이미지"/>
                    <div className="title">{config.logoText}</div>
                </div>
                <div className="flex-1"></div>
                <ul className="header-nav">
                    {menus.map(menu => {
                        return (
                            <li key={'menu_' + menu.id}><a href={menu.link}>{menu.name}</a></li>
                        )
                    })}
                </ul>
                <IconButton className="btn-icon" onClick={() => {
                    if(theme === ThemeType.DARK){
                        dispatch(changeTheme(ThemeType.LIGHT))
                    } else {
                        dispatch(changeTheme(ThemeType.DARK))
                    }
                }}>
                    {theme === ThemeType.DARK ? (
                        <BsSunFill />
                    ): (
                        <BsMoonStarsFill />
                    )}

                </IconButton>
                <IconButton className="header-icon" onClick={() => {
                    dispatch(openDrawer(DrawerType.SIDEBAR))
                }}>
                    <SlMenu/>
                </IconButton>
            </div>
        </header>
    );
};

export default Header;
