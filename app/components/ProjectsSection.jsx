"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { animate, motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "LokalChoice — Discover PlacesApproved by YourFavorite Vloggers! ",
    description:
      "Powered by vloggers and content creators. Find the best restaurants, cafés, and shops vouched for by people you trust.",
    image: "/assets/images/projects/lokalchoice.png",
    tag: ["All", "Frontend Projects"],
    // gitUrl: "/",
    previewUrl: "https://lokal-choice.vercel.app/",
  },
  {
    id: 2,
    title: "GoHotels — Affordable Hotel Booking Platform",
    description:
      "Designed a user-friendly frontend for GoHotels that presents hotel branches, promotional offers, blog content, and a smooth booking form.",
    image: "/assets/images/projects/gohotels.png",
    tag: ["All", "Frontend Projects"],
    // gitUrl: "/",
    previewUrl: "https://gohotels.ph/",
  },
  {
    id: 3,
    title: "Summit Hotels — Midscale Hotel & Resorts Website",
    description:
      "Built a clean and navigable frontend for Summit Hotels, enabling users to explore properties, view offers, read blogs, and book stays effortlessly.",
    image: "/assets/images/projects/summithotels.png",
    tag: ["All", "Frontend Projects"],
    // gitUrl: "/",
    previewUrl: "https://summithotels.ph/",
  },
  {
    id: 4,
    title: "Kairos — UI/UX Web Design (Figma Prototype)",
    description:
      "A modern and intuitive website prototype designed for Kairos using Figma. The design emphasizes clean layout and engaging visuals to optimize user flow.",
    image: "/assets/images/projects/design_1.jpg",
    tag: ["All", "UI/UX Design"],
    // gitUrl: "/",
    previewUrl:
      "https://www.figma.com/design/0jfutGbyDVgtKS9aPVFqqE/UI-UX?node-id=7-25&t=vgmEZDEbK80YwuF7-1",
  },
  {
    id: 5,
    title: "Wearit — UI/UX Web Design (Figma Prototype)",
    description:
      "A modern, user-friendly website design for Wearit, created in Figma with clean layouts and engaging visuals for a seamless experience.",
    image: "/assets/images/projects/wearit.jpg",
    tag: ["All", "UI/UX Design"],
    // gitUrl: "/",
    previewUrl:
      "https://www.figma.com/design/0jfutGbyDVgtKS9aPVFqqE/UI-UX?node-id=0-1&t=vgmEZDEbK80YwuF7-1",
  },
  {
    id: 6,
    title: "E-commerce Webpage",
    description:
      "This project demonstrates a clean, maintainable, and scalable approach to front-end development, balancing design accuracy, responsive behavior, and code organization.",
    image: "/assets/images/projects/ecommerce_1.png",
    tag: ["All", "Frontend Projects"],
    // gitUrl: "/",
    previewUrl: "https://ecommerce-frontend-gray-nine.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="scroll-mt-24">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Frontend Projects"
          isSelected={tag === "Frontend Projects"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="UI/UX Design"
          isSelected={tag === "UI/UX Design"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tags={project}
              // gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
