"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { fadeIn } from "@/variants";

const projectsData = [
  {
    id: 1,
    title: "React Healthcare Management for Camps",
    description:
      "CampHealth Portal is driven by a vision to create a centralized and efficient system for managing medical camps. The platform caters to the diverse needs of organizers, healthcare professionals, and participants, offering a seamless coordination of activities and optimal functionality.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/Jibon1209/medical-camp-management-system-client",
    previewUrl: "https://medical-management-client.web.app/",
  },
  {
    id: 2,
    title: "React Blog Website Project",
    description:
      "BLOGTREKKER is designed to provide a user-friendly and visually appealing experience for bloggers and readers. It incorporates essential features and functionalities to enhance the user experience and foster content creation and sharing.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Jibon1209/blog-website-client",
    previewUrl: "https://blog-website-client.web.app/",
  },
  {
    id: 3,
    title: "React CarHub",
    description:
      "CarHub Shop is dedicated exclusively to the automotive category. Our platform showcases renowned automotive brands like Toyota, Ford, BMW, Mercedes-Benz, Tesla, Honda, and many more.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Jibon1209/carhub-client",
    previewUrl: "https://carhub-client-c9e02.web.app/",
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
    <section className="my-20" id="projects" ref={ref}>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4">
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
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <motion.ul
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
      >
        <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
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
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </motion.ul>
    </section>
  );
};

export default ProjectsSection;
