import {ReactNode} from "react";
import {SiJquery, SiOracle, SiSpring, SiSpringboot,} from "react-icons/si";
import {BiLogoTypescript} from "react-icons/bi";
import {FaCss3Alt, FaDatabase, FaGitAlt, FaGithub, FaHtml5} from "react-icons/fa6";
import {RiJavascriptFill} from "react-icons/ri";
import {GrMysql} from "react-icons/gr";

import IntelliJIcon from '@Images/tech_intellij.svg'
import JavaIcon from '@Images/tech_java.svg'
import MyBatisIcon from '@Images/tech_mybatis.png'
import StsIcon from '@Images/tech_sts.png'
import ApacheIcon from '@Images/tech_apache.svg'
import TomcatIcon from '@Images/tech_tomcat.svg'
import WebStormIcon from '@Images/tech_WebStorm.svg'
import PhpStormIcon from '@Images/tech_PhpStorm.svg'
import PhpIcon from '@Images/tech_php.svg'
import VSCodeIcon from '@Images/tech_vscode.svg'
import PostgresIcon from '@Images/tech_postgresql.svg'
import SqlServerIcon from '@Images/tech_sqlserver.svg'
import ReactIcon from '@Images/tech_react.svg'
import MongoDBIcon from '@Images/tech_mongodb.svg'
import GitHubActionIcon from '@Images/tech_githubactions.svg'
import ActiveMQIcon from '@Images/tech_activemq.png'
import KotlinIcon from '@Images/tech_kotlin.png';
import AndroidStudioIcon from '@Images/tech_android.png';
import SpringSecurityIcon from '@Images/tech_springsecurity.png'
import SwiftIcon from '@Images/tech_swift.svg';
import XCodeIcon from '@Images/tech_xcode.svg';
import FigmaIcon from '@Images/tech_figma.svg';
import {FcLinux} from "react-icons/fc";

export const SkillGroup = {
    CORE: 'core',
    BACK: 'back',
    FRONT: 'front',
    SERVER: 'server',
    RDBMS: 'rdbms',
    NOSQL: 'nosql',
    IDE: 'tool',
    VCS: 'vcs',
    APP: 'app',
    OTHER: 'other'
}

export interface ISKill {
    id: string
    name: string
    rating?: number
    description?: string
    features?: string[]
    icon?: ReactNode | undefined
    color?: string
    group?: string
    index?: number
}

