import React from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  title: string;
  description: string;
  tags: string[];
  href: string;
  image: StaticImageData;
}

const ProjectComponent = ({ title, description, tags, href, image }: Props) => {
  return (
    <div className="m-4 mt-12">
      <h3 className="text-3xl mb-2"># {title}</h3>
      <div className="lg:flex gap-4 justify-between">
        <div className="mt-2 mb-8">
          <p>{description}</p>
          <div className="flex gap-2 text-xs my-2">
            {tags.map((t) => (
              <div
                className="py-1 px-2 border-2 border-gray-500 rounded-full"
                key={t}
              >
                {t}
              </div>
            ))}
          </div>
          <p>
            <a
              className="underline text-blue-300 text-sm"
              href={href}
              target="_blank"
            >
              Open in new tab
            </a>
          </p>
        </div>
        <Image
          src={image}
          alt={`Screenshot of ${title}`}
          className="invert"
          height={250}
        />
      </div>
    </div>
  );
};

export default ProjectComponent;
