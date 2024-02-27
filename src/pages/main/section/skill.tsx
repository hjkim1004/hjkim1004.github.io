import React from 'react';
import skills, {SkillGroup} from "@Data/skill";
import Skill from "@Components/section/skill";
const SkillSection = () => {
    return (
        <section id="section_skill" className="section">
            <h1 className="section-title">Skills</h1>
            <div className="section-content">
                <div className="skill-container">

                    {Object.entries(SkillGroup).map(([key, value]) => {
                        return (
                            <div className="skill-group"  key={key}>
                                <div className={"name"} data-aos="fade-up">- {key} -</div>
                                <div className={"list"}>
                                    {skills.filter(skill => skill.group === value).map((skill, index) => {
                                        return (<Skill key={skill.id} {...skill} index={index} />)
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    );
};

export default SkillSection;
