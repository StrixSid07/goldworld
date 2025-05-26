import Link from "next/link";
import { FaCoins, FaRing, FaExchangeAlt, FaShieldAlt, FaWallet, FaTruck } from "react-icons/fa";

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-amber-900 mb-8 text-center">Our Services</h1>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-800 to-amber-900 text-white p-8 rounded-lg mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            Premium Gold Services for Every Need
          </h2>
          <p className="text-lg">
            From gold investment to custom jewelry, we offer a comprehensive range of services to
            meet all your gold-related requirements.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {/* Gold Investment */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-20 bg-amber-100 flex items-center justify-center">
            <FaCoins className="text-amber-800 text-4xl" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-amber-900 mb-3">
              Gold Investment Advisory
            </h3>
            <p className="text-gray-700 mb-4">
              Our experts provide personalized advice on gold investments based on your financial
              goals and risk profile. We help you make informed decisions for long-term wealth
              preservation.
            </p>
            <ul className="list-disc pl-5 text-gray-700 mb-4">
              <li>Portfolio analysis and recommendations</li>
              <li>Market trend insights</li>
              <li>Investment strategy planning</li>
              <li>Regular performance reviews</li>
            </ul>
            <Link
              href="/contact"
              className="text-amber-800 hover:text-amber-600 font-medium inline-block"
            >
              Book a Consultation
            </Link>
          </div>
        </div>

        {/* Custom Jewelry */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-20 bg-amber-100 flex items-center justify-center">
            <FaRing className="text-amber-800 text-4xl" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-amber-900 mb-3">
              Custom Jewelry Design
            </h3>
            <p className="text-gray-700 mb-4">
              Turn your vision into reality with our custom jewelry design service. Our master
              craftsmen work closely with you to create unique pieces that reflect your personal
              style and preferences.
            </p>
            <ul className="list-disc pl-5 text-gray-700 mb-4">
              <li>One-on-one design consultation</li>
              <li>3D design visualization</li>
              <li>Premium craftsmanship</li>
              <li>Lifetime warranty</li>
            </ul>
            <Link
              href="/contact"
              className="text-amber-800 hover:text-amber-600 font-medium inline-block"
            >
              Start Your Design
            </Link>
          </div>
        </div>

        {/* Gold Exchange */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-20 bg-amber-100 flex items-center justify-center">
            <FaExchangeAlt className="text-amber-800 text-4xl" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-amber-900 mb-3">
              Gold Exchange Program
            </h3>
            <p className="text-gray-700 mb-4">
              Upgrade your gold collection with our exchange program. Trade in your old gold items
              for new ones and pay only the making charges and any difference in gold weight or
              purity.
            </p>
            <ul className="list-disc pl-5 text-gray-700 mb-4">
              <li>Transparent valuation process</li>
              <li>Best market rates</li>
              <li>No hidden charges</li>
              <li>Quick processing</li>
            </ul>
            <Link
              href="/contact"
              className="text-amber-800 hover:text-amber-600 font-medium inline-block"
            >
              Exchange Now
            </Link>
          </div>
        </div>

        {/* Authenticity Certification */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-20 bg-amber-100 flex items-center justify-center">
            <FaShieldAlt className="text-amber-800 text-4xl" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-amber-900 mb-3">
              Authenticity Certification
            </h3>
            <p className="text-gray-700 mb-4">
              Get your gold items certified for authenticity and purity. Our certification service
              uses advanced testing methods to accurately determine the purity of your gold
              products.
            </p>
            <ul className="list-disc pl-5 text-gray-700 mb-4">
              <li>Non-destructive testing</li>
              <li>BIS Hallmarking</li>
              <li>Detailed certification report</li>
              <li>International standards compliance</li>
            </ul>
            <Link
              href="/contact"
              className="text-amber-800 hover:text-amber-600 font-medium inline-block"
            >
              Get Certified
            </Link>
          </div>
        </div>

        {/* Gold Storage */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-20 bg-amber-100 flex items-center justify-center">
            <FaWallet className="text-amber-800 text-4xl" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-amber-900 mb-3">
              Secure Gold Storage
            </h3>
            <p className="text-gray-700 mb-4">
              Keep your valuable gold investments safe with our state-of-the-art storage solutions.
              Our secure vaults offer maximum protection with 24/7 surveillance and comprehensive
              insurance.
            </p>
            <ul className="list-disc pl-5 text-gray-700 mb-4">
              <li>Bank-grade security vaults</li>
              <li>Full insurance coverage</li>
              <li>Regular audit reports</li>
              <li>Easy withdrawal process</li>
            </ul>
            <Link
              href="/contact"
              className="text-amber-800 hover:text-amber-600 font-medium inline-block"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Gold Delivery */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-20 bg-amber-100 flex items-center justify-center">
            <FaTruck className="text-amber-800 text-4xl" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-amber-900 mb-3">
              Insured Gold Delivery
            </h3>
            <p className="text-gray-700 mb-4">
              Our premium delivery service ensures that your gold purchases reach you safely and
              securely. All shipments are fully insured and handled with the utmost care.
            </p>
            <ul className="list-disc pl-5 text-gray-700 mb-4">
              <li>Tamper-proof packaging</li>
              <li>100% insurance coverage</li>
              <li>Real-time tracking</li>
              <li>Signature verification on delivery</li>
            </ul>
            <Link
              href="/products"
              className="text-amber-800 hover:text-amber-600 font-medium inline-block"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-amber-900 text-center mb-8">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="flex-1 text-center px-4 mb-8 md:mb-0">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-amber-800 text-xl font-bold">1</span>
            </div>
            <h3 className="text-lg font-semibold text-amber-900 mb-2">Consultation</h3>
            <p className="text-gray-700">
              Discuss your requirements with our gold experts and get personalized recommendations.
            </p>
          </div>
          <div className="flex-1 text-center px-4 mb-8 md:mb-0">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-amber-800 text-xl font-bold">2</span>
            </div>
            <h3 className="text-lg font-semibold text-amber-900 mb-2">Selection</h3>
            <p className="text-gray-700">
              Choose from our wide range of products or services that best meet your needs.
            </p>
          </div>
          <div className="flex-1 text-center px-4 mb-8 md:mb-0">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-amber-800 text-xl font-bold">3</span>
            </div>
            <h3 className="text-lg font-semibold text-amber-900 mb-2">Execution</h3>
            <p className="text-gray-700">
              We process your order or service request with precision and care.
            </p>
          </div>
          <div className="flex-1 text-center px-4">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-amber-800 text-xl font-bold">4</span>
            </div>
            <h3 className="text-lg font-semibold text-amber-900 mb-2">Satisfaction</h3>
            <p className="text-gray-700">
              Experience the satisfaction of premium gold products and services.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-amber-50 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold text-amber-900 mb-4">Ready to Get Started?</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Contact our team today to discuss your gold requirements. We're here to provide expert
          advice and premium services tailored to your needs.
        </p>
        <Link
          href="/contact"
          className="bg-amber-800 hover:bg-amber-900 text-white px-6 py-3 rounded-md inline-block"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
} 