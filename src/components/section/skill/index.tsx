import React from 'react';

export interface ISkillProps {
    name: string
    description: string
    features: string[]
}
const Skill = (props: ISkillProps) => {
    return (
        <div className="skill-box">
            <div className="skill-name">{props.name}</div>
            <div className="skill-desc">{props.description}</div>
            <ul>
                {props.features.map(feature => {
                    return (<li>{feature}</li>)
                })}
            </ul>
        </div>
    );
};

export default Skill;
