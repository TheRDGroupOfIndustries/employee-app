"use client";

 import React from "react";
import Link from "next/link";
import {
  MoveLeft,
  MoveRight,
  Bell,
  LogOut,
  HelpCircle,
  Globe,
  Shield,
  Paintbrush,
  FileText,
   CalendarCheck, CheckSquare, Star
} from "lucide-react";

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center text-gray-800">
      {/* 🔹 Top Navbar */}
      <nav className="sticky top-0 z-10 w-full flex items-center gap-5 px-5 py-4 bg-rose-700 shadow-md">
        <MoveLeft
          className="w-6 h-6 text-white cursor-pointer"
          onClick={() => window.history.back()}
        />
        <h1 className="text-lg text-white font-bold tracking-wide">Profile</h1>
      </nav>

      {/* 🔹 Profile Header */}
      <section className="w-[90%] md:w-[85%] my-6 bg-white shadow-md rounded-2xl p-5 text-center border border-rose-100">
        <div className="mx-auto mb-3 w-24 h-24 rounded-full bg-rose-500 flex items-center justify-center text-white text-2xl font-bold">
          RJ
        </div>
        <h2 className="text-xl font-bold">Sarah Johnson</h2>
        <p className="text-sm text-gray-500">Senior Frontend Developer</p>
        <p className="text-sm text-gray-500">Software Developer</p>
      </section>

      {/* 🔹 Employee Information */}
      <section className="w-[90%] md:w-[85%] bg-white shadow-md rounded-2xl p-5 border border-rose-100 mb-6">
        <h2 className="text-lg font-semibold text-rose-700 mb-4">
          Employee Information
        </h2>

        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-5">
          <div>
            <p className="font-medium">Employee ID</p>
            <p className="font-bold">RD-2024-2001</p>
          </div>
          <div>
            <p className="font-medium">Joining Date</p>
            <p className="font-bold">Jan 15, 2023</p>
          </div>
        </div>

        <div className="space-y-2">
          <div>
            <p className="font-medium">Email</p>
            <p className="font-semibold text-lg">sarah.john@gmail.com</p>
          </div>
          <div>
            <p className="font-medium">Phone</p>
            <p className="font-semibold text-lg">+91 9876543210</p>
          </div>
          <div>
            <p className="font-medium">Manager</p>
            <p className="font-semibold text-lg">John Smith</p>
          </div>
          <div>
            <p className="font-medium">Location</p>
            <p className="font-semibold text-lg">Noida, India</p>
          </div>
        </div>
      </section>

      {/* 🔹 Stats */}

<section className="w-[90%] md:w-[85%] grid grid-cols-3 gap-4 mb-6">
  <div className="bg-white shadow-md rounded-2xl p-5 border border-rose-100 text-center">
    <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-green-100 flex items-center justify-center">
      <CalendarCheck className="w-5 h-5 text-green-600" />
    </div>
    <p className="text-sm text-gray-500">Attendance</p>
    <h3 className="text-lg font-bold text-green-500">95%</h3>
  </div>

  <div className="bg-white shadow-md rounded-2xl p-5 border border-rose-100 text-center">
    <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-purple-100 flex items-center justify-center">
      <CheckSquare className="w-5 h-5 text-purple-600" />
    </div>
    <p className="text-sm text-gray-500">Tasks</p>
    <h3 className="text-lg font-bold text-purple-600">30</h3>
  </div>

  <div className="bg-white shadow-md rounded-2xl p-5 border border-rose-100 text-center">
    <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-blue-100 flex items-center justify-center">
      <Star className="w-5 h-5 text-blue-600" />
    </div>
    <p className="text-sm text-gray-500">Rating</p>
    <h3 className="text-lg font-bold text-blue-600">4.8</h3>
  </div>
</section>


      {/* 🔹 Settings */}
      <section className="w-[90%] mb-6">
        <h2 className="text-lg font-bold mb-4">Settings</h2>

        <div className="flex flex-col divide-y divide-gray-100">
          {[
            {
              icon: <Bell className="text-rose-700" />,
              title: "Notifications",
              desc: "Manage your notifications",
              link: "/profile/notify",
            },
            {
              icon: <Shield className="text-rose-700" />,
              title: "Privacy & Security",
              desc: "Password and security settings",
              link: "/profile/security",
            },
            {
              icon: <Paintbrush className="text-rose-700" />,
              title: "Appearance",
              desc: "Themes and display preferences",
              link: "/profile/appearance",
            },
            {
              icon: <Globe className="text-rose-700" />,
              title: "Language",
              desc: "Change app language",
              link: null, // No link — handled inline
            },
            {
              icon: <HelpCircle className="text-rose-700" />,
              title: "Help & Support",
              desc: "Get help or contact support",
              link: "/profile/support",
            },
            {
              icon: <FileText className="text-rose-700" />,
              title: "Terms & Privacy",
              desc: "Legal information",
              link: "/profile/terms",
            },
          ].map((item, index) => (
            <div key={index}>
              {item.link ? (
                <Link href={item.link}>
                  <div className="flex justify-between items-center gap-3 p-2 bg-white shadow-md m-2 border border-rose-100 hover:bg-rose-50 px-2 rounded-lg cursor-pointer transition">
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <span className="text-xs text-gray-500">{item.desc}</span>
                      </div>
                    </div>
                    <MoveRight className="w-4 h-4 text-gray-400" />
                  </div>
                </Link>
              ) : (
                // Language selector (no navigation)
                <div className="flex justify-between items-center gap-3 p-2 bg-white shadow-md m-2 border border-rose-100 hover:bg-rose-50 px-2 rounded-lg transition">
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <span className="text-xs text-gray-500">{item.desc}</span>
                    </div>
                  </div>
                  <select className="text-sm border border-gray-200 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-rose-300">
                    <option value="en">English</option>
                    <option value="hi">Hindi</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                  </select>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Footer */}
      <footer className="text-center text-gray-500 text-xs mb-5">
        <p>The RD Group Connect</p>
        <span>Version 1.0.0</span>
        <p>@2024 The RD Group. All rights reserved.</p>
      </footer>

      {/* 🔹 Logout Button */}
      <section className="w-full max-w-sm mb-5">
        <button
          className="w-full flex items-center justify-center gap-3 py-3 px-6 
                     bg-white border-2 border-red-500 text-red-600 font-bold 
                     rounded-xl shadow-lg 
                     hover:bg-red-50 hover:shadow-xl transition duration-200 
                     focus:outline-none focus:ring-4 focus:ring-red-100"
        >
          <LogOut className="w-5 h-5" />
          Log Out
        </button>
      </section>
    </div>
  );
};

export default ProfilePage;
