import React from "react";
import "./App.css";
import background_1 from "./assets/pics/time-lapse-blue-lines.jpg";
import background_2 from "./assets/pics/code.jpeg";
import background_3 from "./assets/pics/phone-screen.jpg";
import project_1 from "./assets/pics/demo.png";
import mail_icon from "./assets/icons/mail.png";
import phone_icon from "./assets/icons/phone.png";
import linkedin_icon from "./assets/icons/linkedin.png";
import github_icon from "./assets/icons/github.png";

import {AboutDiv, SkillPanel} from "./About";
import {ProjectPanel} from "./Project";
import {ContactText, ContactLink} from "./Contact";

let NavBar = () => {
    return (
        <div className="nav-bar">
            <ul>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#project">Project</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    );
};

let SectionBackground = ({ idName, className, bg, title }) => {
    return (
        <div id={idName} style={{ backgroundImage: "url(" + bg + ")" }}>
            <div className={className}>
                <span>{title}</span>
            </div>
        </div>
    );
};

let About = () => {
    return (
        <div id="about">
            <AboutDiv />

            <div className="skill-div">
                <h3>SKILLS</h3>
                <div className="grid-container">
                    <SkillPanel
                        gridPosition="grid-item-left"
                        type="languages"
                        title="Languages"
                        percentage="60%"
                        className="language-div"
                        skills={["Python", "Java", "C/C++"]}
                    />

                    <SkillPanel
                        gridPosition="grid-item-right"
                        type="web"
                        title="Web Technology"
                        percentage="50%"
                        className="web-div"
                        skills={[
                            "HTML",
                            "CSS",
                            "Javascript",
                            "REST",
                            "React",
                            "Django",
                        ]}
                    />

                    <SkillPanel
                        gridPosition="grid-item-left"
                        type="application"
                        title="Applications/Tools"
                        percentage="70%"
                        className="app-div"
                        skills={[
                            "VS Code",
                            "IDEA",
                            "Pycharm",
                            "QT Creator",
                            "MS Office",
                            "Git",
                        ]}
                    />

                    <SkillPanel
                        gridPosition="grid-item-right"
                        type="linux"
                        title="Linux Technology"
                        percentage="75%"
                        className="linux-div"
                        skills={["Bash", "Ansible", "Vagrant", "GIMP"]}
                    />
                </div>
            </div>
            <br />
        </div>
    );
};

let ProjectContainer = () => {
    return (
        <div className="project-div">
            <h3>MY WORK</h3>
            <h5>Here are some of my latest projects</h5>

            <ProjectPanel
                projectImg={project_1}
                title="Project 1"
                alt="Project 1 alt"
                summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam porttitor, arcu ac pharetra mattis, massa mauris
                        mattis tortor, in lobortis libero risus at augue.
                        Integer ac arcu ante. Sed vestibulum lacus at odio
                        cursus auctor id rhoncus erat. Donec tempus velit eros,
                        non varius quam pharetra sed."
            />
          
            <ProjectPanel 
                projectImg={project_1}
                title="Project 2"
                alt="Project 2 alt"
                summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam porttitor, arcu ac pharetra mattis, massa mauris
                        mattis tortor, in lobortis libero risus at augue.
                        Integer ac arcu ante. Sed vestibulum lacus at odio
                        cursus auctor id rhoncus erat. Donec tempus velit eros,
                        non varius quam pharetra sed."
            />

            <ProjectPanel
                projectImg={project_1}
                title="Project 3"
                alt="Project 3 alt"
                summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nam porttitor, arcu ac pharetra mattis, massa mauris
                mattis tortor, in lobortis libero risus at augue.
                Integer ac arcu ante. Sed vestibulum lacus at odio
                cursus auctor id rhoncus erat. Donec tempus velit eros,
                non varius quam pharetra sed." 
            />
            
            <ProjectPanel 
                projectImg={project_1}
                title="Project 4"
                alt="Project 4 alt"
                summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam porttitor, arcu ac pharetra mattis, massa mauris
                        mattis tortor, in lobortis libero risus at augue.
                        Integer ac arcu ante. Sed vestibulum lacus at odio
                        cursus auctor id rhoncus erat. Donec tempus velit eros,
                        non varius quam pharetra sed."
            />
           
            <br />
        </div>
    );
}

function ContactContainer() {
    return (
        <div className="contact-div">
            <h3>CONTACT INFORMATION</h3>

            <ContactText iconSrc={mail_icon} alt="envelope icon" text="101.jason.luong@gmail.com" />
            
            <ContactText iconSrc={phone_icon} alt="phone icon" text="647-394-9025" />

            <ContactLink iconSrc={linkedin_icon} alt="linkedin icon" text="Jason Luong" link="https://www.linkedin.com/in/jason-luong-622a10163/" />

            <ContactLink iconSrc={github_icon} alt="github icon" text="Github" link="https://github.com/Rei-Guin" />
        </div>
    );
}

function App() {
    return (
        <div className="main">
            <NavBar />
            <SectionBackground
                idName="home"
                className="showcase-div"
                bg={background_1}
                title="Project Showcase"
            />
            <About />
            <SectionBackground
                idName="project"
                className="project-title"
                bg={background_2}
                title="Projects"
            />
            <ProjectContainer />
            <SectionBackground
                idName="contact"
                className="contact-title"
                bg={background_3}
                title="Contact"
            />
            <ContactContainer />
        </div>
    );
}

export default App;
