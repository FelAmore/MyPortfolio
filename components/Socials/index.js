import React from "react";
import Button from "../Button";

import yourData from "../../data/portfolio.json";

// Font Awesome CSS (only if you're using Font Awesome)
import "@fortawesome/fontawesome-free/css/all.min.css";

const Socials = ({ className }) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {yourData.socials.map((social, index) => (
        <Button key={index} onClick={() => window.open(social.link)}>
          {/* Add Icons */}
          {social.title === "Github" && (
            <i className="fab fa-github text-xl mr-2"></i>
          )}
          {social.title === "LinkedIn" && (
            <i className="fab fa-linkedin text-xl mr-2"></i>
          )}
          {social.title === "Email" && (
            <i className="fas fa-envelope text-xl mr-2"></i>
          )}
          {/* Social Title */}
          {social.title}
        </Button>
      ))}
    </div>
  );
};

export default Socials;
