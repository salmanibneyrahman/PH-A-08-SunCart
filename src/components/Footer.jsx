import Link from "next/link";
import { FiSun, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok, FaPinterestP } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Strip */}
      <div className="bg-orange-500 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-bold text-lg">Be the first to know about our biggest and best sales.</p>
            <p className="text-orange-100 text-sm">We will never send more than one email a month.</p>
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="Email"
              className="input input-sm bg-white text-gray-800 rounded-full flex-1 md:w-64 border-none"
            />
            <button className="btn btn-sm bg-gray-900 hover:bg-gray-700 text-white border-none rounded-full px-5">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 text-white font-black text-2xl mb-4">
              <FiSun className="text-orange-400" size={24} />
              SunCart
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Your one-stop destination for premium summer essentials. Style meets comfort under the sun.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors">
                <FaTwitter size={14} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors">
                <FaFacebookF size={14} />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors">
                <FaPinterestP size={14} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors">
                <FaInstagram size={14} />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors">
                <FaTiktok size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "Products", "My Profile", "Login", "Register"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-400 text-sm hover:text-orange-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collection */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Collection</h3>
            <ul className="space-y-3">
              {["Summer Collection", "Beach Accessories", "Skincare Range", "Sun Protection", "Kids Collection"].map((item) => (
                <li key={item}>
                  <Link href="/products" className="text-gray-400 text-sm hover:text-orange-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Info */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FiMapPin className="text-orange-400 mt-0.5 shrink-0" size={15} />
                <span className="text-gray-400 text-sm">123 Beach Blvd, Miami, FL 33101</span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-orange-400 shrink-0" size={15} />
                <span className="text-gray-400 text-sm">+1 (800) 786-2278</span>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-orange-400 shrink-0" size={15} />
                <span className="text-gray-400 text-sm">hello@suncart.com</span>
              </li>
            </ul>
            <div className="mt-5 space-y-2">
              <Link href="/privacy" className="block text-gray-400 text-sm hover:text-orange-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="block text-gray-400 text-sm hover:text-orange-400 transition-colors">Terms of Service</Link>
              <Link href="/faq" className="block text-gray-400 text-sm hover:text-orange-400 transition-colors">FAQ</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} SunCart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}