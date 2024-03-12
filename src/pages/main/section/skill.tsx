import React, {useEffect, useRef, useState} from 'react';
import skills, {SkillGroup} from "@Data/skill";
import Skill from "@Components/section/skill";
import {Button} from "@mui/material";
import {changeOffset} from "@Store/slice/offset";
import {useDispatch} from "react-redux";

const SkillSection = () => {
    const dispatch = useDispatch();
    const [moreButtonHide, setMoreButtonHide] = useState(true);
    const contentRef = useRef<HTMLDivElement>(null)

    const readEffect = (onEffected?: (height:number) => number) => {
        const {current: content} = contentRef;

        if (!content) return;
        let maxHeight = Number(content.style.maxHeight.replace('px', ''));
        if (onEffected) {
            const afterHeight = onEffected(maxHeight);
            content.style.maxHeight = (afterHeight) + 'px'
            maxHeight = afterHeight;
        }

        if (maxHeight < content.scrollHeight) {
            setMoreButtonHide(false);
        } else {
            setMoreButtonHide(true);
        }
    }
    const readMore = () => {
        readEffect(height => height + 500)
    }

    useEffect(() => {
        readEffect();
    }, []);

    return (
        <section id="section_skill" className="section">
            <h1 className="section-title">Skills</h1>
            <div className="section-content" ref={contentRef} style={{maxHeight: '700px'}}>
                <div className="skill-container">
                    {Object.entries(SkillGroup).map(([key, value]) => {
                        return (
                            <div className="skill-group" key={key}>
                                <div className={"name"} data-aos="fade-up">- {key} -</div>
                                <div className={"list"}>
                                    {skills.filter(skill => skill.group === value).map((skill, index) => {
                                        return (<Skill key={skill.id} {...skill} index={index}/>)
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div data-aos="fade-up" hidden={moreButtonHide}>
                <Button
                    variant={"contained"}
                    className={"btn-black btn-more"}
                    onClick={readMore}>
                    Read More
                </Button>
            </div>
        </section>
    );
};

export default SkillSection;
