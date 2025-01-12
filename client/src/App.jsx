import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Layout from './components/Layout'
import HashtagForm from './components/HashtagForm'
import HashtagResults from './components/HashtagResults'
import { generateHashtags } from './services/api'
import PrivacyPolicy from './pages/PrivacyPolicy'
import About from './pages/About'

function App() {
  const [hashtags, setHashtags] = useState([])
  const [error, setError] = useState(null)

  const handleGenerate = async (keyword) => {
    try {
      setError(null)
      const response = await generateHashtags(keyword)
      if (response.success) {
        setHashtags(response.data)
      } else {
        setError(response.error)
      }
    } catch (err) {
      console.error('Error:', err)
      setError(err.message || 'Failed to generate hashtags')
    }
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Layout>
            <div className="max-w-3xl mx-auto">
              <HashtagForm onGenerate={handleGenerate} />
              {error && (
                <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
                  {error}
                </div>
              )}
              {hashtags.length > 0 && <HashtagResults hashtags={hashtags} />}
            </div>
          </Layout>
        } />
        <Route path="/privacy" element={<Layout><PrivacyPolicy /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
      </Routes>
    </Router>
  )
}

export default App
