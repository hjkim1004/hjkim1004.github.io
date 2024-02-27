export interface MultiLanguage {
    korean: string
    english?: string
    chinese?: string
}

export interface IPerson {
    name: MultiLanguage,
    nickname?: string
    birth?: string,
    tel?: string,
    email?: string
    jobs?: string[]
}

export interface IConfig {
    logoText: string
    titleText: string
    profile: IPerson
}

const config: IConfig = {
    logoText: 'Twinkle',
    titleText: "Twinkle's Portfolio",
    profile: {
        name: {korean: '김희정', english: 'Heejeong Kim', chinese: '金禧呈'},
        nickname: 'Twinkle',
        birth: '1997.08.06',
        tel: '010-5705-9594',
        email: 'developer.heejeong@gmail.com',
        jobs: ['Full-Stack Developer', 'Backend Developer']
    }
}
export default config;