"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { FiSun, FiArrowLeft, FiUser, FiImage, FiSave } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

export default function UpdateProfilePage() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [preview, setPreview] = useState("");
  const [previewValid, setPreviewValid] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const loadSession = async () => {
      try {
        const { data } = await authClient.getSession();
        if (!data?.user) {
          router.push("/login");
          return;
        }
        setName(data.user.name || "");
        setImage(data.user.image || "");
        setPreview(data.user.image || "");
        setPreviewValid(!!data.user.image);
      } catch {
        router.push("/login");
      } finally {
        setFetching(false);
      }
    };
    loadSession();
  }, [router]);

  const handleImageChange = (e) => {
    setImage(e.target.value);
    setPreview(e.target.value);
    setPreviewValid(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await authClient.updateUser({
        name,
        image,
      });
      if (result?.error) {
        toast.error(result.error.message || "Update failed");
      } else {
        toast.success("Profile updated successfully!");
        router.push("/my-profile");
        router.refresh();
      }
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-orange-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-lg mx-auto">
        {/* Back */}
        <Link
          href="/my-profile"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-orange-500 mb-8 transition"
        >
          <FiArrowLeft size={16} /> Back to Profile
        </Link>

        {/* Logo */}
        <div className="text-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-black text-2xl text-orange-500"
          >
            <FiSun size={28} />
            SunCart
          </Link>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="h-24 bg-gradient-to-r from-orange-400 to-pink-500" />

          <div className="px-8 pb-8">
            {/* Preview Avatar */}
            <div className="-mt-12 mb-6 flex flex-col items-center">
              <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-white shadow-md mb-3">
                {preview && previewValid ? (
                  <Image
                    src={preview}
                    alt="Preview"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                    onError={() => setPreviewValid(false)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-orange-50">
                    <FaUserCircle size={64} className="text-orange-400" />
                  </div>
                )}
              </div>
              <p className="text-xs text-gray-400">Photo Preview</p>
            </div>

            <h2 className="text-xl font-black text-gray-900 uppercase tracking-wide mb-1 text-center">
              Update Information
            </h2>
            <p className="text-gray-500 text-sm text-center mb-7">
              Update your name and profile photo
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <FiUser
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={16}
                  />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Your full name"
                    className="input w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Photo URL
                </label>
                <div className="relative">
                  <FiImage
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={16}
                  />
                  <input
                    type="url"
                    value={image}
                    onChange={handleImageChange}
                    placeholder="https://example.com/photo.jpg"
                    className="input w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1.5">
                  Paste a link to your profile image. The preview above updates
                  automatically.
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase tracking-widest py-3.5 rounded-full transition disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="loading loading-spinner loading-sm" />
                    Updating...
                  </>
                ) : (
                  <>
                    <FiSave size={16} />
                    Update Information
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}