"use client";
import React, { useState } from "react";
import { FilePlus } from "lucide-react";
import { TabSelector } from "@/src/Components/admin/TabSelector";

const Analysingpage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isScheduleOpen, setScheduleOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50">
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
              className="text-sm border-none outline-none bg-transparent text-gray-700 font-medium"
              defaultValue="30"
            >
              <option value="today">Today</option>
              <option value="5">Last 5 Days</option>
              <option value="10">Last 10 Days</option>
              <option value="15">Last 15 Days</option>
              <option value="30">Last 30 Days</option>
            </select>
          </div>

          {/* Schedule Meeting Button */}
          <button className="flex items-center gap-2 bg-rose-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-rose-700 transition">
            <FilePlus size={18} />
            Schedule Meeting
          </button>
        </div>
      </div>

      {/* Tabs */}
      <TabSelector
        tabs={[
          { id: "overview", label: "Overview" },
          { id: "attendace", label: "Attendace" },
          { id: "perforance", label: "Perforance" },
          { id: "project", label: "Project" },
        ]}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* {activeTab === " overview" && < overview />}
      {activeTab === "past-meeting" && <Pastmeetings />}
      {activeTab === "all-meetings" && <AllMeetings />}

        <ScheduleMeet
              isOpen={isScheduleOpen}
              onClose={() => setScheduleOpen(false)}
            /> */}
    </main>
  );
};

export default Analysingpage;
