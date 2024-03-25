export interface OgData {
    url: string;
    title: string;
    description: string;
    image: string;
}


const og = new Map<string, OgData>([
    [
        "http://barundc.com",
        {
            "url": "http://barundc.com",
            "title": "바른치과의원",
            "description": "정확하고 안전한 디지털진료로 환자를 먼저 생각하는 바른치과는 언제나 기본에 충실하고 올바르게 진료합니다.",
            "image": "http://barundc.com/images/og.jpg"
        }
    ]
]);

export default og;