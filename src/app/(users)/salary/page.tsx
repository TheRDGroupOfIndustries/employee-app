"use client";

import React from "react";
import { MoveLeft, CheckCircle } from "lucide-react";

const SalaryPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center text-gray-800">
      {/* 🔹 Top Navbar */}
      <nav className="sticky top-0 z-10 w-full flex gap-5 items-center px-5 py-4 bg-rose-700 shadow-md">
        <MoveLeft
          className="w-6 h-6 text-white cursor-pointer"
          onClick={() => window.history.back()}
        />
        <h1 className="text-lg text-white font-bold tracking-wide">
           salary & Requests
        </h1>
      </nav>

      {/* 🔹 Page Content */}
      <div className="w-[90%] md:w-[85%] mx-auto my-6 space-y-8">
        {/* 🔸 Current Salary Card */}
        <section className="bg-red-500 shadow-md rounded-2xl p-5 border border-rose-100">
          <div className="flex justify-between items-center mb-3">
            <div>
              <h2 className="text-2xl font-bold text-white">Current Salary</h2>
              <p className="text-lg text-gray-300">Monthly breakdown</p>
            </div>
            <div className="text-rose-700 font-bold bg-red-400 p-5 rounded-full text-xl">💰</div>
          </div>

<div className="text-center">

          <h1 className="text-3xl font-bold text-white">$82,000</h1>
          <p className="text-sm text-gray-200">Net monthly salary</p>
</div>
        </section>

        {/* 🔸 Salary Breakdown */}
        <section className="bg-white shadow-md rounded-2xl p-5 border border-rose-100">
          <h2 className="text-lg font-semibold  mb-3">
            Salary Breakdown
          </h2>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <p>Basic Salary</p>
              <span>₹75,000</span>
            </div>
            <div className="flex justify-between">
              <p>Allowances</p>
              <span className="text-green-600">+₹18,000</span>
            </div>
            <div className="flex justify-between">
              <p>Deductions</p>
              <span className="text-red-600">-₹8,000</span>
            </div>
            <div className="flex justify-between border-t pt-2 font-semibold">
              <h3 className="font-bold">Net Salary</h3>
              <span className="text-red-500">₹82,000</span>
            </div>
          </div>
        </section>

        {/* 🔸 Payment Dates */}
        <section className="">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-white shadow-md rounded-2xl p-5 border border-rose-100">
              <CheckCircle className="mx-auto text-green-600" />
              <p className="text-sm text-gray-500">Last Paid</p>
              <h3 className="text-lg font-semibold">Sep 30, 2025</h3>
            </div>
            <div className="bg-white shadow-md rounded-2xl p-5 border border-rose-100">
              <CheckCircle className="mx-auto text-rose-700" />
              <p className="text-sm text-gray-500">Next Payment</p>
              <h3 className="text-lg font-semibold">Oct 30, 2025</h3>
            </div>
          </div>
        </section>

        {/* 🔸 Make a Request */}
        <section className="bg-white shadow-md rounded-2xl p-5 border border-rose-100">
          <h2 className="text-lg font-semibold  mb-4">
            Make a Request
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Request Type
              </label>
              <select className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-rose-600">
                <option>Salary Advance</option>
                <option>Bonus Request</option>
                <option>Reimbursement</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Amount
              </label>
              <input
                type="number"
                placeholder="Enter amount"
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-rose-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Reason
              </label>
              <textarea
                placeholder="Enter your reason..."
                rows={3}
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-rose-600"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-rose-700 text-white py-2 rounded-lg hover:bg-rose-800 transition"
            >
              Submit Request
            </button>
          </form>
        </section>

        {/* 🔸 Recent Requests */}
        <section className="bg-white shadow-md rounded-2xl p-5 border border-rose-100 mb-10">
          <h2 className="text-lg font-semibold  mb-4">
            Recent Requests
          </h2>

          <div className="flex justify-between items-center  p-3 rounded-lg">
            <div>
              <p className="font-medium text-gray-800">Salary Advance</p>
              <span className="text-sm text-gray-500">Oct 12, 2025</span>
            </div>
            <div className="text-green-600 font-semibold">Approved</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SalaryPage;
