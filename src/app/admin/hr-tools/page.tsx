"use client";
import React, { useState } from "react";
import { FileText, FilePlus } from "lucide-react";
import { TabSelector } from "@/src/Components/admin/TabSelector";
import {HrToolsCards} from "@/src/Components/admin/HrToolsCards" 
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

  const certificates: Certificates[] = [
  {
    id: '1',
    title: 'Advanced React Development Certification',
    category: 'completion',
    description: 'Successfully completed advanced React development training program with excellent performance.',
    recipient: 'John Smith',
    issued: 'Jan 10, 2024',
    validUntil: 'Jan 10, 2025',
    status: 'active'
  },
  {
    id: '2',
    title: 'Employee of the Month - December 2023',
    category: 'achievement',
    description: 'Recognized for outstanding performance and leadership in Q4 marketing campaigns.',
    recipient: 'Sarah Johnson',
    issued: 'Jan 1, 2024',
    status: 'active'
  },
  {
    id: '3',
    title: 'Performance Excellence Award',
    category: 'performance',
    description: 'Exceptional performance in system optimization and infrastructure improvements.',
    recipient: 'Mike Chen',
    issued: 'Dec 15, 2023',
    status: 'active'
  }
];

  const reports: Reports[] = [
  {
    id: '1',
    title: 'Employee ID Card',
    category: 'employe id',
    description: 'Successfully completed advanced React development training program with excellent performance.',
    recipient: 'John Smith',
    issued: 'Jan 10, 2024',
    validUntil: 'Jan 10, 2025',
    status: 'Issued'
  },
  {
    id: '2',
    title: 'Employee  Vertical Letter',
    category: 'latter',
    description: 'Recognized for outstanding performance and leadership in Q4 marketing campaigns.',
    recipient: 'Sarah Johnson',
    issued: 'Jan 1, 2024',
    status: 'deliverd'
  },
  {
    id: '3',
    title: 'Annual Performance Report',
    category: 'report',
    description: 'Exceptional performance in system optimization and infrastructure improvements.',
    recipient: 'Mike Chen',
    issued: 'Dec 15, 2023',
    status: 'Issued'
  }
];


  return (
    <main className="min-h-screen bg-gray-50 p-6">
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
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 mt-6">
          {EmployeeIds.map((member, idx) => (
            <HrToolsCards key={idx} member={member} />
          ))}
        </div>
      )}

      {/* Certificates tab content */}
      {activeTab === "certificates" && (
        <Certificates certificates={certificates} />
      )}

      {/* Letters tab content */}
      {activeTab === "letters-reports" && (
        <LettersReports reports={reports}/>
      )}
    </main>
  );
};

export default HrToolsPage;
