import Link from "next/link";
import { FaArrowRight, FaStar, FaQuoteLeft } from "react-icons/fa";
import ProductCard from "@/components/ui/ProductCard";
import { getFeaturedProducts, getAllCategories, getAllTestimonials, getAllFAQs } from "@/utils/data";

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  const categories = getAllCategories();
  const testimonials = getAllTestimonials();
  const faqs = getAllFAQs();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-800 to-amber-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Premium Gold at Your Fingertips
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Discover our exquisite collection of gold coins, bars, and jewelry with assured purity and craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/products"
                className="bg-amber-100 hover:bg-amber-200 text-amber-900 px-6 py-3 rounded-md font-semibold transition-colors"
              >
                Explore Collection
              </Link>
              <Link
                href="/contact"
                className="bg-transparent hover:bg-amber-700 border border-white text-white px-6 py-3 rounded-md font-semibold transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-900 text-center mb-12">
            Our Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/products?category=${category.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-40 bg-amber-100 flex items-center justify-center">
                  <h3 className="text-xl font-semibold text-amber-900">
                    {category.name}
                  </h3>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex items-center text-amber-800">
                    <span>Explore</span>
                    <FaArrowRight className="ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-amber-900">
              Featured Products
            </h2>
            <Link
              href="/products"
              className="flex items-center text-amber-800 hover:text-amber-600"
            >
              View All <FaArrowRight className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 4).map((product) => (
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
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-900 text-center mb-12">
            Why Choose GoldWorld
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-amber-800 text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                100% Authentic
              </h3>
              <p className="text-gray-600">
                All our products come with BIS Hallmark certification ensuring authenticity and purity.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-amber-800 text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                Competitive Pricing
              </h3>
              <p className="text-gray-600">
                We offer the best rates in the market with transparent pricing and no hidden charges.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-amber-800 text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                Secure Delivery
              </h3>
              <p className="text-gray-600">
                Fully insured delivery service with live tracking for your peace of mind.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-amber-800 text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                Buyback Option
              </h3>
              <p className="text-gray-600">
                We offer competitive buyback rates for all our gold coins and bars.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-900 text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-4">
                  <FaQuoteLeft className="text-amber-200 text-3xl mr-4" />
                  <p className="text-gray-600">{testimonial.comment}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-amber-900">{testimonial.name}</h4>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={i < testimonial.rating ? "text-amber-400" : "text-gray-300"}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-800 to-amber-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to Invest in Gold?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Browse our collection of premium gold products and make a secure investment today.
          </p>
          <Link
            href="/products"
            className="bg-amber-100 hover:bg-amber-200 text-amber-900 px-8 py-3 rounded-md font-semibold transition-colors inline-block"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
}
