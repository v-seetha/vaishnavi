import React from 'react';
import { Link } from 'react-router-dom';
import './projects-theme.css';

const BechdelAnalysis = () => {
  return (
    <div className="mgh-page">
      <header className="mgh-header" style={{ textAlign: 'center' }}>
        <h1 className="mgh-title">Bechdel Test in Movies - A Gender Representation Analysis</h1>
        <div className="mgh-meta">
          <div className="mgh-meta-block">
            <div className="mgh-meta-label">
              Used Tools:
              <span className="mgh-meta-tag mgh-red">Python</span>
              <span className="mgh-meta-tag mgh-red">Pandas</span>
              <span className="mgh-meta-tag mgh-red">Matplotlib</span>
              <span className="mgh-meta-tag mgh-red">Seaborn</span>
            </div>
          </div>
          <div className="mgh-meta-block">
            <div className="mgh-meta-label">
              Project Type:
              <span className="mgh-meta-tag mgh-purple">Data Analysis</span>
              <span className="mgh-meta-tag mgh-purple">Gender Representation</span>
              <span className="mgh-meta-tag mgh-purple">Film Industry Insights</span>
            </div>
          </div>
          <div className="mgh-meta-block">
            <div className="mgh-meta-label">
              Relevant Link:{' '}
              <a
                href="https://github.com/v-seetha/Bechdel-Analysis"
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
            One evening, I was watching a classic Hollywood movie when a thought crossed my mind. 
            How often do female characters in films have meaningful conversations that are not about men? 
            This curiosity led me to explore the <span className="highlight">Bechdel Test</span>, a simple yet powerful measure of gender representation in cinema. 
            To find answers, I analyzed <span className="highlight">9,718 films</span> spanning different decades to see how the industry has evolved.
          </p>
        </section>

        <section className="mgh-section">
          <h2 className="mgh-section-title">Executive Summary</h2>
          <p className="mgh-paragraph">
            The <span className="highlight">Bechdel Test</span> evaluates whether a film includes at least two women who speak to each other about something other than a man. 
            In this analysis, <span className="highlight">55% of movies</span> passed the test, showing progress but also revealing room for improvement. 
            Older films had a lower pass rate, while more recent ones show a steady rise in female-driven narratives. 
            Movies that pass the test tend to receive <span className="highlight">higher IMDb ratings</span> and engage more audiences.
          </p>
        </section>

        <section className="mgh-section">
          <img src="/bechdel.gif" alt="Bechdel Test Animated Overview" className="mgh-gif-img" />
        </section>

        <section className="mgh-section">
          <h2 className="mgh-section-title">Dataset Overview</h2>
          <ul className="mgh-list">
            <li><span className="highlight">9,718 movies</span> were analyzed across multiple genres and decades.</li>
            <li>The overall <span className="highlight">Bechdel Test pass rate</span> was <span className="highlight">55%</span>, showing improvement in modern films.</li>
            <li>The average <span className="highlight">IMDb rating</span> was <span className="highlight">6.8/10</span>.</li>
            <li>The most common genres included <span className="highlight">Drama, Comedy, and Action</span>.</li>
            <li>Some films lacked complete <span className="highlight">genre classification</span>, requiring data cleaning.</li>
          </ul>
        </section>

        <section className="mgh-section">
          <h2 className="mgh-section-title">Insights Deep-Dive</h2>

          <h3 className="mgh-subtitle">Bechdel Test Trends Over Time</h3>
          <ul className="mgh-list">
            <li>Movies before <span className="highlight">1980</span> had a low pass rate of only <span className="highlight">30%</span>.</li>
            <li>Since the <span className="highlight">2000s</span>, more films have incorporated stronger female characters and diverse storylines.</li>
            <li>Big-budget franchises continue to show <span className="highlight">inconsistencies</span> in passing the test.</li>
          </ul>

          <h3 className="mgh-subtitle">IMDb Ratings & Audience Response</h3>
          <ul className="mgh-list">
            <li>Movies that pass the Bechdel Test tend to have <span className="highlight">higher IMDb ratings</span>, averaging around <span className="highlight">7.1/10</span>.</li>
            <li>Films that fail the test often have <span className="highlight">polarizing audience reactions</span>, receiving either very high or very low ratings.</li>
          </ul>

          <h3 className="mgh-subtitle">Genre-Specific Analysis</h3>
          <ul className="mgh-list">
            <li><span className="highlight">Drama and Comedy</span> films have the highest pass rate, exceeding <span className="highlight">70%</span>.</li>
            <li><span className="highlight">Action and Thriller</span> movies have the lowest pass rate, around <span className="highlight">40%</span>.</li>
            <li>Animated films tend to <span className="highlight">perform better</span> than live-action movies in terms of gender representation.</li>
          </ul>
        </section>

        <section className="mgh-section">
          <h2 className="mgh-section-title">Recommendations</h2>
          <ul className="mgh-list">
            <li>Filmmakers should create <span className="highlight">stronger female-led narratives</span> to improve representation.</li>
            <li>The <span className="highlight">action and sci-fi</span> genres need more effort to balance gender diversity.</li>
            <li>Industry awards should introduce <span className="highlight">gender inclusion criteria</span> when evaluating films.</li>
            <li>Studios should promote films that pass the Bechdel Test by highlighting their <span className="highlight">inclusive storytelling</span>.</li>
          </ul>
        </section>

        <section className="mgh-section">
          <h2 className="mgh-section-title">Key Questions for Stakeholders</h2>
          <ul className="mgh-list">
            <li>How does <span className="highlight">female representation</span> impact a film’s box office performance?</li>
            <li>What steps can the <span className="highlight">action and thriller</span> genres take to improve gender balance?</li>
            <li>How do audience expectations influence the way gender representation evolves in cinema?</li>
          </ul>
        </section>

        <footer className="mgh-footer">
          <Link to="/" className="mgh-home-link">Back to Homepage</Link>
        </footer>
      </main>
    </div>
  );
};

export default BechdelAnalysis;
