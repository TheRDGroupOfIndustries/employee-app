"use client";

import React, { useState } from "react";
import { Download } from "lucide-react";
import { TabSelector } from "@/src/Components/admin/TabSelector";
import AnalyticsDashboard from "@/src/Components/admin/AnalyticsDashboard";

const AnalysingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [dateFilter, setDateFilter] = useState("30");

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      {/* Title & Buttons */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800">
          Analytics & Reports
        </h1>

        {/* Buttons Section */}
        <div className="flex flex-wrap gap-3 mt-4 sm:mt-0">
          {/* Filter Dropdown */}
          <div className="flex items-center gap-2 bg-white border border-rose-200 shadow-sm px-4 py-2 rounded-lg">
            <select
              id="filter"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="text-sm border-none outline-none bg-transparent text-gray-700 font-medium"
            >
              <option value="today">Today</option>
              <option value="5">Last 5 Days</option>
              <option value="10">Last 10 Days</option>
              <option value="15">Last 15 Days</option>
              <option value="30">Last 30 Days</option>
            </select>
          </div>

          {/* Export Reports Button */}
          <button
            className="flex items-center gap-2 bg-rose-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-rose-700 transition"
          >
            <Download size={18} />
            Export Reports
          </button>
        </div>
      </div>

      {/* Tabs */}
      <TabSelector
        tabs={[
          { id: "overview", label: "Overview" },
          { id: "attendance", label: "Attendance" },
          { id: "performance", label: "Performance" },
          { id: "project", label: "Project" },
        ]}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Render Analytics Dashboard */}
      {activeTab === "overview" && <AnalyticsDashboard />}
    </main>
  );
};

export default AnalysingPage;
