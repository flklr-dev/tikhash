import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HashtagForm from './components/HashtagForm'
import HashtagResults from './components/HashtagResults'
import { generateHashtags } from './services/api'
import PrivacyPolicy from './pages/PrivacyPolicy'
import About from './pages/About'
import Disclaimer from './pages/Disclaimer'

function App() {
  const [hashtags, setHashtags] = useState([])
  const [error, setError] = useState(null)
  const [showResults, setShowResults] = useState(false)

  const handleGenerate = async (keyword) => {
    try {
      setError(null)
      const response = await generateHashtags(keyword)
      setHashtags(response.data)
      return response.data
    } catch (error) {
      setError(error.message)
      throw error
    }
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Layout>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <HashtagForm 
                onGenerate={handleGenerate} 
                onShowResults={() => setShowResults(true)} 
              />
              {error && (
                <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
                  {error}
                </div>
              )}
              {showResults && hashtags.length > 0 && (
                <HashtagResults hashtags={hashtags} />
              )}
            </div>
          </Layout>
        } />
        <Route path="/privacy" element={<Layout><PrivacyPolicy /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/disclaimer" element={<Layout><Disclaimer /></Layout>} />
      </Routes>
    </Router>
  )
}

export default App
