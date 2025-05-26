import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-amber-900 mb-8">Privacy Policy</h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="prose max-w-none">
            <p className="mb-4">
              At GoldWorld, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase.
            </p>

            <h2 className="text-xl font-semibold text-amber-900 mt-6 mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              We collect information that you voluntarily provide to us when you register on the website, express interest in obtaining information about us or our products, or otherwise contact us.
            </p>
            <p className="mb-4">
              The personal information we collect may include:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Billing and shipping address</li>
              <li>Payment information (stored securely through our payment processors)</li>
              <li>Purchase history</li>
            </ul>

            <h2 className="text-xl font-semibold text-amber-900 mt-6 mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">
              We use your information for various purposes, including:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Processing and fulfilling your orders</li>
              <li>Managing your account</li>
              <li>Sending you order confirmations and updates</li>
              <li>Responding to your inquiries and customer service requests</li>
              <li>Sending you marketing communications (with your consent)</li>
              <li>Improving our website and services</li>
              <li>Complying with legal obligations</li>
            </ul>

            <h2 className="text-xl font-semibold text-amber-900 mt-6 mb-4">3. Cookies and Tracking Technologies</h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>

            <h2 className="text-xl font-semibold text-amber-900 mt-6 mb-4">4. Third-Party Service Providers</h2>
            <p className="mb-4">
              We may share your information with third-party vendors, service providers, and other third parties who perform services on our behalf, such as payment processing, shipping, and analytics. These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>

            <h2 className="text-xl font-semibold text-amber-900 mt-6 mb-4">5. Security of Your Information</h2>
            <p className="mb-4">
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the information you provide to us, please be aware that no security measures are perfect or impenetrable, and we cannot guarantee the security of your information.
            </p>

            <h2 className="text-xl font-semibold text-amber-900 mt-6 mb-4">6. Your Rights</h2>
            <p className="mb-4">
              Depending on your location, you may have certain rights regarding your personal information, such as:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>The right to access the personal information we have about you</li>
              <li>The right to request that we correct or update your personal information</li>
              <li>The right to request that we delete your personal information</li>
              <li>The right to opt-out of marketing communications</li>
            </ul>
            <p className="mb-4">
              To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
            </p>

            <h2 className="text-xl font-semibold text-amber-900 mt-6 mb-4">7. Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>

            <h2 className="text-xl font-semibold text-amber-900 mt-6 mb-4">8. Contact Us</h2>
            <p className="mb-4">
              If you have any questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <p className="mb-4">
              Email: privacy@goldworld.com<br />
              Phone: +91 22 1234 5678<br />
              Address: 123 Gold Street, Zaveri Bazaar, Mumbai, Maharashtra, India - 400001
            </p>

            <p className="mt-8 text-sm text-gray-600">
              Last Updated: May 27, 2023
            </p>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <Link
            href="/policy/terms"
            className="text-amber-800 hover:text-amber-600"
          >
            Terms & Conditions
          </Link>
          <Link
            href="/policy/refund"
            className="text-amber-800 hover:text-amber-600"
          >
            Refund Policy
          </Link>
          <Link
            href="/policy/shipping"
            className="text-amber-800 hover:text-amber-600"
          >
            Shipping Policy
          </Link>
        </div>
      </div>
    </div>
  );
} 