"use client";
import React, { useState } from "react";
import { FileText, FilePlus } from "lucide-react";
import { TabSelector } from "@/src/Components/admin/TabSelector";
import {HrToolsCards} from "@/src/Components/admin/HrToolsCards";
import { Certificates } from "@/src/Components/admin/Certificates";
import { LettersReports } from "@/src/Components/admin/LettersReports";
const HrToolsPage = () => {
  const [activeTab, setActiveTab] = useState("employee-ids");

  const EmployeeIds = [
    {
      name: "John Smith",
      role: "Senior Developer",
      department: "Engineering",
      id: "EMP001",
      joinDate: "Mar 15, 2023",
      email: "john.smith@rdgroup.com",
      image: "/images/dummy_profile.png",
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Manager",
      department: "Marketing",
      id: "EMP002",
      joinDate: "Jan 20, 2023",
      email: "sarah.johnson@rdgroup.com",
      image: "/images/dummy_profile.png",
    },
    {
      name: "Mike Chen",
      role: "DevOps Engineer",
      department: "Engineering",
      id: "EMP003",
      joinDate: "May 10, 2023",
      email: "mike.chen@rdgroup.com",
      image: "/images/dummy_profile.png",
    },
    {
      name: "Lisa Wang",
      role: "UX Designer",
      department: "Design",
      id: "EMP004",
      joinDate: "Jul 1, 2023",
      email: "lisa.wang@rdgroup.com",
      image: "/images/dummy_profile.png",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Title & Buttons */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">HR Tools</h1>

        <div className="flex gap-4 mt-4 sm:mt-0">
  <button className="flex items-center gap-2 bg-rose-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-rose-700 transition">
    <FileText size={18} />
    Issue Certificate
  </button>

  <button className="flex items-center gap-2 bg-rose-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-rose-700 transition">
    <FilePlus size={18} />
    Create Document
  </button>
</div>

      </div>

      {/* Tabs */}
      <TabSelector
        tabs={[
          { id: "employee-ids", label: "Employee IDs" },
          { id: "certificates", label: "Certificates" },
          { id: "letters-reports", label: "Letters & Reports" },
        ]}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Employee Cards */}
      {activeTab === "employee-ids" && (
         <div className="grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 gap-6">
                  {EmployeeIds.map((member, idx) => (
                    <HrToolsCards key={idx} member={member} />
                  ))}
                </div>
       )}

      {/* Certificates tab content */}
      {activeTab === "certificates" && (
       <Certificates />
      )}

      {/* Letters tab content */}
      {activeTab === "letters-reports" && (
         <LettersReports />
      )}
    </main>
  );
};

export default HrToolsPage;
