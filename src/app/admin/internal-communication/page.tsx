"use client";
import { useState } from "react";
import { Plus, Bell } from "lucide-react";
import { TabSelector } from "@/src/Components/admin/TabSelector";
import { NotificationCard } from "@/src/Components/admin/NotificationCard";

export default function InternalCommunication() {
  const [activeTab, setActiveTab] = useState("company-notifications");

  const notifications = [
    {
      title: "Quarterly All-Hands Meeting",
      type: "announcement",
      priority: "high priority",
      description:
        "Join us for the Q1 all-hands meeting on Friday, January 26th at 2:00 PM in the main conference room. We will discuss company performance, upcoming projects, and team achievements.",
      status: "sent",
      recipients: "all",
      created: "Jan 10, 2024, 03:30 PM",
      readCount: "142/156 ",
    },
    {
      title: "System Maintenance Window",
      type: "alert",
      priority: "medium priority",
      description:
        "Scheduled system maintenance will occur this Saturday from 2:00 AM to 6:00 AM. All systems will be temporarily unavailable during this time.",
      status: "scheduled",
      recipients: "all",
      created: "Jan 8, 2024, 08:00 PM",
      scheduled: "Jan 13, 2024, 07:30 AM",
    },
    {
      title: "New Employee Onboarding",
      type: "reminder",
      priority: "medium priority",
      description:
        "Welcome our new team members joining us next week. Please ensure all onboarding materials are prepared and mentors are assigned.",
      status: "sent",
      recipients: "management",
      created: "Jan 5, 2024, 03:45 PM",
      Count: "8/12 ",
    },
    {
      title: "Policy Update: Remote Work Guidelines",
      type: "update",
      priority: "low priority",
      description:
        "Updated remote work policy is now available in the employee handbook. Please review the changes and sign the acknowledgment form by end of week.",
      status: "draft",
      recipients: "all",
      created: "Jan 3, 2024, 11:20 AM",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Internal Communication
        </h2>
        <div className="flex items-center gap-3">
          <button className="flex font-medium items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600 transition-colors">
            <Plus className="w-4 h-4" />
            <span>New Message</span>
          </button>
          <button className="flex font-medium items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600 transition-colors">
            <Bell className="w-4 h-4" />
            <span>New Notification</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <TabSelector
        tabs={[
          { id: "company-notifications", label: "Company Notifications" },
          { id: "messages", label: "Messages" },
          { id: "internal-chat", label: "Internal Chat" },
        ]}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Content */}
      <div className="space-y-4">
        {notifications.map((notification, idx) => (
          <NotificationCard key={idx} notification={notification} />
        ))}
      </div>
    </div>
  );
}
