import HeroSlider from "@/components/HeroSlider";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import Image from "next/image";
import {
  FiTruck,
  FiAward,
  FiCreditCard,
  FiShield,
  FiArrowRight,
  FiTag,
} from "react-icons/fi";
import { FaFire } from "react-icons/fa";

const careTips = [
  {
    image:
      "https://images.unsplash.com/photo-1629732047356-30c7e14e712b?q=80&w=1170",
    title: "Skincare Routine",
    tip: "Apply SPF 50 sunscreen 20 minutes before sun exposure. Reapply every 2 hours for maximum protection.",
    color: "bg-orange-50",
  },
  {
    image:
      "https://images.unsplash.com/photo-1618111415221-27a938943fe4?q=80&w=687",
    title: "Stay Hydrated",
    tip: "Drink at least 8-10 glasses of water daily. Carry a reusable bottle to stay refreshed at the beach.",
    color: "bg-blue-50",
  },
  {
    image:
      "https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=1170",
    title: "Eye Protection",
    tip: "Wear UV-blocking sunglasses to protect your eyes from harmful UV rays. Look for 100% UVA/UVB protection.",
    color: "bg-yellow-50",
  },
  {
    image:
      "https://images.unsplash.com/photo-1683295550807-bf5b3557d1a2?q=80&w=1170&",
    title: "Seek Shade",
    tip: "Avoid direct sun between 10 AM and 4 PM. Use hats and umbrellas for extra shade during peak hours.",
    color: "bg-green-50",
  },
];

const brands = [
  {
    name: "SunShade",
    tagline: "Premium UV Protection",
    bg: "bg-orange-500",
    icon: "S",
  },
  {
    name: "GlowSafe",
    tagline: "Trusted Skincare Brand",
    bg: "bg-pink-500",
    icon: "G",
  },
  {
    name: "CoastalCo",
    tagline: "Beach Lifestyle Essentials",
    bg: "bg-blue-500",
    icon: "C",
  },
  {
    name: "WaveRider",
    tagline: "Surf & Sport Gear",
    bg: "bg-teal-500",
    icon: "W",
  },
];

