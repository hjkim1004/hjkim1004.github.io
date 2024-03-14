import React from 'react';
import Timeline from '@mui/lab/Timeline';
import {
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from "@mui/lab";
import careers, {ICareer} from "@Data/career";
import {DateUtil} from "@Utils/date";

const Career = (career: ICareer) => {
    return (
        <div className={"career-section"}>
            <div className={"career-title"}>{career.name}</div>
            <div className={"career-pos"}>{career.company ? '직무' : '과정'}: <b>{career.position}</b></div>
            <div className={"mobile"}>
                {career.type ? (
                    <div>
                        {career.company ? '계약 형태' : '구분'}: {career.type}
                    </div>
                ) : null
                }
            </div>
            <div className={"mobile"}>
                기간: {career.period?.map(e => DateUtil.getDateToStr({date: e, returnType: 'day'})).join(" ~ ")}
            </div>
            <div className={"career-content"}>{career.content}</div>
        </div>
    );
}
const CareerSection = () => {
    return (
        <section id="s_career" className="section">
            <h2 className="section-title">Career</h2>
            <div className="section-content">
                <Timeline>
                    {careers.map((career, index) => (
                        <TimelineItem key={"career-" + career.id} data-aos="fade-up"
                                      data-aos-delay={(index + 1) * 100}>
                            <TimelineOppositeContent className={"pc"}>
                                <div>
                                    {career.period?.map(e => DateUtil.getDateToStr({date: e, returnType: 'day'}))
                                        .join(" ~ ")}
                                </div>
                                {career.type ? (
                                    <div>
                                        ({career.type})
                                    </div>
                                ) : null
                                }
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" color={career.dotColor}/>
                                {index < careers.length - 1 ? (
                                    <TimelineConnector/>
                                ) : null}
                            </TimelineSeparator>
                            <TimelineContent>
                                <Career {...career}/>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </div>
        </section>
    );
};

export default CareerSection;
