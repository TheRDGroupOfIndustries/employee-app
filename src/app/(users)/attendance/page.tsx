"use client";

import React, { useState } from "react";
import { MoveLeft, CheckCircle } from "lucide-react";

// Helper function for getting current time and date in a readable format
const getCurrentDateTime = () => {
  const now = new Date();
  const date = now.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return { date, time };
};

const AttendancePage: React.FC = () => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [attendance, setAttendance] = useState("Check In");
  const { date, time } = getCurrentDateTime();

  const handleCheckInOut = () => {
    // Toggle state
    setIsCheckedIn((prev) => !prev);
 setAttendance((prev)=>prev === 'Check Out'?'Check In':'Check Out')
  };

  return (
    <div className="h-screen overflow-y-auto">
      {/* 🔹 Top Navbar */}
      <nav className="sticky top-0 z-10 flex gap-5 items-center px-5 py-4 bg-rose-700 shadow-xl">
        <MoveLeft
          className="w-6 h-6 text-white cursor-pointer hover:opacity-80"
          onClick={() => window.history.back()}
        />
        <h1 className="text-xl text-white font-bold tracking-wide">
          Attendance
        </h1>
      </nav>

      <div className="p-5">
        {/* 🔹 Main Status and Action */}
        <section className="flex flex-col items-center p-6 rounded-xl shadow-lg mb-6">
          <div className="text-center">
            <CheckCircle
              className={`w-16 h-16 mx-auto animate-pulse ${
                isCheckedIn ? "text-green-500" : "text-red-500"
              }`}
            />
            <h2 className="text-2xl font-bold mt-3">{attendance}</h2>
            <p className="text-gray-700 mt-1">
              {date}, {time}
            </p>
          </div>

          <button
            onClick={handleCheckInOut}
            className="w-full mt-6 py-3 text-red-500 font-bold rounded-2xl shadow-lg transition duration-200 ease-in-out border-2 border-red-300"
          >
            {attendance}
          </button>
        </section>

        {/* 🔹 Daily Stats */}
        <section className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl shadow-md text-center">
            <p className="text-sm text-gray-400 font-medium">Check-In Time</p>
            <h2 className="text-2xl font-bold mt-1">
              {isCheckedIn ? "09:00 AM" : "--:--"}
            </h2>
          </div>
          <div className="p-4 rounded-xl shadow-md text-center">
            <p className="text-sm text-gray-400 font-medium">Hours Today</p>
            <h2 className="text-2xl font-bold mt-1">
              {isCheckedIn ? "4.5 hrs" : "0.0 hrs"}
            </h2>
          </div>
        </section>

        {/* 🔹 Weekly Summary */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">This Week's Snapshot</h2>
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-xl shadow-md text-center">
              <p className="text-3xl font-bold text-green-400">4</p>
              <p className="text-sm mt-1">Present</p>
            </div>
            <div className="p-3 rounded-xl shadow-md text-center">
              <p className="text-3xl font-bold text-yellow-600">1</p>
              <p className="text-sm mt-1">Late</p>
            </div>
            <div className="p-3 rounded-xl shadow-md text-center">
              <p className="text-3xl font-bold text-blue-500">0</p>
              <p className="text-sm mt-1">Absent</p>
            </div>
          </div>
        </section>

        {/* 🔹 Recent History */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Recent History</h2>
          <div className="p-4 rounded-xl shadow-md space-y-3">
            <div className="flex justify-between items-center border-b border-gray-700 pb-2 last:border-b-0">
              <div>
                <p className="font-semibold">Mon, Oct 20</p>
                <p className="text-xs text-gray-400">09:00 AM - 05:00 PM</p>
              </div>
              <p className="text-green-400 font-medium">Present</p>
            </div>
            <div className="flex justify-between items-center border-b border-gray-700 pb-2 last:border-b-0">
              <div>
                <p className="font-semibold">Fri, Oct 17</p>
                <p className="text-xs text-gray-400">09:30 AM - 05:00 PM</p>
              </div>
              <p className="text-yellow-400 font-medium">Late</p>
            </div>
            <div className="flex justify-between items-center border-b border-gray-700 pb-2 last:border-b-0">
              <div>
                <p className="font-semibold">Thu, Oct 16</p>
                <p className="text-xs text-gray-400">09:00 AM - 06:00 PM</p>
              </div>
              <p className="text-green-400 font-medium">Present</p>
            </div>
            <p className="text-center text-rose-500 text-sm cursor-pointer hover:underline pt-2">
              View Full Report
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AttendancePage;
