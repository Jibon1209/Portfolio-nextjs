"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>C#</li>
        <li>ASP.NET</li>
        <li>ASP.NET Core API</li>
        <li>Blazor</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          {" "}
          B. Sc. in Computer Science & Engineering <br />
          Daffodil International University – 2015
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Complete Web Development Course With Jhankar Mahbub <br /> Programming
          Hero – 2023
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white my-20" id="about" ref={ref}>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex bg-about bg-contain bg-no-repeat lg:w-[640px] h-[640px] mix-blend-lighten bg-top"
        >
          <Image
            src="/images/about-image.png"
            width={500}
            height={500}
            alt="about"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base lg:text-lg">
              I am a full stack web developer with a passion for creating
              interactive and responsive web applications. I have experience
              working with JavaScript, React, Node.js, Express, HTML, CSS, and
              Git. I am a quick learner and I am always looking to expand my
              knowledge and skill set. I am a team player and I am excited to
              work with others to create amazing applications.
            </p>
            <div className="flex flex-row justify-start mt-8">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                {" "}
                Skills{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                {" "}
                Education{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
              >
                {" "}
                Certifications{" "}
              </TabButton>
            </div>
            <div className="mt-8">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
