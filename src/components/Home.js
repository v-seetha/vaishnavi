import React, { useEffect, useState } from 'react';
import './Home.css';

// Animated Bar Chart
const BarChart = () => (
  <div className="chart chart-bar">
    <div className="chart-axis">
      <div className="x-axis"></div>
      <div className="y-axis"></div>
    </div>
    <div className="bar-chart">
      <div className="bar" style={{ "--final-height": "50%" }}></div>
      <div className="bar" style={{ "--final-height": "70%" }}></div>
      <div className="bar" style={{ "--final-height": "40%" }}></div>
      <div className="bar" style={{ "--final-height": "80%" }}></div>
      <div className="bar" style={{ "--final-height": "60%" }}></div>
      <div className="bar" style={{ "--final-height": "90%" }}></div>
    </div>
  </div>
);

// Animated Line Chart
const LineChart = () => (
  <svg className="line-chart" viewBox="0 0 400 300">
    <polyline
      className="line-path"
      fill="none"
      stroke="#66ffcc"
      strokeWidth="4"
      points="50,250 100,200 150,220 200,180 250,200 300,150 350,170"
    />
    <line x1="50" y1="250" x2="350" y2="250" stroke="#66ffcc" strokeWidth="2" />
    <line x1="50" y1="250" x2="50" y2="50" stroke="#66ffcc" strokeWidth="2" />
  </svg>
);

// Animated Pie Chart
const PieChart = () => (
  <svg className="pie-chart" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="45" fill="none" stroke="#333" strokeWidth="10" />
    <circle
      className="pie-data"
      cx="50"
      cy="50"
      r="45"
      fill="none"
      stroke="#66ffcc"
      strokeWidth="10"
      strokeDasharray="282.6"
      strokeDashoffset="282.6"
    />
  </svg>
);

// Animated Area Chart
const AreaChart = () => (
  <svg className="area-chart" viewBox="0 0 400 300">
    <defs>
      <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#66ffcc" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#0f0f0f" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    <polygon
      className="area-fill"
      points="50,250 100,200 150,220 200,180 250,200 300,150 350,170 350,250 50,250"
      fill="url(#areaGradient)"
    />
    <polyline
      className="area-line"
      fill="none"
      stroke="#66ffcc"
      strokeWidth="3"
      points="50,250 100,200 150,220 200,180 250,200 300,150 350,170"
    />
    <line x1="50" y1="250" x2="350" y2="250" stroke="#66ffcc" strokeWidth="2" />
    <line x1="50" y1="250" x2="50" y2="50" stroke="#66ffcc" strokeWidth="2" />
  </svg>
);

// Animated Radar Chart
const RadarChart = () => (
  <svg className="radar-chart" viewBox="0 0 100 100">
    <polygon points="50,5 90,35 75,90 25,90 10,35" fill="none" stroke="#66ffcc" strokeWidth="1" />
    <polygon points="50,15 80,35 70,75 30,75 20,35" fill="none" stroke="#66ffcc" strokeWidth="1" />
    <polygon points="50,20 85,35 65,70 35,70 15,35" fill="rgba(102,255,204,0.3)" stroke="#66ffcc" strokeWidth="2" />
  </svg>
);

// Animated Bubble Chart
const BubbleChart = () => (
  <svg className="bubble-chart" viewBox="0 0 400 300">
    <circle className="bubble" cx="80" cy="220" r="20" fill="#66ffcc" />
    <circle className="bubble" cx="150" cy="180" r="30" fill="#66ffcc" />
    <circle className="bubble" cx="220" cy="200" r="25" fill="#66ffcc" />
    <circle className="bubble" cx="300" cy="160" r="35" fill="#66ffcc" />
    <circle className="bubble" cx="360" cy="230" r="15" fill="#66ffcc" />
  </svg>
);

