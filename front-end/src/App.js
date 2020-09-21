import React from "react";
import "./App.css";
import background_1 from "./assets/pics/time-lapse-blue-lines.jpg";
import background_2 from "./assets/pics/code.jpeg";
import background_3 from "./assets/pics/phone-screen.jpg";
import portrait from "./assets/pics/portrait.jpg";
import project_1 from "./assets/pics/demo.png";
import mail_icon from "./assets/icons/mail.png"
import phone_icon from "./assets/icons/phone.png"
import linkedin_icon from "./assets/icons/linkedin.png"
import github_icon from "./assets/icons/github.png"

function NavBar() {
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
}

function Home() {
    return (
        <div id="home" style={{ backgroundImage: "url(" + background_1 + ")" }}>
            <div className="showcase-div">
                <span>Projects Showcase</span>
            </div>
        </div>
    );
}

function About() {
    return (
        <div id="about">
            <div className="about-div">
                <h3>ABOUT ME</h3>
                <h5>Technology Enthusiast</h5>
                <p>
                    <img
                        className="portrait"
                        src={portrait}
                        alt="my portrait"
                    ></img>
                    Hello there, my name is Jason and I'm a selftaught
                    programmer.
                    <br />
                    <br />
                    Ever since I was a child, I have had this special bond with
                    computers so I went to college aspiring to become a
                    programmer. In my first semester, I had the chance to learn
                    about Linux and the open-source community. Honestly, I can't
                    remember why but I replaced Windows with Fedora Linux at the
                    end of my first week and it was the best decision I have
                    ever made.
                    <br />
                    <br />
                    During my academic life, I learned about some common
                    programming languages and created several simple projects.
                    By the end of my school life, I managed to learn many common
                    programming and scripting languages. Whenever I have time, I
                    worked on my personal projects, the one I'm most proud of is
                    a console project called S.E.A (Script Executing Assistant).
                    Basically, it's a console app that display a menu and
                    execute the correspond scripts for automated processes.
                    <br />
                    <br />
                    At the end of my 3rd semester, I was fortunate enough to
                    receive a co-op offer from a fin-tech company. However, the
                    position is
                    <em> Unix Automation Developer</em> so I ended up spent most
                    of my time refractor and create automated scripts.
                    Nevertheless, I got the chance to see the professional
                    standards in the field, especially on the server side.
                    <br />
                    <br />
                    After my graduation, I spent a lot of time researching about
                    the process of creating a real project and I'm currently
                    have a few projects that I want to finish. Additionally, I
                    came accross the world of system administrating and I tried
                    to setup a few virtual servers as well. At the moment, I'm
                    learning about the standards of the field and creating a
                    solid portfolio for future employment.
                </p>
                <br />
            </div>

            <div className="skill-div">
                <h3>SKILLS</h3>
                <div className="grid-container">
                    <div className="grid-item-left languages">
                        <h5>Languages</h5>
                        <div className="exp-bar">
                            <div className="inner-bar" style={{width: "60%"}}>60%</div>
                        </div>
                        <Languages />
                    </div>
                    <div className="grid-item-right web">
                        <h5>Web Technology</h5>
                        <div className="exp-bar">
                            <div className="inner-bar" style={{width: "50%"}}>50%</div>
                        </div>
                        <Web />
                    </div>
                    <div className="grid-item-left application">
                        <h5>Applications/Tools</h5>
                        <div className="exp-bar">
                            <div className="inner-bar" style={{width: "70%"}}>70%</div>
                        </div>
                        <Application />
                    </div>
                    <div className="grid-item-right linux">
                        <h5>Linux Technology</h5>
                        <div className="exp-bar">
                            <div className="inner-bar" style={{width: "75%"}}>75%</div>
                        </div>
                        <Linux />
                    </div>
                </div>
            </div>
            <br />
        </div>
    );
}

function Languages() {
    return (
        <div className="outer-div language-div">
            <div className="inner-div inner-language-div">
                <span>Python</span>
            </div>
            <div className="inner-div inner-language-div">
                <span>Java</span>
            </div>
            <div className="inner-div inner-language-div">
                <span>C/C++</span>
            </div>
        </div>
    );
}

function Web() {
    return (
        <div className="outer-div web-div">
            <div className="inner-div inner-web-div">
                <span>HTML</span>
            </div>
            <div className="inner-div inner-web-div">
                <span>CSS</span>
            </div>
            <div className="inner-div inner-web-div">
                <span>Javascript</span>
            </div>
            <div className="inner-div inner-web-div">
                <span>React</span>
            </div>
            <div className="inner-div inner-web-div">
                <span>.NET</span>
            </div>
            <div className="inner-div inner-web-div">
                <span>REST</span>
            </div>
        </div>
    );
}

