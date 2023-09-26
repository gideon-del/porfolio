import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsGithub } from "react-icons/bs";
const Project = ({ title, desc, img, github, preview, reverse }) => {
  return (
    <div
      className={`flex ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } flex-col  mx-auto justify-center gap-6 `}
    >
      <div className="flex-1">
        <Image src={img} alt={title} />
      </div>
      <div className="justify-self-center self-center px-4  flex flex-col basis-2/4 gap-4">
        <h3 className="font-bold text-3xl">{title}</h3>
        <p className="max-w-sm font-medium text-lg">{desc}</p>
        <div className="flex gap-4 items-center font-semibold">
          <Link href={github} target="_blank">
            <button className="bg-white text-primary px-4 py-2"> Github</button>
          </Link>
          <Link href={preview} target="_blank">
            <button className="bg-white text-primary px-4 py-2">
              Live preview
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
