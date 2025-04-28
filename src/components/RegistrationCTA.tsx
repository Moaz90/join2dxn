import React from 'react';
import { ExternalLink } from 'lucide-react';
import { DXN_REGISTRATION_URL } from '../constants';

const RegistrationCTA: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a 
        href={DXN_REGISTRATION_URL} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-full shadow-lg transition-all transform hover:scale-105 animate-pulse hover:animate-none"
      >
        Register Now with DXN
        <ExternalLink className="ml-2 h-5 w-5" />
      </a>
    </div>
  );
};

export default RegistrationCTA;