import { Link } from 'react-router-dom';
import AdUnit from './AdUnit';

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-3xl font-bold text-gray-900">
              TikTok Hashtag Generator
            </Link>
            <nav className="space-x-4">
              <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
              <Link to="/privacy" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link>
            </nav>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdUnit slot="header-ad-slot" />
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {children}
          {/* Content Ad */}
          <AdUnit slot="content-ad-slot" />
        </div>
      </main>
      <footer className="bg-white mt-8">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          {/* Footer Ad */}
          <AdUnit slot="footer-ad-slot" />
          <p className="text-center text-gray-500 text-sm mt-4">
            © {new Date().getFullYear()} TikTok Hashtag Generator. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Layout; 