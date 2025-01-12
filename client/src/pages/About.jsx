function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white shadow-sm rounded-lg p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">About TikTok Hashtag Generator</h1>
        
        <div className="space-y-6 text-gray-600">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h2>
            <p>
              TikTok Hashtag Generator helps content creators maximize their reach by providing relevant, 
              trending hashtags for their TikTok videos. We understand the importance of using the right 
              hashtags to increase visibility and engage with your target audience.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">How It Works</h2>
            <div className="space-y-3">
              <p>Our hashtag generator uses advanced algorithms to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Analyze your content topic</li>
                <li>Find relevant trending hashtags</li>
                <li>Generate a mix of popular and niche hashtags</li>
                <li>Update recommendations based on current trends</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Benefits</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Increase your content visibility</li>
              <li>Reach your target audience effectively</li>
              <li>Save time researching hashtags</li>
              <li>Stay updated with trending topics</li>
              <li>Improve your TikTok strategy</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Why Choose Us</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Free to use</li>
              <li>Updated hashtag database</li>
              <li>User-friendly interface</li>
              <li>Fast and reliable results</li>
              <li>No registration required</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About; 