"use client";

import React, { useState } from "react";
import { MoveLeft, CheckCircle, Clock } from "lucide-react";

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
  // State to simulate check-in/out status
  const [isCheckedIn, setIsCheckedIn] = useState(true);
  const { date, time } = getCurrentDateTime();

  const handleCheckInOut = () => {
    // In a real app, this would call an API
    setIsCheckedIn(!isCheckedIn);
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
        <section className="flex flex-col items-center p-6  rounded-xl shadow-lg mb-6">
          {/* Status Display */}
          <div className="text-center">
            <CheckCircle className="w-16 h-16 text-red-500 mx-auto animate-pulse" />

            <h2 className="text-2xl font-bold mt-3  ">
              {" "}
              Checked In
            </h2>
            <p className=" text-gray-700 mt-1">
              {date}, {time}
            </p>
          </div>

          {/* Action Button */}
          <button
            onClick={handleCheckInOut}
            className="w-full mt-6 py-3 text-red-500 font-bold rounded-2xl shadow-lg transition duration-200 ease-in-out border-2 border-red-300"
              
          >
             Check Out 
          </button>
        </section>

        {/* 🔹 Daily Stats */}
        <section className="grid grid-cols-2 gap-4 mb-6">
          {/* Check In Time */}
          <div className="  p-4 rounded-xl shadow-md text-center">
            <p className="text-sm text-gray-400 font-medium">Check-In Time</p>
            <h2 className="text-2xl font-bold mt-1  ">
              {isCheckedIn ? "09:00 AM" : "--:--"}
            </h2>
          </div>
          {/* Hours Today */}
          <div className="  p-4 rounded-xl shadow-md text-center">
            <p className="text-sm text-gray-400 font-medium">Hours Today</p>
            <h2 className="text-2xl font-bold mt-1  ">
              {isCheckedIn ? "4.5 hrs" : "0.0 hrs"}
            </h2>
          </div>
        </section>

        {/* 🔹 Weekly Summary */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">This Week's Snapshot</h2>
          <div className="grid grid-cols-3 gap-3">
            {/* Present Days */}
            <div className="  p-3 rounded-xl shadow-md text-center">
              <p className="text-3xl font-bold text-green-400">4</p>
              <p className="text-sm mt-1">Present</p>
            </div>
            {/* Late Days */}
            <div className="  p-3 rounded-xl shadow-md text-center">
              <p className="text-3xl font-bold text-yellow-600">1</p>
              <p className="text-sm  mt-1">Late</p>
            </div>
            {/* Absent Days */}
            <div className="  p-3 rounded-xl shadow-md text-center ">
              <p className="text-3xl font-bold text-blue-500">0</p>
              <p className="text-sm mt-1">Absent</p>
            </div>
          </div>
        </section>

        {/* 🔹 Recent History */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Recent History</h2>
          <div className="  p-4 rounded-xl shadow-md space-y-3">
            {/* History Item 1 */}
            <div className="flex justify-between items-center border-b border-gray-700 pb-2 last:border-b-0">
              <div>
                <p className="font-semibold">Mon, Oct 20</p>
                <p className="text-xs text-gray-400">09:00 AM - 05:00 PM</p>
              </div>
              <p className="text-green-400 font-medium">Present</p>
            </div>
            {/* History Item 2 */}
            <div className="flex justify-between items-center border-b border-gray-700 pb-2 last:border-b-0">
              <div>
                <p className="font-semibold">Fri, Oct 17</p>
                <p className="text-xs text-gray-400">09:30 AM - 05:00 PM</p>
              </div>
              <p className="text-yellow-400 font-medium">Late</p>
            </div>
            {/* History Item 3 */}
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
