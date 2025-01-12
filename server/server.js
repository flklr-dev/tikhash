const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const hashtagRoutes = require('./routes/hashtagRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'https://tikhash.vercel.app'],
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS']
}));
app.use(express.json());

// Routes
app.use('/api/hashtags', hashtagRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('TikTok Hashtag Generator API is running');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
