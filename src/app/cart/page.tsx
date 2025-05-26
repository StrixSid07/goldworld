"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { FaTrash, FaArrowLeft, FaShoppingCart } from "react-icons/fa";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  // Format currency
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-amber-900 mb-8">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="flex justify-center mb-6">
            <FaShoppingCart className="text-amber-800 text-5xl" />
          </div>
          <h2 className="text-xl font-semibold text-amber-900 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">
            Looks like you haven't added any products to your cart yet.
          </p>
          <Link
            href="/products"
            className="bg-amber-800 hover:bg-amber-900 text-white px-6 py-3 rounded-md inline-block"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="hidden md:grid grid-cols-12 gap-4 bg-gray-50 p-4 text-gray-600 font-semibold">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-center">Total</div>
              </div>

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 border-b border-gray-200 items-center"
                >
                  {/* Product */}
                  <div className="col-span-6 flex items-center">
                    <div className="w-16 h-16 bg-gray-200 flex items-center justify-center mr-4">
                      <span className="text-gray-500 text-xs">{item.name}</span>
                    </div>
                    <div>
                      <h3 className="text-amber-900 font-medium">{item.name}</h3>
                      <p className="text-gray-500 text-sm">{item.weight}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="md:col-span-2 text-gray-700 md:text-center">
                    <div className="md:hidden text-gray-500 mb-1">Price:</div>
                    {formatPrice(item.price)}
                  </div>

                  {/* Quantity */}
                  <div className="md:col-span-2 md:text-center">
                    <div className="md:hidden text-gray-500 mb-1">Quantity:</div>
                    <div className="flex items-center md:justify-center">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-2 py-1 rounded-l-md"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value) || 1)
                        }
                        min="1"
                        className="border-t border-b border-gray-300 text-center w-12 py-1 focus:outline-none"
                      />
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-2 py-1 rounded-r-md"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="md:col-span-2 flex justify-between md:justify-center items-center">
                    <div className="md:hidden text-gray-500">Total:</div>
                    <div className="flex items-center">
                      <span className="text-amber-900 font-semibold mr-4">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                        aria-label="Remove item"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <Link
                href="/products"
                className="flex items-center text-amber-800 hover:text-amber-600"
              >
                <FaArrowLeft className="mr-2" /> Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-amber-900 mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
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
                <div className="border-t border-gray-200 pt-4 flex justify-between">
                  <span className="text-lg font-semibold text-amber-900">Total</span>
                  <span className="text-lg font-bold text-amber-900">
                    {formatPrice(getCartTotal() * 1.03)}
                  </span>
                </div>
              </div>

              <Link
                href="/checkout"
                className="block w-full bg-amber-800 hover:bg-amber-900 text-white text-center px-4 py-3 rounded-md font-semibold transition-colors"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 