"use client";

import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

export default function CheckoutSuccessPage() {
  // Generate a random order number
  const orderNumber = Math.floor(10000000 + Math.random() * 90000000);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 text-center">
        <div className="flex justify-center mb-6">
          <FaCheckCircle className="text-green-500 text-6xl" />
        </div>

        <h1 className="text-3xl font-bold text-amber-900 mb-4">Order Confirmed!</h1>
        
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order has been received and is being processed.
        </p>

        <div className="bg-amber-50 p-6 rounded-md mb-8">
          <h2 className="text-xl font-semibold text-amber-900 mb-2">Order Details</h2>
          <div className="text-left mb-4">
            <div className="grid grid-cols-2 mb-2">
              <span className="text-gray-600">Order Number:</span>
              <span className="font-semibold">{orderNumber}</span>
            </div>
            <div className="grid grid-cols-2 mb-2">
              <span className="text-gray-600">Date:</span>
              <span className="font-semibold">{new Date().toLocaleDateString()}</span>
            </div>
            <div className="grid grid-cols-2 mb-2">
              <span className="text-gray-600">Status:</span>
              <span className="font-semibold text-green-600">Confirmed</span>
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            A confirmation email has been sent to your registered email address with all order details.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-amber-900 mb-3">What Happens Next?</h3>
          <ol className="text-left text-gray-600 space-y-2 pl-5 list-decimal">
            <li>Your order will be processed within 24 hours.</li>
            <li>You will receive a tracking number once your package is shipped.</li>
            <li>Our delivery partner will contact you before delivery.</li>
            <li>Enjoy your premium gold product!</li>
          </ol>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-amber-800 hover:bg-amber-900 text-white px-6 py-3 rounded-md inline-block"
          >
            Return to Home
          </Link>
          <Link
            href="/products"
            className="bg-amber-100 hover:bg-amber-200 text-amber-900 px-6 py-3 rounded-md inline-block flex items-center justify-center"
          >
            Continue Shopping <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
} 