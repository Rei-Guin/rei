import React from "react";
import portrait from "./assets/pics/portrait.jpg";

let AboutDiv = () => {
    return (
        <div className="about-div">
            <h3>ABOUT ME</h3>
            <h5>Technology Enthusiast</h5>
            <p>
                <img
                    className="portrait"
                    src={portrait}
                    alt="my portrait"
                ></img>
                During my academic life, I learned about some common programming
                languages and created several simple projects. By the end of my
                school life, I managed to learn many common programming and
                scripting languages. Whenever I have time, I worked on my
                personal projects, the one I'm most proud of is a console
                project called S.E.A (Script Executing Assistant). Basically,
                it's a console app that display a menu and execute the
                correspond scripts for automated processes.
                <br />
                <br />
                At the end of my 3rd semester, I was fortunate enough to receive
                a co-op offer from a fin-tech company. However, the position is
                <em> Unix Automation Developer</em> so I ended up spent most of
                my time refractor and create automated scripts. Nevertheless, I
                got the chance to see the professional standards in the field,
                especially on the server side.
                <br />
                <br />
                After my graduation, I spent a lot of time researching about the
                process of creating a real project and I'm currently have a few
                projects that I want to finish. Additionally, I came accross the
                world of system administrating and I tried to setup a few
                virtual servers as well. At the moment, I'm learning about the
                standards of the field and creating a solid portfolio for future
                employment.
            </p>
            <br />
        </div>
    );
};

let SkillPanel = ({
    gridPosition,
    type,
    title,
    percentage,
    className,
    skills,
}) => {
    return (
        <div className={gridPosition}>
            <h5>{title}</h5>
            <div className="exp-bar">
                <div className="inner-bar" style={{ width: percentage }}>
                    {percentage}
                </div>
            </div>
            <SkillItems className={className} skills={skills} />
        </div>
    );
};

let SkillItems = ({ className, skills }) => {
    return (
        <div className={className}>
            {skills.map((skill) => (
                <div className="inner-div">
                    <span>{skill}</span>
                </div>
            ))}
        </div>
    );
};

export {AboutDiv, SkillPanel, SkillItems};