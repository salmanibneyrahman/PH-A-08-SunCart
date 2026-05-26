import ProductCard from "@/components/ProductCard";
import productsData from "../../../products.json";
import { FiGrid, FiList } from "react-icons/fi";
import Link from "next/link";

const categories = ["All", "Accessories", "Clothing", "Skincare", "Footwear"];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-gray-50 border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-3">
            <Link href="/" className="hover:text-orange-500">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Products</span>
          </nav>
          <h1 className="text-4xl font-black text-gray-900 uppercase tracking-wide">
            Summer Collection
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <button className="w-8 h-8 flex items-center justify-center text-gray-900 border border-gray-300 rounded">
              <FiGrid size={16} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-gray-500 border border-gray-200 rounded">
              <FiList size={16} />
            </button>
            <span className="text-gray-500 text-sm ml-2">{productsData.length} products</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gray-500 text-sm">Sort by:</span>
            <select className="select select-sm border-gray-200 text-sm rounded-lg">
              <option>Best selling</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        {/* Tags / Category Filter */}
        <div className="mb-8">
          <p className="text-gray-700 font-bold text-sm mb-3">Tags:</p>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold border cursor-pointer transition-colors ${cat === "All" ? "bg-gray-900 text-white border-gray-900" : "bg-white text-gray-600 border-gray-200 hover:border-orange-400 hover:text-orange-500"}`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}