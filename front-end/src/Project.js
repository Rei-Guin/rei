import React from "react";

let ProjectPanel = ({projectImg, title, alt, summary}) => {
    return (
        <div className="project-container">
            <a className="project-entry" href="#">
                <img src={projectImg} alt={alt} />
                <h5>{title}</h5>
                <p>{summary}</p>
            </a>
        </div>
    );
};

export {ProjectPanel};