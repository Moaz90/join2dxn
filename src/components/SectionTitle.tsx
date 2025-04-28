import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, light = false }) => {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${light ? 'text-white' : 'text-gray-800'}`}>
        {title}
      </h2>
      <div className="w-16 h-1 bg-green-500 mx-auto mb-4"></div>
      <p className={`text-lg ${light ? 'text-white/80' : 'text-gray-600'}`}>
        {subtitle}
      </p>
    </div>
  );
};

export default SectionTitle;