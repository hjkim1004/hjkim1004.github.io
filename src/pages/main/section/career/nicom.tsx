import React from 'react';
import LinkPreview from "@Components/section/link";

const NicomContent = () => {
    return (
        <>
            <div className={"title"}>
                "나이콤 웹 솔루션 개발"
            </div>
            <div className={"desc"}>
                <div>주로 백오피스(관리자용 애플리케이션), 외에도 사용자용, API, Batch 프로그램, 하이브리드 웹앱 등 다양한 애플리케이션을 설계부터 개발ㆍ유지보수 등 SDLC 전반에 걸쳐 개발하였습니다.</div><br />
                <div>주요 프로젝트로는 <b>스마트도서관 시스템</b>을 개발한 프로젝트를 소개합니다.</div>
            </div>
            <ul>
                <li><LinkPreview url={"https://m.smartlib.co.kr"} title={"스마트도서관 앱"} /></li>
                <li><LinkPreview url={"https://smart.gdlibrary.or.kr:9525"} title={"강동구 스마트도서관 검색페이지"} /></li>
            </ul>
        </>
    );
};

export default NicomContent;
