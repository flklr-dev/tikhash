import { useState } from 'react';
import AdUnit from './AdUnit';

function HashtagResults({ hashtags }) {
  const [copiedIndex, setCopiedIndex] = useState(null);

  // Copy individual hashtag
  const copyHashtag = async (tag, index) => {
    try {
      await navigator.clipboard.writeText(tag);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Copy all hashtags
  const copyAllHashtags = async () => {
    try {
      const hashtagString = hashtags.join(' ');
      await navigator.clipboard.writeText(hashtagString);
      setCopiedIndex('all');
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy all:', err);
    }
  };

  // Export as txt file
  const exportAsTxt = () => {
    const hashtagString = hashtags.join(' \n');
    const blob = new Blob([hashtagString], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'tiktok-hashtags.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Generated Hashtags</h2>
          <div className="space-x-3">
            <button
              onClick={copyAllHashtags}
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              {copiedIndex === 'all' ? 'Copied!' : 'Copy All'}
            </button>
            <button
              onClick={exportAsTxt}
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
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
              <span className="text-blue-800 font-medium">{tag}</span>
              <span className="text-xs text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {copiedIndex === index ? 'Copied!' : 'Click to copy'}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 text-sm text-gray-500 flex justify-between items-center">
          <p>Total hashtags: {hashtags.length}</p>
          <p>Click any hashtag to copy</p>
        </div>
      </div>
      
      {/* Single ad placement after results */}
      <div className="bg-white shadow-sm rounded-lg p-4">
        <AdUnit slot="results-bottom" format="horizontal" className="mx-auto" />
      </div>
    </div>
  );
}

export default HashtagResults; 