export default async function HomePage() {
  const res = await fetch("https://suncart-website.onrender.com/products");
  const productsData = await res.json();
  const popularProducts = productsData.slice(0, 3);

  return (
    <div>
      {/* Hero Slider */}
      <HeroSlider />
      {/* Flash Sale Strip */}
      <div className="relative overflow-hidden bg-gray-900 border-y border-gray-800">
        <div className="absolute top-0 left-1/4 w-72 h-32 bg-orange-500/10 blur-[80px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-32 bg-amber-500/10 blur-[100px] rounded-full" />
        {/* Subtle Background Pattern Mesh */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Left: Badge + Text */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/20 ring-4 ring-orange-500/10 animate-pulse">
              <FaFire className="text-white" size={18} />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-orange-500 text-[10px] font-black tracking-[0.2em] uppercase">
                  Limited Time
                </span>
                <span className="bg-orange-500/10 text-orange-400 border border-orange-500/20 text-[9px] font-bold px-2.5 py-0.5 rounded-full tracking-wider uppercase">
                  Live Now
                </span>
              </div>
              <p className="text-white font-black text-xl tracking-tight">
                Flash Sale &mdash;{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                  Extra 20% OFF
                </span>
              </p>
            </div>
          </div>
          {/* Center: Offer pills (Slick glassmorphism) */}
          <div className="flex items-center gap-3 flex-wrap">
            {[
              { label: "All Sunglasses", discount: "20% OFF" },
              { label: "Skincare", discount: "15% OFF" },
              { label: "Beach Wear", discount: "25% OFF" },
            ].map((offer) => (
              <div
                key={offer.label}
                className="flex items-center gap-2 bg-white/[0.02] border border-white/[0.06] backdrop-blur-md rounded-full px-4 py-2 hover:border-orange-500/40 hover:bg-white/[0.04] transition-all duration-300 group"
              >
                <FiTag
                  className="text-gray-500 group-hover:text-orange-400 transition-colors"
                  size={12}
                />
                <span className="text-gray-400 text-xs font-semibold tracking-wide">
                  {offer.label}:
                </span>
                <span className="text-orange-400 text-xs font-black tracking-wide bg-orange-500/10 px-2 py-0.5 rounded-md border border-orange-500/10">
                  {offer.discount}
                </span>
              </div>
            ))}
          </div>
          {/* Right: CTA */}
          <Link
            href="/products"
            className="relative group overflow-hidden bg-gradient-to-r from-orange-500 to-amber-500 text-white font-black text-xs tracking-widest uppercase px-8 py-3.5 rounded-xl shadow-lg shadow-orange-500/15 hover:shadow-orange-500/30 active:scale-95 transition-all duration-300 text-center whitespace-nowrap"
          >
            <span className="relative z-10">Shop the Sale</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </Link>
        </div>
      </div>
      {/* Two Banner Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Banner 1 */}
          <div className="relative h-72 rounded-2xl overflow-hidden group">
            <Image
              src="https://plus.unsplash.com/premium_photo-1731287745128-6bdc3f050fa5?q=80&w=1170"
              alt="Beach Ready"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-6 left-6 z-10">
              <span className="bg-white text-gray-900 text-xs font-black uppercase px-3 py-1 rounded-sm mb-2 inline-block">
                Beach Ready
              </span>
              <div className="flex gap-2 mt-2">
                <Link
                  href="/products"
                  className="bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full hover:bg-white hover:text-orange-500 border border-transparent hover:border-orange-500 transition duration-300"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
          {/* Banner 2 */}
          <div className="relative h-72 rounded-2xl overflow-hidden group">
            <Image
              src="https://plus.unsplash.com/premium_photo-1694475574403-d24268584350?q=80&w=1170"
              alt="Gift Cards"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-6 left-6 z-10">
              <p className="text-white text-xs uppercase font-semibold mb-1">
                Help Support Local Business by Buying a Gift Card
              </p>
              <span className="bg-orange-500 text-white text-xs font-black uppercase px-3 py-1 rounded-sm mb-2 inline-block">
                Gift Cards
              </span>
              <div className="mt-2">
                <Link
                  href="/products"
                  className="bg-white text-gray-900 text-xs font-bold px-4 py-1.5 rounded-full hover:bg-orange-500 hover:text-white transition"
                >
                  Shop Gift Cards
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Shop By Category */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-black text-gray-900 mb-8 uppercase tracking-wide">
            Shop By Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                name: "Accessories",
                image:
                  "https://images.unsplash.com/photo-1719386218764-1c1acd72a1a4?w=600",
              },
              {
                name: "Clothing",
                image:
                  "https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?q=80&w=688",
              },
              {
                name: "Skincare",
                image:
                  "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=735",
              },
              {
                name: "Footwear",
                image:
                  "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400&q=80",
              },
            ].map((cat) => (
              <Link
                key={cat.name}
                href="/products"
                className="group relative rounded-2xl overflow-hidden aspect-square"
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white text-gray-900 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-sm">
                    {cat.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* Wide Banner */}
      <div className="relative h-56 md:h-72 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1777768785334-1439beaaf33a?q=80&w=1170"
          alt="Summer Accessories"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-end px-8 md:px-20">
          <div className="text-right">
            <p className="text-orange-400 text-xs uppercase font-bold tracking-widest mb-2">
              Summer Accessories
            </p>
            <h3 className="text-white text-3xl md:text-5xl font-black mb-4">
              BEACH ESSENTIALS
            </h3>
            <p className="text-white/70 text-sm mb-5">
              Set the perfect look for your summer adventures.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-white text-gray-900 text-sm font-bold uppercase px-6 py-2.5 rounded-full hover:bg-orange-500 hover:text-white transition"
            >
              Shop Now <FiArrowRight />
            </Link>
          </div>
        </div>
      </div>
      {/* Discount Banners */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-orange-500 rounded-2xl p-8 flex items-center justify-between">
            <div>
              <p className="text-white/80 text-xs uppercase font-semibold mb-1">
                UPTO
              </p>
              <p className="text-white text-5xl font-black">50%</p>
              <p className="text-white font-bold text-lg">OFF</p>
              <p className="text-white/80 text-sm">on All Summer Collection</p>
            </div>
            <Link
              href="/products"
              className="bg-white text-orange-500 font-bold text-sm px-6 py-2.5 rounded-full hover:bg-gray-100 transition"
            >
              Shop Now
            </Link>
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-xs uppercase font-semibold mb-1">
                UPTO
              </p>
              <p className="text-white text-5xl font-black">25%</p>
              <p className="text-white font-bold text-lg">OFF</p>
              <p className="text-gray-400 text-sm">on All New Arrivals</p>
            </div>
            <Link
              href="/products"
              className="bg-orange-500 text-white font-bold text-sm px-6 py-2.5 rounded-full hover:bg-orange-600 transition"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      {/* Trust Badges */}
      <div className="border-y border-gray-100 bg-gray-50/50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Grid mapping customized with modern auto-fluid columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: <FiTruck size={24} />,
                label: "Free Delivery",
                sub: "On orders over $50",
              },
              {
                icon: <FiAward size={24} />,
                label: "Top Brand",
                sub: "100% authentic products",
              },
              {
                icon: <FiCreditCard size={24} />,
                label: "Pay on Delivery",
                sub: "Cash on delivery available",
              },
              {
                icon: <FiShield size={24} />,
                label: "Secure Payment",
                sub: "256-bit SSL encryption",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4.5 p-5 bg-white border border-gray-100 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.03)] hover:-translate-y-0.5 transition-all duration-300 group"
              >
                {/* Animated custom icon wrap block */}
                <div className="w-12 h-12 rounded-xl bg-orange-50/70 border border-orange-100/40 flex items-center justify-center text-orange-500 shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-extrabold text-gray-900 text-xs uppercase tracking-widest leading-none mb-1">
                    {item.label}
                  </p>
                  <p className="text-gray-400 text-[11px] font-medium leading-tight">
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Popular Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-black text-gray-900 uppercase tracking-wide">
            Featured Collection
          </h2>
          <Link
            href="/products"
            className="flex items-center gap-2 text-orange-500 font-bold text-sm hover:gap-3 transition-all"
          >
            View All <FiArrowRight />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      {/* Summer Care Tips */}
      <div className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900 uppercase tracking-wide mb-3">
              Summer Care Tips
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              Stay safe and stylish this summer with our expert-curated tips for
              skincare, hydration, and sun protection.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {careTips.map((tip) => (
              <div
                key={tip.title}
                className={`${tip.color} rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition`}
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={tip.image}
                    alt={tip.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-black text-gray-900 text-base mb-2 uppercase">
                    {tip.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {tip.tip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Top Brands */}
      <div className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900 uppercase tracking-wide mb-3">
              Top Brands
            </h2>
            <p className="text-gray-500 text-sm">
              We partner with the best brands to bring you premium summer
              essentials
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-md transition group"
              >
                <div
                  className={`${brand.bg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  <span className="text-white text-3xl font-black">
                    {brand.icon}
                  </span>
                </div>
                <h3 className="font-black text-gray-900 text-lg mb-1 uppercase">
                  {brand.name}
                </h3>
                <p className="text-gray-500 text-xs">{brand.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}