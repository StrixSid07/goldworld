"use client";

import Link from "next/link";
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import icons for better performance
const FaGem = dynamic(() => import('react-icons/fa').then(mod => mod.FaGem), { ssr: false });
const FaAward = dynamic(() => import('react-icons/fa').then(mod => mod.FaAward), { ssr: false });
const FaUsers = dynamic(() => import('react-icons/fa').then(mod => mod.FaUsers), { ssr: false });
const FaHistory = dynamic(() => import('react-icons/fa').then(mod => mod.FaHistory), { ssr: false });

// Icon placeholder during loading
const IconPlaceholder = () => <div className="w-8 h-8 bg-amber-200 rounded-full animate-pulse"></div>;

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-amber-900 mb-8 text-center">About GoldWorld</h1>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-amber-800 to-amber-900 text-white p-8 rounded-lg mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Your Trusted Gold Partner</h2>
            <p className="text-lg mb-0">
              Delivering premium quality gold products with transparency and trust since 2010.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Suspense fallback={<IconPlaceholder />}>
              <FaHistory className="text-amber-600 text-3xl mr-4" />
            </Suspense>
            <h2 className="text-2xl font-bold text-amber-900">Our Story</h2>
          </div>
          <p className="text-gray-700 mb-4">
            GoldWorld was founded in 2010 with a simple mission: to make gold investment and 
            purchase accessible to everyone. What started as a small family business has now 
            grown into one of India's most trusted gold retailers.
          </p>
          <p className="text-gray-700 mb-4">
            Our founder, Mr. Rajesh Sharma, with his 30 years of experience in the gold industry, 
            established GoldWorld with a commitment to quality, transparency, and customer 
            satisfaction. Today, we continue to uphold these values as we serve thousands of 
            satisfied customers across the country.
          </p>
          <p className="text-gray-700">
            We have established strong relationships with leading gold refineries and jewelry 
            craftsmen to ensure that every product we offer meets the highest standards of purity 
            and craftsmanship.
          </p>
        </div>

        {/* Our Values */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Suspense fallback={<IconPlaceholder />}>
              <FaGem className="text-amber-600 text-3xl mr-4" />
            </Suspense>
            <h2 className="text-2xl font-bold text-amber-900">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Quality</h3>
              <p className="text-gray-700">
                We source our gold from LBMA certified refineries and ensure BIS Hallmarking for 
                all our products, guaranteeing purity and authenticity.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Transparency</h3>
              <p className="text-gray-700">
                We believe in clear and honest pricing. What you see is what you pay, with no 
                hidden charges or fees.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Customer First</h3>
              <p className="text-gray-700">
                We prioritize customer satisfaction in everything we do, from product selection to 
                after-sales service.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Innovation</h3>
              <p className="text-gray-700">
                We continuously innovate our products and services to meet the evolving needs of 
                our customers.
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Suspense fallback={<IconPlaceholder />}>
              <FaUsers className="text-amber-600 text-3xl mr-4" />
            </Suspense>
            <h2 className="text-2xl font-bold text-amber-900">Our Team</h2>
          </div>
          <p className="text-gray-700 mb-6">
            At GoldWorld, we have a dedicated team of gold experts, designers, and customer service 
            professionals who work together to provide you with the best gold buying experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 bg-amber-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-amber-800 text-xl">RS</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-1">Rajesh Sharma</h3>
              <p className="text-amber-700 mb-3">Founder & CEO</p>
              <p className="text-gray-700 text-sm">
                30+ years of experience in the gold industry
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 bg-amber-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-amber-800 text-xl">AP</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-1">Anjali Patel</h3>
              <p className="text-amber-700 mb-3">Chief Designer</p>
              <p className="text-gray-700 text-sm">
                Award-winning jewelry designer with international experience
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 bg-amber-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-amber-800 text-xl">VK</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-1">Vikram Kumar</h3>
              <p className="text-amber-700 mb-3">Head of Operations</p>
              <p className="text-gray-700 text-sm">
                Ensuring smooth delivery and customer satisfaction
              </p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Suspense fallback={<IconPlaceholder />}>
              <FaAward className="text-amber-600 text-3xl mr-4" />
            </Suspense>
            <h2 className="text-2xl font-bold text-amber-900">Our Certifications</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul className="list-disc pl-5 text-gray-700 space-y-3">
              <li>BIS (Bureau of Indian Standards) Certified</li>
              <li>Member of India Bullion and Jewellers Association (IBJA)</li>
              <li>ISO 9001:2015 Certified for Quality Management</li>
              <li>Authorized distributor for leading international gold brands</li>
              <li>Registered with Gem and Jewellery Export Promotion Council (GJEPC)</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-amber-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-amber-900 mb-4">Visit Our Store</h2>
          <p className="text-gray-700 mb-6">
            Experience our collection in person and consult with our gold experts.
          </p>
          <Link
            href="/contact"
            className="bg-amber-800 hover:bg-amber-900 text-white px-6 py-3 rounded-md inline-block"
            prefetch={true}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
} 