import {ReactNode} from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";

import NicomLogo from '@Images/company_nicom.svg'
import FillaDesignLogo from '@Images/company_filladesign.png'
import KicLogo from '@Images/company_kic.png'

import NicomContent from "@Pages/main/section/career/nicom";
import FillaDesignContent from "@Pages/main/section/career/filladesign";
import NewLifeMissionContent from "@Pages/main/section/career/newlifemission";
import KicContent from "@Pages/main/section/career/kic";

export interface ICareer {
    id: string;
    name: string;
    period?: Date[];
    link?: string;
    logo?: ReactNode | undefined;
    logoColor?: string;
    dotColor?: 'inherit' | 'grey' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | undefined
    type?: '정규직' | '계약직' | '인턴' | '프리랜서' | string;
    company?: boolean
    position: string;
    content?: ReactNode | string | undefined
}

const careers: ICareer[] = [
    {
        id: 'nicom',
        name: '(주) 나이콤 (NICOM)',
        company: true,
        type: '정규직',
        period: [new Date('2020.07.13'), new Date('2023.11.17')],
        link: 'http://enicom.co.kr/',
        dotColor: 'primary',
        logo: (<LazyLoadImage src={NicomLogo} alt={"Nicom 로고"} title={"Nicom 로고"}/>),
        logoColor: '#fff',
        position: '웹 솔루션 개발',
        content: <NicomContent/>,
    },
    {
        id: 'filladesign',
        name: '필러 디자인 (FillaDesign)',
        company: true,
        type: '계약직, 프리랜서',
        period: [new Date('2024.02.01'), new Date('2024.02.29')],
        link: 'http://www.pillardesign.co.kr/',
        dotColor: 'primary',
        logo: (<LazyLoadImage src={FillaDesignLogo} alt={"FillaDesign 로고"} title={"FillaDesign 로고"}/>),
        logoColor: '#060606',
        position: '웹 퍼블리싱',
        content: <FillaDesignContent/>,
    },
    {
        id: 'newlifemission',
        name: '새생명선교회',
        company: true,
        type: '프리랜서',
        period: [new Date('2023.11.22'), new Date('2023.12.04')],
        dotColor: 'primary',
        position: '웹 퍼블리싱',
        content: <NewLifeMissionContent/>,
    },
    {
        id: 'kic',
        name: '(주) KIC Consulting',
        company: true,
        type: '인턴',
        period: [new Date('2019.09.01'), new Date('2019.12.31')],
        link: 'https://kicco.com/',
        dotColor: 'secondary',
        logo: (<LazyLoadImage src={KicLogo} alt={"KIC 로고"} title={"KIC 로고"}/>),
        logoColor: '#333',
        position: 'Atlassian 솔루션 지원',
        content: <KicContent />,
    },
    {
        id: 'academy',
        name: '중앙정보기술인재 개발원',
        company: false,
        type: '국비 교육',
        period: [new Date('2019.07.09'), new Date('2019.08.31')],
        position: 'JAVA 프레임워크 실무 개발자 양성과정_단기 Ⅰ',
        dotColor: 'warning',
        content: '',
    },
    {
        id: 'university',
        name: '한신대학교',
        company: false,
        type: '4년제, 학사 과정',
        period: [new Date('2016.03.01'), new Date('2020.02.14')],
        position: '컴퓨터 공학 전공',
        dotColor: 'warning',
        content: '',
    },
]
export default careers;