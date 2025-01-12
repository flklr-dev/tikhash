function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About TikTok Hashtag Generator</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
          <p className="text-gray-600">
            We aim to help content creators maximize their reach on TikTok by providing relevant, 
            trending, and effective hashtags. Our AI-powered generator analyzes current trends and 
            your content topic to suggest the most impactful hashtags for your videos.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">How It Works</h2>
          <div className="space-y-3 text-gray-600">
            <p>Our hashtag generator works in three simple steps:</p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Enter your content topic or keywords</li>
              <li>Our AI analyzes trending patterns and relevant categories</li>
              <li>Receive a curated list of effective hashtags for your content</li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Why Choose Us</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
            <li>AI-Powered Suggestions</li>
            <li>Updated Trending Hashtags</li>
            <li>Easy to Use Interface</li>
            <li>Free Service</li>
            <li>Optimized for Engagement</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
          <div className="text-gray-600">
            <p>For any questions or support, reach out to us at:</p>
            <p className="mt-2">
              Email: [Your Email]<br />
              Twitter: [@YourHandle]<br />
              Instagram: [@YourHandle]
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About; 