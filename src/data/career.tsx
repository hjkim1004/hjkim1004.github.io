import {ReactNode} from "react";
import NicomLogo from '@Images/company_nicom.svg'
import FillaDesignLogo from '@Images/company_filladesign.png'
import KicLogo from '@Images/company_kic.png'

export interface ICareer {
    id: string;
    name: string;
    period?: Date[];
    link: string;
    logo: ReactNode | undefined;
    logoColor?: string;
    job: 'full-time-job' | 'freelancer' | 'internship';
    position: string;
}

const careers: ICareer[] = [
    {
        id: 'nicom',
        name: '(주) 나이콤',
        job: 'full-time-job',
        period: [new Date('2020.07.13'), new Date('2023.11.17')],
        link: 'http://enicom.co.kr/',
        logo: (<img src={NicomLogo} alt={"Nicom 로고"}/>),
        logoColor: '#fff',
        position: '웹 솔루션 개발',
    },
    {
        id: 'filladesign',
        name: 'FillaDesign',
        job: 'freelancer',
        link: 'http://www.pillardesign.co.kr/',
        logo: (<img src={FillaDesignLogo} alt={"FillaDesign 로고"}/>),
        logoColor: '#060606',
        position: '홈페이지 퍼블리싱 외주',
    },
    {
        id: 'kic',
        name: 'KIC Consulting',
        job: 'internship',
        period: [new Date('2019.09.01'), new Date('2019.12.31')],
        link: 'https://kicco.com/',
        logo: (<img src={KicLogo} alt={"KIC 로고"}/>),
        logoColor: '#333',
        position: 'Atlassian 솔루션 지원',
    },
]
export default careers;