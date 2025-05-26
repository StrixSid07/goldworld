"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { FaArrowLeft, FaShoppingCart, FaLock } from "react-icons/fa";

interface FormData {
  fullName: string;
  email: string;
  mobile: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
}

export default function CheckoutPage() {
  const router = useRouter();
  const { cartItems, getCartTotal, clearCart } = useCart();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Redirect to cart if cart is empty
    if (cartItems.length === 0) {
      router.push("/cart");
    }
  }, [cartItems, router]);

  // Format currency
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    // Validate fullName
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    // Validate mobile
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits";
    }

    // Validate address
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    // Validate city
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    // Validate state
    if (!formData.state.trim()) {
      newErrors.state = "State is required";
    }

    // Validate pincode
    if (!formData.pincode.trim()) {
      newErrors.pincode = "PIN code is required";
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = "PIN code must be 6 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Here we would typically make an API call to create an order
      // For now, we'll simulate this with a timeout

      // Razorpay test integration
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY || "rzp_test_YourTestKey", // Using environment variable or fallback
        amount: Math.round(getCartTotal() * 1.03 * 100), // Convert to paise
        currency: "INR",
        name: "GoldWorld",
        description: "Purchase from GoldWorld",
        image: "/logo.png",
        handler: function (response: any) {
          // This would typically call your backend to verify the payment
          console.log(response);
          router.push("/checkout/success");
          clearCart();
        },
        prefill: {
          name: formData.fullName,
          email: formData.email,
          contact: formData.mobile,
        },
        notes: {
          address: formData.address,
        },
        theme: {
          color: "#92400e", // amber-800
        },
      };

      // Initialize Razorpay
      const razorpay = new (window as any).Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Checkout error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (cartItems.length === 0) {
    return null; // Will redirect to cart
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-amber-900 mb-8">Checkout</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Checkout Form */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold text-amber-900 mb-6">Delivery Information</h2>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="fullName" className="block text-gray-700 mb-2">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full border ${errors.fullName ? "border-red-500" : "border-gray-300"
                      } rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400`}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full border ${errors.email ? "border-red-500" : "border-gray-300"
                      } rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="mobile" className="block text-gray-700 mb-2">
                    Mobile Number*
                  </label>
                  <input
                    type="text"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className={`w-full border ${errors.mobile ? "border-red-500" : "border-gray-300"
                      } rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400`}
                  />
                  {errors.mobile && (
                    <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="address" className="block text-gray-700 mb-2">
                    Address*
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    rows={3}
                    value={formData.address}
                    onChange={handleChange}
                    className={`w-full border ${errors.address ? "border-red-500" : "border-gray-300"
                      } rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400`}
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="city" className="block text-gray-700 mb-2">
                    City*
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={`w-full border ${errors.city ? "border-red-500" : "border-gray-300"
                      } rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400`}
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="state" className="block text-gray-700 mb-2">
                    State*
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className={`w-full border ${errors.state ? "border-red-500" : "border-gray-300"
                      } rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400`}
                  />
                  {errors.state && (
                    <p className="text-red-500 text-sm mt-1">{errors.state}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="pincode" className="block text-gray-700 mb-2">
                    PIN Code*
                  </label>
                  <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    className={`w-full border ${errors.pincode ? "border-red-500" : "border-gray-300"
                      } rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400`}
                  />
                  {errors.pincode && (
                    <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <Link
                  href="/cart"
                  className="flex items-center text-amber-800 hover:text-amber-600"
                >
                  <FaArrowLeft className="mr-2" /> Back to Cart
                </Link>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center justify-center ${isSubmitting
                      ? "bg-amber-500"
                      : "bg-amber-800 hover:bg-amber-900"
                    } text-white px-6 py-3 rounded-md font-semibold transition-colors`}
                >
                  {isSubmitting ? (
                    "Processing..."
                  ) : (
                    <>
                      <FaLock className="mr-2" /> Pay Now
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold text-amber-900 mb-6">Order Summary</h2>

            <div className="mb-6">
              <div className="max-h-60 overflow-y-auto mb-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-200 flex items-center justify-center mr-4">
                      <span className="text-gray-500 text-xs">{item.name.substring(0, 3)}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-amber-900 font-medium text-sm">{item.name}</h3>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">{item.weight}</span>
                        <span className="text-gray-600 text-sm">
                          {item.quantity} × {formatPrice(item.price)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">{formatPrice(getCartTotal())}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">GST (3%)</span>
                  <span className="font-semibold">
                    {formatPrice(getCartTotal() * 0.03)}
                  </span>
                </div>
                <div className="border-t border-gray-200 pt-3 flex justify-between">
                  <span className="text-lg font-semibold text-amber-900">Total</span>
                  <span className="text-lg font-bold text-amber-900">
                    {formatPrice(getCartTotal() * 1.03)}
                  </span>
                </div>
              </div>

              <div className="bg-amber-50 p-4 rounded-md flex items-start">
                <FaShoppingCart className="text-amber-800 mt-1 mr-3 flex-shrink-0" />
                <p className="text-sm text-gray-700">
                  All our shipments are fully insured and will be delivered within 3-5 business
                  days. For orders above ₹50,000, we offer free shipping.
                </p>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-amber-900 mb-4">Payment Methods</h2>
            <p className="text-gray-600 mb-4">
              We accept all major credit/debit cards, net banking, and UPI. All payments are processed
              securely through Razorpay.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src="/images/RazorPay.png"
                  alt="RazorPay"
                  className="h-24"
                />
              </div>
              <FaLock className="text-amber-800" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 