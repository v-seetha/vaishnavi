import React from 'react';
import './projects-theme.css';

const AtliQPresenceInsights = () => {
  return (
    <div className="mgh-page">
      <header className="mgh-header"  style={{ textAlign: 'center' }}>
        <h1 className="mgh-title">AtliQ Presence Insights</h1>
        <div className="mgh-meta">
          {/* Used Tools */}
          <div className="mgh-meta-block">
            <div className="mgh-meta-label">
              Used Tools: <span className="mgh-meta-tag mgh-red">Power BI</span>
            </div>
          </div>
          {/* Project Type */}
          <div className="mgh-meta-block">
            <div className="mgh-meta-label">
              Project Type:
              <span className="mgh-meta-tag mgh-purple">Data Analysis</span>
              <span className="mgh-meta-tag mgh-purple">Dashboard</span>
              <span className="mgh-meta-tag mgh-purple">Attendance Analysis</span>
            </div>
          </div>
          {/* Relevant Link */}
          <div className="mgh-meta-block">
            <div className="mgh-meta-label">
              Relevant Link:{' '}
              <a
                href="https://github.com/v-seetha/HR-Data-Analysis"
                target="_blank"
                rel="noopener noreferrer"
                className="mgh-meta-link"
              >
                https://github.com/username/AtliQ-Attendance-Dashboard
              </a>
            </div>
          </div>
          {/* Type */}
          <div className="mgh-meta-block">
            <div className="mgh-meta-label">
              Type: <span className="mgh-meta-tag mgh-purple">Stakeholder</span>
            </div>
          </div>
        </div>
      </header>

      <main className="mgh-content">
        {/* Project Background Section */}
        <section className="mgh-section">
          <h2 className="mgh-section-title">Project Background</h2>
          <p className="mgh-paragraph">
             This report examines attendance data for company AtliQ from April to June 2022, covering workplace presence patterns, work from home preferences, and sick leave metrics across employees. The goal was to transform this attendance data into actionable insights that reflect the company's workplace dynamics and help optimize workforce management strategies.
          </p>
        </section>

        {/* Executive Summary Section */}
        <section className="mgh-section">
          <h2 className="mgh-section-title">Executive Summary</h2>
          <p className="mgh-paragraph">
             The company maintains a strong overall office presence rate of 91.83%, with 10% of time allocated to work from home and a minimal sick leave percentage of 1.10%. Notable patterns include higher attendance earlier in the week (Monday/Tuesday) with increasing remote work preference toward week's end. These insights suggest opportunities for workspace optimization and flexible work policy enhancements that align with natural employee behaviors.
          </p>
          
        </section>

        {/* Dashboard Image */}
        <section className="mgh-section">
        <img
            src="/AtliQ.gif"
            alt="AtliQ Animated Overview"
            className="mgh-gif-img"
          />
        </section>
        {/* Dataset Overview Section */}
        <section className="mgh-section">
          <h2 className="mgh-section-title">Dataset Overview</h2>
          <p className="mgh-paragraph">
            The dataset used for this analysis covers the attendance records for AtliQ from April to June 2022. It includes key metrics such as daily workplace presence, work-from-home status, and sick leave occurrences across all employees.
          </p>
          <ul className="mgh-list">
            <li>
              <strong>Time Period:</strong> April - June 2022
            </li>
            <li>
              <strong>Total Working Days:</strong> 4,369
            </li>
            <li>
              <strong>Key Variables:</strong> Attendance status, Work-from-home status, Sick leave records
            </li>
            <li>
              <strong>Data Quality:</strong> Data cleansing and validation processes were applied to ensure accuracy and consistency.
            </li>
            <li>
              <strong>Usage:</strong> This dataset forms the basis for deriving insights on workplace dynamics and informing management strategies.
            </li>
          </ul>
        </section>
        {/* Insights Deep-Dive Section */}
        <section className="mgh-section">
          <h2 className="mgh-section-title">Insights Deep-Dive</h2>

          <h3 className="mgh-subtitle">Presence Trends &amp; Patterns:</h3>
          <ul className="mgh-list">
            <li>91.83% overall workplace presence rate across the analyzed period.</li>
            <li>Highest attendance on Mondays (93.21%) and Tuesdays (93.03%), gradually declining to 90.19% on Fridays.</li>
            <li>Two significant attendance drops occurred in May 2022, with presence rates falling to 78.38% and 77.92%.</li>
            <li>Attendance generally maintains stability above 90% with minimal fluctuations, indicating a strong in-office culture.</li>
            <li>The 3.02 percentage point difference between Monday and Friday attendance suggests a natural weekly flow in workplace preferences.</li>
          </ul>
          <br/>
          <h3 className="mgh-subtitle">Work From Home Preferences:</h3>
          <ul className="mgh-list">
            <li>10.00% average WFH preference rate company-wide.</li>
            <li>WFH rates show inverse correlation with office presence, rising from 8.11% on Tuesdays to 13.01% on Fridays (a 60.4% increase).</li>
            <li>
              Significant variation in individual preferences creates three distinct employee groups:
              <ul className="mgh-sublist">
                <li>"Remote-first" employees (Alexander Davenport: 100% WFH)</li>
                <li>"Hybrid-balanced" employees (Andrew Cummings: 40.00%, Bo Cordova: 23.40%)</li>
                <li>"Office-first" employees (Alyson Huber, Ana Little, April Ayers: 0% WFH)</li>
              </ul>
            </li>
            <li>WFH preferences showed notable spikes in May 2022, reaching as high as 23.48% on certain days.</li>
          </ul>
          <br/>
          <h3 className="mgh-subtitle">Sick Leave Patterns:</h3>
          <ul className="mgh-list">
            <li>1.10% overall sick leave percentage (approximately 48 sick days across 4,369 working days).</li>
            <li>Monday has the highest sick rate (1.62%) while Wednesday has the lowest (0.93%), suggesting a potential "weekend effect."</li>
            <li>Sick leave showed an increasing trend from April through June 2022, with several spikes reaching up to 5.42%.</li>
            <li>Ayanna Atkins has the highest individual sick percentage (10.71%), significantly above company average.</li>
            <li>Many employees maintained perfect health records with 0% sick leave during the period.</li>
          </ul>
            <br/>
          <h3 className="mgh-subtitle">Individual Attendance Patterns:</h3>
          <ul className="mgh-list">
            <li>41.07 percentage point gap between highest performers (Alexander Davenport and Alyson Huber: 100% presence) and lowest (Ayanna Atkins: 58.93%).</li>
            <li>High performers with presence rates above 95% include Adriel Pace (98.21%), Adyson Moyer (98.21%), April Ayers (96.43%), and Andrew Cummings (95.24%).</li>
            <li>Ana Little's profile (76.36% presence, 0% WFH, 1.82% sick leave) indicates 21.82% of working days unaccounted for by either WFH or documented illness.</li>
            <li>Ayanna Atkins shows concerning metrics (58.93% presence, 9.09% WFH, 10.71% sick leave), with 21.27% of working days unaccounted for.</li>
          </ul>
        </section>

        {/* Recommendations Section */}
        <section className="mgh-section">
          <h2 className="mgh-section-title">Recommendations</h2>
          <ul className="mgh-list">
            <li>
              <strong>Implement "Core Collaborative Days" Policy:</strong> AtliQ should designate Monday and Tuesday as priority in-office days with meeting-heavy schedules to maximize face-to-face collaboration when attendance naturally peaks above 93%.
            </li>
            <li>
              <strong>Develop "Flex Friday" Program:</strong> Formally acknowledge the existing 13.01% WFH preference on Fridays by creating a structured remote work option for this day, potentially extending it to more employees.
            </li>
            <li>
              <strong>Optimize Workspace Design:</strong> Redesign office layout to accommodate the consistent 90%+ presence rate while building in flexibility for observed attendance fluctuations and the steady 10% remote work rate.
            </li>
            <li>
              <strong>Create Attendance Success Profiles:</strong> Develop differentiated performance metrics and best practices based on top performers like Alexander Davenport and Alyson Huber to guide attendance expectations.
            </li>
            <li>
              <strong>Launch "Monday Wellness" Program:</strong> Address the 1.62% sick leave rate on Mondays with targeted wellness initiatives, including weekend recovery tips and Monday morning health check-ins.
            </li>
            <li>
              <strong>Implement Targeted Intervention Plans:</strong> Develop structured improvement goals and support mechanisms for attendance outliers like Ayanna Atkins and Ana Little to address their significant absence patterns.
            </li>
            <li>
              <strong>Formalize Hybrid Work Guidelines:</strong> Codify the existing 10% WFH preference into official policy while building flexibility for future adjustments based on continued attendance pattern analysis.
            </li>
          </ul>
        </section>

        {/* Key Questions Section */}
        <section className="mgh-section">
          <h2 className="mgh-section-title">Key Questions for Stakeholders Prior to Project Advancement</h2>
          <p>
            These are some questions I would've loved to ask stakeholders to learn more about their needs and existing knowledge:
          </p>
          <ul className="mgh-list">
            <li>Are there department-specific variations in attendance expectations that should be considered?</li>
            <li>What factors might explain the two significant attendance dips in May 2022 (78.38% and 77.92%)?</li>
            <li>Are there specific business outcomes (productivity, collaboration, etc.) that should be correlated with attendance patterns?</li>
          </ul>
        </section>

        {/* Assumptions and Caveats Section */}
        <section className="mgh-section">
          <h2 className="mgh-section-title">Assumptions and Caveats</h2>
          <ul className="mgh-list">
            <li>The analysis covers only three months (April-June 2022) and may not represent long-term or seasonal patterns.</li>
            <li>We assume all working days carry equal importance and don't account for critical meetings or events where presence might be more valuable.</li>
            <li>The analysis doesn't consider the potential impact of different roles or departments on attendance expectations.</li>
            <li>Without context on company policies, we cannot determine if the observed patterns meet organizational goals.</li>
            <li>The data doesn't capture productivity metrics that might correlate with different work location preferences.</li>
          </ul>
          <br/>
          <p className="mgh-paragraph">
            This attendance analysis provides AtliQ with actionable insights to optimize workspace utilization, enhance flexible work policies, and maintain a strong workplace culture while addressing specific areas for improvement.
          </p>
        </section>
      </main>

      <footer className="mgh-footer">
        <a href="/" className="mgh-home-link">Back to Homepage</a>
      </footer>
    </div>
  );
};

export default AtliQPresenceInsights;