function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          TikTok Hashtag Generator
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Generate trending, relevant hashtags to boost your TikTok content reach and engagement.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Why Use Hashtags?</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Increase content visibility
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Reach targeted audience
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Boost engagement rates
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Join trending topics
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">How It Works</h2>
          <ol className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="font-bold mr-2">1.</span>
              Enter your content topic or keywords
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">2.</span>
              Get relevant hashtag suggestions
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">3.</span>
              Copy and use in your TikTok posts
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">4.</span>
              Track performance and adjust
            </li>
          </ol>
        </div>
      </div>

      {/* Form will be rendered here */}
    </div>
  );
}

export default Home; 