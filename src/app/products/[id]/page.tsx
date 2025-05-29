"use client";

import { useState, Suspense } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft, FaShoppingCart, FaStar } from "react-icons/fa";
import { getProductById, getSimilarProducts, getCategoryById } from "@/utils/data";
import ProductCard from "@/components/ui/ProductCard";
import { useCart } from "@/context/CartContext";

function ProductContent() {
  const params = useParams();
  const productId = params.id as string;
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = getProductById(productId);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-amber-900 mb-4">Product Not Found</h1>
        <p className="mb-8">The product you are looking for does not exist or has been removed.</p>
        <Link
          href="/products"
          className="bg-amber-800 hover:bg-amber-900 text-white px-6 py-3 rounded-md inline-block"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  const similarProducts = getSimilarProducts(productId, 4);
  const category = getCategoryById(product.categoryId);

  // Format currency
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.discountPrice,
      image: product.image,
      weight: product.weight,
    });
    router.push("/cart");
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm mb-8">
        <Link href="/" className="text-amber-800 hover:text-amber-600">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/products" className="text-amber-800 hover:text-amber-600">
          Products
        </Link>
        {category && (
          <>
            <span className="mx-2">/</span>
            <Link
              href={`/products?category=${category.id}`}
              className="text-amber-800 hover:text-amber-600"
            >
              {category.name}
            </Link>
          </>
        )}
        <span className="mx-2">/</span>
        <span className="text-gray-600">{product.name}</span>
      </div>

      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center mb-6 text-amber-800 hover:text-amber-600"
      >
        <FaArrowLeft className="mr-2" /> Back
      </button>

      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
        <div className="flex flex-col md:flex-row">
          {/* Product Image */}
          <div className="md:w-1/2">
            <div className="h-72 md:h-full relative bg-gray-200">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="md:w-1/2 p-6 md:p-8">
            <h1 className="text-2xl font-bold text-amber-900 mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex mr-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-amber-400 mr-1" />
                ))}
              </div>
              <span className="text-gray-600">15 Reviews</span>
            </div>

            <div className="mb-4">
              <span className="text-2xl font-bold text-amber-800 mr-3">
                {formatPrice(product.discountPrice)}
              </span>
              {product.price > product.discountPrice && (
                <span className="text-lg text-gray-500 line-through">
                  {formatPrice(product.price)}
                </span>
              )}
            </div>

            <div className="mb-6">
              <p className="text-gray-700 mb-4">{product.description}</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-gray-600 block mb-1">Weight:</span>
                  <span className="font-semibold">{product.weight}</span>
                </div>
                <div>
                  <span className="text-gray-600 block mb-1">Purity:</span>
                  <span className="font-semibold">{product.purity}</span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="quantity" className="block text-gray-600 mb-2">
                Quantity:
              </label>
              <div className="flex items-center">
                <button
                  onClick={() => handleQuantityChange(quantity - 1)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded-l-md"
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                  min="1"
                  className="border-t border-b border-gray-300 text-center w-16 py-1 focus:outline-none"
                />
                <button
                  onClick={() => handleQuantityChange(quantity + 1)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded-r-md"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddToCart}
                className="flex items-center justify-center bg-amber-800 hover:bg-amber-900 text-white px-6 py-3 rounded-md transition-colors"
              >
                <FaShoppingCart className="mr-2" /> Add to Cart
              </button>
              <Link
                href="/checkout"
                className="bg-amber-100 hover:bg-amber-200 text-amber-900 px-6 py-3 rounded-md text-center transition-colors"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-amber-900 mb-6">Similar Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {similarProducts.map((product) => (
              <div key={product.id} className="h-full">
                <ProductCard
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  discountPrice={product.discountPrice}
                  image={product.image}
                  weight={product.weight}
                  purity={product.purity}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Product Details Tabs */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
        <div className="border-b border-gray-200">
          <div className="flex">
            <button
              className="px-6 py-3 text-amber-900 font-semibold border-b-2 border-amber-800"
            >
              Description
            </button>
            <button
              className="px-6 py-3 text-gray-600 hover:text-amber-800"
            >
              Specifications
            </button>
            <button
              className="px-6 py-3 text-gray-600 hover:text-amber-800"
            >
              Reviews
            </button>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-amber-900 mb-4">Product Description</h3>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-gray-700 mb-4">
            Our gold products are sourced from the finest gold refineries and crafted with precision to ensure the highest quality. Each product comes with a certificate of authenticity and is hallmarked as per BIS standards.
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>100% authentic and certified</li>
            <li>BIS Hallmarked as per government regulations</li>
            <li>Free insured shipping on all orders</li>
            <li>30-day return policy</li>
            <li>Buyback option available</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// Wrap the component that uses useParams with Suspense
export default function ProductPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-8">Loading product details...</div>}>
      <ProductContent />
    </Suspense>
  );
} 