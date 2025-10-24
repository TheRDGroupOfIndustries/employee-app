"use client";

import React from "react";
import {
  CalendarCheck,
  ClipboardList,
  Clock,
  FileText,
  Briefcase,
  Bell,
  SmileIcon,
  MoveRightIcon,
  Wallet,
} from "lucide-react";
// Assuming 'next/link' is available in the environment
const Link = ({ href, children }) => <a href={href}>{children}</a>;

// Use React.FC (Function Component) for proper typing
const Dashboard = () => {
  return (
    // Set a light background for contrast
    <div className="min-h-screen "> 
      
      {/* 🔹 Top Navbar */}
      <nav className="sticky top-0 z-10 flex justify-between items-center px-5 py-4 bg-rose-700 shadow-lg">
        <h1 className="text-xl text-white font-bold tracking-tight">
          The RD Group Connect
        </h1>
        {/* Navbar Icon: Made Circular */}
     <div className="relative cursor-pointer">
   <Bell className="w-6 h-6 text-white" />
   <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
    3
  </div>
</div>
      </nav>

      {/* 🔹 Welcome Section */}
      <section className="px-5 mt-6">
        <div className="bg-rose-600 flex items-center gap-5 rounded-2xl p-5 shadow-xl">
          <div>
            {/* Welcome Icon: Already Circular, ensuring consistency */}
            <SmileIcon className="w-14 h-14 text-white bg-rose-500 p-3 rounded-full shadow-lg" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-white">
              Welcome back, Sarah 👋
            </h1>
            <p className="text-sm text-white/80 mt-1">
              Ready to make today productive?
            </p>
          </div>
        </div>
      </section>

      {/* 🔹 Stats Section */}
      <section className="px-5 mt-6">
        <div className="grid grid-cols-2 gap-4 text-center">
          {/* Attendance Stat */}
          <div className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer border border-gray-100">
            {/* Stat Icon: Made Circular with green background */}
            <CalendarCheck className="mx-auto bg-green-100 rounded-full text-green-600 p-2 w-10 h-10 mb-2" />
            <p className="text-sm text-gray-500">Attendance</p>
            <h2 className="font-bold text-lg text-green-600">Checked In</h2>
          </div>
          {/* Tasks Stat */}
          <div className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer border border-gray-100">
            {/* Stat Icon: Made Circular with blue background */}
            <ClipboardList className="mx-auto w-10 h-10 mb-2 bg-blue-100 text-blue-600 p-2 rounded-full" />
            <p className="text-sm text-gray-500">Tasks</p>
            <h2 className="font-bold text-lg text-blue-600">3 Pending</h2>
          </div>
        </div>
      </section>

      {/* 🔹 Quick Actions */}
      <section className="px-5 mt-8">
        <h2 className="text-lg font-bold text-gray-800 mb-3">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-4">
          
          {/* Upcoming Meeting */}
          <Link href={"/meeting"}>
            <div className="bg-white shadow-md p-4 rounded-2xl flex flex-col items-center hover:bg-rose-50 transition cursor-pointer">
              {/* Action Icon: Made Circular */}
              <Clock className="w-10 h-10 mb-2 text-blue-600 bg-blue-100 p-2 rounded-full" />
              <p className="text-xs font-medium text-center text-gray-700">Upcoming Meeting</p>
            </div>
          </Link>
          
          {/* Mark Attendance */}
          <Link href={"/attendance"}>
            <div className="bg-white p-4 shadow-md rounded-2xl flex flex-col items-center hover:bg-rose-50 transition cursor-pointer">
              {/* Action Icon: Made Circular */}
              <CalendarCheck className="w-10 h-10 mb-2 text-green-600 bg-green-100 p-2 rounded-full" />
              <p className="text-xs font-medium text-center text-gray-700">Mark Attendance</p>
            </div>
          </Link>
          
          {/* Submit Task Report */}
          <Link href={"/task"}>
            <div className="bg-white p-4 shadow-md rounded-2xl flex flex-col items-center hover:bg-rose-50 transition cursor-pointer">
              {/* Action Icon: Made Circular */}
              <FileText className="w-10 h-10 mb-2 text-purple-600 bg-purple-100 p-2 rounded-full" />
              <p className="text-xs font-medium text-center text-gray-700">Submit Task Report</p>
            </div>
          </Link>
          
          {/* Apply Leave */}
          <Link href={"/leaves"}>
            <div className="bg-white p-4 shadow-md rounded-2xl flex flex-col items-center hover:bg-rose-50 transition cursor-pointer">
              {/* Action Icon: Made Circular */}
              <Briefcase className="w-10 h-10 mb-2 text-amber-600 bg-amber-100 p-2 rounded-full" />
              <p className="text-xs font-medium text-center text-gray-700">Apply Leave</p>
            </div>
          </Link>
          
          {/* Salary */}
          <Link href={"/salary"}>
            <div className="bg-white p-4 shadow-md rounded-2xl flex flex-col items-center hover:bg-rose-50 transition cursor-pointer">
              {/* Action Icon: Made Circular */}
              <Wallet className="w-10 h-10 mb-2 text-pink-600 bg-pink-100 p-2 rounded-full" />
              <p className="text-xs font-medium text-center text-gray-700">Salary</p>
            </div>
          </Link>
          
        </div>
      </section>

      {/* 🔹 Performance Status */}
      <div className="mx-5 mt-8 bg-white shadow-lg p-5 rounded-2xl flex items-center justify-between border-l-4 border-rose-600">
        <div>
          <h2 className="font-bold text-gray-800">Performance Status</h2>
          <p className="text-sm text-gray-500">Current month rating</p>
        </div>
        <div className="flex items-center gap-2 bg-green-100 text-green-600 px-3 py-1 rounded-full font-semibold">
          <span>⭐</span>
          <p>Great</p>
        </div>
      </div>

      {/* 🔹 Recent Updates */}
      <section className="m-5 mt-8">
        {/* Header Row */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-800">Recent Updates</h2>
          <p className="text-sm text-rose-600 cursor-pointer hover:underline font-medium">
            View All
          </p>
        </div>

        {/* Update Item 1 */}
        <div className="border-l-4 mb-3 border-rose-600 pl-4 py-3 flex justify-between items-center bg-white rounded-xl shadow-md transition hover:shadow-lg">
          <div>
            <p className="font-medium text-gray-800">Team Meeting</p>
            <p className="text-sm text-gray-500">Today • 3:00 PM</p>
          </div>
          {/* Nav Icon: Made Circular */}
          <MoveRightIcon className="w-6 h-6 text-rose-600  p-1 " />
        </div>
        
        {/* Update Item 2 */}
        <div className="border-l-4 mb-3 border-rose-600 pl-4 py-3 flex justify-between items-center bg-white rounded-xl shadow-md transition hover:shadow-lg">
          <div>
            <p className="font-medium text-gray-800">Performance Review</p>
            <p className="text-sm text-gray-500">2 days left</p>
          </div>
          {/* Nav Icon: Made Circular */}
          <MoveRightIcon className="w-6 h-6 text-rose-600  p-1 " />
        </div>
        
        {/* Update Item 3 */}
        <div className="border-l-4 mb-3 border-rose-600 pl-4 py-3 flex justify-between items-center bg-white rounded-xl shadow-md transition hover:shadow-lg">
          <div>
            <p className="font-medium text-gray-800">New training Available</p>
            <p className="text-sm text-gray-500">1 hr ago</p>
          </div>
          {/* Nav Icon: Made Circular */}
          <MoveRightIcon className="w-6 h-6 text-rose-600  p-1 " />
        </div>
        
      </section>

    </div>
  );
};

export default Dashboard;