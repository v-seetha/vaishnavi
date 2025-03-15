import React from 'react';
import { Link } from 'react-router-dom';
import './projects-theme.css';

const HateCrimeAnalysis = () => {
  return (
    <div className="mgh-page">
      <header className="mgh-header" style={{ textAlign: 'center' }}>
        <h1 className="mgh-title">Hate Crime Analysis - Exploring Incidents from 1990 to 2009</h1>
        <div className="mgh-meta">
          <div className="mgh-meta-block">
            <div className="mgh-meta-label">
              Used Tools:
              <span className="mgh-meta-tag mgh-red">Python</span>
              <span className="mgh-meta-tag mgh-red">Pandas</span>
              <span className="mgh-meta-tag mgh-red">ReactJS</span>
              <span className="mgh-meta-tag mgh-red">D3.js</span>
            </div>
          </div>
          <div className="mgh-meta-block">
            <div className="mgh-meta-label">
              Project Type:
              <span className="mgh-meta-tag mgh-purple">Data Analysis</span>
              <span className="mgh-meta-tag mgh-purple">Crime Statistics</span>
              <span className="mgh-meta-tag mgh-purple">Interactive Dashboard</span>
            </div>
          </div>
          <div className="mgh-meta-block">
            <div className="mgh-meta-label">
              Relevant Link:{' '}
              <a
                href="https://github.com/v-seetha/Hate-Crime-Analysis-1990-2009"
                target="_blank"
                rel="noopener noreferrer"
                className="mgh-meta-link"
              >
                View GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="mgh-content">
        <section className="mgh-section">
        <h2 className="mgh-section-title">Story Time</h2>
  <p className="mgh-paragraph">
    I have always been a huge fan of true crime documentaries and investigative journalism. 
    There is something about the psychology behind crimes that fascinates me—the motives, the patterns, and the way data can reveal hidden trends. 
    But don’t worry, I promise I’m <span className="highlight">not a psychopath</span>! 
  </p>
  <p className="mgh-paragraph">
    One day, while watching a documentary, I started wondering just how often hate crimes happen in the United States. 
    I wanted to see the real numbers, not just headlines. 
    That curiosity led me down a rabbit hole of research, and I eventually found a dataset from the <span className="highlight">FBI</span> that recorded hate crime incidents from <span className="highlight">1990 to 2009</span>. 
  </p>
  <p className="mgh-paragraph">
    With this data in hand, I knew I had to do something meaningful with it. 
    I cleaned and structured the data using <span className="highlight">Python</span> and then used <span className="highlight">ReactJS and D3.js</span> to build an interactive dashboard. 
    My goal was simple: to uncover patterns, identify trends, and gain deeper insights into how hate crimes have evolved over time and across different regions. 
    This project is my way of bringing data-driven storytelling into an issue that affects communities worldwide.
  </p>
        </section>
        <section className="mgh-section">
          <img src="/Hate Crime Analysis.gif" alt="Hate Crime Analysis Test Animated Overview" className="mgh-gif-img" />
        </section>
        <section className="mgh-section">
          <h2 className="mgh-section-title">Dataset Overview</h2>
          <ul className="mgh-list">
            <li>The dataset contains <span className="highlight">253,776 recorded hate crimes</span> from various U.S. states.</li>
            <li>It includes details such as <span className="highlight">incident date, state, bias motivation, offense type, and victim demographics</span>.</li>
            <li>The dataset was <span className="highlight">cleaned and standardized</span> using Python to ensure consistency.</li>
            <li>Hate crimes were categorized based on their <span className="highlight">bias type</span>, such as racial, religious, or sexual orientation-related incidents.</li>
          </ul>
        </section>

        <section className="mgh-section">
          <h2 className="mgh-section-title">Insights Deep-Dive</h2>

          <h3 className="mgh-subtitle">Geographical Hotspots</h3>
          <ul className="mgh-list">
            <li>States like <span className="highlight">California, New York, and Texas</span> report the highest number of hate crimes.</li>
            <li>Smaller states tend to have <span className="highlight">lower incident counts</span>, but some still show concerning trends.</li>
            <li>The geographic visualization highlights regions where hate crimes are more concentrated.</li>
          </ul>

          <h3 className="mgh-subtitle">Trends Over Time</h3>
          <ul className="mgh-list">
            <li>Hate crimes fluctuate yearly, with <span className="highlight">certain peaks</span> corresponding to major social and political events.</li>
            <li>Some years saw a sharp increase in specific categories, such as racial or religious hate crimes.</li>
            <li>Time-series charts reveal <span className="highlight">seasonal patterns</span> in hate crime activity.</li>
          </ul>

          <h3 className="mgh-subtitle">Bias Motivations</h3>
          <ul className="mgh-list">
            <li>Racial bias accounts for <span className="highlight">a large percentage</span> of reported hate crimes.</li>
            <li>Religious-based hate crimes are more common in certain regions, while LGBTQ-related crimes are increasing in recent years.</li>
            <li>The breakdown of bias motivations helps identify key areas for awareness and intervention.</li>
          </ul>

          <h3 className="mgh-subtitle">Victim and Offender Dynamics</h3>
          <ul className="mgh-list">
            <li>Adult victims are more common than juveniles, but certain crimes disproportionately affect younger individuals.</li>
            <li>Some crimes have a high number of offenders relative to victims, indicating group-targeted attacks.</li>
            <li>The dataset provides insights into the relationship between <span className="highlight">offender demographics</span> and crime patterns.</li>
          </ul>
        </section>

        <section className="mgh-section">
          <h2 className="mgh-section-title">Recommendations</h2>
          <ul className="mgh-list">
            <li>Community outreach programs should be implemented in <span className="highlight">high-risk areas</span> to reduce hate crime incidents.</li>
            <li>Law enforcement agencies should focus on <span className="highlight">data-driven interventions</span> to allocate resources effectively.</li>
            <li>Education and awareness campaigns can help address the root causes of <span className="highlight">bias-motivated crimes</span>.</li>
            <li>Legislation should be revisited to strengthen protections against <span className="highlight">hate-based violence</span>.</li>
          </ul>
        </section>

        <section className="mgh-section">
          <h2 className="mgh-section-title">Key Questions for Stakeholders</h2>
          <ul className="mgh-list">
            <li>What are the underlying factors contributing to <span className="highlight">regional variations</span> in hate crime reports?</li>
            <li>How can we improve <span className="highlight">hate crime reporting accuracy</span> to ensure comprehensive data collection?</li>
            <li>What role do <span className="highlight">social and political factors</span> play in influencing hate crime trends?</li>
          </ul>
        </section>

        <footer className="mgh-footer">
          <Link to="/" className="mgh-home-link">Back to Homepage</Link>
        </footer>
      </main>
    </div>
  );
};

export default HateCrimeAnalysis;
