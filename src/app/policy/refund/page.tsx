import Link from "next/link";

export default function RefundPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-amber-900 mb-8">Refund Policy</h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="prose max-w-none">
            <p className="mb-4">
              At GoldWorld, we want you to be completely satisfied with your purchase. Please read our refund policy carefully to understand your rights and obligations.
            </p>

            <h2 className="text-xl font-semibold text-amber-900 mt-6 mb-4">1. Return Eligibility</h2>
            <p className="mb-4">
              You may return most new, unopened items within 7 days of delivery for a full refund. We also accept returns of opened items within 7 days if they are defective or damaged.
            </p>
            <p className="mb-4">
              To be eligible for a return, your item must be:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>In the same condition that you received it</li>
              <li>In the original packaging</li>
              <li>Accompanied by the receipt or proof of purchase</li>
              <li>Returned within 7 days of delivery</li>
            </ul>

            <h2 className="text-xl font-semibold text-amber-900 mt-6 mb-4">2. Non-Returnable Items</h2>
            <p className="mb-4">
              The following items cannot be returned:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Custom-made or personalized items</li>
              <li>Items that have been worn, used, or altered</li>
              <li>Special order items</li>
              <li>Digital products</li>
            </ul>

            <h2 className="text-xl font-semibold text-amber-900 mt-6 mb-4">3. Refunds Process</h2>
            <p className="mb-4">
              Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.
            </p>
            <p className="mb-4">
              If your return is approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within 14 business days.
            </p>

            <h2 className="text-xl font-semibold text-amber-900 mt-6 mb-4">4. Exchange Policy</h2>
            <p className="mb-4">
              We offer exchanges for items of equal value within 7 days of delivery. For exchanges, please follow the same procedure as returns and specify the item you wish to receive in exchange.
            </p>
            <p className="mb-4">
              If the item you wish to exchange for is of greater value, you will need to pay the price difference. If it is of lesser value, we will refund the difference to your original payment method.
            </p>

            <h2 className="text-xl font-semibold text-amber-900 mt-6 mb-4">5. Gold Price Fluctuations</h2>
            <p className="mb-4">
              Please note that gold prices are subject to market fluctuations. Refunds will be processed based on the original purchase price, regardless of any changes in gold market prices since your purchase.
            </p>

            <h2 className="text-xl font-semibold text-amber-900 mt-6 mb-4">6. Damaged or Defective Items</h2>
            <p className="mb-4">
              If you receive a damaged or defective item, please contact us immediately at returns@goldworld.com or +91 98765 43210. We will provide you with instructions on how to return the item and receive a replacement or refund.
            </p>

            <h2 className="text-xl font-semibold text-amber-900 mt-6 mb-4">7. Return Shipping</h2>
            <p className="mb-4">
              You will be responsible for paying the shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
            </p>
            <p className="mb-4">
              For returns of damaged or defective items, we will cover the return shipping costs.
            </p>

            <h2 className="text-xl font-semibold text-amber-900 mt-6 mb-4">8. How to Initiate a Return</h2>
            <p className="mb-4">
              To initiate a return, please email us at returns@goldworld.com or call us at +91 98765 43210. Please include your order number and the reason for your return.
            </p>
            <p className="mb-4">
              After receiving your return request, we will provide you with specific instructions on how to package and ship your return.
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
            href="/policy/privacy"
            className="text-amber-800 hover:text-amber-600"
          >
            Privacy Policy
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