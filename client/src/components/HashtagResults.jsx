import { useState } from 'react';

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
    <div className="mt-6 bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-gray-900">Generated Hashtags</h2>
        <div className="space-x-2">
          <button
            onClick={copyAllHashtags}
            className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {copiedIndex === 'all' ? 'Copied!' : 'Copy All'}
          </button>
          <button
            onClick={exportAsTxt}
            className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {hashtags.map((tag, index) => (
          <div
            key={index}
            onClick={() => copyHashtag(tag, index)}
            className="group flex items-center justify-between bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-lg cursor-pointer transition-colors duration-200"
          >
            <span className="text-blue-800 text-sm">{tag}</span>
            <span className="text-xs text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {copiedIndex === index ? 'Copied!' : 'Click to copy'}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 text-sm text-gray-500">
        <p>Total hashtags: {hashtags.length}</p>
      </div>
    </div>
  );
}

export default HashtagResults; 