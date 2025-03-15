import React from "react";
import "./Experience.css";

const experienceData = [
  {
    company: "My Ascend AI",
    role: "Full Stack AI Engineer",
    duration: "January 2025 - Present",
    achievements: [
      "Optimized data processing efficiency by reducing ETL execution time by 38%, achieved by implementing Apache Airflow, LangGraph, and dbt in Snowflake.",
      "Enhanced system scalability by processing 5.6TB of data daily with 98% reliability, accomplished by architecting real-time data pipelines with Apache Kafka and Snowflake.",
      "Automated AI-driven insights generation, leading to a 22-hour weekly reduction in manual reporting, by building an analytics dashboard using React.js, Supabase, and Python.",
      "Improved anomaly detection accuracy by 47%, achieved by deploying an AI-powered monitoring system for data integrity verification.",
      "Reduced infrastructure costs by 31%, accomplished by optimizing query performance in Snowflake and implementing event-driven data processing.",
    ],
    tags: ["Apache Airflow", "LangGraph", "Snowflake","Power BI", "Tableau", "Supabase", "React.js"],
  },
  {
    company: "Arizona State University",
    role: "Data Analyst",
    duration: "October 2023 - December 2024",
    achievements: [
      "Improved data-driven decision-making by creating KPI dashboards for 1000+ students, developed using Power BI, Tableau, and SQL-based ETL pipelines.",
      "Reduced manual reporting workload by 63%, achieved by automating internship tracking in Sonia with Python-based data validation scripts.",
      "Optimized student placement monitoring by enhancing data accuracy to 99%, done by building SQL-driven ETL workflows in Microsoft SQL Server.",
      "Increased employer engagement by 24%, accomplished by tracking real-time hiring trends and internship success rates in interactive dashboards.",
      "Enabled faster accreditation reporting by reducing data inconsistencies by 36%, implemented through automated data integrity checks and SQL query optimization.",
      "Decreased internship placement data processing time by 51%, by leveraging Python automation and database indexing in SQL Server.",
    ],
    tags: ["Power BI", "Tableau", "SQL Server", "Python","SQL"],
  },
  {
    company: "Cognizant",
    role: "Programmer Analyst",
    duration: "March 2022 - September 2022",
    achievements: [
      "Developed a full-stack financial analytics platform, which enhanced real-time financial KPI tracking by 41%, by integrating Java microservices, AWS Lambda, and PostgreSQL.",
      "Reduced API response latency by 32%, by implementing distributed caching and optimizing SQL queries in Microsoft SQL Server.",
      "Improved financial reporting efficiency by 50%, by designing Power BI dashboards with real-time transactional data pipelines.",
      "Reduced financial data processing time by 45%, accomplished through optimized AWS Glue-based ETL workflows.",
      "Enabled accurate financial forecasting, leading to a 22% increase in cost optimization insights, by integrating AWS Redshift for historical trend analysis.",
    ],
    tags: ["Java", "AWS Lambda", "PostgreSQL", "Power BI", "SQL Server", "AWS Glue"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-container">
        {experienceData.map((job, idx) => (
          <div className="experience-entry" key={idx}>
            <div className="experience-left">
              <p className="experience-duration">{job.duration}</p>
              <h3 className="experience-role">{job.role}</h3>
              <p className="experience-company">{job.company}</p>
            </div>
            <div className="experience-right">
              <ul>
                {job.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
              <div className="experience-tags">
                {job.tags.map((tag, i) => (
                  <span className="tag" key={i}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
