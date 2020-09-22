import React from "react";

let ContactText = ({ iconSrc, alt, text }) => {
    return (
        <div className="contact-entry">
            <img src={iconSrc} alt={alt} />
            <span>{text}</span>
        </div>
    );
};

let ContactLink = ({ iconSrc, alt, text, link }) => {
    return (
        <div className="contact-entry">
            <img src={iconSrc} alt={alt} />
            <span>
                <a
                    href={link}
					target="_blank"
					rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "#0575E6" }}
                >
                    {text}
                </a>
            </span>
        </div>
    );
};

export {ContactText, ContactLink};