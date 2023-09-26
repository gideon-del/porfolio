import Link from "next/link";
import profile from "@/public/profile.jpeg";
import Image from "next/image";
import project_1 from "@/public/project-1.png";
import project2 from "@/public/project-2.png";
import project3 from "@/public/project-3.png";
import project4 from "@/public/project-4.png";
import Project from "@/components/project";
import { useState } from "react";
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import reactImg from "@/public/react.svg";
const projects = [
  {
    img: project_1,
    title: "Modern Art Gallery",
    desc: "This is just a landing page for a collection of modern art gallery with good designs",
    github: "https://github.com/gideon-del/mordern-art-gallery",
    preview: "https://mordern-art-gallery.vercel.app/",
  },
  {
    img: project2,
    title: "Country List",
    desc: "This shows a list of countries from an api. You can filter countries by region, search for countries and see the details of a single country",
    github: "https://github.com/gideon-del/country-api-challenge",
    preview: "https://country-api-challenge.vercel.app/",
  },
  {
    img: project3,
    title: "Multi Step Form",
    desc: " A Three step form that validates each step before moving to the next step.",
    github: "https://github.com/gideon-del/multi-step-form",
    preview: "https://multi-step-form-ten-omega.vercel.app/",
  },
  {
    img: project4,
    title: "Doc Finder Ng",
    desc: " This is a local hackathon projects. It&apos;s aim is to help the user to find the nearst hospital in their location a book appointmets in their selected hospital.",
    github: "https://github.com/gideon-del/medical-appointment",
    preview: "https://medical-appointment-ten.vercel.app/",
  },
];
const skills = [
  "React",
  "Typescript",
  "HTML",
  "CSS",
  "TailwindCSS",
  "Redux",
  "JavaScript",
  "Firebase",
  "SuperBase",
  "Framer Motion",
  "NextJS",
];
const navLinks = ["about", "projects", "skills"];
export default function Home() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            duration: 1,
          },
          y: {
            duration: 0.5,
          },
        }}
        className="text-white flex max-w-7xl mx-auto bg-primary py-6 px-3 justify-between  sticky top-0 inset-x-0 z-50"
      >
        <Link href={"/"} className="font-bold text-4xl basis-1/3 ">
          <span>Gideon.</span>
        </Link>
        <nav
          className={`flex-1 flex flex-col md:justify-between gap-8 justify-center items-center  font-normal px-7 md:relative md:h-auto fixed w-screen h-screen bg-primary md:flex-row inset-0 py-10 md:py-0 md:translate-x-0 ${
            showNav ? "-translate-x-0" : "-translate-x-full"
          } transition`}
        >
          <p className="font-bold text-4xl md:hidden flex justify-between items-center">
            Gideon.
            <span
              className=" absolute top-5 right-3"
              onClick={() => setShowNav(false)}
            >
              <LiaTimesSolid />
            </span>
          </p>
          <ul className="flex gap-4 items-center flex-col md:flex-row">
            {navLinks.map((link) => (
              <li key={link} className="capitalize">
                <Link href={`/#${link}`} onClick={() => setShowNav(false)}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="mailto:gideonchidi471@gmail.com">
            <button className="px-3 py-2 border border-white">
              Contact Me
            </button>
          </Link>
        </nav>
        <button className="md:hidden text-2xl" onClick={() => setShowNav(true)}>
          <FaBarsStaggered />
        </button>
      </motion.header>
      <main className="text-white px-5">
        <section
          id="about"
          className="max-w-7xl mx-auto md:grid md:grid-cols-2 flex flex-col-reverse md:gap-7  gap-6 justify-center mb-10 items-center overflow-x-hidden z-30 "
        >
          <motion.div
            animate={{ x: "0", opacity: 1 }}
            initial={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="self-center flex flex-col md:gap-6 gap-5 md:text-start text-center"
          >
            <div className="h-3 w-48 bg-white md:mb-4"></div>
            <h2 className="uppercase font-bold text-4xl max-w-xs  text-center md:text-start">
              i&apos;m Gideon a web Developer
            </h2>
            <p className="max-w-lg font-medium">
              I am a dedicated frontend developer with a strong affinity for
              creating beautiful and functional web applications. My journey
              into the world of web development began with a fascination for how
              technology can transform ideas into interactive and user-friendly
              interfaces.
            </p>
            <Link href={"mailto:gideonchidi471@gmail.com"}>
              <button className="bg-white px-8 text-center md:mx-0 mx-auto py-4 text-primary font-bold text-xl w-fit">
                Let&apos;s talk
              </button>
            </Link>
            <div className="text-2xl flex gap-4 md:self-start items-center self-center">
              <Link href="https://twitter.com/ChidiGideon6" target="_blank">
                <BsTwitter />
              </Link>
              <Link href={"https://github.com/gideon-del"} target="_blank">
                <BsGithub />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/chidi-gideon-aaa3081bb/"}
                target="_blank"
              >
                <BsLinkedin />
              </Link>
            </div>
          </motion.div>
          <motion.div
            animate={{ x: "0", opacity: 1 }}
            initial={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Image
              src={profile}
              alt="My profile"
              placeholder="blur"
              priority
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNcvXN1PQAGtgKQxVTcnwAAAABJRU5ErkJggg=="
            />
          </motion.div>
        </section>
        <section id="skills" className="mb-4 max-w-7xl mx-auto">
          <div className="h-3 w-48 bg-white mb-4"></div>
          <h2 className="text-4xl font-bold mb-4">My skills</h2>
          <div className="grid grid-cols-2 gap-5 items-center md:grid-cols-3 lg:grid-cols-5">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="capitalize shadow-md bg-black/50 px-4 py-4 rounded-full"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>
        <section id="projects" className="">
          <div className="max-w-7xl mx-auto">
            <div className="h-3 w-48 bg-white mb-4"></div>
            <h2 className="uppercase font-bold text-4xl  mb-4 ">
              Selected <br /> works
            </h2>
            <p className="font-semibold max-w-xs">
              Take a look at some of the projects I&apos;ve done
            </p>
            <div className="flex-col flex gap-28  mx-auto">
              {projects.map((proj, i) => (
                <Project key={i} {...proj} reverse={i % 2 === 0} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer
        id="contacts"
        className="flex flex-col items-center justify-center gap-10  md:p-32 p-10 mt-10"
      >
        <h2 className=" md:text-4xl lg:text-6xl text-lg text-center font-medium capitalize">
          Keep in touch with me
        </h2>
        <Link href="mailto:gideonchidi471@gmail.com">
          <button className="px-8 font-bold py-5 bg-white text-primary text-sm ">
            Let&apos;s have a conversation
          </button>
        </Link>
      </footer>
    </>
  );
}
