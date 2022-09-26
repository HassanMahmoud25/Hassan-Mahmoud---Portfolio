import classes from "./Portfolio.module.css";

import SectionHeader from "../Common/SectionHeader";
import Project from "./Project";

import projectImg from "../assets/projectImg.jpg";
import projectImg2 from "../assets/projectImg2.jpg";
import projectImg3 from "../assets/projectImg3.jpg";
import projectImg4 from "../assets/projectImg4.jpg";
import projectImg5 from "../assets/projectImg5.jpg";
import { useState } from "react";

const allProjcts = [
  {
    id: 1,
    name: "Foodies",
    src: projectImg,
    href: "#resume",
  },
  {
    id: 2,
    name: "Synergy",
    src: projectImg2,
    href: "#resume",
  },
  {
    id: 3,
    name: "Zen",
    src: projectImg3,
    href: "#resume",
  },
  {
    id: 4,
    name: "Illuminate",
    src: projectImg4,
    href: "#resume",
  },
  {
    id: 5,
    name: "Signal",
    src: projectImg5,
    href: "#resume",
  },
  {
    id: 6,
    name: "Chroma",
    src: projectImg,
    href: "#resume",
  },
  {
    id: 7,
    name: "Horus",
    src: projectImg2,
    href: "#resume",
  },
  {
    id: 8,
    name: "Anubis",
    src: projectImg3,
    href: "#resume",
  },
  {
    id: 9,
    name: "Ophelia",
    src: projectImg4,
    href: "#resume",
  },
];

const htmlAndCss = [
  {
    id: 3,
    name: "Zen",
    src: projectImg3,
    href: "#resume",
  },
  {
    id: 1,
    name: "Foodies",
    src: projectImg,
    href: "#resume",
  },
  {
    id: 4,
    name: "Illuminate",
    src: projectImg4,
    href: "#resume",
  },
  {
    id: 2,
    name: "Synergy",
    src: projectImg2,
    href: "#resume",
  },
  {
    id: 5,
    name: "Signal",
    src: projectImg5,
    href: "#resume",
  },
];

const react = [
  {
    id: 7,
    name: "Horus",
    src: projectImg2,
    href: "#resume",
  },
  {
    id: 6,
    name: "Chroma",
    src: projectImg,
    href: "#resume",
  },
  {
    id: 9,
    name: "Ophelia",
    src: projectImg4,
    href: "#resume",
  },
  {
    id: 8,
    name: "Anubis",
    src: projectImg3,
    href: "#resume",
  },
];

const Portfolio = () => {
  let projects = [];
  const [projectsCategory, setProjectsCategory] = useState("all");

  if (projectsCategory === "all") projects = allProjcts;
  if (projectsCategory === "htmlAndCss") projects = htmlAndCss;
  if (projectsCategory === "react") projects = react;

  const categoryClickHandler = (event) => {
    setProjectsCategory(event.target.getAttribute("name"));
  };

  return (
    <section className={classes.container}>
      <SectionHeader id="portfolio" head="Portfolio" addition={null} />

      <ul className={classes.categories}>
        <li
          onClick={categoryClickHandler}
          name="all"
          className={
            projectsCategory === "all"
              ? classes.category + " " + classes.category_active
              : classes.category
          }
        >
          All
        </li>
        <li
          onClick={categoryClickHandler}
          name="htmlAndCss"
          className={
            projectsCategory === "htmlAndCss"
              ? classes.category + " " + classes.category_active
              : classes.category
          }
        >
          Html/Css
        </li>
        <li
          onClick={categoryClickHandler}
          className={
            projectsCategory === "react"
              ? classes.category + " " + classes.category_active
              : classes.category
          }
          name="react"
        >
          React
        </li>
      </ul>
      <div className={classes["projects-container"]}>
        {projects.map((project) => (
          <Project
            key={project.id}
            name={project.name}
            src={project.src}
            href={project.href}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