function Application() {
    return (
        <div className="outer-div app-div">
            <div className="inner-div inner-app-div">
                <span>VS Code</span>
            </div>
            <div className="inner-div inner-app-div">
                <span>IDEA</span>
            </div>
            <div className="inner-div inner-app-div">
                <span>Pycharm</span>
            </div>
            <div className="inner-div inner-app-div">
                <span>QT Creator</span>
            </div>
            <div className="inner-div inner-app-div">
                <span>MS Office</span>
            </div>
            <div className="inner-div inner-app-div">
                <span>Git</span>
            </div>
        </div>
    );
}

function Linux() {
    return (
        <div className="outer-div linux-div">
            <div className="inner-div inner-linux-div">
                <span>Bash</span>
            </div>
            <div className="inner-div inner-linux-div">
                <span>Ansible</span>
            </div>
            <div className="inner-div inner-linux-div">
                <span>Vagrant</span>
            </div>
            <div className="inner-div inner-linux-div">
                <span>GIMP</span>
            </div>
        </div>
    );
}

function Project() {
    return (
        <div
            id="project"
            style={{ backgroundImage: "url(" + background_2 + ")" }}
        >
            <div className="project-title">
                <span>Projects</span>
            </div>
        </div>
    );
}

function ProjectContainer() {
    return (
        <div className="project-div">
            <h3>MY WORK</h3>
            <h5>Here are some of my latest projects</h5>
            <div className="project-container">
                <a className="project-entry" href="#">
                    <img src={project_1} alt="demo" />
                    <h5>Project title</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam porttitor, arcu ac pharetra mattis, massa mauris
                        mattis tortor, in lobortis libero risus at augue.
                        Integer ac arcu ante. Sed vestibulum lacus at odio
                        cursus auctor id rhoncus erat. Donec tempus velit eros,
                        non varius quam pharetra sed.
                    </p>
                </a>
            </div>
            <div className="project-container">
                <a className="project-entry" href="#">
                    <img src={project_1} alt="demo" />
                    <h5>Project title</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam porttitor, arcu ac pharetra mattis, massa mauris
                        mattis tortor, in lobortis libero risus at augue.
                        Integer ac arcu ante. Sed vestibulum lacus at odio
                        cursus auctor id rhoncus erat. Donec tempus velit eros,
                        non varius quam pharetra sed.
                    </p>
                </a>
            </div>
            <div className="project-container">
                <a className="project-entry" href="#">
                    <img src={project_1} alt="demo" />
                    <h5>Project title</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam porttitor, arcu ac pharetra mattis, massa mauris
                        mattis tortor, in lobortis libero risus at augue.
                        Integer ac arcu ante. Sed vestibulum lacus at odio
                        cursus auctor id rhoncus erat. Donec tempus velit eros,
                        non varius quam pharetra sed.
                    </p>
                </a>
            </div>
            <div className="project-container">
                <a className="project-entry" href="#">
                    <img src={project_1} alt="demo" />
                    <h5>Project title</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam porttitor, arcu ac pharetra mattis, massa mauris
                        mattis tortor, in lobortis libero risus at augue.
                        Integer ac arcu ante. Sed vestibulum lacus at odio
                        cursus auctor id rhoncus erat. Donec tempus velit eros,
                        non varius quam pharetra sed.
                    </p>
                </a>
            </div>
            <br />
        </div>
    );
}

function Contact() {
    return (
        <div
            id="contact"
            style={{ backgroundImage: "url(" + background_3 + ")" }}
        >
            <div className="contact-title">
                <span>Contact</span>
            </div>
        </div>
    );
}

function ContactContainer() {
    return (
        <div className="contact-div">
            <h3>CONTACT INFORMATION</h3>
            <div className="contact-entry">
                <img src={mail_icon} alt="envelope icon"/>
                <span>101.jason.luong@gmail.com</span>
            </div>
            <div className="contact-entry">
                <img src={phone_icon} alt="phone icon"/>
                <span>647-394-9025</span>
            </div>
            <div className="contact-entry">
                <img src={linkedin_icon} alt="linkedin icon"/>
                <span><a href="https://www.linkedin.com/in/jason-luong-622a10163/" target="_blank" style={{textDecoration: "none", color: "#0575E6"}}>Jason Luong</a></span>
            </div>
            <div className="contact-entry">
                <img src={github_icon} alt="github icon"/>
                <span><a href="https://github.com/Rei-Guin" target="_blank" style={{textDecoration: "none", color: "#0575E6"}}>Github</a></span>
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="main">
            <NavBar />
            <Home />
            <About />
            <Project />
            <ProjectContainer />
            <Contact />
            <ContactContainer />
        </div>
    );
}

export default App;
