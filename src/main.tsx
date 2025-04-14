import { Time } from 'lightweight-charts';
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
