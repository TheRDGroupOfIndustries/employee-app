"use client";
import React, { useState } from "react";
import { FilePlus } from "lucide-react";
import { TabSelector } from "@/src/Components/admin/TabSelector";
import { Pastmeetings } from "@/src/Components/admin/Pastmeetings";
import { AllMeetings } from "@/src/Components/admin/AllMeetings";
import ScheduleMeet from "@/src/Components/admin/ScheduleMeet";
import Upcoming from "@/src/Components/admin/Upcomingmeet";

// Sample meeting data
const sampleMeetings = {
  // Correctly define 'pastMeetings' with 'completed' tag (or use a better name)
  pastMeetings: [
    {
      id: "4",
      title: "Q1 Board Meeting",
      tags: ["board", "completed"],
      description: "Quarterly board meeting to review financial performance and strategic initiatives.",
      date: "Thursday, January 25, 2024",
      time: "2:00 PM",
      duration: "120 min",
      location: "Conference Room A",
      organizer: "Robert Johnson",
      attendees: ["Robert Johnson", "Sarah Mitchell", "Michael Chen", "Emily Rodriguez"],
      agenda: [
        "Financial Performance Review",
        "Strategic Initiative Updates",
        "Risk Assessment Discussion",
        "Budget Approval for Q2"
      ]
    },
    {
      id: "5",
      title: "All-Hands Company Meeting",
      tags: ["all hands", "completed"],
      description: "Monthly company-wide meeting to share updates and celebrate achievements.",
      date: "Friday, January 26, 2024",
      time: "2:00 PM",
      duration: "60 min",
      location: "Main Auditorium",
      organizer: "Sarah Mitchell",
      attendees: ["All Employees"],
      agenda: [
        "Company Performance Update",
        "New Team Member Introductions",
        "Department Highlights",
        "Q&A Session"
      ]
    },
    {
      id: "6",
      title: "Design Review Session",
      tags: ["design", "completed"],
      description: "Review and feedback session for the new mobile app design concepts.",
      date: "Monday, January 22, 2024",
      time: "11:00 AM",
      duration: "75 min",
      location: "Design Studio",
      organizer: "Jessica Brown",
      attendees: ["Jessica Brown", "Alex Turner", "Maria Garcia", "Tom Wilson"],
      agenda: [
        "Present design concepts",
        "Gather feedback",
        "Discuss revisions",
        "Set next milestones"
      ]
    },
  ],
  // Correctly define 'allMeetings' at the top level of the object
  allMeetings: [
    {
      id: "1",
      title: "Product Roadmap Planning",
      tags: ["strategy", "scheduled"],
      description: "Quarterly planning session to define product roadmap and key deliverables for Q2.",
      date: "Monday, October 28, 2025",
      time: "10:00 AM",
      duration: "90 min",
      location: "Conference Room B",
      organizer: "Emily Davis",
      attendees: ["Emily Davis", "John Smith", "Sarah Mitchell", "Mike Chen"],
      agenda: [
        "Review Q1 achievements",
        "Define Q2 priorities",
        "Resource allocation discussion",
        "Timeline approval"
      ]
    },
    {
      id: "2",
      title: "Weekly Team Sync",
      tags: ["team", "scheduled"],
      description: "Regular team synchronization to discuss ongoing projects and blockers.",
      date: "Tuesday, October 29, 2025",
      time: "2:00 PM",
      duration: "45 min",
      location: "Virtual - Zoom",
      organizer: "Michael Rodriguez",
      attendees: ["All Team Members"],
      agenda: [
        "Project status updates",
        "Blockers and challenges",
        "Next week's priorities"
      ]
    },
    {
      id: "4",
      title: "Q1 Board Meeting",
      tags: ["board", "completed"],
      description: "Quarterly board meeting to review financial performance and strategic initiatives.",
      date: "Thursday, January 25, 2024",
      time: "2:00 PM",
      duration: "120 min",
      location: "Conference Room A",
      organizer: "Robert Johnson",
      attendees: ["Robert Johnson", "Sarah Mitchell", "Michael Chen", "Emily Rodriguez"],
      agenda: [
        "Financial Performance Review",
        "Strategic Initiative Updates",
        "Risk Assessment Discussion",
        "Budget Approval for Q2"
      ]
    },
    {
      id: "5",
      title: "All-Hands Company Meeting",
      tags: ["all hands", "completed"],
      description: "Monthly company-wide meeting to share updates and celebrate achievements.",
      date: "Friday, January 26, 2024",
      time: "2:00 PM",
      duration: "60 min",
      location: "Main Auditorium",
      organizer: "Sarah Mitchell",
      attendees: ["All Employees"],
      agenda: [
        "Company Performance Update",
        "New Team Member Introductions",
        "Department Highlights",
        "Q&A Session"
      ]
    },
    {
      id: "7",
      title: "Marketing Campaign Review",
      tags: ["marketing", "scheduled"],
      description: "Review performance metrics of Q4 marketing campaigns and plan for Q1.",
      date: "Thursday, November 1, 2025",
      time: "1:00 PM",
      duration: "60 min",
      location: "Marketing Department",
      organizer: "Amanda White",
      attendees: ["Amanda White", "Kevin Brown", "Lisa Chen", "Mark Johnson"],
      agenda: [
        "Q4 campaign results",
        "ROI analysis",
        "Q1 campaign strategy",
        "Budget allocation"
      ]
    },
    {
      id: "8",
      title: "Engineering Sprint Planning",
      tags: ["engineering", "scheduled"],
      description: "Plan the next two-week sprint and assign tasks to team members.",
      date: "Friday, November 2, 2025",
      time: "9:00 AM",
      duration: "90 min",
      location: "Engineering Room",
      organizer: "Chris Anderson",
      attendees: ["Chris Anderson", "Dev Team", "Product Managers"],
      agenda: [
        "Sprint retrospective",
        "Backlog refinement",
        "Story point estimation",
        "Task assignments"
      ]
    }
  ]
};

const MeetingPages = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [isScheduleOpen, setScheduleOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Title & Buttons */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Meeting</h1>

        <div className="mt-4 sm:mt-0">
          <button
            onClick={() => setScheduleOpen(true)}
            className="flex items-center gap-2 bg-rose-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-rose-700 transition"
          >
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

      {/* Render components with data */}
      {activeTab === "upcoming" && <Upcoming meetings={sampleMeetings.allMeetings.filter(m => m.tags.includes('scheduled'))} />}
      {/* Changed sampleMeetings.Meetings to sampleMeetings.pastMeetings (a more descriptive name) */}
      {activeTab === "past-meeting" && <Pastmeetings meetings={sampleMeetings.pastMeetings} />}
      {activeTab === "all-meetings" && <AllMeetings meetings={sampleMeetings.allMeetings}/>}

      <ScheduleMeet
        isOpen={isScheduleOpen}
        onClose={() => setScheduleOpen(false)}
      />
    </main>
  );
};

export default MeetingPages;