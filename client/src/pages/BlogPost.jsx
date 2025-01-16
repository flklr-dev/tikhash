import { useParams, Link, useNavigate } from 'react-router-dom';

function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const blogContent = {
    'how-to-go-viral': {
      title: "How to Go Viral on TikTok in 2024",
      date: "March 20, 2024",
      readTime: "10 min read",
      category: "Strategy",
      content: [
        {
          type: 'paragraph',
          text: "Going viral on TikTok requires a strategic approach combining multiple factors. In this comprehensive guide, we will explore proven techniques that can significantly increase your chances of creating viral content."
        },
        {
          type: 'heading',
          text: "1. Understanding the TikTok Algorithm"
        },
        {
          type: 'paragraph',
          text: "Before diving into specific strategies, it is crucial to understand how TikTok's algorithm works. The algorithm prioritizes content based on user engagement, watch time, and completion rates. Videos that capture attention in the first 3 seconds have a higher chance of being promoted to wider audiences."
        },
        {
          type: 'heading',
          text: "2. Optimal Posting Times"
        },
        {
          type: 'paragraph',
          text: "The best times to post on TikTok vary by region and target audience. Here is a detailed breakdown:"
        },
        {
          type: 'list',
          items: [
            "Weekdays: 6 AM - 10 AM and 7 PM - 11 PM local time",
            "Weekends: 11 AM - 1 PM and 7 PM - 9 PM",
            "Peak engagement: Tuesday 9 AM and Thursday 7 PM",
            "Global audience: Consider multiple time zones"
          ]
        },
        {
          type: 'heading',
          text: "3. Trending Music Selection"
        },
        {
          type: 'paragraph',
          text: "Music plays a crucial role in TikTok content. Using trending sounds can increase visibility by up to 300%. Here are key strategies:"
        },
        {
          type: 'list',
          items: [
            "Check the Trending sounds section daily",
            "Use sounds within the first 24-48 hours of trending",
            "Combine popular sounds with original content",
            "Create multiple versions with different trending sounds"
          ]
        },
        {
          type: 'heading',
          text: '4. Content Creation Best Practices'
        },
        {
          type: 'paragraph',
          text: 'Creating viral content requires attention to several key elements:'
        },
        {
          type: 'list',
          items: [
            'Hook viewers in the first 3 seconds',
            'Keep videos between 15-30 seconds',
            'Use trending transitions and effects',
            'Create high-quality, well-lit footage',
            'Add captions for accessibility',
            'Use trending hashtags strategically'
          ]
        },
        {
          type: 'heading',
          text: '5. Engagement Techniques'
        },
        {
          type: 'paragraph',
          text: 'Boosting engagement is crucial for viral content. Implement these strategies:'
        },
        {
          type: 'list',
          items: [
            'Ask questions in your captions',
            'Create response-worthy content',
            'Use call-to-actions effectively',
            'Engage with comments quickly',
            'Create content that sparks debate',
            'Use trending formats and challenges'
          ]
        },
        {
          type: 'heading',
          text: '6. Analytics and Optimization'
        },
        {
          type: 'paragraph',
          text: 'Monitor these key metrics to optimize your content:'
        },
        {
          type: 'list',
          items: [
            'Watch time and completion rate',
            'Engagement rate (likes, comments, shares)',
            'Traffic source types',
            'Audience territories',
            'Peak performance times'
          ]
        },
        {
          type: 'heading',
          text: 'Conclusion'
        },
        {
          type: 'paragraph',
          text: 'Going viral on TikTok requires a combination of strategic timing, trending music usage, quality content creation, and effective engagement techniques. Remember to consistently analyze your performance and adjust your strategy accordingly.'
        }
      ]
    },
    'hashtag-strategies': {
      title: "Top TikTok Hashtag Strategies for Different Niches",
      date: "March 19, 2024",
      readTime: "12 min read",
      category: "Hashtags",
      content: [
        {
          type: 'paragraph',
          text: "Mastering hashtag strategy is crucial for TikTok success. Each niche requires a unique approach to hashtags. In this guide, we will explore effective hashtag strategies for various content categories."
        },
        {
          type: 'heading',
          text: "1. Gaming Content Strategy"
        },
        {
          type: 'list',
          items: [
            "Popular Tags: #Gaming #GamingTikTok #Streamer",
            "Game-Specific: #Minecraft #Fortnite #LeagueOfLegends",
            "Content Type: #GameplayHighlights #GamingTips #GamingMemes",
            "Community: #GamerCommunity #GamingLife #StreamerCommunity"
          ]
        },
        {
          type: 'heading',
          text: '2. Beauty and Fashion Content'
        },
        {
          type: 'paragraph',
          text: 'Beauty creators should focus on trend-specific and technique-based hashtags:'
        },
        {
          type: 'list',
          items: [
            'Makeup: #MakeupTutorial #BeautyTips #MakeupTransformation',
            'Skincare: #SkincareRoutine #SkincareTips #BeautyHacks',
            'Fashion: #OOTD #StyleTips #FashionTrends',
            'Product-Specific: #NewRelease #BeautyReview #MustHave'
          ]
        },
        {
          type: 'heading',
          text: '3. Fitness and Health Content'
        },
        {
          type: 'list',
          items: [
            'Workout: #FitnessTips #WorkoutRoutine #GymLife',
            'Nutrition: #HealthyRecipes #MealPrep #NutritionTips',
            'Motivation: #FitnessMotivation #FitnessJourney',
            'Specific Focus: #WeightLoss #StrengthTraining #Yoga'
          ]
        },
        // ... continues with more sections ...
      ]
    },
    'algorithm-guide': {
      title: "Understanding TikTok's Algorithm in 2024",
      date: "March 18, 2024",
      readTime: "15 min read",
      category: "Analytics",
      content: [
        {
          type: 'paragraph',
          text: "The TikTok algorithm is sophisticated and constantly evolving. Understanding how it works is crucial for content success."
        },
        {
          type: 'heading',
          text: "1. Key Ranking Factors"
        },
        {
          type: 'list',
          items: [
            "User Interactions: Likes, comments, shares, follows",
            "Video Information: Hashtags, captions, sounds",
            "Device Settings: Language preference, country setting",
            "Content Completion Rate: Full video views"
          ]
        },
        // ... continues with more detailed sections ...
      ]
    }
  };

  const post = blogContent[slug];

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Post not found</h1>
        <Link 
          to="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <nav className="flex items-center space-x-4 mb-6">
        <button 
          onClick={() => navigate(-1)}
          className="inline-flex items-center text-gray-600 hover:text-blue-600"
        >
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <div className="flex items-center space-x-2 text-gray-500">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <span>→</span>
          <Link to="/blog" className="hover:text-blue-600">Blog</Link>
          <span>→</span>
          <span className="text-gray-900">{post.title}</span>
        </div>
      </nav>

      <article className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
            {post.category}
          </span>
          <span>•</span>
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">{post.title}</h1>
        
        <div className="prose prose-blue max-w-none">
          {post.content.map((section, index) => (
            <div key={index} className="mb-6">
              {section.type === 'heading' ? (
                <h2 className="text-xl font-semibold text-gray-900 mb-3">{section.text}</h2>
              ) : (
                <p className="text-gray-600 leading-relaxed">{section.text}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
            <Link 
              to="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <div className="flex items-center space-x-4">
              <button 
                className="inline-flex items-center text-gray-600 hover:text-blue-600"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copied to clipboard!');
                }}
              >
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Share
              </button>
              <button 
                className="inline-flex items-center text-gray-600 hover:text-blue-600"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
                </svg>
                Top
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default BlogPost; 