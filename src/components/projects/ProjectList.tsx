import React from "react";
import Project from "./Project";

import meatMapImg from "public/meat-map.png";
import serialGrooverImg from "public/serial-groover.png";
import nitpeekImg from "public/nitpeek.png";

const ProjectListComponent = () => {
  return (
    <>
      <Project
        title="Meat Map"
        description="Interactive maps of meat cuts. I couldn't find any, and I wanted to use Gatsby. Both problems solved."
        image={meatMapImg}
        tags={["React", "Gatsby"]}
      />
      <Project
        title="Serial Groover"
        description="A queue for Youtube videos, so people won't stop the music you just put during a party."
        image={serialGrooverImg}
        tags={["React"]}
      />
      <Project
        title="Nitpeek"
        description="An introduction to the web and computer science for kids/teennagers (works for adults as well). I recycled the name and logo of the following project."
        image={nitpeekImg}
        tags={[]}
      />
    </>
  );
};

export default ProjectListComponent;
