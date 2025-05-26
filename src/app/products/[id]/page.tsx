import { getProductById, getSimilarProducts, getCategoryById } from "@/utils/data";
import ClientProductPage from "./ClientProductPage";

export default function ProductPage({ params }: { params: { id: string } }) {
  const productId = params.id;
  const product = getProductById(productId);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-amber-900 mb-4">Product Not Found</h1>
        <p className="mb-8">The product you are looking for does not exist or has been removed.</p>
        <a 
          href="/products"
          className="bg-amber-800 hover:bg-amber-900 text-white px-6 py-3 rounded-md inline-block"
        >
          Browse Products
        </a>
      </div>
    );
  }

  const similarProducts = getSimilarProducts(productId, 4);
  const category = getCategoryById(product.categoryId);

  return (
    <ClientProductPage 
      product={product} 
      similarProducts={similarProducts} 
      category={category} 
    />
  );
} 