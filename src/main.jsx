import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// 標題用的明體（Noto Serif TC），字型檔會跟著網站一起部署
import '@fontsource/noto-serif-tc/700.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
