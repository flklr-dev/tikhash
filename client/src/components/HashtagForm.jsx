import { useState } from 'react';

function HashtagForm({ onGenerate }) {
  const [keyword, setKeyword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!keyword.trim()) return;

    setIsLoading(true);
    try {
      // We'll implement the API call later
      await onGenerate(keyword);
    } catch (error) {
      console.error('Error generating hashtags:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading || !keyword.trim()}
          className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
            ${isLoading || !keyword.trim() 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            }`}
        >
          {isLoading ? 'Generating...' : 'Generate Hashtags'}
        </button>
      </form>
    </div>
  );
}

export default HashtagForm; 