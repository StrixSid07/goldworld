"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ui/ProductCard";
import { getAllProducts, getAllCategories } from "@/utils/data";
import { FaFilter, FaTimes } from "react-icons/fa";
import type { Product, Category } from "@/utils/data";

export default function ProductsPage() {
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
      <h1 className="text-3xl font-bold text-amber-900 mb-8">
        {getCategoryName(selectedCategory)}
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-4">
          <button
            onClick={toggleFilters}
            className="flex items-center gap-2 bg-amber-100 hover:bg-amber-200 text-amber-900 px-4 py-2 rounded-md transition-colors"
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
          </button>
        </div>

        {/* Filters */}
        <div
          className={`${
            showFilters ? "block" : "hidden"
          } lg:block lg:w-1/4 bg-white p-6 rounded-lg shadow-md h-fit`}
        >
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-amber-900 mb-4">Categories</h2>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="all-categories"
                  name="category"
                  checked={selectedCategory === null}
                  onChange={() => handleCategoryChange(null)}
                  className="mr-2 accent-amber-600"
                />
                <label htmlFor="all-categories" className="text-gray-700">
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
                    className="mr-2 accent-amber-600"
                  />
                  <label htmlFor={category.id} className="text-gray-700">
                    {category.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-amber-900 mb-4">Price Range</h2>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="price-all"
                  name="price"
                  checked={priceRange[0] === 0 && priceRange[1] === 400000}
                  onChange={() => handlePriceChange(0, 400000)}
                  className="mr-2 accent-amber-600"
                />
                <label htmlFor="price-all" className="text-gray-700">
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
                  className="mr-2 accent-amber-600"
                />
                <label htmlFor="price-1" className="text-gray-700">
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
                  className="mr-2 accent-amber-600"
                />
                <label htmlFor="price-2" className="text-gray-700">
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
                  className="mr-2 accent-amber-600"
                />
                <label htmlFor="price-3" className="text-gray-700">
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
                  className="mr-2 accent-amber-600"
                />
                <label htmlFor="price-4" className="text-gray-700">
                  Above ₹2,00,000
                </label>
              </div>
            </div>
          </div>

          <button
            onClick={resetFilters}
            className="w-full bg-amber-100 hover:bg-amber-200 text-amber-900 px-4 py-2 rounded-md transition-colors"
          >
            Reset Filters
          </button>
        </div>

        {/* Products Grid */}
        <div className="lg:w-3/4">
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