import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-amber-900 mb-8">Terms and Conditions</h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="prose max-w-none">
            <p className="mb-4">
              Welcome to GoldWorld. By accessing and using our website and services, you agree to be bound by these Terms and Conditions.
            </p>

            <h2 className="text-xl font-semibold text-amber-900 mt-6 mb-4">1. General Terms</h2>
            <p className="mb-4">
              These Terms and Conditions govern your use of the GoldWorld website and all services provided by GoldWorld. By accessing or using our website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our website or services.
            </p>

            <h2 className="text-xl font-semibold text-amber-900 mt-6 mb-4">2. Products and Services</h2>
            <p className="mb-4">
              GoldWorld offers a range of gold products including coins, bars, and jewelry. All products sold on our website are guaranteed to be authentic and as described. We strive to provide accurate information about our products, including purity, weight, and dimensions. However, slight variations may occur due to the nature of handcrafted items.
            </p>

            <h2 className="text-xl font-semibold text-amber-900 mt-6 mb-4">3. Pricing and Payment</h2>
            <p className="mb-4">
              All prices displayed on our website are in Indian Rupees (INR) and are inclusive of applicable taxes. Payment for products and services can be made through the payment methods specified on our website. All payments are processed through secure payment gateways.
            </p>
            <p className="mb-4">
              Gold prices are subject to market fluctuations. The price of gold products is determined at the time of purchase and may change without prior notice. Once an order is confirmed and payment is received, the price will not change.
            </p>

            <h2 className="text-xl font-semibold text-amber-900 mt-6 mb-4">4. Shipping and Delivery</h2>
            <p className="mb-4">
              GoldWorld provides insured shipping for all orders. The shipping cost, if applicable, will be displayed during the checkout process. Estimated delivery times are provided on our website, but actual delivery times may vary due to factors beyond our control.
            </p>
            <p className="mb-4">
              All shipments are fully insured against loss or damage during transit. In the event of any issues with delivery, customers should contact our customer service team immediately.
            </p>

            <h2 className="text-xl font-semibold text-amber-900 mt-6 mb-4">5. Returns and Refunds</h2>
            <p className="mb-4">
              GoldWorld accepts returns of unused and undamaged products within 7 days of delivery. All returns must be in their original packaging and accompanied by the purchase receipt. Custom-made jewelry and personalized items cannot be returned unless there is a manufacturing defect.
            </p>
            <p className="mb-4">
              Refunds will be processed within 14 business days of receiving the returned item. The refund will be made to the original payment method used for the purchase.
            </p>

            <h2 className="text-xl font-semibold text-amber-900 mt-6 mb-4">6. Intellectual Property</h2>
            <p className="mb-4">
              All content on the GoldWorld website, including text, graphics, logos, images, and software, is the property of GoldWorld and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or use any content from our website without our prior written consent.
            </p>

            <h2 className="text-xl font-semibold text-amber-900 mt-6 mb-4">7. Privacy Policy</h2>
            <p className="mb-4">
              Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal information. By using our website and services, you agree to the collection and use of your information as described in our Privacy Policy.
            </p>

            <h2 className="text-xl font-semibold text-amber-900 mt-6 mb-4">8. Limitation of Liability</h2>
            <p className="mb-4">
              GoldWorld shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of the use or inability to use our website or services, even if we have been advised of the possibility of such damages.
            </p>

            <h2 className="text-xl font-semibold text-amber-900 mt-6 mb-4">9. Governing Law</h2>
            <p className="mb-4">
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising under these Terms and Conditions shall be subject to the exclusive jurisdiction of the courts in Mumbai, India.
            </p>

            <h2 className="text-xl font-semibold text-amber-900 mt-6 mb-4">10. Changes to Terms and Conditions</h2>
            <p className="mb-4">
              GoldWorld reserves the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. Your continued use of our website and services after any changes indicates your acceptance of the modified Terms and Conditions.
            </p>

            <h2 className="text-xl font-semibold text-amber-900 mt-6 mb-4">11. Contact Information</h2>
            <p className="mb-4">
              If you have any questions or concerns about these Terms and Conditions, please contact us at:
            </p>
            <p className="mb-4">
              Email: legal@goldworld.com<br />
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
            href="/policy/privacy"
            className="text-amber-800 hover:text-amber-600"
          >
            Privacy Policy
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