import React from 'react';
import {mbti, profiles} from "@Data/config";
import MyProfile from "@Images/my_profile.png"
import MyMbti from "@Images/my_mbti.png"
import Carousel from "react-material-ui-carousel";
import {LinearProgress} from "@mui/material";
import {FaChevronLeft, FaChevronRight, FaStar} from "react-icons/fa6";
import Tippy from "@tippyjs/react";
import {LazyLoadImage} from "react-lazy-load-image-component";

const ProfileSection = () => {
    return (
        <section id="s_profile" className="section">
            <h2 className="section-title">Profile</h2>
            <div className="section-content">
                <Carousel
                    autoPlay={false}
                    interval={5000}
                    swipe={true}
                    navButtonsAlwaysVisible={true}
                    navButtonsProps={{
                        style: {
                            background: "transparent",
                            color: 'rgba(255,255,255,0.8)'
                        }
                    }}
                    PrevIcon={<FaChevronLeft/>}
                    NextIcon={<FaChevronRight/>}
                    IndicatorIcon={<FaStar/>}
                    indicatorIconButtonProps={{
                        style: {
                            padding: '0.5rem',
                            color: 'rgba(255,255,255,0.8)',
                        }
                    }}
                    activeIndicatorIconButtonProps={{
                        style: {
                            color: 'rgb(79 92 255)'
                        }
                    }}
                >
                    <div className="profile-container">
                        <div className={"profile-img"}>
                            <LazyLoadImage height={160} src={MyProfile} alt={"프로필 이미지"} title={"프로필 이미지"}/>
                            <div translate="no">
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
                    </div>
                    <div className="profile-container">
                        <div className={"profile-img"}>
                            <LazyLoadImage height={160} src={MyMbti} alt={"MBTI 성격유형"} title={"MBTI 성격유형"}/>
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
                    </div>
                    <div className={"profile-container"}>
                        <div className={"profile-info"}>
                            <article>
                                안녕하세요. 4년차 풀스택 개발자 김희정입니다. 🙌
                            </article>
                            <article>
                                자체 시스템 개발 회사에서 <b>웹 솔루션 개발 직무</b>로 근무하며, <br className={"pc"}/>
                                백오피스부터 하이브리드 웹앱, 배치 프로그램, 미들웨어 등 다양한 업무를 경험하였습니다.

                                <br/>
                                <br/>

                                신입 때부터 사수 없이 실무에 투입되어, <br className={"pc"}/>
                                총 <b>10개 이상</b>의 프로젝트를 <b>소프트웨어 생명주기(SDLC) 전반</b>에 걸쳐 <b>주도 개발</b>하였습니다.

                                <br/>
                                <br/>

                                이를 통해 시스템의 전반적인 구조를 이해하고 설계 및 개발하는 능력을 길러, <br className={"pc"}/>
                                하나의 애플리케이션을 전반적으로 개발할 수 있는 능력을 갖추었습니다.
                            </article>
                        </div>
                    </div>
                </Carousel>
            </div>
        </section>
    );
};

export default ProfileSection;
