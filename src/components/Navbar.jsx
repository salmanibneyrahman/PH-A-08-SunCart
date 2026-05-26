"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { FiSun, FiMenu, FiX } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import toast from "react-hot-toast";
import Image from "next/image";

export default function Navbar() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const { data } = await authClient.getSession();
        setSession(data);
      } catch (error) {
        setSession(null);
      } finally {
        setLoading(false);
      }
    };
    fetchSession();
  }, []);

  const handleLogout = async () => {
    try {
      await authClient.signOut();
      setSession(null);
      toast.success("Logged out successfully!");
      router.push("/");
    } catch (error) {
      toast.error("Failed to logout");
    }
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/my-profile", label: "My Profile" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-black text-2xl tracking-tight text-orange-500">
            <FiSun className="text-orange-400" size={28} />
            <span>SunCart</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-widest text-gray-700 hover:text-orange-500 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-3">
            {loading ? (
              <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse" />
            ) : session?.user ? (
              <div className="flex items-center gap-3">
                <Link href="/my-profile" className="flex items-center gap-2">
                  {session.user.image ? (
                    <Image
                      src={session.user.image}
                      alt={session.user.name}
                      width={36}
                      height={36}
                      className="w-9 h-9 rounded-full object-cover border-2 border-orange-400"
                    />
                  ) : (
                    <FaUserCircle size={36} className="text-orange-400" />
                  )}
                  <span className="text-sm font-medium text-gray-700 hidden lg:block">
                    {session.user.name?.split(" ")[0]}
                  </span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="btn btn-sm bg-orange-500 hover:bg-orange-600 text-white border-none rounded-full px-4"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  href="/login"
                  className="btn btn-sm btn-outline border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-full px-4"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="btn btn-sm bg-orange-500 hover:bg-orange-600 text-white border-none rounded-full px-4"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4 animate__animated animate__fadeIn animate__faster">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-widest text-gray-700 hover:text-orange-500"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
            {loading ? null : session?.user ? (
              <>
                <Link href="/my-profile" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
                  {session.user.image ? (
                    <Image 
                      src={session.user.image} 
                      alt={session.user.name} 
                      width={32} 
                      height={32} 
                      className="w-8 h-8 rounded-full object-cover border-2 border-orange-400" 
                    />
                  ) : (
                    <FaUserCircle size={32} className="text-orange-400" />
                  )}
                  <span className="text-sm font-medium">{session.user.name}</span>
                </Link>
                <button
                  onClick={() => { handleLogout(); setMenuOpen(false); }}
                  className="btn btn-sm bg-orange-500 text-white border-none rounded-full"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="btn btn-sm btn-outline border-orange-500 text-orange-500 rounded-full" onClick={() => setMenuOpen(false)}>
                  Login
                </Link>
                <Link href="/register" className="btn btn-sm bg-orange-500 text-white border-none rounded-full" onClick={() => setMenuOpen(false)}>
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
