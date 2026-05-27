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

function getMemberYear(createdAt) {
  if (!createdAt) return new Date().getFullYear();
  return new Date(createdAt).getFullYear();
}

export default async function MyProfilePage() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user) {
    redirect("/login");
  }

  const user = session.user;
  const memberYear = getMemberYear(user.createdAt);

  const stats = [
    { label: "Member Since", value: memberYear },
    { label: "Account Type", value: "Standard" },
    { label: "Status", value: "Active" },
  ];

  const profileDetails = [
    {
      icon: <FiUser className="text-orange-500" size={16} />,
      label: "Full Name",
      value: user.name,
      valueClass: "text-gray-900 font-semibold text-sm",
    },
    {
      icon: <FiMail className="text-orange-500" size={16} />,
      label: "Email Address",
      value: user.email,
      valueClass: "text-gray-900 font-semibold text-sm",
    },
    {
      icon: <FiShield className="text-orange-500" size={16} />,
      label: "Account Status",
      value: "Verified & Active",
      valueClass: "text-green-600 font-semibold text-sm",
    },
    {
      icon: <FiCalendar className="text-orange-500" size={16} />,
      label: "User ID",
      value: user.id ? `${user.id.substring(0, 16)}...` : "N/A",
      valueClass: "text-gray-900 font-semibold text-sm font-mono",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-orange-500 mb-8 transition"
        >
          <FiArrowLeft size={16} /> Back to Home
        </Link>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-6">
          {/* Cover */}
          <div className="h-48 bg-gradient-to-r from-orange-400 via-orange-500 to-pink-500 relative">
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
            {/* Avatar Centered, Resized to w-44 h-44 and Content Reordered */}
            <div className="relative -mt-24 mb-8 flex flex-col items-center justify-center text-center">
              <div className="w-44 h-44 rounded-full border-4 border-white overflow-hidden bg-white shadow-xl mb-4">
                {user.image ? (
                  <Image
                    src={user.image}
                    alt={user.name || "User"}
                    width={176}
                    height={176}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-orange-50">
                    <FaUserCircle size={120} className="text-orange-400" />
                  </div>
                )}
              </div>

              {/* Name and Email moved ABOVE the update button */}
              <h1 className="text-3xl font-black text-gray-900 mb-1 tracking-tight">{user.name}</h1>
              <p className="text-gray-500 text-sm font-medium mb-5">{user.email}</p>

              {/* Update Button under the Name & Email */}
              <Link
                href="/my-profile/update"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full shadow-md shadow-orange-500/10 active:scale-95 transition-all duration-200"
              >
                <FiEdit3 size={14} />
                Update Profile
              </Link>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat) => (
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

            {/* Profile Information details mapping */}
            <div className="space-y-4">
              <h2 className="text-base font-black text-gray-900 uppercase tracking-widest mb-4">
                Profile Information
              </h2>
              {profileDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100"
                >
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                    {detail.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                      {detail.label}
                    </p>
                    <p className={detail.valueClass}>{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
