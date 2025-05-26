import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPrice: number;
  image: string;
  weight: string;
  purity: string;
}

const ProductCard = ({
  id,
  name,
  description,
  price,
  discountPrice,
  image,
  weight,
  purity,
}: ProductCardProps) => {
  // Format currency
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  // Calculate discount percentage
  const discountPercentage = Math.round(((price - discountPrice) / price) * 100);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="relative h-48 sm:h-64 bg-gray-200">
        {/* Use a placeholder div until real images are available */}
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <span className="text-gray-500">{name}</span>
        </div>
        {/* Uncomment when real images are available
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
        */}
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-amber-900 mb-1 line-clamp-1">{name}</h3>
        <div className="flex items-center mb-2">
          <span className="text-sm text-gray-600 mr-2">{weight}</span>
          <span className="text-sm text-gray-600">{purity}</span>
        </div>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-grow">{description}</p>

        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-lg font-bold text-amber-800">{formatPrice(discountPrice)}</span>
            {discountPercentage > 0 && (
              <>
                <span className="text-sm text-gray-500 line-through ml-2">
                  {formatPrice(price)}
                </span>
                <span className="ml-2 text-xs bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded">
                  {discountPercentage}% OFF
                </span>
              </>
            )}
          </div>
        </div>

        <div className="flex space-x-2 mt-auto">
          <Link
            href={`/products/${id}`}
            className="flex-1 py-2 px-4 bg-amber-100 hover:bg-amber-200 text-amber-900 text-center rounded-md transition-colors font-medium"
          >
            View Details
          </Link>
          <button
            className="p-2 bg-amber-800 hover:bg-amber-900 text-white rounded-md transition-colors"
            aria-label="Add to cart"
          >
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 