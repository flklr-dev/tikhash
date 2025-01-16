function Blog() {
  const blogPosts = [
    {
      title: "How to Go Viral on TikTok in 2024",
      excerpt: "Learn the proven strategies for creating viral TikTok content, including optimal posting times, trending music selection, and engagement techniques.",
      date: "March 20, 2024",
      readTime: "5 min read",
      category: "Strategy"
    },
    {
      title: "Top TikTok Hashtag Strategies for Different Niches",
      excerpt: "Discover niche-specific hashtag strategies for gaming, beauty, fitness, education, and entertainment content creators.",
      date: "March 19, 2024",
      readTime: "4 min read",
      category: "Hashtags"
    },
    {
      title: "Understanding TikTok's Algorithm in 2024",
      excerpt: "Deep dive into how TikTok's algorithm works and how to optimize your content for better reach and engagement.",
      date: "March 18, 2024",
      readTime: "6 min read",
      category: "Analytics"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">TikTok Growth Blog</h1>
      
      <div className="space-y-8">
        {blogPosts.map((post, index) => (
          <article key={index} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
              <span>{post.category}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <button className="text-blue-600 hover:text-blue-800 font-medium">
              Read more →
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Blog; 