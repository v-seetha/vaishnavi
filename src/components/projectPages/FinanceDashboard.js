import React from 'react';
import { Link } from 'react-router-dom';
import './projects-theme.css';

const FinanceDashboard = () => {
  return (
    <div className="mgh-page">
      <header className="mgh-header" style={{ textAlign: 'center' }}>
        <h1 className="mgh-title">Personal Finance Dashboard - Expense, Savings & Net Worth Analysis</h1>
        <div className="mgh-meta">
          <div className="mgh-meta-block">
            <div className="mgh-meta-label">
              Used Tools:
              <span className="mgh-meta-tag mgh-red">Python</span>
              <span className="mgh-meta-tag mgh-red">Pandas</span>
              <span className="mgh-meta-tag mgh-red">Power BI</span>
              <span className="mgh-meta-tag mgh-red">D3.js</span>
            </div>
          </div>
          <div className="mgh-meta-block">
            <div className="mgh-meta-label">
              Project Type:
              <span className="mgh-meta-tag mgh-purple">Data Analysis</span>
              <span className="mgh-meta-tag mgh-purple">Budgeting</span>
              <span className="mgh-meta-tag mgh-purple">Financial Planning</span>
            </div>
          </div>
          <div className="mgh-meta-block">
            <div className="mgh-meta-label">
              Relevant Link:{' '}
              <a
                href="https://github.com/v-seetha/Finance-Dashboard"
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
            While having tea with a friend, she casually mentioned that she had no idea where her money was going each month. 
            Her finances felt like they were on <span className="highlight">autopilot</span>, and she wanted to take control. 
            That’s when I realized I could help her understand her financial journey better.
          </p>
          <p className="mgh-paragraph">
            Using her data from bank statements, credit card bills, and savings records, I built a <span className="highlight">personal finance dashboard</span>. 
            This dashboard provides a clear view of her income, expenses, savings, and net worth over time. 
            More importantly, it helps answer key questions like: <span className="highlight">Am I saving enough?</span> 
            <span className="highlight">Which expense categories are growing the fastest?</span> 
            <span className="highlight">How is my net worth changing each month?</span>
          </p>
        </section>
        <section className="mgh-section">
          <img src="/Finance_Dashboard.gif" alt="Finance_Dashboard Test Animated Overview" className="mgh-gif-img" />
        </section>
        <section className="mgh-section">
          <h2 className="mgh-section-title">Dataset Overview</h2>
          <ul className="mgh-list">
            <li>Financial records cover the period from <span className="highlight">January 2018 to January 2021</span>.</li>
            <li>Includes key fields like <span className="highlight">Income, Expenses, Savings, Net Worth</span>.</li>
            <li>Data sourced from <span className="highlight">bank statements, credit card bills, and manual tracking</span>.</li>
            <li>Expense categories include <span className="highlight">House Rent, Groceries, Health, Leisure, Shopping</span>.</li>
            <li>Savings categories cover <span className="highlight">Mutual Funds, Fixed Deposits, Emergency Fund, Liquid Cash</span>.</li>
          </ul>
        </section>

        <section className="mgh-section">
          <img src="/finance_dashboard.png" alt="Finance Dashboard Overview" className="mgh-gif-img" />
        </section>

        <section className="mgh-section">
          <h2 className="mgh-section-title">Insights Deep-Dive</h2>

          <h3 className="mgh-subtitle">Spending and Income Trends</h3>
          <ul className="mgh-list">
            <li>Annual income grew from <span className="highlight">₹3.92L in 2018</span> to <span className="highlight">₹5.93L in 2020</span>, reflecting career progression.</li>
            <li>Expenses consistently made up <span className="highlight">78% of total income</span>, leaving <span className="highlight">22% for savings</span>.</li>
            <li>House rent accounts for the <span className="highlight">largest share of expenses (40.44%)</span>, followed by groceries and EMIs.</li>
          </ul>

          <h3 className="mgh-subtitle">Savings and Investments</h3>
          <ul className="mgh-list">
            <li>The highest savings category is <span className="highlight">Mutual Funds (71.58%)</span>, showing a preference for market-based investments.</li>
            <li>Emergency funds and fixed deposits make up <span className="highlight">14.44% and 13.67%</span> of total savings.</li>
            <li>Liquid cash holdings remain low at <span className="highlight">0.31%</span>, indicating a preference for investing over keeping cash reserves.</li>
          </ul>

          <h3 className="mgh-subtitle">Net Worth Growth</h3>
          <ul className="mgh-list">
            <li>Net worth grew from <span className="highlight">₹70K in Jan 2018</span> to <span className="highlight">₹325.5K in Jan 2021</span>.</li>
            <li>Consistent savings and investments contributed to a steady upward trend.</li>
            <li>Occasional dips suggest periods of high expenditure, likely due to travel or unexpected expenses.</li>
          </ul>
        </section>

        <section className="mgh-section">
          <h2 className="mgh-section-title">Recommendations</h2>
          <ul className="mgh-list">
            <li>Reduce discretionary spending on <span className="highlight">Leisure and Shopping</span> to increase savings.</li>
            <li>Increase contributions to <span className="highlight">Emergency Fund</span> to ensure financial security.</li>
            <li>Track month-over-month expenses to identify <span className="highlight">hidden spending patterns</span>.</li>
            <li>Consider diversifying savings beyond <span className="highlight">Mutual Funds</span> into other investment options.</li>
          </ul>
        </section>

        <section className="mgh-section">
          <h2 className="mgh-section-title">Key Questions for Stakeholders</h2>
          <ul className="mgh-list">
            <li>How can monthly expense tracking help in better <span className="highlight">budget planning</span>?</li>
            <li>What adjustments can be made to improve the <span className="highlight">savings-to-expense ratio</span>?</li>
            <li>Should there be a financial goal-setting strategy to maintain <span className="highlight">net worth growth</span>?</li>
          </ul>
        </section>

        <footer className="mgh-footer">
          <Link to="/" className="mgh-home-link">Back to Homepage</Link>
        </footer>
      </main>
    </div>
  );
};

export default FinanceDashboard;
