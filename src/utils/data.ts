import data from '@/data/data.json';

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPrice: number;
  categoryId: string;
  image: string;
  featured: boolean;
  inStock: boolean;
  weight: string;
  purity: string;
};

export type Category = {
  id: string;
  name: string;
  description: string;
};

export type Testimonial = {
  id: number;
  name: string;
  comment: string;
  rating: number;
};

export type FAQ = {
  question: string;
  answer: string;
};

// Get all products
export const getAllProducts = (): Product[] => {
  return data.products;
};

// Get featured products
export const getFeaturedProducts = (): Product[] => {
  return data.products.filter(product => product.featured);
};

// Get product by ID
export const getProductById = (id: string): Product | undefined => {
  return data.products.find(product => product.id === id);
};

// Get products by category
export const getProductsByCategory = (categoryId: string): Product[] => {
  return data.products.filter(product => product.categoryId === categoryId);
};

// Get all categories
export const getAllCategories = (): Category[] => {
  return data.categories;
};

// Get category by ID
export const getCategoryById = (id: string): Category | undefined => {
  return data.categories.find(category => category.id === id);
};

// Get all testimonials
export const getAllTestimonials = (): Testimonial[] => {
  return data.testimonials;
};

// Get all FAQs
export const getAllFAQs = (): FAQ[] => {
  return data.faqs;
};

// Get similar products based on category
export const getSimilarProducts = (productId: string, limit = 4): Product[] => {
  const product = getProductById(productId);
  if (!product) return [];
  
  return data.products
    .filter(p => p.categoryId === product.categoryId && p.id !== productId)
    .slice(0, limit);
};

// Search products by query
export const searchProducts = (query: string): Product[] => {
  const searchTerm = query.toLowerCase();
  
  return data.products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) || 
    product.description.toLowerCase().includes(searchTerm)
  );
}; 