import { useState, useEffect, useRef } from 'react';
import AdUnit from './AdUnit';

function HashtagForm({ onGenerate, onShowResults }) {
  const [keyword, setKeyword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showAdModal, setShowAdModal] = useState(false);
  const [error, setError] = useState(null);
  const [timeLeft, setTimeLeft] = useState(() => {
    const savedTime = localStorage.getItem('nextGenerateTime');
    if (savedTime && Date.now() < parseInt(savedTime)) {
      return Math.ceil((parseInt(savedTime) - Date.now()) / 1000);
    }
    return 0;
  });
  const resultsRef = useRef(null);

  useEffect(() => {
    let timer;
    if (timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          const newTime = prev - 1;
          if (newTime <= 0) {
            localStorage.removeItem('nextGenerateTime');
            return 0;
          }
          return newTime;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!keyword.trim() || timeLeft > 0) return;

    setIsLoading(true);
    setError(null);
    try {
      const result = await onGenerate(keyword);
      setShowAdModal(true);
      // Set 90-second cooldown
      const nextTime = Date.now() + 90000;
      localStorage.setItem('nextGenerateTime', nextTime.toString());
      setTimeLeft(90);
    } catch (error) {
      setError(error.message || 'An error occurred while generating hashtags');
    } finally {
      setIsLoading(false);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleCloseAd = () => {
    setShowAdModal(false);
    onShowResults();
    
    // Wait for modal to close and results to render
    setTimeout(() => {
      const resultsElement = document.getElementById('hashtag-results');
      if (resultsElement) {
        // Get the viewport height
        const viewportHeight = window.innerHeight;
        
        // Get the element's position and dimensions
        const elementRect = resultsElement.getBoundingClientRect();
        
        // Calculate the scroll position to center the element
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const elementTop = scrollTop + elementRect.top;
        const targetPosition = elementTop - (viewportHeight - elementRect.height) / 2;

        // Perform the scroll
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Add highlight animation
        resultsElement.classList.add('highlight-results');
        setTimeout(() => {
          resultsElement.classList.remove('highlight-results');
        }, 1500);
      }
    }, 100);
  };

  return (
    <div className="space-y-6">
      {/* Service Notice */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              Note: Initial requests may take up to 50 seconds.
              {timeLeft > 0 && (
                <span className="block font-medium mt-1">
                  Next generation available in: {formatTime(timeLeft)}
                </span>
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 sm:p-6">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
          Generate TikTok Hashtags
        </h1>
        
        {error && (
          <div className="mb-4 bg-red-50 border-l-4 border-red-400 p-4 rounded-md">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="keyword" className="block text-sm font-medium text-gray-700">
              Enter your content topic
            </label>
            <input
              type="text"
              id="keyword"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="e.g., travel, fitness, cooking"
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border"
              disabled={isLoading}
            />
          </div>
          <button
            type="submit"
            disabled={isLoading || !keyword.trim() || timeLeft > 0}
            className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white transition-colors
              ${isLoading || !keyword.trim() || timeLeft > 0 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
              }`}
          >
            {isLoading ? (
              <div className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating... (This may take up to 50s)
              </div>
            ) : (
              'Generate Hashtags'
            )}
          </button>
        </form>
      </div>

      {/* Ad Modal */}
      {showAdModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-lg w-full p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Your hashtags are ready!</h3>
              <button 
                onClick={handleCloseAd}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Close</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <AdUnit slot="modal-ad" className="mx-auto" />
            <button
              onClick={handleCloseAd}
              className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              View Results
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HashtagForm; 