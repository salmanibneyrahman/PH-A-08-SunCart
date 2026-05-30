"use client";

import { useState, useMemo, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import { FiGrid, FiList, FiChevronDown } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const categories = ["All", "Accessories", "Clothing", "Skincare", "Footwear"];

const sortOptions = [
  { label: "Best Selling", value: "best" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
  { label: "Top Rated", value: "rating" },
  { label: "Newest", value: "newest" },
];

export default function ProductsPage() {
  const [productsData, setProductsData] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("best");
  const [viewMode, setViewMode] = useState("grid");

  // Fetch data dynamically on component mount
  useEffect(() => {
    fetch("https://suncart-website.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setProductsData(data))
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  const filteredAndSorted = useMemo(() => {
    let result = [...productsData];

    if (activeCategory !== "All") {
      result = result.filter((p) => p.category === activeCategory);
    }

    switch (sortBy) {
      case "price_asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price_desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }
    return result;
  }, [productsData, activeCategory, sortBy]);

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-gray-50 border-b border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-3">
            <Link href="/" className="hover:text-orange-500 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-700 font-semibold">Products</span>
          </nav>
          <h1 className="text-4xl font-black text-gray-900 uppercase tracking-wide">
            Summer Collection
          </h1>
          <p className="text-gray-400 text-sm mt-2">
            Discover our curated summer essentials
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Toolbar Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-gray-100">
          {/* Left side: view toggle + count */}
          <div className="flex items-center gap-3">
            {/* Grid View Button — Refactored to Pure Tailwind Utility Classes */}
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`w-[34px] h-[34px] flex items-center justify-center rounded-lg border transition-all duration-200 ${viewMode === "grid"
                  ? "border-gray-900 bg-gray-900 text-white"
                  : "border-gray-200 bg-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                }`}
            >
              <FiGrid size={15} />
            </button>
            {/* Left View Toggle & Product Count Controls */}
            <button
              type="button"
              onClick={() => setViewMode("list")}
              className={`w-[34px] h-[34px] flex items-center justify-center rounded-lg border transition-all duration-200 ${viewMode === "list"
                ? "border-gray-900 bg-gray-900 text-white"
                : "border-gray-200 bg-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                }`}
            >
              <FiList size={15} />
            </button>

            <span className="text-gray-400 text-[13px] ml-1">
              {filteredAndSorted.length}{" "}
              {filteredAndSorted.length === 1 ? "product" : "products"}
            </span>
          </div>

          {/* Right Side: Sophisticated Sort Dropdown Wrapper */}
          <div className="flex items-center gap-2.5">
            <span className="text-gray-700 text-[13px] font-semibold">
              Sort by:
            </span>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none border border-gray-200 rounded-lg py-[7px] pl-3 pr-9 text-[13px] text-gray-700 bg-white cursor-pointer outline-none font-medium transition-colors hover:border-gray-300 focus:border-orange-500 select-sm"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>

              <FiChevronDown
                size={14}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              />
            </div>
          </div>

        </div>
        {/* Category Filter Tags */}
        <div className="mb-8">
          <p className="text-gray-700 font-bold text-xs tracking-widest uppercase mb-3">
            Filter by Category:
          </p>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`btn btn-sm rounded-full text-[11px] font-bold tracking-wider uppercase border transition-all duration-200 shadow-sm ${activeCategory === cat
                  ? "bg-gray-900 text-white border-gray-900 hover:bg-gray-800"
                  : "bg-white text-gray-500 border-gray-200 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredAndSorted.length > 0 ? (
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                : "flex flex-col gap-4"
            }
          >
            {filteredAndSorted.map((product) =>
              viewMode === "grid" ? (
                <ProductCard key={product.id} product={product} />
              ) : (
                <ListProductCard key={product.id} product={product} />
              )
            )}
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "80px 0",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "64px",
                height: "64px",
                backgroundColor: "#fff7ed",
                borderRadius: "9999px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "16px",
              }}
            >
              <FiGrid size={28} color="#fdba74" />
            </div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "900",
                color: "#111827",
                marginBottom: "8px",
              }}
            >
              No products found
            </h3>
            <p
              style={{
                color: "#9ca3af",
                fontSize: "14px",
                marginBottom: "20px",
              }}
            >
              No products match the selected category.
            </p>
            <button
              type="button"
              onClick={() => setActiveCategory("All")}
              style={{
                backgroundColor: "#f97316",
                color: "#ffffff",
                fontWeight: "700",
                fontSize: "13px",
                padding: "10px 24px",
                borderRadius: "9999px",
                border: "none",
                cursor: "pointer",
              }}
            >
              View All Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function ListProductCard({ product }) {
  const stars = Math.round(product.rating || 5);

  return (
    <div className="flex gap-5 bg-white rounded-2xl border border-gray-100 shadow-sm p-4 items-center hover:shadow-md transition duration-300 group">

      {/* Product Image Frame */}
      <div className="relative w-[100px] h-[120px] rounded-xl overflow-hidden bg-gray-50 shrink-0 border border-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
          sizes="100px"
        />
      </div>

      {/* Product Content Body */}
      <div className="flex-1 min-w-0">
        {/* Category Badge */}
        <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest block">
          {product.category}
        </span>

        {/* Title */}
        <h3 className="font-black text-sm text-gray-900 uppercase tracking-wide mt-1 mb-0.5 truncate">
          {product.name}
        </h3>

        {/* Brand */}
        <p className="text-xs text-gray-400 font-medium mb-1.5">
          {product.brand}
        </p>

        {/* Rating Section via DaisyUI Star/Rating styles mask framework */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex text-orange-500 text-xs">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < stars ? "text-orange-500" : "text-gray-200"}>
                ★
              </span>
            ))}
          </div>
          <span className="text-[11px] text-gray-400 font-bold ml-1">
            {product.rating}
          </span>
        </div>

        {/* Price Tag */}
        <p className="font-black text-base text-gray-900">
          ${product.price}.00 USD
        </p>
      </div>

      {/* 🚀 View Details Button Optimized with Next.js Link & DaisyUI Button Layout */}
      <Link
        href={`/products/${product.id}`}
        className="btn btn-sm bg-gray-900 hover:bg-orange-500 text-white border-none rounded-full px-5 text-[11px] font-black uppercase tracking-widest shrink-0 shadow-sm hover:shadow transition duration-300"
      >
        View Details
      </Link>
    </div>
  );
}