"use client";

import React, { useState } from "react";
import {
  MoveLeft,
  BookAIcon,
  CheckCircle,
  Clock,
  AlertTriangle,
  Paperclip,
  PlusCircle,
  Tag,
  Calendar,
} from "lucide-react";

const page = () => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setFileName(file ? file.name : "");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form Submitted");
    alert("Task submitted successfully!");
  };

  return (
    <div className="min-h-screen text-gray-900 flex flex-col">
      {/* 🔹 Top Navbar */}
      <nav className="sticky top-0 z-10 flex items-center gap-4 px-5 py-4 bg-rose-600 shadow-md">
        <button onClick={() => window.history.back()}>
          <MoveLeft className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-lg text-white font-semibold tracking-wide">
          Daily Work Report
        </h1>
      </nav>

      {/* 🔹 Header Card */}
      <section className="px-5 mt-6">
        <div className="bg-rose-600 flex items-center gap-5 rounded-2xl p-5 shadow-lg">
          <div>
            <BookAIcon className="w-14 h-14 text-white bg-rose-500 p-3 rounded-full shadow-md" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-white">
              Daily Work Report
            </h1>
            <p className="text-sm text-white/80 mt-1">
              Submit your daily progress and updates
            </p>
          </div>
        </div>
      </section>

      {/* 🔹 Stats Section */}
      <section className="px-5 mt-6">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition cursor-pointer border border-rose-100">
            <CheckCircle className="w-6 h-6 mx-auto text-green-500 mb-2" />
            <p className="text-sm text-gray-500">Completed</p>
            <h2 className="font-bold text-lg text-green-600">12</h2>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition cursor-pointer border border-rose-100">
            <Clock className="w-6 h-6 mx-auto text-blue-500 mb-2" />
            <p className="text-sm text-gray-500">In Progress</p>
            <h2 className="font-bold text-lg text-blue-600">3</h2>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition cursor-pointer border border-rose-100">
            <AlertTriangle className="w-6 h-6 mx-auto text-red-500 mb-2" />
            <p className="text-sm text-gray-500">Pending</p>
            <h2 className="font-bold text-lg text-red-600">2</h2>
          </div>
        </div>
      </section>

      {/* 🔹 Submit Report Form */}
      <section className="px-5 mt-8">
        <h2 className="text-lg font-semibold mb-3">Submit New Report</h2>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl bg-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-6 border border-gray-100"
        >
       

          {/* Task Title */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Task Title
            </label>
            <input
              type="text"
              placeholder=" Performance Report"
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-rose-100 focus:border-rose-500 transition duration-150"
            />
          </div>

          {/* Priority and Due Date */}
          <div className="flex  gap-4">
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Priority
              </label>
              <div className="relative">
                <select
                  className="w-full appearance-none p-3 border border-gray-300 rounded-xl bg-white pr-8 focus:outline-none focus:ring-4 focus:ring-rose-100 focus:border-rose-500 transition duration-150"
                  defaultValue="Medium"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  <option value="Critical">Critical</option>
                </select>
               </div>
            </div>

            <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                Status
              </label>
              <div className="relative">
                <select
                  className="w-full appearance-none p-3 border border-gray-300 rounded-xl bg-white pr-8 focus:outline-none focus:ring-4 focus:ring-rose-100 focus:border-rose-500 transition duration-150"
                  defaultValue="Medium"
                >
                  <option value="Low">Completed</option>
                  <option value="Medium">In Progress</option>
                  <option value="High">Pending</option>
                  <option value="Critical">Blocked</option>
                </select>
               </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Description
            </label>
            <textarea
              rows={4}
              placeholder="Provide a detailed explanation of the task's requirements and goals..."
              className="w-full p-3 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-4 focus:ring-rose-100 focus:border-rose-500 transition duration-150"
            ></textarea>
          </div>

          {/* Attachment */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Attachment
            </label>
            <div className="relative border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-rose-400 transition cursor-pointer">
              <input
                type="file"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="flex flex-col items-center justify-center space-y-2">
                <Paperclip className="text-gray-400 w-6 h-6" />
                <p className="text-sm font-medium text-gray-700">
                  {fileName ? fileName : "Click to upload a file"}
                </p>
                <p className="text-xs text-gray-500">
                  Max 5MB (PDF, DOCX, PNG, JPG)
                </p>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-6 py-3 bg-rose-600 text-white font-bold rounded-xl shadow-lg shadow-rose-200 hover:bg-rose-700 transition duration-200 transform hover:scale-[1.01]"
          >
            Submit Task
          </button>
        </form>
      </section>

      {/* 🔹 Recent Reports */}
      <section className="px-5 mt-8 mb-8">
        <h2 className="text-lg font-semibold mb-3">Recent Reports</h2>

        <div className="space-y-3">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-rose-100 flex justify-between items-center hover:shadow-md transition">
            <div>
              <h3 className="font-semibold text-gray-800">
                UI Fixes & Testing
              </h3>
              <p className="text-sm text-gray-500">Completed • 20 Oct 2025</p>
            </div>
            <CheckCircle className="text-green-500" />
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm border border-rose-100 flex justify-between items-center hover:shadow-md transition">
            <div>
              <h3 className="font-semibold text-gray-800">API Integration</h3>
              <p className="text-sm text-gray-500">
                In Progress • 22 Oct 2025
              </p>
            </div>
            <Clock className="text-blue-500" />
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm border border-rose-100 flex justify-between items-center hover:shadow-md transition">
            <div>
              <h3 className="font-semibold text-gray-800">Bug Fixing</h3>
              <p className="text-sm text-gray-500">Pending • 23 Oct 2025</p>
            </div>
            <AlertTriangle className="text-red-500" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
