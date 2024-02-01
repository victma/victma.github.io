import React from "react";

const ContactLinksComponent = () => {
  return (
    <div className="m-2 text-xl">
      <a
        className="inline-block m-2 py-2 px-4 border-2 cursor-pointer border-white hover:border-blue-400 hover:text-blue-400"
        href="https://linkedin.com/in/victormalet"
      >
        Linkedin
      </a>
      <a
        className="inline-block m-2 py-2 px-4 border-2 cursor-pointer border-white hover:bg-white hover:text-black"
        href="https://github.com/victma"
      >
        Github
      </a>
      <p className="inline-block m-2 py-2 px-4 border-2 border-white">
        Good old email: victma at proton dot me
      </p>
    </div>
  );
};

export default ContactLinksComponent;
