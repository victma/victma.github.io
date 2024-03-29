import React from "react";
import ProjectList from "@/components/projects/ProjectList";
import LlmChat from "@/components/llm/LlmChat";
import ContactLinksComponent from "@/components/contact/ContactLinks";

const HomePage = () => {
  return (
    <>
      <div className="text-sm font-extralight text-center" id="top">
        <a
          className="inline-block underline text-blue-300 p-1"
          href="https://linkedin.com/in/victormalet"
          target="_blank"
        >
          Linkedin
        </a>
        <a
          className="inline-block underline p-1"
          href="https://github.com/victma"
          target="_blank"
        >
          Github
        </a>
      </div>
      <div className="h-screen flex flex-col justify-center items-center p-4 gap-4 text-center">
        <h1 className="text-6xl sm:text-8xl font-mono">Hello</h1>
        <p className="text-4xl sm:text-5xl">I am Victor</p>
        <p className="text-xl">I am a Fullstack Software Engineer</p>
        <p className="text-sm">Welcome to my website</p>
        <p className="text-xs max-w-sm">
          Why don&apos;t you click on the arrow below and see some of my work
          while you&apos;re here ?
        </p>
        <div className="relative group">
          <a className="text-5xl cursor-pointer" href="#projects">
            ⇩
          </a>
          <p className="text-xs absolute w-max top-2 left-full invisible group-hover:visible">
            yes, that&apos;s the one
          </p>
        </div>
      </div>
      <div className="p-4 mb-12">
        <h2 id="projects" className="font-mono text-4xl sm:text-6xl">
          Projects
        </h2>
        <ProjectList />
      </div>
      <div className="p-4 mb-12">
        <h2 id="llm" className="font-mono text-4xl sm:text-6xl mb-4">
          VicGPT
        </h2>
        <p className="m-2">
          Talk to the Bot in natural language as if you were talking to me. It
          uses a LLM trained on a large set of personal conversations to
          simulate an actual discussion with me.
        </p>
        <LlmChat />
      </div>
      <div className="p-4 mb-12">
        <h2 id="links" className="font-mono text-4xl sm:text-6xl mb-4">
          The Links
        </h2>
        <ContactLinksComponent />
      </div>
      <footer className="p-4 text-xs font-extralight text-center">
        <p className="m-1">Made by @victma in 🇭🇰 and 🇫🇷.</p>
        <p className="m-1">
          No right reserved, just help yourself{" "}
          <a
            href="https://github.com/victma/victma.github.io"
            className="underline"
            target="_blank"
          >
            here
          </a>
          .
        </p>
        <p>
          You are at the bottom.{" "}
          <a href="#top" className="underline">
            Get back to the top
          </a>
          .
        </p>
      </footer>
    </>
  );
};

export default HomePage;
