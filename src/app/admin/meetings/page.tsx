"use client";
import React, { useState } from "react";
import { FilePlus } from "lucide-react";
import { TabSelector } from "@/src/Components/admin/TabSelector";
import Pastmeetings from "@/src/Components/admin/Pastmeetings";
import AllMeetings from "@/src/Components/admin/AllMeetings";
import ScheduleMeet from "@/src/Components/admin/ScheduleMeet";
import Upcoming from "@/src/Components/admin/Upcomingmeet";
const meetingpages = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [isScheduleOpen, setScheduleOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Title & Buttons */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Meeting</h1>

        <div className="mt-4 sm:mt-0">
          <button onClick={()=>setScheduleOpen(true) } className="flex items-center gap-2 bg-rose-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-rose-700 transition">
            <FilePlus size={18} />
            Schedule Meeting
          </button>
        </div>
      </div>

      {/* Tabs */}
      <TabSelector
        tabs={[
          { id: "upcoming", label: "Upcoming" },
          { id: "past-meeting", label: "Past Meeting" },
          { id: "all-meetings", label: "All Meetings" },
        ]}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {activeTab === "upcoming" && <Upcoming />}
      {activeTab === "past-meeting" && <Pastmeetings />}
      {activeTab === "all-meetings" && <AllMeetings />}

        <ScheduleMeet
              isOpen={isScheduleOpen}
              onClose={() => setScheduleOpen(false)}
            />
    </main>
  );
};

export default meetingpages;
