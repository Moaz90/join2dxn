import React from 'react';
import { STEPS } from '../constants';
import StepCard from './StepCard';
import AdPlacement from './AdPlacement';
import SectionTitle from './SectionTitle';

const Steps: React.FC = () => {
  return (
    <section id="steps" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="5 Practical Steps to Success with DXN" 
          subtitle="Follow these proven steps to build your income with DXN" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {STEPS.slice(0, 2).map(step => (
            <StepCard key={step.id} step={step} />
          ))}
          
          <div className="col-span-1 flex items-center justify-center">
            <AdPlacement position="inline" />
          </div>
          
          {STEPS.slice(2, 4).map(step => (
            <StepCard key={step.id} step={step} />
          ))}
          
          <div className="col-span-1 lg:col-span-3 mx-auto max-w-md">
            <StepCard step={STEPS[4]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;