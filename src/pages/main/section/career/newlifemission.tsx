import React from 'react';
import LinkPreview from "@Components/section/link";

const NewLifeMissionContent = () => {
    return (
        <div>
            <div className={"title"}>"기존 php 기반 블로그 고도화"</div>
            <div className={"desc"}>다국어 처리 추가, 전반적인 UI 개선, 반응형(모바일 최적화)</div>
            <ul>
                <li><LinkPreview title="NLM Book Cafe" url={"https://nlmbookcafe.com"}/></li>
            </ul>
        </div>
    );
};

export default NewLifeMissionContent;
