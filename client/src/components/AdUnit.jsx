function AdUnit({ slot, format = 'auto' }) {
  return (
    <div className="ad-container my-4">
      <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client="YOUR-ADSENSE-CLIENT-ID"
           data-ad-slot={slot}
           data-ad-format={format}
           data-full-width-responsive="true"></ins>
      {/* Initialize ad */}
      {typeof window !== 'undefined' && (window.adsbygoogle = window.adsbygoogle || []).push({})}
    </div>
  );
}

export default AdUnit; 