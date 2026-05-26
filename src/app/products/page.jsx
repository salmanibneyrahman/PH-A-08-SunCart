"use client";

import { useState, useMemo } from "react";
import ProductCard from "@/components/ProductCard";
import productsData from "../../../products.json";
import { FiGrid, FiList, FiChevronDown } from "react-icons/fi";
import Image from "next/image";

const categories = ["All", "Accessories", "Clothing", "Skincare", "Footwear"];

const sortOptions = [
  { label: "Best Selling", value: "best" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
  { label: "Top Rated", value: "rating" },
  { label: "Newest", value: "newest" },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("best");
  const [viewMode, setViewMode] = useState("grid");

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
  }, [activeCategory, sortBy]);

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-gray-50 border-b border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-3">
            <a href="/" className="hover:text-orange-500 transition-colors">
              Home
            </a>
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
            {/* Grid View Button */}
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              style={{
                width: "34px",
                height: "34px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "6px",
                border: viewMode === "grid" ? "1px solid #111827" : "1px solid #e5e7eb",
                backgroundColor: viewMode === "grid" ? "#111827" : "transparent",
                color: viewMode === "grid" ? "#ffffff" : "#6b7280",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              <FiGrid size={15} />
            </button>

            {/* List View Button */}
            <button
              type="button"
              onClick={() => setViewMode("list")}
              style={{
                width: "34px",
                height: "34px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "6px",
                border: viewMode === "list" ? "1px solid #111827" : "1px solid #e5e7eb",
                backgroundColor: viewMode === "list" ? "#111827" : "transparent",
                color: viewMode === "list" ? "#ffffff" : "#6b7280",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              <FiList size={15} />
            </button>

            <span style={{ color: "#9ca3af", fontSize: "13px", marginLeft: "4px" }}>
              {filteredAndSorted.length}{" "}
              {filteredAndSorted.length === 1 ? "product" : "products"}
            </span>
          </div>

          {/* Right side: sort dropdown */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span
              style={{
                color: "#374151",
                fontSize: "13px",
                fontWeight: "600",
              }}
            >
              Sort by:
            </span>
            <div style={{ position: "relative" }}>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  appearance: "none",
                  WebkitAppearance: "none",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  padding: "7px 36px 7px 12px",
                  fontSize: "13px",
                  color: "#374151",
                  backgroundColor: "#ffffff",
                  cursor: "pointer",
                  outline: "none",
                  fontWeight: "500",
                }}
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <FiChevronDown
                size={14}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#9ca3af",
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>
        </div>

        {/* Category Filter Tags */}
        <div className="mb-8">
          <p
            style={{
              color: "#374151",
              fontWeight: "700",
              fontSize: "12px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Filter by Category:
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "6px 16px",
                  borderRadius: "9999px",
                  fontSize: "11px",
                  fontWeight: "700",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  border: activeCategory === cat ? "1px solid #111827" : "1px solid #e5e7eb",
                  backgroundColor: activeCategory === cat ? "#111827" : "#ffffff",
                  color: activeCategory === cat ? "#ffffff" : "#6b7280",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
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
  const stars = Math.round(product.rating);
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        border: "1px solid #f3f4f6",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        overflow: "hidden",
        padding: "16px",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100px",
          height: "120px",
          borderRadius: "12px",
          overflow: "hidden",
          backgroundColor: "#f9fafb",
          flexShrink: 0,
        }}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div style={{ flex: 1 }}>
        <span
          style={{
            fontSize: "10px",
            fontWeight: "700",
            color: "#f97316",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          {product.category}
        </span>
        <p
          style={{
            fontWeight: "800",
            fontSize: "14px",
            color: "#111827",
            textTransform: "uppercase",
            margin: "4px 0 6px",
          }}
        >
          {product.name}
        </p>
        <p style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "6px" }}>
          {product.brand}
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "8px" }}>
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              style={{
                color: i < stars ? "#f97316" : "#e5e7eb",
                fontSize: "12px",
              }}
            >
              ★
            </span>
          ))}
          <span style={{ fontSize: "11px", color: "#9ca3af", marginLeft: "4px" }}>
            {product.rating}
          </span>
        </div>
        <p style={{ fontWeight: "900", fontSize: "16px", color: "#111827" }}>
          ${product.price}.00 USD
        </p>
      </div>
      <a
        href={`/products/${product.id}`}
        style={{
          backgroundColor: "#111827",
          color: "#ffffff",
          fontWeight: "700",
          fontSize: "11px",
          padding: "10px 20px",
          borderRadius: "9999px",
          textDecoration: "none",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          flexShrink: 0,
          transition: "background-color 0.2s",
        }}
      >
        View Details
      </a>
    </div>
  );
}