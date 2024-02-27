import React from 'react';
import {ISKill} from "@Data/skill";
import './style.css'
import {Rating} from "@mui/material";

const Skill = (props: ISKill) => {
    return (
        <div className="skill-box" data-aos="zoom-in" data-aos-delay={props.index ? props.index * 100 : 0}>
            <div className="icon" style={{color: props.color}}>{props.icon}</div>
            <div className="name">{props.name}</div>
            {props.rating? (
                <div className="rating">
                    <Rating value={props.rating} precision={0.5} max={3} size="small" readOnly/>
                </div>
            ): ''}
            <div className="desc">{props.description}</div>
            <ul>
                {props.features?.map(feature => {
                    return (<li>{feature}</li>)
                })}
            </ul>
        </div>
    );
};

export default Skill;
