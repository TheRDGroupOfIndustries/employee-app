"use client";

import React from "react";
import { MoveLeft } from "lucide-react";

interface LeaveBalanceCardProps {
  availableDays: number;
  usedDays: number;
}

const LeaveBalanceCard: React.FC<LeaveBalanceCardProps> = ({
  availableDays,
  usedDays,
}) => {
  const total = availableDays + usedDays;
  const usedPercent = (usedDays / total) * 100;

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* 🔹 Top Navbar */}
      <nav className="sticky top-0 z-10 flex items-center gap-4 px-5 py-4 bg-rose-600 shadow-md">
        <button onClick={() => window.history.back()}>
          <MoveLeft className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-lg text-white font-semibold tracking-wide">
          Leave Request
        </h1>
      </nav>

      {/* 🔹 Leave Balance Section */}
      <section className="bg-white mx-4 mt-5 p-5 rounded-2xl shadow-md border border-gray-100">
        <h3 className="text-gray-800 font-semibold text-lg mb-4">
          Leave Balance
        </h3>

        <div className="flex justify-between mb-4">
          <div className="text-center">
            <h2 className="text-green-600 text-2xl font-bold">
              {10}
            </h2>
            <p className="text-gray-500 text-sm">Available Days</p>
          </div>
          <div className="text-center">
            <h2 className="text-red-600 text-2xl font-bold">{8}</h2>
            <p className="text-gray-500 text-sm">Used Days</p>
          </div>
        </div>

        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-3 bg-red-500 rounded-full transition-all duration-500"
            style={{ width: `${usedPercent}%` }}
          ></div>
        </div>
      </section>

      {/* 🔹 Apply Leave Section */}
      <section className="m-4 mt-6   border border-rose-100 p-5 rounded-2xl shadow-sm">
        <h2 className="text-rose-700 font-semibold text-lg mb-4">
          Apply for Leave
        </h2>

        <form className="space-y-4">
          {/* Leave Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Leave Type
            </label>
            <select
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
              required
            >
              <option value="">Select Leave Type</option>
              <option value="annual">Annual Leave</option>
              <option value="sick">Sick Leave</option>
              <option value="casual">Casual Leave</option>
            </select>
          </div>

          {/* Dates */}
          <div className="flex sm:space-x-3  space-y-3 sm:space-y-0">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Start Date
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                End Date
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
                required
              />
            </div>
          </div>

          {/* Reason */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Reason
            </label>
            <textarea
              rows={3}
              placeholder="Enter your reason..."
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400 resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-rose-600 text-white font-semibold py-3 rounded-lg hover:bg-rose-700 transition-all"
          >
            Submit Request
          </button>
        </form>
      </section>

      {/* 🔹 Recent Requests */}
      <section className="m-4 bg-white border border-gray-100 rounded-2xl shadow-md p-5 mb-20">
        <h2 className="text-gray-800 font-semibold text-lg mb-4">
          Recent Requests
        </h2>

        <div className="space-y-3">
          <div className="flex justify-between items-center border-b pb-2">
            <div>
              <p className="font-medium text-gray-800">Annual Leave</p>
              <p className="text-sm text-gray-500">12 Oct 2025</p>
            </div>
            <span className="text-green-600 font-semibold text-sm bg-green-100 px-3 py-1 rounded-full">
              Approved
            </span>
          </div>

          <div className="flex justify-between items-center border-b pb-2">
            <div>
              <p className="font-medium text-gray-800">Sick Leave</p>
              <p className="text-sm text-gray-500">09 Oct 2025</p>
            </div>
            <span className="text-yellow-600 font-semibold text-sm bg-yellow-100 px-3 py-1 rounded-full">
              Pending
            </span>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium text-gray-800">Casual Leave</p>
              <p className="text-sm text-gray-500">01 Oct 2025</p>
            </div>
            <span className="text-red-600 font-semibold text-sm bg-red-100 px-3 py-1 rounded-full">
              Rejected
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeaveBalanceCard;
