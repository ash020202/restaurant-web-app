import React from "react";
import "../../../App.css";
const About = () => {
  const about = [
    {
      title: "Our Story",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis enim recusandae consequatur assumenda, ut officia dolorem fugiat sunt doloremque sint facere! Ratione recusandae reiciendis, aut in vitaeut quod ullam facilis libero non qui ipsam. Consequatur inciduntvoluptates enim quasi porro ad autem fugit nemo. Distinctio, nihilad? Aperiam officia expedita tenetur officiis commodi laboriosam velmolestias doloremque, eligendi enim reprehenderit soluta explicaboassumenda! Rem eveniet, quos at quam qui alias doloribus accusamuslaudantium minima magnam odit quod aliquid repudiandae cupiditatedolore error, quis voluptatum consequatur delectus quas, quaeratimpedit autem. Molestias nostrum consectetur nam amet quae doloresvoluptatum eius!",
    },
  ];
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
