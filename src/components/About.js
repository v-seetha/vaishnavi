import React from "react";
import { motion } from "framer-motion";
import aiAnimation from "./aiAnimation.json";
import Lottie from "lottie-react";

import "./Section.css";

export default function About() {
  return (
    <motion.section
      id="about"
      className="about-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="about-container">
        {/* Left Side: About Me Text */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm a data analyst with a passion for <strong>transforming complex datasets into clear, actionable insights</strong> that drive strategic decisions. 
            My journey in the data world is fueled by an inherent fascination with <strong>uncovering patterns, optimizing processes, and visualizing information</strong> 
            in ways that tell compelling stories.
          </p>
          <p>
            I thrive at the intersection of <strong>analytical thinking, visual communication, and AI innovation</strong>, where 
            I've honed my skills in creating dynamic dashboards using <strong>ReactJS and NextJS</strong> that bring data to life. 
            My work with <strong>Tableau, SQL, Excel, LLMs, and custom web visualizations</strong> has allowed me to build solutions 
            that not only present data clearly but create intelligent, interactive experiences.
          </p>
          <p>
            What excites me most is <strong>crafting beautiful, intuitive visualizations enhanced by AI capabilities</strong> — 
            transforming raw numbers into visual narratives powered by large language models that reveal deeper insights and opportunities. 
            Each project presents an opportunity to <strong>blend traditional analytics with cutting-edge AI</strong>, resulting in 
            dashboards that are not just informative but predictive and prescriptive.
          </p>
          <p>
            As a Data Analyst with expertise spanning from traditional analytics to modern LLMs and frontend development, I am passionate about 
            <strong> leveraging AI, ReactJS, and NextJS to create next-generation data experiences</strong> that transcend conventional analysis.<br/><br/>
            Let's connect and explore how we can combine the power of data, visualization, and AI to unlock unprecedented insights together!
          </p>
        </div>

        {/* Right Side: Lottie Animation */}
        <div className="about-animation">
          <Lottie animationData={aiAnimation} loop autoplay />
        </div>
      </div>
    </motion.section>
  );
}