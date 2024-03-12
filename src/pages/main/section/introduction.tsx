import React from 'react';

const IntroductionSection = () => {
    return (
        <section id="section_intro" className="section">
            <h1 className="section-title">Introduction</h1>
            <div className="section-content">
                <article>
                    안녕하세요. 개발을 사랑하는 풀스택 개발자 김희정(Twinkle) 입니다. 🙌
                </article>
                <article>
                    도서관 솔루션 개발 회사에서 <b>3+</b>년 근무하며서, <br className={"pc"}/>
                    <b>10+</b>개 다양한 애플리케이션을 SDLC의 전반에 걸쳐 개발하였습니다.

                    <br/>

                    사용자 웹, 관리자 웹, API, 배치 프로그램, 하이브리드 웹앱 등 다양한 형태의 <br className={"pc"}/>
                    애플리케이션을 개발하면서 얕지만 넓은 인사이트를 얻게 되었습니다.
                </article>
                <article>
                    학부시절 웹을 단순히 HTML 코드라며 등안시했던 저는 풀스택 직무를 만나, <br className={"pc"}/>
                    사용자와 소통하는 UI/UX 설계부터 프론트 개발, 정보를 저장하는 DB 설계부터 백엔드 개발까지 <br className={"pc"}/>
                    웹 애플리케이션 전반을 아우르는 풀스택을 경험하면서 광범위한 웹의 늪에 빠지게 되었습니다.<br className={"pc"}/>
                    웹의 깊이와 분포도를 보면서 정보화 사회에서 웹의 역할과 중요성을 깨닫게 되었고, <br className={"pc"}/>
                    개발 업무를 하면서 새로운 시도에 대한 욕구와 배움의 즐거움을 느끼면서 사랑에 빠지게 되었습니다. 💖
                </article>
            </div>
        </section>
    );
};

export default IntroductionSection;
