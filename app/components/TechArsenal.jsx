"use client";
import { FaReact, FaGitAlt } from "react-icons/fa";
import { SiHtml5, SiCss3, SiSass, SiTailwindcss, SiJavascript, SiBootstrap, SiTypescript, SiDrupal, SiWordpress, SiNextdotjs } from "react-icons/si";

const techStack = [
  // Front-End
  { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
  { name: "SASS", icon: <SiSass className="text-pink-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
  // Frameworks / Libraries
  { name: "React.js", icon: <FaReact className="text-sky-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  // CMS / Platforms
  { name: "Drupal", icon: <SiDrupal className="text-blue-600" /> },
  { name: "WordPress", icon: <SiWordpress className="text-blue-700" /> },
  // Tools
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
];


export default function TechArsenal() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-10">
          <FaReact className="text-sky-400 text-4xl" />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
            Tech Arsenal
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-sky-400 transition"
            >
              <div className="text-4xl mb-2">{tech.icon}</div>
              <p className="text-gray-300 text-sm">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
