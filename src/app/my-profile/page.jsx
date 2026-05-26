import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import Link from "next/link";
import Image from "next/image";
import {
  FiUser,
  FiMail,
  FiEdit3,
  FiArrowLeft,
  FiCalendar,
  FiShield,
} from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

export default async function MyProfilePage() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user) {
    redirect("/login");
  }

  const user = session.user;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-orange-500 mb-8 transition"
        >
          <FiArrowLeft size={16} /> Back to Home
        </Link>

        {/* Profile Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-6">
          {/* Cover */}
          <div className="h-40 bg-gradient-to-r from-orange-400 via-orange-500 to-pink-500 relative">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 80%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />
          </div>

          <div className="px-8 pb-8">
            {/* Avatar */}
            <div className="relative -mt-16 mb-5 flex items-end justify-between">
              <div className="w-28 h-28 rounded-full border-4 border-white overflow-hidden bg-white shadow-md">
                {user.image ? (
                  <Image
                    src={user.image}
                    alt={user.name || "User"}
                    width={112}
                    height={112}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-orange-50">
                    <FaUserCircle size={72} className="text-orange-400" />
                  </div>
                )}
              </div>
              <Link
                href="/my-profile/update"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold uppercase tracking-widest px-5 py-2.5 rounded-full transition"
              >
                <FiEdit3 size={14} />
                Update Profile
              </Link>
            </div>

            {/* Name and Email */}
            <h1 className="text-2xl font-black text-gray-900 mb-1">{user.name}</h1>
            <p className="text-gray-500 text-sm mb-6">{user.email}</p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                {
                  label: "Member Since",
                  value: new Date(user.createdAt || Date.now()).getFullYear(),
                },
                { label: "Account Type", value: "Standard" },
                { label: "Status", value: "Active" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-gray-50 rounded-2xl p-4 text-center border border-gray-100"
                >
                  <p className="text-gray-900 font-black text-lg">{stat.value}</p>
                  <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Profile Details */}
            <div className="space-y-4">
              <h2 className="text-base font-black text-gray-900 uppercase tracking-widest mb-4">
                Profile Information
              </h2>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <FiUser className="text-orange-500" size={16} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                    Full Name
                  </p>
                  <p className="text-gray-900 font-semibold text-sm">{user.name}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <FiMail className="text-orange-500" size={16} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                    Email Address
                  </p>
                  <p className="text-gray-900 font-semibold text-sm">{user.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <FiShield className="text-orange-500" size={16} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                    Account Status
                  </p>
                  <p className="text-green-600 font-semibold text-sm">
                    Verified & Active
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <FiCalendar className="text-orange-500" size={16} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                    User ID
                  </p>
                  <p className="text-gray-900 font-semibold text-sm font-mono">
                    {user.id?.substring(0, 16)}...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Photo Preview */}
        {user.image && (
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-base font-black text-gray-900 uppercase tracking-widest mb-4">
              Profile Photo
            </h2>
            <div className="flex items-center gap-5">
              <Image
                src={user.image}
                alt={user.name || "User"}
                width={80}
                height={80}
                className="rounded-2xl object-cover border border-gray-200"
              />
              <div>
                <p className="text-sm text-gray-600 font-medium mb-1">
                  Current profile photo
                </p>
                <p className="text-xs text-gray-400 break-all">{user.image}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}