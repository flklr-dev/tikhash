import { useEffect, useRef, useState } from 'react';

let isPageLevelAdsEnabled = false;

function AdUnit({ slot, format = 'auto', className = '' }) {
  return (
    <div className={`ad-unit ${className}`}>
      <ins
        className="adsbygoogle"
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