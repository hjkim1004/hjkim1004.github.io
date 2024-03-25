import SmartLibraryApp from "@Images/og_smart.png"
import SmartLibrarySearch from "@Images/og_smart_search.png"

export interface OgData {
    url: string;
    title: string;
    description: string;
    image: string;
    site_name?: string;
}


const og = new Map<string, OgData>();
og.set("http://barundc.com", {
    "url": "http://barundc.com",
    "title": "바른치과의원",
    "description": "정확하고 안전한 디지털진료로 환자를 먼저 생각하는 바른치과는 언제나 기본에 충실하고 올바르게 진료합니다.",
    "image": "http://barundc.com/images/og.jpg",
    "site_name": "바른치과의원"
});

og.set("http://ssjobgy.com", {
    "url": "http://ssjobgy.com/",
    "title": "삼성제이여성의원",
    "description": "왕십리역 삼성제이여성의원은 20여 년간 축적한 임상경험과 노하우를 바탕으로 여성질환, 자궁, 난소암 검진, 여성생식기 재생 및 성형술에 특화된 산부인과입니다.",
    "image": "http://ssjobgy.com/images/og.jpg",
    "site_name": "삼성제이여성의원"
});

og.set("http://100yeardental.com", {
    "url": "http://100yeardental.com",
    "title": "연세백세치과의원",
    "description": "자연치아를 살리기 위해 노력하고 환자를 먼저 생각하는 연세백세치과는 언제나 기본에 충실하고 올바르게 진료합니다",
    "image": "http://100yeardental.com/images/og.jpg",
    "site_name": "연세백세치과의원"
})
og.set("https://nlmbookcafe.com", {
    "url": "https://www.nlmbookcafe.com/en/",
    "title": "The New Life Mission Blogs",
    "description": "The New Life Mission Blogs",
    "image": "https://i.ibb.co/C2zg258/facebook-jpg.jpg",
    "site_name": "The New Life Mission"
});

og.set("https://m.smartlib.co.kr", {
    "url": "https://m.smartlib.co.kr/",
    "title": "스마트도서관 앱",
    "description": "스마트도서관(U-도서관)을 보다 편리하고 스마트하게 이용할 수 있도록 도와주는 앱 입니다.",
    image: SmartLibraryApp
})

og.set("https://smart.gdlibrary.or.kr:9525", {
    url: "https://smart.gdlibrary.or.kr:9525/",
    title: "스마트도서관 검색페이지",
    description: "도서관 방문이 어려운 이용자를 위해 별도의 예약신청 없이 가까운 스마트 대출반납기에 비치된 도서를 현장에서 바로 대출할 수 있는 서비스를 제공합니다.",
    image: SmartLibrarySearch
})
export default og;