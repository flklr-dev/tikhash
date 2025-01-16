function Resources() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">TikTok Growth Resources</h1>
      
      <div className="grid gap-8 md:grid-cols-2">
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Trending Categories</h2>
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 rounded-lg">
              <h3 className="font-medium text-blue-900">#Dance</h3>
              <p className="text-sm text-blue-700">Popular dance challenges and choreography</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <h3 className="font-medium text-green-900">#Education</h3>
              <p className="text-sm text-green-700">Educational content and tutorials</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <h3 className="font-medium text-purple-900">#Comedy</h3>
              <p className="text-sm text-purple-700">Humor and entertainment content</p>
            </div>
            <div className="p-3 bg-red-50 rounded-lg">
              <h3 className="font-medium text-red-900">#Lifestyle</h3>
              <p className="text-sm text-red-700">Daily life, fashion, and beauty</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Growth Tools</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                1
              </span>
              <div className="ml-4">
                <h3 className="font-medium text-gray-900">Hashtag Generator</h3>
                <p className="text-sm text-gray-600">Create optimized hashtag combinations</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                2
              </span>
              <div className="ml-4">
                <h3 className="font-medium text-gray-900">Analytics Tracker</h3>
                <p className="text-sm text-gray-600">Monitor your content performance</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                3
              </span>
              <div className="ml-4">
                <h3 className="font-medium text-gray-900">Trend Analyzer</h3>
                <p className="text-sm text-gray-600">Stay updated with latest trends</p>
              </div>
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6 md:col-span-2">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Latest TikTok Updates</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-medium text-gray-900">Algorithm Changes</h3>
              <p className="text-sm text-gray-600">Stay informed about recent changes to TikTok's algorithm</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-medium text-gray-900">New Features</h3>
              <p className="text-sm text-gray-600">Learn about the latest TikTok features and how to use them</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-medium text-gray-900">Content Guidelines</h3>
              <p className="text-sm text-gray-600">Updated content policies and best practices</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Resources; 