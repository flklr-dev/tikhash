import { useEffect, useRef, useState } from 'react';

function AdUnit({ slot, format = 'auto', className = '' }) {
  const adRef = useRef(null);
  const isLoaded = useRef(false);
  const [isAdLoaded, setIsAdLoaded] = useState(false);

  useEffect(() => {
    if (adRef.current && !isLoaded.current) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({
          google_ad_client: "pub-4442939390084208",
          enable_page_level_ads: true,
          callback: () => setIsAdLoaded(true)
        });
        isLoaded.current = true;
      } catch (error) {
        console.error('AdSense error:', error);
      }
    }

    return () => {
      isLoaded.current = false;
    };
  }, []);

  const getAdHeight = () => {
    switch (format) {
      case 'vertical':
        return 'min-h-[600px]';
      case 'horizontal':
        return 'min-h-[90px]';
      default:
        return 'min-h-[250px]';
    }
  };

  return (
    <div className={`ad-container relative ${className}`}>
      {!isAdLoaded && (
        <div className={`bg-gray-100 rounded-lg ${getAdHeight()} flex items-center justify-center`}>
          <div className="text-center p-4">
            <div className="animate-pulse flex flex-col items-center">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
            <p className="text-gray-400 text-sm mt-2">Advertisement</p>
          </div>
        </div>
      )}
      <ins
        ref={adRef}
        className={`adsbygoogle ${!isAdLoaded ? 'hidden' : ''}`}
        style={{ display: 'block' }}
        data-ad-client="pub-4442939390084208"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}

export default AdUnit; 