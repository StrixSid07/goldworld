import Link from "next/link";

export default function ShippingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-amber-900 mb-8">Shipping Policy</h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="prose max-w-none">
            <p className="mb-4">
              At GoldWorld, we understand the importance of secure and timely delivery of your valuable purchases. This shipping policy outlines our procedures for shipping, delivery times, costs, and other important information.
            </p>

            <h2 className="text-xl font-semibold text-amber-900 mt-6 mb-4">1. Shipping Methods and Carriers</h2>
            <p className="mb-4">
              We ship all our products through reputable courier services such as BlueDart, DTDC, and FedEx, depending on your location. All shipments are fully insured and require signature confirmation upon delivery.
            </p>
            <p className="mb-4">
              For high-value orders (above ₹200,000), we may also offer specialized secured shipping services at an additional cost.
            </p>

            <h2 className="text-xl font-semibold text-amber-900 mt-6 mb-4">2. Shipping Costs</h2>
            <p className="mb-4">
              Shipping costs are calculated based on the value of your order, shipping destination, and selected shipping method:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Orders below ₹50,000: Flat shipping fee of ₹500</li>
              <li>Orders between ₹50,000 and ₹200,000: Free standard shipping</li>
              <li>Orders above ₹200,000: Free premium insured shipping</li>
            </ul>
            <p className="mb-4">
              Exact shipping costs will be calculated and displayed at checkout before you complete your purchase.
            </p>

            <h2 className="text-xl font-semibold text-amber-900 mt-6 mb-4">3. Delivery Timeframes</h2>
            <p className="mb-4">
              Delivery timeframes depend on your location and the shipping method selected:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Metro cities (Delhi, Mumbai, Bangalore, Chennai, Kolkata): 2-3 business days</li>
              <li>Other major cities: 3-5 business days</li>
              <li>Remote areas: 5-7 business days</li>
            </ul>
            <p className="mb-4">
              Please note that these are estimated timeframes and may vary due to unforeseen circumstances such as weather conditions, public holidays, or other factors beyond our control.
            </p>

            <h2 className="text-xl font-semibold text-amber-900 mt-6 mb-4">4. Order Processing Time</h2>
            <p className="mb-4">
              All orders are processed within 24-48 hours of payment confirmation. Processing time for custom orders may vary and will be communicated to you at the time of purchase.
            </p>
            <p className="mb-4">
              Orders placed after 2:00 PM IST will be processed the next business day. Orders placed on weekends or public holidays will be processed on the next business day.
            </p>

            <h2 className="text-xl font-semibold text-amber-900 mt-6 mb-4">5. Tracking Your Order</h2>
            <p className="mb-4">
              Once your order is shipped, you will receive a confirmation email with a tracking number and instructions on how to track your shipment. You can also track your order by logging into your account on our website or by contacting our customer service team.
            </p>

            <h2 className="text-xl font-semibold text-amber-900 mt-6 mb-4">6. International Shipping</h2>
            <p className="mb-4">
              We currently ship to select international destinations. International shipping costs, duties, and taxes are calculated at checkout. Please note that:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>The recipient is responsible for all import duties, taxes, and customs clearance fees</li>
              <li>International delivery typically takes 7-14 business days, depending on the destination</li>
              <li>International orders are shipped with full insurance and tracking</li>
            </ul>

            <h2 className="text-xl font-semibold text-amber-900 mt-6 mb-4">7. Shipping Insurance</h2>
            <p className="mb-4">
              All shipments are fully insured against loss, theft, or damage during transit. In the unlikely event that your order is lost, stolen, or damaged during shipping, we will either replace the item or provide a full refund.
            </p>
            <p className="mb-4">
              To claim insurance, you must notify us within 24 hours of receiving a damaged package or within 7 days if the package has not been delivered after the estimated delivery date.
            </p>

            <h2 className="text-xl font-semibold text-amber-900 mt-6 mb-4">8. Delivery Verification</h2>
            <p className="mb-4">
              All deliveries require signature verification. Please ensure that someone is available at the delivery address to sign for the package. We may also require verification of identity for high-value orders.
            </p>
            <p className="mb-4">
              If no one is available to receive the package, the courier will leave a delivery attempt notice and either try again the next day or hold the package for pickup at their local facility.
            </p>

            <h2 className="text-xl font-semibold text-amber-900 mt-6 mb-4">9. Contact Information</h2>
            <p className="mb-4">
              If you have any questions or concerns about our shipping policy, please contact our customer service team:
            </p>
            <p className="mb-4">
              Email: shipping@goldworld.com<br />
              Phone: +91 98765 43210<br />
              Hours: Monday to Saturday, 10:00 AM to 6:00 PM IST
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
            href="/policy/refund"
            className="text-amber-800 hover:text-amber-600"
          >
            Refund Policy
          </Link>
        </div>
      </div>
    </div>
  );
} 