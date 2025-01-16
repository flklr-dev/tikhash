import PageHeader from '../components/PageHeader';

function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PageHeader 
        title="Privacy Policy"
        subtitle="How we handle and protect your information"
      />
      
      <div className="bg-white shadow-sm rounded-lg p-6 sm:p-8">
        <div className="space-y-6 text-gray-600">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Information We Collect</h2>
            <p>When you use TikTok Hashtag Generator, we collect:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Keywords you enter for hashtag generation</li>
              <li>Device information (browser type, device type)</li>
              <li>Usage data (features used, time spent on site)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Generate relevant hashtags for your content</li>
              <li>Improve our service and user experience</li>
              <li>Analyze usage patterns and optimize performance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Cookies and Tracking</h2>
            <p>We use cookies and similar technologies to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Remember your preferences</li>
              <li>Analyze site traffic and usage</li>
              <li>Personalize content and ads</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Third-Party Services</h2>
            <p>We use the following third-party services:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Google Analytics for usage tracking</li>
              <li>Google AdSense for advertising</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Data Security</h2>
            <p>We implement security measures to protect your information, including:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>SSL encryption for all data transfers</li>
              <li>Regular security updates and monitoring</li>
              <li>Limited access to personal information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Contact Us</h2>
            <p>For questions about this privacy policy, please contact us at:</p>
            <p className="mt-2">Email: theedevkit@gmail.com</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy; 