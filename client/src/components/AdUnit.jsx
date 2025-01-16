import { useEffect, useRef, useState } from 'react';

function AdUnit({ slot, format = 'auto', className = '' }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate ad loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`ad-unit ${className}`}>
      {isLoading ? (
        <div className="bg-gray-100 animate-pulse rounded-lg p-4 min-h-[250px] flex items-center justify-center">
          <span className="text-gray-400">Advertisement Loading...</span>
        </div>
      ) : (
        <ins
          className="adsbygoogle"
          style={{ display: 'block', minHeight: '250px' }}
          data-ad-client="pub-4442939390084208"
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive="true"
        />
      )}
    </div>
  );
}

export default AdUnit; 