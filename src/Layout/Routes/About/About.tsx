import React from "react";
import "../../../App.css";
type PropType = {
  title: string;
  desc: string;
};
type aboutProps = {
  about: PropType[];
};
const About: React.FC<aboutProps> = ({ about }) => {
  return (
    <div className="about-container">
      <div className="one-half-img-left"></div>
      <div className="one-half-img-right">
        <div className="story-text">
          <div className="title">{about[0].title}</div>
          <div className="desc">{about[0].desc}</div>
        </div>
      </div>
    </div>
  );
};

export default About;
