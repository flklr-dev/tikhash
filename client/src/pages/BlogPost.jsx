import { useParams } from 'react-router-dom';

function BlogPost() {
  const { slug } = useParams();

  const blogContent = {
    'how-to-go-viral': {
      title: "How to Go Viral on TikTok in 2024",
      date: "March 20, 2024",
      readTime: "5 min read",
      category: "Strategy",
      content: [
        {
          type: 'paragraph',
          text: 'Going viral on TikTok requires a combination of strategy, timing, and creativity. Here are the key factors that contribute to viral content:'
        },
        {
          type: 'heading',
          text: '1. Optimal Posting Times'
        },
        {
          type: 'paragraph',
          text: 'The best times to post on TikTok are typically between 6 AM - 10 AM and 7 PM - 11 PM in your target audience's timezone. This is when engagement rates are highest.'
        },
        {
          type: 'heading',
          text: '2. Trending Music Selection'
        },
        {
          type: 'paragraph',
          text: 'Using trending sounds can increase your chances of going viral by up to 300%. Keep track of the trending music page and incorporate popular sounds into your content.'
        },
        {
          type: 'heading',
          text: '3. Engagement Techniques'
        },
        {
          type: 'paragraph',
          text: 'Create content that encourages interaction through comments, shares, and saves. Ask questions, create suspense, and use call-to-actions effectively.'
        }
      ]
    },
    'hashtag-strategies': {
      title: "Top TikTok Hashtag Strategies for Different Niches",
      date: "March 19, 2024",
      readTime: "4 min read",
      category: "Hashtags",
      content: [
        {
          type: 'paragraph',
          text: 'Different niches require different hashtag strategies. Here's a comprehensive guide for various content categories:'
        },
        {
          type: 'heading',
          text: 'Gaming Content'
        },
        {
          type: 'paragraph',
          text: 'Use game-specific hashtags, streaming tags, and gaming community tags. Popular examples: #Gaming #Streamer #GameTips'
        },
        {
          type: 'heading',
          text: 'Beauty Content'
        },
        {
          type: 'paragraph',
          text: 'Combine makeup, skincare, and tutorial hashtags. Trending examples: #BeautyTips #MakeupTutorial #SkincareTips'
        }
      ]
    },
    'algorithm-guide': {
      title: "Understanding TikTok's Algorithm in 2024",
      date: "March 18, 2024",
      readTime: "6 min read",
      category: "Analytics",
      content: [
        {
          type: 'paragraph',
          text: 'TikTok's algorithm is constantly evolving. Here's what you need to know about how it works in 2024:'
        },
        {
          type: 'heading',
          text: 'Key Ranking Factors'
        },
        {
          type: 'paragraph',
          text: 'The algorithm considers user interactions, video information, and device/account settings when determining content distribution.'
        },
        {
          type: 'heading',
          text: 'Engagement Metrics'
        },
        {
          type: 'paragraph',
          text: 'Watch time, completion rate, and engagement rate are the three most important metrics that influence your content's reach.'
        }
      ]
    }
  };

  const post = blogContent[slug];

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Post not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <article className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
          <span>{post.category}</span>
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
                <p className="text-gray-600">{section.text}</p>
              )}
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}

export default BlogPost; 