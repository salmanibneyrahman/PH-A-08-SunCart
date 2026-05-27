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
      "https://images.unsplash.com/photo-1618111415221-27a938943fe4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-800 to-gray-950">
        {/* Background decorative circles */}
        <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-orange-500 opacity-5" />
        <div className="absolute -bottom-16 right-[10%] w-60 h-60 rounded-full bg-orange-500 opacity-5" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-4">
          {/* Left: Badge + Text */}
          <div className="flex items-center gap-4">
            <div className="bg-orange-500 rounded-xl p-2.5 flex items-center justify-center shadow-md shadow-orange-500/10">
              <FaFire className="text-white" size={20} />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-orange-500 text-[11px] font-extrabold tracking-widest uppercase">
                  Limited Time
                </span>
                <span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wider uppercase">
                  Live Now
                </span>
              </div>
              <p className="text-white font-black text-xl leading-none">
                Flash Sale &mdash; Extra 20% OFF
              </p>
            </div>
          </div>

          {/* Center: Offer pills */}
          <div className="flex items-center gap-2.5 flex-wrap">
            {[
              { label: "All Sunglasses", discount: "20% OFF" },
              { label: "Skincare", discount: "15% OFF" },
              { label: "Beach Wear", discount: "25% OFF" },
            ].map((offer) => (
              <div
                key={offer.label}
                className="flex items-center gap-1.5 bg-white/5 border border-white/12 rounded-full px-3.5 py-1.5 hover:border-orange-500/30 transition-colors duration-300"
              >
                <FiTag className="text-orange-500" size={11} />
                <span className="text-gray-300 text-xs font-medium">
                  {offer.label}:
                </span>
                <span className="text-orange-400 text-xs font-extrabold">
                  {offer.discount}
                </span>
              </div>
            ))}
          </div>

          {/* Right: CTA */}
          <Link
            href="/products"
            className="bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs tracking-widest uppercase px-7 py-3 rounded-full shadow-lg shadow-orange-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-200 whitespace-nowrap"
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