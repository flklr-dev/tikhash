import { useState } from 'react';
import AdUnit from './AdUnit';

function HashtagResults({ hashtags }) {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyHashtag = async (tag, index) => {
    try {
      await navigator.clipboard.writeText(tag);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const copyAllHashtags = async () => {
    try {
      await navigator.clipboard.writeText(hashtags.join(' '));
      setCopiedIndex('all');
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy all:', err);
    }
  };

  const exportAsTxt = () => {
    const element = document.createElement('a');
    const file = new Blob([hashtags.join('\n')], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'tiktok-hashtags.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white shadow-md rounded-lg p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6">
          <h2 className="text-xl font-bold text-gray-900">Generated Hashtags</h2>
          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            <button
              onClick={copyAllHashtags}
              className="flex-1 sm:flex-none inline-flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors min-w-[100px]"
            >
              {copiedIndex === 'all' ? (
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Copied!
                </span>
              ) : 'Copy All'}
            </button>
            <button
              onClick={exportAsTxt}
              className="flex-1 sm:flex-none inline-flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors min-w-[100px]"
            >
              <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
              </svg>
              Export
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {hashtags.map((tag, index) => (
            <div
              key={index}
              onClick={() => copyHashtag(tag, index)}
              className="group flex items-center justify-between bg-blue-50 hover:bg-blue-100 px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md"
            >
              <span className="text-blue-800 font-medium truncate mr-2">{tag}</span>
              <span className="text-xs text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                {copiedIndex === index ? 'Copied!' : 'Click to copy'}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 text-sm text-gray-500 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
          <p>Total hashtags: {hashtags.length}</p>
          <p className="text-xs sm:text-sm">Click any hashtag to copy</p>
        </div>
      </div>
      
      <div className="bg-white shadow-sm rounded-lg p-4">
        <AdUnit slot="results-bottom" format="horizontal" className="mx-auto" />
      </div>
    </div>
  );
}

export default HashtagResults; 