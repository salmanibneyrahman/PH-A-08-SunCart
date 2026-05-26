"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import {
  FiSun,
  FiMail,
  FiLock,
  FiUser,
  FiImage,
  FiEye,
  FiEyeOff,
  FiAlertCircle,
} from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      photoUrl: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    setServerError("");
    setLoading(true);
    try {
      const result = await authClient.signUp.email({
        email: data.email,
        password: data.password,
        name: data.name,
        image: data.photoUrl,
      });
      if (result?.error) {
        setServerError(
          result.error.message || "Registration failed. Please try again."
        );
        toast.error(result.error.message || "Registration failed");
      } else {
        toast.success("Account created! Please login.");
        router.push("/login");
      }
    } catch (err) {
      setServerError("Something went wrong. Please try again.");
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (err) {
      toast.error("Google login failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-black text-3xl text-orange-500"
          >
            <FiSun size={32} />
            SunCart
          </Link>
          <p className="text-gray-500 text-sm mt-2">Summer Essentials Store</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-wide mb-1">
            Create Account
          </h2>
          <p className="text-gray-500 text-sm mb-7">
            Join SunCart for the best summer deals
          </p>

          {/* Server Error */}
          {serverError && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl mb-5 flex items-center gap-2">
              <FiAlertCircle size={16} className="shrink-0 text-red-500" />
              {serverError}
            </div>
          )}

          {/* Google */}
          <button
            onClick={handleGoogle}
            type="button"
            className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-full py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition mb-5"
          >
            <FcGoogle size={20} />
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400 font-medium">OR</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <FiUser
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={16}
                />
                <input
                  type="text"
                  placeholder="John Doe"
                  {...register("name", {
                    required: "Full name is required",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters",
                    },
                  })}
                  className={`w-full pl-10 pr-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 transition ${
                    errors.name
                      ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                      : "border-gray-200 focus:border-orange-400 focus:ring-orange-100"
                  }`}
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                  <FiAlertCircle size={12} />
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <FiMail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={16}
                />
                <input
                  type="email"
                  placeholder="you@example.com"
                  {...register("email", {
                    required: "Email address is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                  className={`w-full pl-10 pr-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 transition ${
                    errors.email
                      ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                      : "border-gray-200 focus:border-orange-400 focus:ring-orange-100"
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                  <FiAlertCircle size={12} />
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Photo URL - MANDATORY */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Photo URL <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <FiImage
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={16}
                />
                <input
                  type="url"
                  placeholder="https://example.com/photo.jpg"
                  {...register("photoUrl", {
                    required: "Photo URL is required",
                    pattern: {
                      value: /^https?:\/\/.+/,
                      message: "Please enter a valid URL starting with http:// or https://",
                    },
                  })}
                  className={`w-full pl-10 pr-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 transition ${
                    errors.photoUrl
                      ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                      : "border-gray-200 focus:border-orange-400 focus:ring-orange-100"
                  }`}
                />
              </div>
              {errors.photoUrl && (
                <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                  <FiAlertCircle size={12} />
                  {errors.photoUrl.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <FiLock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={16}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Min. 6 characters"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  className={`w-full pl-10 pr-12 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 transition ${
                    errors.password
                      ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                      : "border-gray-200 focus:border-orange-400 focus:ring-orange-100"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                >
                  {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                  <FiAlertCircle size={12} />
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase tracking-widest py-3.5 rounded-full transition disabled:opacity-60 disabled:cursor-not-allowed mt-2"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="loading loading-spinner loading-sm" />
                  Creating Account...
                </span>
              ) : (
                "Register"
              )}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-orange-500 font-bold hover:underline"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}