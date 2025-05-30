"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ui/ProductCard";
import { getAllProducts, getAllCategories } from "@/utils/data";
import { FaFilter, FaTimes } from "react-icons/fa";
import type { Product, Category } from "@/utils/data";
import { motion } from "framer-motion";

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const allProducts = getAllProducts();
  const categories = getAllCategories();

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 400000]);
  const [showFilters, setShowFilters] = useState(false);

  // Apply filters when dependencies change
  useEffect(() => {
    let result = allProducts;

    // Filter by category
    if (selectedCategory) {
      result = result.filter((product) => product.categoryId === selectedCategory);
    }

    // Filter by price
    result = result.filter(
      (product) => product.discountPrice >= priceRange[0] && product.discountPrice <= priceRange[1]
    );

    setFilteredProducts(result);
  }, [selectedCategory, priceRange, allProducts]);

  // Update selected category when URL param changes
  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);

  const handleCategoryChange = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
  };

  const handlePriceChange = (min: number, max: number) => {
    setPriceRange([min, max]);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const resetFilters = () => {
    setSelectedCategory(null);
    setPriceRange([0, 400000]);
  };

  const getCategoryName = (categoryId: string | null) => {
    if (!categoryId) return "All Products";
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.name : "All Products";
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-amber-900 to-amber-700"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {getCategoryName(selectedCategory)}
      </motion.h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-4">
          <motion.button
            onClick={toggleFilters}
            className="flex items-center gap-2 bg-amber-900 hover:bg-amber-800 text-amber-200 px-4 py-2 rounded-md transition-colors shadow-md border border-amber-700"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {showFilters ? (
              <>
                <FaTimes /> Hide Filters
              </>
            ) : (
              <>
                <FaFilter /> Show Filters
              </>
            )}
          </motion.button>
        </div>

        {/* Filters */}
        <motion.div
          className={`${
            showFilters ? "block" : "hidden"
          } lg:block lg:w-1/5 bg-gradient-to-b from-amber-900 to-amber-800 p-4 rounded-lg shadow-md h-fit border-l-4 border-amber-300 relative overflow-hidden text-white sidebar-scrollbar max-h-[calc(100vh-180px)] overflow-y-auto`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated border effect */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-300 to-amber-200"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          <div className="mb-5">
            <h2 className="text-base font-semibold text-amber-200 mb-3 pb-2 border-b border-amber-700">Categories</h2>
            <div className="space-y-1.5">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="all-categories"
                  name="category"
                  checked={selectedCategory === null}
                  onChange={() => handleCategoryChange(null)}
                  className="mr-2 accent-amber-300"
                />
                <label htmlFor="all-categories" className="text-amber-100 text-sm">
                  All Products
                </label>
              </div>
              {categories.map((category) => (
                <div key={category.id} className="flex items-center">
                  <input
                    type="radio"
                    id={category.id}
                    name="category"
                    checked={selectedCategory === category.id}
                    onChange={() => handleCategoryChange(category.id)}
                    className="mr-2 accent-amber-300"
                  />
                  <label htmlFor={category.id} className="text-amber-100 text-sm">
                    {category.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-5">
            <h2 className="text-base font-semibold text-amber-200 mb-3 pb-2 border-b border-amber-700">Price Range</h2>
            <div className="space-y-1.5">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="price-all"
                  name="price"
                  checked={priceRange[0] === 0 && priceRange[1] === 400000}
                  onChange={() => handlePriceChange(0, 400000)}
                  className="mr-2 accent-amber-300"
                />
                <label htmlFor="price-all" className="text-amber-100 text-sm">
                  All Prices
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="price-1"
                  name="price"
                  checked={priceRange[0] === 0 && priceRange[1] === 50000}
                  onChange={() => handlePriceChange(0, 50000)}
                  className="mr-2 accent-amber-300"
                />
                <label htmlFor="price-1" className="text-amber-100 text-sm">
                  Under ₹50,000
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="price-2"
                  name="price"
                  checked={priceRange[0] === 50000 && priceRange[1] === 100000}
                  onChange={() => handlePriceChange(50000, 100000)}
                  className="mr-2 accent-amber-300"
                />
                <label htmlFor="price-2" className="text-amber-100 text-sm">
                  ₹50,000 - ₹1,00,000
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="price-3"
                  name="price"
                  checked={priceRange[0] === 100000 && priceRange[1] === 200000}
                  onChange={() => handlePriceChange(100000, 200000)}
                  className="mr-2 accent-amber-300"
                />
                <label htmlFor="price-3" className="text-amber-100 text-sm">
                  ₹1,00,000 - ₹2,00,000
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="price-4"
                  name="price"
                  checked={priceRange[0] === 200000 && priceRange[1] === 400000}
                  onChange={() => handlePriceChange(200000, 400000)}
                  className="mr-2 accent-amber-300"
                />
                <label htmlFor="price-4" className="text-amber-100 text-sm">
                  Above ₹2,00,000
                </label>
              </div>
            </div>
          </div>

          <motion.button
            onClick={resetFilters}
            className="w-full bg-amber-300 hover:bg-amber-200 text-amber-900 px-4 py-2 rounded-md transition-colors text-sm font-semibold"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Reset Filters
          </motion.button>
        </motion.div>

        {/* Products Grid */}
        <div className="lg:w-4/5 overflow-y-auto max-h-[calc(100vh-180px)] sidebar-scrollbar pr-2">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-xl text-amber-900 mb-2">No products found</h2>
              <p className="text-gray-600">
                Try changing your filters or browse our other categories.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
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
          )}
        </div>
      </div>
    </div>
  );
}

// Wrap the component that uses useSearchParams with Suspense
export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-8">Loading products...</div>}>
      <ProductsContent />
    </Suspense>
  );
} 