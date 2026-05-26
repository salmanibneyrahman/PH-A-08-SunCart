import Link from "next/link";
import Image from "next/image";
import { FiStar } from "react-icons/fi";

export default function ProductCard({ product }) {
  const stars = Math.round(product.rating);

  return (
    <div className="product-card group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden bg-gray-50 aspect-[3/4]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-orange-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
            {product.category}
          </span>
        </div>
        {product.stock < 15 && (
          <div className="absolute top-3 right-3 z-10">
            <span className="bg-red-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
              Low Stock
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-gray-400 text-xs uppercase tracking-widest font-medium mb-1">
          {product.brand}
        </p>
        <h3 className="text-gray-900 font-bold text-sm uppercase tracking-wide leading-tight mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex text-orange-400">
            {[...Array(5)].map((_, i) => (
              <FiStar
                key={i}
                size={12}
                className={
                  i < stars
                    ? "fill-orange-400 text-orange-400"
                    : "text-gray-300"
                }
              />
            ))}
          </div>
          <span className="text-gray-500 text-xs font-medium">
            {product.rating}
          </span>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <p className="text-gray-900 font-bold text-base">
            ${product.price}.00 USD
          </p>
          <Link
            href={`/products/${product.id}`}
            className="btn btn-xs bg-gray-900 hover:bg-orange-500 text-white border-none rounded-full px-4 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}