import { useEffect, useRef } from 'react';

function AdUnit({ slot, format = 'auto', className = '' }) {
  const adRef = useRef(null);
  const isLoaded = useRef(false);

  useEffect(() => {
    if (adRef.current && !isLoaded.current) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        isLoaded.current = true;
      } catch (error) {
        console.error('AdSense error:', error);
      }
    }

    return () => {
      isLoaded.current = false;
    };
  }, []);

  return (
    <div className={`ad-container p-2 bg-white rounded-lg shadow-sm ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', minHeight: '100px' }}
        data-ad-client="pub-4442939390084208"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}

export default AdUnit; 