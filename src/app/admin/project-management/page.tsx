"use client";
import KanbanBoard from "@/src/Components/admin/KanbanBoard";
import { ProjectCard } from "@/src/Components/admin/ProjectCard";
import { TabSelector } from "@/src/Components/admin/TabSelector";
import { Plus } from "lucide-react";
import { useState } from "react";

const ProjectManagementPage = () => {
  const tabs = [
    { id: "overview", label: "Project Overview" },
    { id: "kanban", label: "Kanban Board" },
  ];

  const projectData = [
    {
      id: 1,
      title: "Digital Transformation Initiative",
      description:
        "Complete overhaul of legacy systems and implementation of modern digital solutions across all departments.",
      status: "active",
      priority: "high",
      progress: 65,
      startDate: "1/1/2024",
      endDate: "6/30/2024",
      budget: 250000,
      spent: 162500,
      teamMembers: ["John Smith", "Sarah Johnson", "Mike Chen", "Lisa Wang"],
    },
    {
      id: 2,
      title: "Market Expansion Strategy",
      description:
        "Research and implementation plan for expanding into Southeast Asian markets.",
      status: "planning",
      priority: "high",
      progress: 25,
      startDate: "2/1/2024",
      endDate: "8/31/2024",
      budget: 180000,
      spent: 45000,
      teamMembers: ["Emily Rodriguez", "David Kim", "Anna Thompson"],
    },
    {
      id: 3,
      title: "Employee Training Program",
      description:
        "Comprehensive training program for skill development and career advancement.",
      status: "active",
      priority: "medium",
      progress: 80,
      startDate: "1/1/2023",
      endDate: "3/31/2024",
      budget: 75000,
      spent: 60000,
      teamMembers: ["Robert Johnson", "Kelly Wu"], // Placeholder members
    },
    {
      id: 4,
      title: "Sustainability Initiative",
      description:
        "Implementation of eco-friendly practices and carbon footprint reduction strategies.",
      status: "on hold",
      priority: "low",
      progress: 40,
      startDate: "1/15/2024",
      endDate: "12/31/2024",
      budget: 120000,
      spent: 48000,
      teamMembers: ["Chris Lee", "Maria Garcia", "Tom Evans"], // Placeholder members
    },
  ];
  const kanbanTasks = [
    {
      id: 1,
      title: "Digital Transformation Initiative",
      description:
        "Complete overhaul of legacy systems and implementation of modern digital solutions across all departments.",
      status: "In Progress",
      assignee: "John Smith",
      time: "65%",
    },
    {
      id: 2,
      title: "Market Expansion Strategy",
      description:
        "Research and implementation plan for expanding into Southeast Asian markets.",
      status: "To Do",
      assignee: "Emily Rodriguez",
      time: "25%",
    },
    {
      id: 3,
      title: "Employee Training Program",
      description:
        "Comprehensive training program for skill development and career advancement.",
      status: "In Progress",
      assignee: "Robert Johnson",
      time: "80%",
    },
    {
      id: 4,
      title: "Sustainability Initiative",
      description:
        "Implementation of eco-friendly practices and carbon footprint reduction strategies.",
      status: "Review",
      assignee: "Chris Lee",
      time: "40%",
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className=" bg-gray-50 min-h-screen">
      {/* Header and New Project Button */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Project Management</h1>
        <button className="flex font-medium items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600">
          <Plus className="w-4 h-4" />
          <span>New Project</span>
        </button>
      </header>

      {/* Tab Selector */}
      <TabSelector
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    
      {/* Project Cards Grid - Renders only for "Project Overview" tab */}
      {activeTab === "overview" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}

      {/* Optional: Content for "Kanban Board" */}
      {activeTab === "kanban" && <KanbanBoard tasks={kanbanTasks} />}
    </div>
  );
};

export default ProjectManagementPage;
