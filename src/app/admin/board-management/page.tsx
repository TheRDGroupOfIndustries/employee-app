"use client";
import { MemberCard } from "@/src/Components/admin/MemberCard";
import { TabSelector } from "@/src/Components/admin/TabSelector";
import TaskCard from "@/src/Components/admin/TaskCard";
import { Plus } from "lucide-react";

import { useState } from "react";

interface Member {
  name: string;
  role: string;
  department: string;
  email: string;
  phone: string;
  status: "active" | "busy" | "offline";
  activeTasks: number;
  completedTasks: number;
  image: string;
}
interface Task {
  title: string;
  description: string;
  priority: "high priority" | "medium priority";
  status: "todo" | "in progress" | "review";
  assignedTo: string;
  dueDate: string;
}

export default function BoardManagementPage() {
  const [activeTab, setActiveTab] = useState("board-member");

  const members: Member[] = [
    {
      name: "Robert Johnson",
      role: "Chairman",
      department: "Board of Directors",
      email: "robert.johnson@rdgroup.com",
      phone: "+1 (555) 123-4567",
      status: "active",
      activeTasks: 8,
      completedTasks: 45,
      image: "/images/dummy_profile.png",
    },
    {
      name: "Sarah Mitchell",
      role: "Managing Director",
      department: "Operations",
      email: "sarah.mitchell@rdgroup.com",
      phone: "+1 (555) 234-5678",
      status: "busy",
      activeTasks: 12,
      completedTasks: 38,
      image: "/images/dummy_profile.png",
    },
    {
      name: "Michael Chen",
      role: "Executive Director",
      department: "Strategy",
      email: "michael.chen@rdgroup.com",
      phone: "+1 (555) 345-6789",
      status: "active",
      activeTasks: 6,
      completedTasks: 52,
      image: "/images/dummy_profile.png",
    },
    {
      name: "Emily Rodriguez",
      role: "Non‑Executive Director",
      department: "Finance",
      email: "emily.rodriguez@rdgroup.com",
      phone: "+1 (555) 456-7890",
      status: "offline",
      activeTasks: 4,
      completedTasks: 29,
      image: "/images/dummy_profile.png",
    },
  ];

  const tasks: Task[] = [
    {
      title: "Q4 Strategic Planning Review",
      description:
        "Review and approve the strategic planning document for Q4 operations and budget allocation.",
      priority: "high priority",
      status: "in progress",
      assignedTo: "Robert Johnson",
      dueDate: "1/5/2024",
    },
    {
      title: "Board Meeting Preparation",
      description:
        "Prepare agenda and materials for the upcoming board meeting scheduled for next week.",
      priority: "high priority",
      status: "todo",
      assignedTo: "Sarah Mitchell",
      dueDate: "1/2/2024",
    },
    {
      title: "Risk Assessment Report",
      description:
        "Complete comprehensive risk assessment for new market expansion initiatives.",
      priority: "medium priority",
      status: "review",
      assignedTo: "Michael Chen",
      dueDate: "2/20/2024",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen ">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Board & Management</h2>
        <button className="flex font-medium items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600">
          <Plus className="w-4 h-4" />
          <span>Assign Task</span>
        </button>
      </div>

      {/* Tabs */}
      <TabSelector
        tabs={[
          { id: "board-member", label: "Board Members" },
          { id: "assign-task", label: "Assigned Tasks" },
        ]}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Member Cards */}
      {activeTab === "board-member" ? (
        <div className="grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {members.map((member, idx) => (
            <MemberCard key={idx} member={member} />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {tasks.map((task, idx) => (
            <TaskCard key={idx} task={task} />
          ))}
        </div>
      )}
    </div>
  );
}
