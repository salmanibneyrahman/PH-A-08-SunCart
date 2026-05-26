import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import productsData from "../../../../products.json";
import Link from "next/link";
import Image from "next/image";
import {
  FiStar,
  FiShoppingCart,
  FiArrowLeft,
  FiShare2,
  FiTruck,
  FiAward,
  FiCreditCard,
  FiShield,
} from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user) {
    redirect(`/login?callbackUrl=/products/${id}`);
  }

  const product = productsData.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-black text-gray-900 mb-4">
          Product Not Found
        </h1>
        <Link
          href="/products"
          className="btn bg-orange-500 text-white border-none rounded-full"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  const stars = Math.round(product.rating);
  const relatedProducts = productsData
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);
  const fallbackRelated = productsData
    .filter((p) => p.id !== product.id)
    .slice(0, 4);
  const displayRelated =
    relatedProducts.length >= 2 ? relatedProducts : fallbackRelated;

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-gray-500">
            <Link href="/" className="hover:text-orange-500">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-orange-500">Products</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium line-clamp-1">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Back Button */}
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-orange-500 mb-8 transition"
        >
          <FiArrowLeft size={16} /> Back to Products
        </Link>

        {/* Main Product Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-14">
          {/* Product Images */}
          <div>
            <div className="relative bg-gray-50 rounded-2xl overflow-hidden mb-4 aspect-[3/4]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`relative w-20 h-24 rounded-xl overflow-hidden border-2 cursor-pointer ${
                    i === 1 ? "border-orange-500" : "border-gray-200 opacity-60"
                  }`}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">
              SKU: SNC-{String(product.id).padStart(4, "0")}
            </p>
            <h1 className="text-3xl font-black text-gray-900 uppercase tracking-wide leading-tight mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-orange-400">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    size={16}
                    className={
                      i < stars
                        ? "fill-orange-400 text-orange-400"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
              <span className="text-gray-600 text-sm font-medium">
                {product.rating} out of 5
              </span>
            </div>

            {/* Price */}
            <p className="text-3xl font-black text-gray-900 mb-5">
              ${product.price}.00 USD
            </p>

            {/* Category Badge */}
            <div className="mb-5">
              <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                {product.category}
              </span>
            </div>

            {/* Stock */}
            <div className="flex items-center gap-2 mb-6">
              <div
                className={`w-2.5 h-2.5 rounded-full ${
                  product.stock > 5 ? "bg-green-500" : "bg-red-500"
                }`}
              />
              <p
                className={`text-sm font-medium ${
                  product.stock > 5 ? "text-green-600" : "text-red-500"
                }`}
              >
                {product.stock > 5
                  ? `In stock (${product.stock} units), ready to be shipped`
                  : `Low stock - only ${product.stock} left!`}
              </p>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-sm font-bold text-gray-700 mb-2">Quantity</p>
              <div className="flex items-center gap-3">
                <button className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:border-orange-500 hover:text-orange-500 transition text-lg font-bold">
                  -
                </button>
                <span className="w-10 text-center font-bold text-gray-900">1</span>
                <button className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:border-orange-500 hover:text-orange-500 transition text-lg font-bold">
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 mb-6">
              <button className="w-full bg-gray-900 hover:bg-orange-500 text-white font-bold uppercase tracking-widest py-3.5 rounded-full transition flex items-center justify-center gap-2">
                <FiShoppingCart size={18} />
                Add To Cart
              </button>
              <button className="w-full border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold uppercase tracking-widest py-3.5 rounded-full transition">
                Buy It Now
              </button>
            </div>

            {/* Meta */}
            <div className="border-t border-gray-100 pt-5 space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-gray-500 text-sm w-20 font-medium">Vendor:</span>
                <span className="text-gray-700 text-sm font-semibold">{product.brand}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-500 text-sm w-20 font-medium">Type:</span>
                <span className="text-gray-700 text-sm">{product.category}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-500 text-sm w-20 font-medium">Brand:</span>
                <span className="text-gray-700 text-sm">{product.brand}</span>
              </div>
            </div>

            {/* Social Share */}
            <div className="flex items-center gap-3 mt-5">
              <span className="text-gray-500 text-sm font-medium">Share:</span>
              {[
                { icon: <FaFacebookF size={12} />, color: "bg-blue-600" },
                { icon: <FaTwitter size={12} />, color: "bg-sky-500" },
                { icon: <FaPinterestP size={12} />, color: "bg-red-600" },
                { icon: <FiShare2 size={12} />, color: "bg-gray-700" },
              ].map((s, i) => (
                <button
                  key={i}
                  className={`${s.color} w-7 h-7 rounded-full flex items-center justify-center text-white hover:opacity-80 transition`}
                >
                  {s.icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="border-t border-gray-100 pt-10 mb-14">
          <h2 className="text-xl font-black text-gray-900 uppercase tracking-wide mb-5">
            Description
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed max-w-3xl">
            {product.description}
          </p>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border border-gray-100 rounded-2xl p-6 mb-14">
          {[
            { icon: <FiTruck size={24} />, label: "Free Delivery" },
            { icon: <FiAward size={24} />, label: "Top Brand" },
            { icon: <FiCreditCard size={24} />, label: "Pay on Delivery" },
            { icon: <FiShield size={24} />, label: "Secure Payment" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2 text-center">
              <div className="text-orange-500">{item.icon}</div>
              <span className="text-xs font-black text-gray-900 uppercase tracking-widest">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* You May Also Like */}
        {displayRelated.length > 0 && (
          <div>
            <h2 className="text-3xl font-black text-gray-900 uppercase tracking-wide text-center mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {displayRelated.map((p) => (
                <div
                  key={p.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition border border-gray-100"
                >
                  <div className="relative overflow-hidden bg-gray-50 aspect-[3/4]">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute top-3 left-3 z-10">
                      <span className="bg-orange-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                        {p.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">
                      {p.brand}
                    </p>
                    <p className="text-gray-900 font-bold text-xs uppercase tracking-wide mb-2 line-clamp-2">
                      {p.name}
                    </p>
                    <p className="text-gray-900 font-black text-sm mb-3">
                      ${p.price}.00 USD
                    </p>
                    <Link
                      href={`/products/${p.id}`}
                      className="block w-full text-center bg-gray-900 hover:bg-orange-500 text-white text-xs font-bold uppercase tracking-widest py-2 rounded-full transition"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}