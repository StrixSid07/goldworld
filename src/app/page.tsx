"use client";

import Link from "next/link";
import { FaArrowRight, FaStar, FaQuoteLeft } from "react-icons/fa";
import ProductCard from "@/components/ui/ProductCard";
import { getFeaturedProducts, getAllCategories, getAllTestimonials, getAllFAQs } from "@/utils/data";
import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import AnimateInView from "@/components/animations/AnimateInView";
import Image from "next/image";
import StoreLocation from "@/components/ui/StoreLocation";

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  const categories = getAllCategories();
  const testimonials = getAllTestimonials();
  const faqs = getAllFAQs();

  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/homesectionbgimage/homebgimage.jpg" 
            alt="Gold World Hero Background"
            fill
            style={{ objectFit: 'cover' }}
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-amber-800/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h1 
              className="text-3xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Premium Gold at Your Fingertips
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Discover our exquisite collection of gold coins, bars, and jewelry with assured purity and craftsmanship.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/products"
                  className="block bg-amber-100 hover:bg-amber-200 text-amber-900 px-6 py-3 rounded-md font-semibold transition-colors"
                >
                  Explore Collection
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="block bg-transparent hover:bg-amber-700 border border-white text-white px-6 py-3 rounded-md font-semibold transition-colors"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-amber-900 text-center mb-12">
              Our Categories
            </h2>
          </FadeIn>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {categories.map((category, index) => {
              // Map category ID to image path
              const categoryImages = {
                "gold-coins": "/images/categories/coincategorie.jpg",
                "jewelry": "/images/categories/jwelrycategorie.jpg",
                "gold-bars": "/images/categories/goldbarscategorie-removebg-preview.png"
              };
              
              const imagePath = categoryImages[category.id as keyof typeof categoryImages];
              
              return (
                <motion.div key={category.id} variants={fadeInUp}>
                  <Link
                    href={`/products?category=${category.id}`}
                    className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <motion.div 
                      className="h-52 relative overflow-hidden"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={imagePath}
                        alt={category.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 to-transparent flex items-end">
                        <h3 className="text-xl font-semibold text-white p-4">
                          {category.name}
                        </h3>
                      </div>
                    </motion.div>
                    <div className="p-4">
                      <p className="text-gray-600 mb-4">{category.description}</p>
                      <motion.div 
                        className="flex items-center text-amber-800"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span>Explore</span>
                        <FaArrowRight className="ml-2" />
                      </motion.div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex justify-between items-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-amber-900">
              Featured Products
            </h2>
            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
              <Link
                href="/products"
                className="flex items-center text-amber-800 hover:text-amber-600"
              >
                View All <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {featuredProducts.slice(0, 4).map((product) => (
              <motion.div key={product.id} className="h-full" variants={fadeInUp}>
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-amber-900 text-center">
              Why Choose GoldWorld
            </h2>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {[
              {
                title: "100% Authentic",
                description: "All our products come with BIS Hallmark certification ensuring authenticity and purity."
              },
              {
                title: "Competitive Pricing",
                description: "We offer the best rates in the market with transparent pricing and no hidden charges."
              },
              {
                title: "Secure Delivery",
                description: "Fully insured delivery service with live tracking for your peace of mind."
              },
              {
                title: "Buyback Option",
                description: "We offer competitive buyback rates for all our gold coins and bars."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                variants={fadeInUp}
                whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, backgroundColor: "#FEF3C7" }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-amber-800 text-2xl">✓</span>
                </motion.div>
                <h3 className="text-xl font-semibold text-amber-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-amber-900 text-center">
              What Our Customers Say
            </h2>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id} 
                className="bg-white p-6 rounded-lg shadow-md"
                variants={fadeInUp}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
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
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <FaStar
                          className={i < testimonial.rating ? "text-amber-400" : "text-gray-300"}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-amber-900 text-center">
              Frequently Asked Questions
            </h2>
          </motion.div>
          <motion.div 
            className="max-w-3xl mx-auto space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {faqs.map((faq, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Store Location Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-amber-900 text-center">
              Visit Our Store
            </h2>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            <StoreLocation />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-800 to-amber-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to Invest in Gold?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Browse our collection of premium gold products and make a secure investment today.
            </p>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="/products"
                className="bg-amber-100 hover:bg-amber-200 text-amber-900 px-8 py-3 rounded-md font-semibold transition-colors inline-block"
              >
                Shop Now
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
