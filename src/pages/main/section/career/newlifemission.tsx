import React from 'react';
import LinkPreview from "@Components/section/link";

const NewLifeMissionContent = () => {
    return (
        <div>
            <div className={"title"}>수행 업무: php 기반 블로그 고도화</div>
            <div className={"desc"}>
                <ul>
                    <li>8개 국어 다국어 처리</li>
                    <li>전반적인 UI 개선</li>
                    <li>반응형 (모바일 최적화)</li>
                </ul>
            </div>
            <ul>
                <li><LinkPreview title="NLM Book Cafe" url={"https://nlmbookcafe.com"}/></li>
            </ul>
        </div>
    );
};

export default NewLifeMissionContent;
