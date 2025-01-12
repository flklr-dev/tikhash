import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AdUnit from './AdUnit';

function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-3xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
              TikTok Hashtag Generator
            </Link>
            <nav className="space-x-6">
              <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
              <Link to="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Sidebar Ad */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <main>{children}</main>
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <AdUnit slot="sidebar-ad" format="vertical" className="mb-4" />
              <AdUnit slot="sidebar-ad-2" format="vertical" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white mt-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <AdUnit slot="footer-ad" className="mb-8" />
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} TikTok Hashtag Generator. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Layout; 