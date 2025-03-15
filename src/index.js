import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Optional, if you have additional global styles

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
