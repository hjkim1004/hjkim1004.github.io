import React, {ReactNode} from "react";
import {RiKakaoTalkFill} from "react-icons/ri";
import {SiVelog} from "react-icons/si";
import {FaGithub} from "react-icons/fa";
import {IoHome, IoIdCard} from "react-icons/io5";

export interface ILink {
    id: string,
    name: string
    link: string
    color?: string
    icon?: ReactNode | undefined
}

export const links: ILink[] = [
    {id: 'kakao', name: '카톡 채널', link: 'https://pf.kakao.com/_byerG/chat', color: '#fae100', icon: (<RiKakaoTalkFill/>)},
    {id: 'blog', name: '블로그', link: 'https://velog.io/@developer_khj', color: '#20c997', icon: (<SiVelog/>)},
    {id: 'github', name: '깃허브', link: 'https://github.com/hjkim1004', color: '#fff', icon: (<FaGithub/>)}
]
export const menus: ILink[] = [
    {id: 'home', name: 'Home', link: '#s_home', icon: (<IoHome />)},
    {id: 'profile', name: 'Profile', link: '#s_profile', icon: (<IoIdCard />)},
    {id: 'career', name: 'Career', link: '#s_career'},
    {id: 'project', name: 'Project', link: '#s_project'},
    {id: 'skill', name: 'Skill', link: '#s_skill'},
]
