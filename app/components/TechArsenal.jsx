"use client";
import { FaReact, FaNodeJs, FaGitAlt, FaCloudflare } from "react-icons/fa";
import { SiNextdotjs, SiRedux, SiTypescript, SiTailwindcss, SiBootstrap, SiSass, SiNestjs, SiGraphql, SiSupabase, SiPostgresql, SiSanity, SiStrapi, SiContentful, SiRemix } from "react-icons/si";

const techStack = [
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "React", icon: <FaReact className="text-sky-400" /> },
  { name: "Remix", icon: <SiRemix className="text-purple-500" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
  { name: "SCSS", icon: <SiSass className="text-pink-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "NestJS", icon: <SiNestjs className="text-red-500" /> },
  { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
  { name: "Supabase", icon: <SiSupabase className="text-green-400" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
  { name: "Sanity", icon: <SiSanity className="text-red-600" /> },
  { name: "Strapi", icon: <SiStrapi className="text-blue-400" /> },
  { name: "Contentful", icon: <SiContentful className="text-blue-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "Cloudflare", icon: <FaCloudflare className="text-orange-400" /> },
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
