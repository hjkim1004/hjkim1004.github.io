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
                    학부시절 화면 웹 프로그래밍 강의를 등안시했던 저는 의도치 않게 풀스택 직무를 만나, <br className={"pc"}/>
                    사용자와 소통하는 UI/UX 설계부터 프론트 개발, 정보를 저장하는 DB 설계부터 백엔드 개발까지 <br className={"pc"}/>
                    애플리케이션 전반을 아우르는 풀스택에 큰 매력을 느끼면서 사랑에 빠지게 되었습니다. 💖
                </article>
                <article>
                    도서관 솔루션 개발 회사에서 <b>3+</b>년 근무하며,&nbsp;
                    <b>10+</b>개 다양한 애플리케이션을 SDLC의 전반에 걸쳐 개발한 경험이 있습니다.

                    <br/>

                    사용자/관리자 애플리케이션, API, 배치 프로그램, 하이브리드 웹앱 등 다양한 형태의 <br className={"pc"}/>
                    애플리케이션을 개발하면서 얕지만 넓은 인사이트를 얻게 되었습니다.
                </article>

            </div>
        </section>
    );
};

export default IntroductionSection;
