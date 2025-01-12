import { useEffect, useRef, useState } from 'react';

function AdUnit({ slot, format = 'auto', className = '' }) {
  const adRef = useRef(null);
  const containerRef = useRef(null);
  const [isAdLoaded, setIsAdLoaded] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    // Initial size
    updateSize();

    // Update size on window resize
    window.addEventListener('resize', updateSize);
    
    // Initialize ad after container width is set
    if (containerWidth > 0) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({
          google_ad_client: "pub-4442939390084208",
          enable_page_level_ads: true,
          callback: () => setIsAdLoaded(true)
        });
      } catch (error) {
        console.error('AdSense error:', error);
      }
    }

    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, [containerWidth]);

  const getAdDimensions = () => {
    switch (format) {
      case 'vertical':
        return {
          width: Math.min(containerWidth, 300),
          height: 600
        };
      case 'horizontal':
        return {
          width: containerWidth,
          height: 90
        };
      default:
        return {
          width: containerWidth,
          height: 250
        };
    }
  };

  const dimensions = getAdDimensions();

  return (
    <div ref={containerRef} className={`ad-container relative ${className}`}>
      {!isAdLoaded && (
        <div 
          className="bg-gray-100 rounded-lg flex items-center justify-center"
          style={{ 
            width: dimensions.width > 0 ? `${dimensions.width}px` : '100%',
            height: `${dimensions.height}px`
          }}
        >
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
        style={{
          display: 'block',
          width: dimensions.width > 0 ? `${dimensions.width}px` : '100%',
          height: `${dimensions.height}px`
        }}
        data-ad-client="pub-4442939390084208"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}

export default AdUnit; 