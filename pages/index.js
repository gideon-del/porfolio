import Link from "next/link";
import profile from "@/public/profile.jpeg";
import Image from "next/image";
import project_1 from "@/public/project-1.png";
import project2 from "@/public/project-2.png";
import project3 from "@/public/project-3.png";
import project4 from "@/public/project-4.png";
import Project from "@/components/project";
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
export default function Home() {
  return (
    <>
      <header className="text-white flex max-w-7xl mx-auto py-6">
        <Link href={"/"} className="font-bold text-4xl basis-1/3">
          <span>Gideon.</span>
        </Link>
        <nav className="flex-1 flex justify-between items-center font-normal px-7">
          <ul className="flex gap-4 items-center">
            <li>
              <Link href={"/#about"}>About</Link>
            </li>
            <li>
              <Link href={"/#projects"}>Projects</Link>
            </li>
            <li>
              <Link href={"/#services"}>Services</Link>
            </li>
          </ul>
          <button className="px-3 py-2 border border-white">Contact</button>
        </nav>
      </header>
      <main className="text-white">
        <section
          id="about"
          className="max-w-7xl mx-auto grid grid-cols-2 justify-center mb-10 "
        >
          <div className="self-center flex flex-col gap-6">
            <div className="h-3 w-48 bg-white mb-4"></div>
            <h2 className="uppercase font-bold text-4xl max-w-xs mb-4">
              i&apos;m Gideon a web Developer
            </h2>
            <p className="max-w-lg font-medium">
              I am a dedicated frontend developer with a strong affinity for
              creating beautiful and functional web applications. My journey
              into the world of web development began with a fascination for how
              technology can transform ideas into interactive and user-friendly
              interfaces.
            </p>
            <button className="bg-white px-8 text-center py-4 text-primary font-bold text-xl w-fit">
              Let&apos;s talk
            </button>
            <div></div>
          </div>
          <div>
            <Image src={profile} alt="My profile" />
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
    </>
  );
}
