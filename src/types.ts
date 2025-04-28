// types/global.d.ts
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export {};

export interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
}

export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
}

export interface CalculatorTier {
  members: number;
  potentialEarnings: number;
  label: string;
}