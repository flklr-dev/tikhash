import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AdUnit from './AdUnit';
import { useEffect, useState } from 'react';

function Layout({ children }) {
  const location = useLocation();
  const [showSidebarAds, setShowSidebarAds] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowSidebarAds(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto py-3 sm:py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <Link to="/" className="text-2xl sm:text-3xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
              TikTok Hashtag Generator
            </Link>
            <nav className="flex flex-wrap gap-4 text-sm sm:text-base">
              <Link to="/tips" className="text-gray-600 hover:text-blue-600 transition-colors">Tips</Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
              <Link to="/terms" className="text-gray-600 hover:text-blue-600 transition-colors">Terms</Link>
              <Link to="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors">Privacy</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Top ad */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-white shadow-sm rounded-lg p-4">
          <AdUnit 
            slot="5839837144" 
            format="horizontal" 
            className="min-h-[90px] flex items-center justify-center"
          />
        </div>
      </div>

      {/* Main content */}
      <main className="flex-grow">{children}</main>

      {/* Bottom ad */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-white shadow-sm rounded-lg p-4">
          <AdUnit 
            slot="7318570341" 
            format="horizontal" 
            className="min-h-[90px] flex items-center justify-center"
          />
        </div>
      </div>

      <footer className="bg-white mt-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link to="/tips" className="text-base text-gray-500 hover:text-gray-900">Hashtag Tips</Link>
                </li>
                <li>
                  <Link to="/about" className="text-base text-gray-500 hover:text-gray-900">About Us</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">About</h3>
              <p className="mt-4 text-base text-gray-500">
                TikTok Hashtag Generator helps content creators maximize their reach with relevant, trending hashtags.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link to="/terms" className="text-base text-gray-500 hover:text-gray-900">Terms of Service</Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-base text-gray-500 hover:text-gray-900">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/disclaimer" className="text-base text-gray-500 hover:text-gray-900">Disclaimer</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Contact</h3>
              <ul className="mt-4 space-y-2">
                <li className="text-base text-gray-500">Email: theedevkit@gmail.com</li>
                <li className="text-base text-gray-500">Follow us on TikTok</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 text-center">
            <p className="text-base text-gray-400">
              © {new Date().getFullYear()} TikTok Hashtag Generator. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout; 