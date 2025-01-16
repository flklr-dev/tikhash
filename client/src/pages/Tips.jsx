import PageHeader from '../components/PageHeader';

function Tips() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PageHeader 
        title="TikTok Hashtag Tips & Strategies"
        subtitle="Learn how to optimize your hashtag usage for better reach"
      />
      
      <div className="space-y-8">
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Understanding TikTok Hashtags</h2>
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-600 mb-4">
              Hashtags are essential tools for content discovery on TikTok. They help categorize your content
              and make it discoverable to users interested in specific topics.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Hashtags increase your content's visibility</li>
              <li>• They help you reach your target audience</li>
              <li>• They can boost engagement rates</li>
              <li>• They help you join trending conversations</li>
            </ul>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Best Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Do's</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Research trending hashtags</li>
                <li>✓ Use a mix of popular and niche tags</li>
                <li>✓ Keep hashtags relevant to content</li>
                <li>✓ Track hashtag performance</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Don'ts</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✗ Don't use irrelevant hashtags</li>
                <li>✗ Avoid using only broad hashtags</li>
                <li>✗ Don't use too many hashtags</li>
                <li>✗ Avoid banned or restricted tags</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Advanced Strategies</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              <strong>1. Trend Analysis:</strong> Monitor trending hashtags in your niche and understand
              why they're popular.
            </p>
            <p>
              <strong>2. Engagement Tracking:</strong> Keep track of which hashtag combinations perform
              best for your content.
            </p>
            <p>
              <strong>3. Community Building:</strong> Use community-specific hashtags to connect with
              your target audience.
            </p>
            <p>
              <strong>4. Content Strategy:</strong> Align your hashtag strategy with your content
              calendar and themes.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Tips; 