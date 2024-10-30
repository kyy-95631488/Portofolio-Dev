import React from "react";
import "./Progress.css";
import { techStack } from "../../portfolio";
import { Fade } from "react-reveal";
import skillImage from "../../assests/images/skill.svg"; // Import the image statically

export default function StackProgress(_props) {
    if (techStack.viewSkillBars) {
        return (
            <Fade bottom duration={2000} distance="40px">
                <div className="skills-container">
                    <div className="skills-bar">
                        <h1 className="skills-heading">Proficiency</h1>
                        {techStack.experience.map((exp, index) => {
                            const progressStyle = {
                                width: exp.progressPercentage
                            };
                            return (
                                <div className="skill" key={index}>
                                    <p>{exp.Stack}</p>
                                    <div className="meter">
                                        <span style={progressStyle}></span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="skills-image">
                        <img alt="Skills" src={skillImage} />
                    </div>
                </div>
            </Fade>
        );
    }
    return null;
}
