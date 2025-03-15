import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const projectData = [
  {
    title: "Hate Crime Analysis",
    description:
      "Data analysis and visualization of hate crimes over two decades, highlighting trends and social implications.",
    tags: ["Python", "ReactJS", "D3.js"],
    gifUrl: "/Hate Crime Analysis.gif",
    route: "/hate-crime",
  },
  {
    title: "Finance Dashboard",
    description:
      "Interactive dashboard providing real-time insights into market trends and financial metrics.",
    tags: ["Python", "Power BI", "Dashboard"],
    gifUrl: "/Finance_Dashboard.gif",
    route: "/finance-dashboard",
  },
  {
    title: "Bechdel Analysis",
    description:
      "An in-depth look into movie data through the lens of the Bechdel test, assessing female representation.",
    tags: ["Python", "Data Visualization", "Pandas"],
    gifUrl: "/bechdel.gif",
    route: "/bechdel-analysis",
  },
  {
    title: "Car Analysis",
    description:
      "Exploratory analysis of car datasets, uncovering trends in performance, pricing, and market dynamics.",
    tags: ["Python", "Data Analysis", "Visualization"],
    gifUrl: "/Car Data Analysis.gif",
    route: "/car-analysis",
  },
  {
    title: "HR Data Analysis",
    description:
      "Evaluation of HR datasets to derive insights on employee performance, retention, and organizational efficiency.",
    tags: ["Excel", "PowerBI"],
    gifUrl: "/AtliQ.gif",
    route: "/atliq-presence",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      {projectData.map((project, idx) => (
        <div className="project-card-container" key={idx}>
          <div className="project-info">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span className="tag" key={i}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="project-links">
              <Link to={project.route} className="btn-case-study">
                View Project Details
              </Link>
            </div>
          </div>
          <div className="project-media">
            <img src={project.gifUrl} alt={project.title} />
          </div>
        </div>
      ))}
    </section>
  );
}
