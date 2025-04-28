import React from 'react';

interface AdPlacementProps {
  position: 'top' | 'inline' | 'bottom';
  className?: string;
}

const AdPlacement: React.FC<AdPlacementProps> = ({ position, className = '' }) => {
  const getAdSize = () => {
    switch (position) {
      case 'top':
        return 'h-[90px] md:h-[90px]';
      case 'inline':
        return 'h-[250px] md:h-[280px]';
      case 'bottom':
        return 'h-[90px] md:h-[90px]';
      default:
        return 'h-[250px]';
    }
  };

  return (
       <p className="text-gray-400 text-sm"><ins className="adsbygoogle"
     style={{ display: 'block' }}
     data-ad-client="ca-pub-9135473927777985"
     data-ad-slot="1416202604"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
    
  );
};

export default AdPlacement;