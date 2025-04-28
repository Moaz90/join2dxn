import React from 'react';
import { UserPlus, ShoppingBag, Share2, Users, BookOpen } from 'lucide-react';
import { Step } from '../types';

interface StepCardProps {
  step: Step;
}

const StepCard: React.FC<StepCardProps> = ({ step }) => {
  const getIcon = () => {
    switch (step.icon) {
      case 'UserPlus':
        return <UserPlus className="h-6 w-6 text-green-600" />;
      case 'ShoppingBag':
        return <ShoppingBag className="h-6 w-6 text-green-600" />;
      case 'Share2':
        return <Share2 className="h-6 w-6 text-green-600" />;
      case 'Users':
        return <Users className="h-6 w-6 text-green-600" />;
      case 'BookOpen':
        return <BookOpen className="h-6 w-6 text-green-600" />;
      default:
        return <UserPlus className="h-6 w-6 text-green-600" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={step.imageUrl} 
          alt={step.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
          {step.id}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-3">
          <div className="p-2 bg-green-50 rounded-full mr-3">
            {getIcon()}
          </div>
          <h3 className="font-bold text-xl text-gray-800">{step.title}</h3>
        </div>
        <p className="text-gray-600 leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
};

export default StepCard;