import './css/main.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SpeedInsights } from "@vercel/speed-insights/react";


import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <>
    <App />
    <SpeedInsights />
    </>

);

reportWebVitals();