// Animated Scatter Plot
const ScatterPlot = () => (
  <svg className="scatter-plot" viewBox="0 0 400 300">
    <line x1="50" y1="250" x2="350" y2="250" stroke="#66ffcc" strokeWidth="2" />
    <line x1="50" y1="250" x2="50" y2="50" stroke="#66ffcc" strokeWidth="2" />
    <circle cx="70" cy="230" r="4" fill="#66ffcc" />
    <circle cx="120" cy="210" r="4" fill="#66ffcc" />
    <circle cx="170" cy="190" r="4" fill="#66ffcc" />
    <circle cx="220" cy="170" r="4" fill="#66ffcc" />
    <circle cx="270" cy="180" r="4" fill="#66ffcc" />
    <circle cx="320" cy="160" r="4" fill="#66ffcc" />
  </svg>
);

// Animated Neural Network Chart (AI Aspect)
const NeuralNetworkChart = () => (
  <svg className="neural-chart" viewBox="0 0 400 300">
    {/* Input Layer */}
    <g className="layer input-layer">
      <circle cx="50" cy="100" r="8" fill="#66ffcc" />
      <circle cx="50" cy="150" r="8" fill="#66ffcc" />
      <circle cx="50" cy="200" r="8" fill="#66ffcc" />
    </g>
    {/* Hidden Layer */}
    <g className="layer hidden-layer">
      <circle cx="200" cy="80" r="8" fill="#66ffcc" />
      <circle cx="200" cy="140" r="8" fill="#66ffcc" />
      <circle cx="200" cy="200" r="8" fill="#66ffcc" />
    </g>
    {/* Output Layer */}
    <g className="layer output-layer">
      <circle cx="350" cy="140" r="8" fill="#66ffcc" />
    </g>
    {/* Connections from Input to Hidden */}
    <line x1="50" y1="100" x2="200" y2="80" stroke="#66ffcc" strokeWidth="2" />
    <line x1="50" y1="100" x2="200" y2="140" stroke="#66ffcc" strokeWidth="2" />
    <line x1="50" y1="100" x2="200" y2="200" stroke="#66ffcc" strokeWidth="2" />
    <line x1="50" y1="150" x2="200" y2="80" stroke="#66ffcc" strokeWidth="2" />
    <line x1="50" y1="150" x2="200" y2="140" stroke="#66ffcc" strokeWidth="2" />
    <line x1="50" y1="150" x2="200" y2="200" stroke="#66ffcc" strokeWidth="2" />
    <line x1="50" y1="200" x2="200" y2="80" stroke="#66ffcc" strokeWidth="2" />
    <line x1="50" y1="200" x2="200" y2="140" stroke="#66ffcc" strokeWidth="2" />
    <line x1="50" y1="200" x2="200" y2="200" stroke="#66ffcc" strokeWidth="2" />
    {/* Connections from Hidden to Output */}
    <line x1="200" y1="80" x2="350" y2="140" stroke="#66ffcc" strokeWidth="2" />
    <line x1="200" y1="140" x2="350" y2="140" stroke="#66ffcc" strokeWidth="2" />
    <line x1="200" y1="200" x2="350" y2="140" stroke="#66ffcc" strokeWidth="2" />
  </svg>
);

// Array of chart components to cycle through
const chartComponents = [
  { component: BarChart, name: "Bar Chart" },
  { component: LineChart, name: "Line Chart" },
  { component: PieChart, name: "Pie Chart" },
  { component: AreaChart, name: "Area Chart" },
  { component: RadarChart, name: "Radar Chart" },
  { component: BubbleChart, name: "Bubble Chart" },
  { component: ScatterPlot, name: "Scatter Plot" },
  { component: NeuralNetworkChart, name: "Neural Network" }
];

