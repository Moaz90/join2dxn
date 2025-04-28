import React, { useState } from 'react';
import { EARNINGS_TIERS } from '../constants';
import SectionTitle from './SectionTitle';

const EarningsCalculator: React.FC = () => {
  const [membersCount, setMembersCount] = useState<number>(15);
  
  const currentTier = EARNINGS_TIERS.find(tier => tier.members === membersCount) || EARNINGS_TIERS[0];
  
  return (
    <section id="calculator" className="py-16 bg-green-700 text-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Potential Earnings Calculator" 
          subtitle="See what you could earn with your DXN network" 
          light
        />
        
        <div className="max-w-3xl mx-auto mt-12 bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <div className="mb-6">
            <label className="block text-white mb-2 text-lg">Select your team size:</label>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              {EARNINGS_TIERS.map(tier => (
                <button
                  key={tier.members}
                  onClick={() => setMembersCount(tier.members)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    membersCount === tier.members
                      ? 'bg-white text-green-700 font-bold shadow-lg'
                      : 'bg-white/20 hover:bg-white/30'
                  }`}
                >
                  {tier.members} Members
                </button>
              ))}
            </div>
          </div>
          
          <div className="text-center mb-8">
            <p className="text-xl mb-2">Your Potential Monthly Earnings:</p>
            <div className="text-5xl font-bold mb-2 text-white">
              ${currentTier.potentialEarnings}
            </div>
            <p className="text-lg text-white/80">{currentTier.label}</p>
          </div>
          
          <div className="bg-white/10 p-4 rounded-lg">
            <p className="text-sm text-white/80 italic text-center">
              Note: These figures are estimates based on average team performance. 
              Actual earnings will vary based on product sales, team structure, and individual effort.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarningsCalculator;