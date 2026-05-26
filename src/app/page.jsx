import HeroSlider from "@/components/HeroSlider";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import Image from "next/image";
import productsData from "../../products.json";
import {
  FiTruck,
  FiAward,
  FiCreditCard,
  FiShield,
  FiArrowRight,
  FiTag,
} from "react-icons/fi";
import { FaFire } from "react-icons/fa";

const popularProducts = productsData.slice(0, 3);

const careTips = [
  {
    image:
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&q=80",
    title: "Skincare Routine",
    tip: "Apply SPF 50 sunscreen 20 minutes before sun exposure. Reapply every 2 hours for maximum protection.",
    color: "bg-orange-50",
  },
  {
    image:
      "https://images.unsplash.com/photo-1548315538-62a4f8c1bad8?w=400&q=80",
    title: "Stay Hydrated",
    tip: "Drink at least 8-10 glasses of water daily. Carry a reusable bottle to stay refreshed at the beach.",
    color: "bg-blue-50",
  },
  {
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80",
    title: "Eye Protection",
    tip: "Wear UV-blocking sunglasses to protect your eyes from harmful UV rays. Look for 100% UVA/UVB protection.",
    color: "bg-yellow-50",
  },
  {
    image:
      "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=400&q=80",
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

export default function HomePage() {
  return (
    <div>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Flash Sale Strip - Aesthetic redesign without countdown */}
      <div
        style={{
          background: "linear-gradient(135deg, #111827 0%, #1f2937 50%, #111827 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "-40px",
            left: "-40px",
            width: "200px",
            height: "200px",
            borderRadius: "9999px",
            backgroundColor: "#f97316",
            opacity: "0.05",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            right: "10%",
            width: "250px",
            height: "250px",
            borderRadius: "9999px",
            backgroundColor: "#f97316",
            opacity: "0.05",
          }}
        />

        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "24px 24px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Left: Badge + Text */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                backgroundColor: "#f97316",
                borderRadius: "12px",
                padding: "10px 12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaFire color="#ffffff" size={20} />
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "2px" }}>
                <span
                  style={{
                    color: "#f97316",
                    fontSize: "11px",
                    fontWeight: "800",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  Limited Time
                </span>
                <span
                  style={{
                    backgroundColor: "#f97316",
                    color: "#ffffff",
                    fontSize: "10px",
                    fontWeight: "700",
                    padding: "2px 8px",
                    borderRadius: "9999px",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  Live Now
                </span>
              </div>
              <p
                style={{
                  color: "#ffffff",
                  fontWeight: "900",
                  fontSize: "20px",
                  lineHeight: "1",
                }}
              >
                Flash Sale &mdash; Extra 20% OFF
              </p>
            </div>
          </div>

          {/* Center: Offer pills */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
            {[
              { label: "All Sunglasses", discount: "20% OFF" },
              { label: "Skincare", discount: "15% OFF" },
              { label: "Beach Wear", discount: "25% OFF" },
            ].map((offer) => (
              <div
                key={offer.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  backgroundColor: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "9999px",
                  padding: "6px 14px",
                }}
              >
                <FiTag size={11} color="#f97316" />
                <span style={{ color: "#d1d5db", fontSize: "12px", fontWeight: "500" }}>
                  {offer.label}:
                </span>
                <span style={{ color: "#fb923c", fontSize: "12px", fontWeight: "800" }}>
                  {offer.discount}
                </span>
              </div>
            ))}
          </div>

          {/* Right: CTA */}
          <Link
            href="/products"
            style={{
              backgroundColor: "#f97316",
              color: "#ffffff",
              fontWeight: "800",
              fontSize: "12px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "12px 28px",
              borderRadius: "9999px",
              textDecoration: "none",
              boxShadow: "0 4px 14px rgba(249,115,22,0.4)",
              transition: "all 0.2s",
              whiteSpace: "nowrap",
            }}
          >
            Shop the Sale
          </Link>
        </div>
      </div>

      {/* Two Banner Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Banner 1 */}
          <div className="relative h-72 rounded-2xl overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80"
              alt="Beach Ready"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-6 left-6 z-10">
              <span className="bg-white text-gray-900 text-xs font-black uppercase px-3 py-1 rounded-sm mb-2 inline-block">
                Beach Ready
              </span>
              <div className="flex gap-2 mt-2">
                <Link
                  href="/products"
                  className="bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full hover:bg-orange-600 transition"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>

          {/* Banner 2 */}
          <div className="relative h-72 rounded-2xl overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80"
              alt="Gift Cards"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/40" />
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
                  "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80",
              },
              {
                name: "Clothing",
                image:
                  "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&q=80",
              },
              {
                name: "Skincare",
                image:
                  "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&q=80",
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
          src="https://images.unsplash.com/photo-1527799820374-87036dcd41bd?w=1400&q=80"
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
      <div className="border-t border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                icon: <FiTruck size={28} />,
                label: "Free Delivery",
                sub: "On orders over $50",
              },
              {
                icon: <FiAward size={28} />,
                label: "Top Brand",
                sub: "100% authentic products",
              },
              {
                icon: <FiCreditCard size={28} />,
                label: "Pay on Delivery",
                sub: "Cash on delivery available",
              },
              {
                icon: <FiShield size={28} />,
                label: "Secure Payment",
                sub: "256-bit SSL encryption",
              },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4 p-4">
                <div className="text-orange-500">{item.icon}</div>
                <div>
                  <p className="font-bold text-gray-900 text-sm uppercase tracking-wide">
                    {item.label}
                  </p>
                  <p className="text-gray-400 text-xs">{item.sub}</p>
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

      {/* Boutique Style Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-lg">
          <div className="bg-gray-100 p-10 flex flex-col justify-center">
            <p className="text-orange-500 text-xs uppercase font-bold tracking-widest mb-3">
              New for 2024
            </p>
            <h3 className="text-gray-900 text-3xl font-black mb-4 leading-tight">
              Boutique Style
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Explore our curated boutique collection combining refinement,
              beauty, and grace. A powerful look that combines a comfortable and
              contemporary summer vibe.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-gray-900 text-white text-sm font-bold uppercase px-6 py-2.5 rounded-full hover:bg-orange-500 transition w-fit"
            >
              View Lookbook <FiArrowRight />
            </Link>
          </div>
          <div className="relative h-72 md:h-auto min-h-72">
            <Image
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=80"
              alt="Boutique Style"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}