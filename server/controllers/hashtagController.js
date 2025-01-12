const axios = require('axios');

// Update the API configuration
const TOGETHER_API_URL = 'https://api.together.xyz/v1/chat/completions';
const TOGETHER_API_KEY = '643d58738df0132d43387abeabf07caa5d292f4d28eaf37dcf647950c0cc22c9';

// Helper function to clean and format hashtags
const formatHashtags = (text) => {
  return text
    .split(/[\n,]/)
    .map(tag => tag.trim())
    .filter(tag => tag)
    .map(tag => tag.startsWith('#') ? tag : `#${tag}`);
};

exports.generateHashtags = async (req, res) => {
  try {
    const { keyword } = req.body;
    
    if (!keyword) {
      return res.status(400).json({ error: 'Keyword is required' });
    }

    const prompt = `Generate 15 relevant and trending TikTok hashtags for the topic: ${keyword}. 
    Include a mix of popular and niche-specific hashtags. Format them as a comma-separated list.`;

    const response = await axios.post(
      TOGETHER_API_URL,
      {
        model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 200,
        temperature: 0.7
      },
      {
        headers: {
          'Authorization': `Bearer ${TOGETHER_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    // Add error logging
    console.log('API Response:', response.data);

    const hashtags = formatHashtags(response.data.choices[0].message.content);

    res.json({
      success: true,
      data: hashtags,
      keyword
    });

  } catch (error) {
    // Improved error logging
    console.error('Error details:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status
    });

    res.status(500).json({
      success: false,
      error: 'Failed to generate hashtags',
      details: error.response?.data || error.message
    });
  }
};

exports.getTrendingHashtags = async (req, res) => {
  try {
    // For now, return static trending hashtags
    const trendingHashtags = [
      '#fyp',
      '#foryou',
      '#viral',
      '#trending',
      '#tiktok',
      '#explore',
      '#foryoupage',
      '#viral2024',
      '#trending2024',
      '#tiktokviral'
    ];

    res.json({
      success: true,
      data: trendingHashtags
    });

  } catch (error) {
    console.error('Error fetching trending hashtags:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch trending hashtags'
    });
  }
}; 