function Home() {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [greeting, setGreeting] = useState('');
  const [chartIndex, setChartIndex] = useState(0);

  // Parallax effect for left text
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 5;
      const y = (e.clientY / innerHeight - 0.5) * 5;
      setOffsetX(x);
      setOffsetY(y);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // AI-powered greeting based on local time
  useEffect(() => {
    const hour = new Date().getHours();
    let newGreeting = "";

    if (hour >= 5 && hour < 7) {
      const earlyMorning = ["You're up early! Let's make today amazing! ☀️", "A fresh start to a brand-new day! 🌅", "Good morning, early riser! What’s on the agenda? 🌞"];
      newGreeting = earlyMorning[Math.floor(Math.random() * earlyMorning.length)];
    } else if (hour >= 7 && hour < 11) {
      const morning = ["Morning sunshine! Ready to conquer the day? ☕", "A bright morning for bright ideas! 🌞", "Hey there! Let’s turn coffee into code! ☕💻"];
      newGreeting = morning[Math.floor(Math.random() * morning.length)];
    } else if (hour >= 11 && hour < 12) {
      const lateMorning = ["Almost lunchtime! Powering through? 🍽️", "Brunch time! Hope you’re having a great day! 🥑🍳"];
      newGreeting = lateMorning[Math.floor(Math.random() * lateMorning.length)];
    } else if (hour >= 12 && hour < 17) {
      const afternoon = ["Hey! How’s your afternoon going? 🌤️", "Hope your day is as productive as your data! 📊", "Still grinding? Take a deep breath—you got this! 💪"];
      newGreeting = afternoon[Math.floor(Math.random() * afternoon.length)];
    } else if (hour >= 17 && hour < 21) {
      const evening = ["Good evening! Time to wind down or power up? 🌆", "The sun’s setting, but great ideas don’t! 🌅", "Hope your day was insightful! Relax and recharge. 🍵"];
      newGreeting = evening[Math.floor(Math.random() * evening.length)];
    } else if (hour >= 21 && hour < 23) {
      const night = ["The night is young, and so are your ideas! 🚀", "Still working? Late-night inspiration hits differently. 🌙✨", "Unwinding for the night or just getting started? 😏"];
      newGreeting = night[Math.floor(Math.random() * night.length)];
    } else if (hour >= 23 || hour < 2) {
      const lateNight = ["Burning the midnight oil, I see! 🔥💡", "The world sleeps, but innovators like you dream big. 🌌", "Another late-night coding session? Grab some tea! 🍵"];
      newGreeting = lateNight[Math.floor(Math.random() * lateNight.length)];
    } else {
      const deepNight = ["Up at this hour? AI never sleeps, and neither do great minds. 🤖💭"];
      newGreeting = deepNight[Math.floor(Math.random() * deepNight.length)];
    }

    setGreeting(newGreeting);
  }, []);

  const ChartComponent = chartComponents[chartIndex].component;

  return (
    <section className="hero-section">
      {/* Left Column: Personal Introduction */}
      <div
        className="hero-left"
        style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}
      >
        <h2 className="ai-greeting">{greeting}, I'm</h2>
        <h1 className="hero-name">Vaishnavi Seetharaman</h1>
        <p className="hero-tagline">A Data Analyst who brings data to life through AI-powered analytics</p>
        <div class="button-section">
        
    <button className='hero-button' onClick={() => window.open('https://www.linkedin.com/in/v-seetha', '_blank')}>
    <img 
            src="  https://img.icons8.com/?size=100&id=8808&format=png&color=22C3E6" 
            alt="Linkedin" 
            className="button-icon"
        /> 
    </button>
    <button className='hero-button' onClick={() => window.open('https://github.com/v-seetha', '_blank')}>
        <img 
            src="https://img.icons8.com/?size=100&id=fmFqQmR0UdsR&format=png&color=22C3E6" 
            alt="GitHub" 
            className="button-icon"
        /> 
    </button>
    <button className='hero-button' onClick={() => window.open('https://www.linkedin.com/in/v-seetha', '_blank')}>
    <img 
            src=" https://img.icons8.com/?size=100&id=60688&format=png&color=22C3E6" 
            alt="Email" 
            className="button-icon"
        /> 
    </button>
    
    </div>
      </div>
    
      {/* Right Column: Animated Chart Carousel with Fun Axes */}
      <div className="hero-right">
        <div className="chart-carousel">
          <div className="chart-container">
            <ChartComponent />
            <div className="axis-label x-axis-label">
              X: Curiosity Unleashed
            </div>
            <div className="axis-label y-axis-label">
              Y: Insights Unbound
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
