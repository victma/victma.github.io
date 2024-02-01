import React from "react";
import Project from "./Project";

import pinkMattersImg from "public/pink-matters.png";
import meatMapImg from "public/meat-map.png";
import serialGrooverImg from "public/serial-groover.png";
import nitpeekImg from "public/nitpeek.png";

const ProjectListComponent = () => {
  return (
    <>
      <Project
        title="Pink Matters"
        description="A fully custom marketplace and CMS for this medical startup."
        image={pinkMattersImg}
        href="https://pink-matters.com"
        tags={["PHP", "Symfony"]}
      />
      <Project
        title="Meat Map"
        description="Interactive maps of meat cuts. I couldn't find any, and I wanted to use Gatsby. Both problems solved."
        image={meatMapImg}
        href="https://victma.github.io/meat-map"
        tags={["React", "Gatsby"]}
      />
      <Project
        title="Serial Groover"
        description="A queue for Youtube videos, so people won't stop the music you just put during a party."
        image={serialGrooverImg}
        href="https://victma.github.io/serial-groover"
        tags={["React", "Youtube API"]}
      />
      <Project
        title="Nitpeek"
        description="An introduction to the web and computer science for kids/teennagers (works for adults as well)."
        image={nitpeekImg}
        href="https://nitpeek.github.io/"
        tags={["HTML", "CSS"]}
      />
    </>
  );
};

export default ProjectListComponent;
