import React from 'react';
import { Link } from 'react-router-dom';
import './projects-theme.css';

const CarAnalysis = () => {
  return (
    <div className="mgh-page">
      <header className="mgh-header" style={{ textAlign: 'center' }}>
        <h1 className="mgh-title">Car Analysis Insights</h1>
        <div className="mgh-meta">
          <div className="mgh-meta-block">
            <div className="mgh-meta-label">
              Used Tools: <span className="mgh-meta-tag mgh-red">Python</span>
              <span className="mgh-meta-tag mgh-red">Pandas</span>
              <span className="mgh-meta-tag mgh-red">Matplotlib</span>
              <span className="mgh-meta-tag mgh-red">Seaborn</span>
            </div>
          </div>
          <div className="mgh-meta-block">
            <div className="mgh-meta-label">
              Project Type:
              <span className="mgh-meta-tag mgh-purple">Data Analysis</span>
              <span className="mgh-meta-tag mgh-purple">Automobile Market Trends</span>
              <span className="mgh-meta-tag mgh-purple">Vehicle Performance Analysis</span>
            </div>
          </div>
          <div className="mgh-meta-block">
            <div className="mgh-meta-label">
              Relevant Link:{' '}
              <a
                href="https://github.com/v-seetha/Car-Analysis"
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
        {/* Project Background */}
        <section className="mgh-section">
          <h2 className="mgh-section-title">Project Background</h2>
          <p className="mgh-paragraph">
            This project explores a dataset of 11,914 car models to analyze performance, pricing, engine types, and fuel efficiency.
            The goal is to uncover key market trends and insights into the automotive industry.
          </p>
        </section>

        {/* Executive Summary */}
        <section className="mgh-section">
          <h2 className="mgh-section-title">Executive Summary</h2>
          <p className="mgh-paragraph">
            The analysis reveals that luxury brands dominate high-performance segments, while economy vehicles are trending towards fuel efficiency.
            Market data suggests a significant increase in hybrid and electric vehicle adoption in recent years. Outliers in price and horsepower indicate
            clear segmentation between luxury, mid-range, and economy vehicles.
          </p>
        </section>

        <section className="mgh-section">
        <img
            src="/Car Data Analysis.gif"
            alt="Car Data Analysis"
            className="mgh-gif-img"
          />
        </section>

        {/* Dataset Overview */}
        <section className="mgh-section">
          <h2 className="mgh-section-title">Dataset Overview</h2>
          <p className="mgh-paragraph">
            The dataset consists of 11,914 car models with detailed specifications such as engine horsepower, number of cylinders, fuel type, 
            vehicle style, and market category.
          </p>
          <ul className="mgh-list">
            <li><strong>Total Records:</strong> 11,914 cars</li>
            <li><strong>Key Variables:</strong> Make, Model, Year, Engine HP, Cylinders, Fuel Type, Vehicle Style, Transmission Type, MSRP</li>
            <li><strong>Missing Data:</strong> Some models lack values for engine horsepower and cylinder count.</li>
            <li><strong>Data Quality:</strong> Duplicate and missing records were cleaned before analysis.</li>
          </ul>
        </section>

        {/* Insights Deep-Dive */}
        <section className="mgh-section">
          <h2 className="mgh-section-title">Insights Deep-Dive</h2>

          <h3 className="mgh-subtitle">Performance Trends & Engine Power:</h3>
          <ul className="mgh-list">
            <li>Luxury cars (BMW, Mercedes, Audi) have an average horsepower of 300+ HP.</li>
            <li>Economy vehicles (Toyota, Honda, Ford) maintain an average of 150 HP.</li>
            <li>Supercars (Ferrari, Lamborghini) push performance boundaries with 600+ HP engines.</li>
          </ul>
          <br/>
          <h3 className="mgh-subtitle">Pricing Analysis & Market Trends:</h3>
          <ul className="mgh-list">
            <li>Average car price (MSRP) across the dataset is $35,000.</li>
            <li>Luxury brands have a steep increase in price, with some models exceeding $300,000.</li>
            <li>Fuel-efficient and hybrid cars are gaining market share, reflected in rising MSRPs.</li>
          </ul>
          <br/>
          <h3 className="mgh-subtitle">Fuel Efficiency & Environmental Trends:</h3>
          <ul className="mgh-list">
            <li>Hybrid and electric vehicles show the highest city and highway MPG.</li>
            <li>Gasoline-powered cars show an average of 25 MPG (city) and 30 MPG (highway).</li>
            <li>Diesel vehicles perform better in highway conditions but have lower city mileage.</li>
          </ul>
          <br/>
          <h3 className="mgh-subtitle">Transmission & Drive Mode Preferences:</h3>
          <ul className="mgh-list">
            <li>Automatic transmissions dominate (80% of vehicles), while manual transmissions are rare.</li>
            <li>AWD and 4WD are most common in SUVs and high-performance vehicles.</li>
          </ul>
        </section>

        {/* Recommendations */}
        <section className="mgh-section">
          <h2 className="mgh-section-title">Recommendations</h2>
          <ul className="mgh-list">
            <li><strong>Encourage Hybrid & Electric Adoption:</strong> With increasing fuel efficiency demands, manufacturers should invest in expanding hybrid/electric models.</li>
            <li><strong>Targeted Marketing for Luxury Cars:</strong> Brands like BMW and Mercedes should focus marketing efforts on high-income demographics.</li>
            <li><strong>Optimizing Performance-to-Price Ratio:</strong> Mid-tier brands should balance engine performance with affordability.</li>
            <li><strong>Fuel Efficiency Innovations:</strong> More investments should be made in diesel alternatives and battery technology for longer electric range.</li>
          </ul>
        </section>

        {/* Key Questions for Stakeholders */}
        <section className="mgh-section">
          <h2 className="mgh-section-title">Key Questions for Stakeholders</h2>
          <ul className="mgh-list">
            <li>How do changes in fuel efficiency affect consumer preferences?</li>
            <li>What is the impact of increasing hybrid/electric models on traditional gasoline vehicles?</li>
            <li>What factors contribute to the significant price outliers in the dataset?</li>
          </ul>
        </section>

        {/* Assumptions & Caveats */}
        <section className="mgh-section">
          <h2 className="mgh-section-title">Assumptions & Caveats</h2>
          <ul className="mgh-list">
            <li>The dataset does not capture real-time market fluctuations.</li>
            <li>Assumptions are based on historical car models and may not reflect future trends.</li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="mgh-footer">
          <Link to="/" className="mgh-home-link">Back to Homepage</Link>
        </footer>
      </main>
    </div>
  );
};

export default CarAnalysis;
