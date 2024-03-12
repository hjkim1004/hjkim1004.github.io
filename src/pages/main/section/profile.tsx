import React from 'react';
import {mbti, profiles} from "@Data/config";
import MyProfile from "@Images/my_profile.png"
import MyMbti from "@Images/my_mbti.svg"
import Carousel from "react-material-ui-carousel";
import {LinearProgress, Paper} from "@mui/material";
import {FaChevronLeft, FaChevronRight, FaStar} from "react-icons/fa6";
import Tippy from "@tippyjs/react";

const ProfileSection = () => {
    return (
        <section id="section_profile" className="section">
            <h1 className="section-title">Profile</h1>
            <div className="section-content">
                <Carousel
                    autoPlay={false}
                    interval={5000}
                    swipe={true}
                    navButtonsAlwaysVisible={true}
                    navButtonsProps={{
                        style: {
                            background: "transparent",
                            color: '#333'
                        }
                    }}
                    PrevIcon={<FaChevronLeft/>}
                    NextIcon={<FaChevronRight/>}
                    IndicatorIcon={<FaStar/>}
                    indicatorIconButtonProps={{
                        style: {
                            padding: '0.5rem',
                        }
                    }}
                    activeIndicatorIconButtonProps={{
                        style: {
                            color: '#333'
                        }
                    }}
                >
                    <Paper className="profile-container">
                        <div className={"profile-img"}>
                            <img src={MyProfile}/>
                            <div>
                                Twinkle
                            </div>
                        </div>
                        <div className={"profile-info"}>
                            {profiles.map((profile, index) => {
                                return (
                                    <div className="profile-box" key={"profile-" + (index + 1)} data-aos="zoom-in"
                                         data-aos-delay={(index + 1) * 100}>
                                        <div className="icon">{profile.icon}</div>
                                        <div className="box">
                                            <div className="title">{profile.title}</div>
                                            <div className="text">{profile.text}</div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </Paper>
                    <Paper className="profile-container">
                        <div className={"profile-img"}>
                            <img src={MyMbti} alt={"MBTI 성격유형"}/>
                            <div>
                                통솔자 (ENTJ)
                            </div>
                        </div>
                        <div className={"profile-info"}>
                            {mbti.map((prop, index) => {
                                return (
                                    <div className="profile-mbti" key={"profile-mbti-" + index} data-aos="zoom-in"
                                         data-aos-delay={(index + 1) * 100}>
                                        <label className={"profile-label profile-label-left"}>{prop.left}</label>
                                        <Tippy content={prop.tooltip}>
                                            <LinearProgress color={prop.color} variant="determinate" value={prop.val}
                                                            className={"profile-progress"}/>
                                        </Tippy>
                                        <label className={"profile-label profile-label-right"}>{prop.right}</label>
                                    </div>
                                )
                            })}
                        </div>
                    </Paper>
                </Carousel>
            </div>
        </section>
    );
};

export default ProfileSection;
