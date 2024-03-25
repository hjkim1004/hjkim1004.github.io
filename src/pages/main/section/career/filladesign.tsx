import React from 'react';
import LinkPreview from "@Components/section/link";

const FillaDesignContent = () => {
    return (
        <>
            <div className={"title"}>"홈페이지 제작 퍼블리싱"</div>
            <div className={"desc"}>
                <div>LAMP(Linux, Apache, MySQL, PHP) 스택의 그누보드 솔루션 기반으로 홈페이지를 제작하였습니다.</div>
                <div>병원 홈페이지 제작하였습니다. 작업물은 아래 사이트에서 보실 수 있습니다.</div>
            </div>
            <ul>
                <li><LinkPreview title="삼성제이여성의원" url={"http://ssjobgy.com"}/></li>
                <li><LinkPreview title="바른치과의원" url={"http://barundc.com"}/></li>
                <li><LinkPreview title="연세백세치과의원" url={"http://100yeardental.com"}/></li>
            </ul>
        </>
    );
};

export default FillaDesignContent;