const skills: ISKill[] = [
    /* Core */
    {
        id: 'java',
        name: 'Java',
        rating: 2,
        color: '#de0a17',
        icon: (<img src={JavaIcon} alt={"Java Icon"}/>),
        group: SkillGroup.CORE
    },
    {
        id: 'spring',
        name: 'Spring',
        rating: 2,
        color: '#5cb230',
        icon: (<SiSpring/>),
        group: SkillGroup.CORE
    },
    {
        id: 'springboot',
        name: 'Spring Boot',
        rating: 2,
        icon: (<SiSpringboot/>),
        color: '#68bd45',
        group: SkillGroup.CORE
    },
    {
        id: 'mybatis',
        name: 'MyBatis',
        rating: 2,
        icon: (<img src={MyBatisIcon} alt={"MyBatis Icon"}/>),
        group: SkillGroup.CORE
    },
    {
        id: 'jpa',
        name: 'JPA + QueryDSL',
        rating: 1.5,
        icon: (<FaDatabase/>),
        color: '#68bd45',
        group: SkillGroup.CORE
    },

    /* Back End */
    {
        id: 'springsecurity',
        name: 'Spring Security',
        icon: (<img src={SpringSecurityIcon} alt={"Spring Security Icon"}/>),
        group: SkillGroup.BACK
    },
    {
        id: 'activemq',
        name: 'ActiveMQ',
        icon: (<img src={ActiveMQIcon} alt={"ActiveMQ Icon"}/>),
        group: SkillGroup.BACK
    },

    /* Front End */
    {
        id: 'html',
        name: 'HTML',
        rating: 2,
        icon: (<FaHtml5/>),
        color: '#ff5722',
        group: SkillGroup.FRONT
    },
    {
        id: 'css',
        name: 'CSS',
        rating: 2,
        icon: (<FaCss3Alt/>),
        color: '#1775bb',
        group: SkillGroup.FRONT
    },
    {
        id: 'js',
        name: 'JavaScript',
        rating: 2,
        icon: (<RiJavascriptFill/>),
        color: '#fbaf41',
        group: SkillGroup.FRONT
    },
    {
        id: 'jquery',
        name: 'jQuery',
        rating: 2,
        icon: (<SiJquery/>),
        color: '#0868ac',
        group: SkillGroup.FRONT
    },
    {
        id: 'ts',
        name: 'TypeScript',
        rating: 2,
        icon: (<BiLogoTypescript/>),
        color: '#007bcd',
        group: SkillGroup.FRONT
    },
    {
        id: 'react',
        name: 'React',
        rating: 1.5,
        icon: (<img src={ReactIcon} alt={"React Icon"}/>),
        color: '#61dbfb',
        group: SkillGroup.FRONT
    },

    /* Server */
    {
        id: 'apache',
        name: 'Apache Web Server',
        icon: (<img src={ApacheIcon} alt={"Apache Icon"}/>),
        group: SkillGroup.SERVER
    },
    {
        id: 'tomcat',
        name: 'Tomcat',
        icon: (<img src={TomcatIcon} alt={"Tomcat Icon"}/>),
        group: SkillGroup.SERVER
    },
    {
        id: 'linux',
        name: 'Linux',
        icon: (<FcLinux/>),
        group: SkillGroup.SERVER
    },
    {
        id: 'githubactions',
        name: 'GitHub Actions',
        icon: (<img src={GitHubActionIcon} alt={"GitHub Actions Icon"}/>),
        group: SkillGroup.SERVER
    },

    /* Database */
    {
        id: 'postgres',
        name: 'PostgreSQL',
        icon: (<img src={PostgresIcon} alt={"React Icon"}/>),
        group: SkillGroup.RDBMS
    },
    {
        id: 'mssql',
        name: 'SQL Server',
        icon: (<img src={SqlServerIcon} alt={"SQL Server Icon"}/>),
        group: SkillGroup.RDBMS
    },
    {
        id: 'mysql',
        name: 'MySQL',
        icon: (<GrMysql/>),
        color: '#00718b',
        group: SkillGroup.RDBMS
    },
    {
        id: 'oracle',
        name: 'Oracle',
        icon: (<SiOracle/>),
        color: '#f70000',
        group: SkillGroup.RDBMS
    },
    {
        id: 'mongo',
        name: 'MongoDB',
        rating: 1,
        icon: (<img src={MongoDBIcon} alt={"MongoDB Icon"}/>),
        group: SkillGroup.NOSQL
    },

    /* Tool */
    {
        id: 'sts',
        name: 'STS',
        icon: (<img src={StsIcon} alt={"STS Icon"}/>),
        group: SkillGroup.IDE
    },
    {
        id: 'intellij',
        name: 'IntelliJ',
        icon: (<img src={IntelliJIcon} alt={"IntelliJ Icon"}/>),
        group: SkillGroup.IDE
    },
    {
        id: 'webstorm',
        name: 'WebStorm',
        icon: (<img src={WebStormIcon} alt={"WebStorm Icon"}/>),
        group: SkillGroup.IDE
    },

    /* VCS */
    {
        id: 'git',
        name: 'Git',
        rating: 2,
        icon: (<FaGitAlt/>),
        color: '#e84d31',
        group: SkillGroup.VCS
    },
    {
        id: 'github',
        name: 'GitHub',
        icon: (<FaGithub/>),
        color: '#000',
        group: SkillGroup.VCS
    },

    /* App */
    {
        id: 'kotlin',
        name: 'kotlin',
        rating: 1,
        icon: (<img src={KotlinIcon} alt={"Kotlin Icon"}/>),
        group: SkillGroup.APP
    },
    {
        id: 'android',
        name: 'Android Studio',
        rating: 1,
        icon: (<img src={AndroidStudioIcon} alt={"Android Studio Icon"}/>),
        group: SkillGroup.APP
    },
    {
        id: 'swift',
        name: 'swift',
        rating: 1,
        icon: (<img src={SwiftIcon} alt={"Swift Icon"}/>),
        group: SkillGroup.APP
    },
    {
        id: 'xcode',
        name: 'xcode',
        rating: 1,
        icon: (<img src={XCodeIcon} alt={"XCode Icon"}/>),
        group: SkillGroup.APP
    },

    /* Other */
    {
        id: 'php',
        name: 'PHP',
        rating: 1,
        icon: (<img src={PhpIcon} alt={"Php Icon"}/>),
        group: SkillGroup.OTHER
    },
    {
        id: 'phpstorm',
        name: 'PhpStorm',
        icon: (<img src={PhpStormIcon} alt={"PhpStorm Icon"}/>),
        group: SkillGroup.OTHER
    },
    {
        id: 'vscode',
        name: 'VS Code',
        icon: (<img src={VSCodeIcon} alt={"VSCode Icon"}/>),
        group: SkillGroup.OTHER
    },

    {
        id: 'figma',
        name: 'figma',
        icon: (<img src={FigmaIcon} alt={"Figma Icon"}/>),
        group: SkillGroup.OTHER
    },
];
export default skills;