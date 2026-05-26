"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import toast from "react-hot-toast";
import { FiUser, FiImage, FiArrowLeft, FiLoader } from "react-icons/fi";

export default function UpdateProfilePage() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  // Load current user data into input fields
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await authClient.getSession();
        if (!data?.user) {
          redirect("/login");
        } else {
          setName(data.user.name || "");
          setImage(data.user.image || "");
        }
      } catch (error) {
        toast.error("Failed to load user data");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      return toast.error("Name cannot be empty");
    }

    setIsSubmitting(true);
    try {
      // Auth Client functionality to update profile info
      await authClient.updateUser({
        name: name,
        image: image,
      });

      toast.success("Information updated successfully!");
      router.push("/my-profile"); // Takes user back to profile
      router.refresh();
    } catch (error) {
      toast.error(error.message || "Failed to update profile");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <FiLoader className="animate-spin text-orange-500" size={32} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-md mx-auto">
        <Link
          href="/my-profile"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-orange-500 mb-8 transition"
        >
          <FiArrowLeft size={16} /> Back to Profile
        </Link>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
          <h1 className="text-2xl font-black text-gray-900 mb-2 uppercase tracking-wide">
            Update Profile
          </h1>
          <p className="text-gray-500 text-sm mb-6">
            Change your account name and profile image URL.
          </p>

          <form onSubmit={handleUpdate} className="space-y-5">
            {/* Input 1: Name */}
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                Full Name
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                  <FiUser size={18} />
                </span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition text-gray-900"
                />
              </div>
            </div>

            {/* Input 2: Image URL */}
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                Profile Image URL
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                  <FiImage size={18} />
                </span>
                <input
                  type="url"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="https://example.com"
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition text-gray-900"
                />
              </div>
            </div>

            {/* Update Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 text-white font-bold uppercase tracking-widest py-3 px-4 rounded-full transition flex items-center justify-center gap-2 text-sm mt-2"
            >
              {isSubmitting ? (
                <>
                  <FiLoader className="animate-spin" size={16} />
                  Updating...
                </>
              ) : (
                "Update Information"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
