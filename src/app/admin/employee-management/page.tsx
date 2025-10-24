"use client";
import React from "react";
import { useState } from "react";
import {
  Download,
  Search,
  Filter,
  UserCircle2,
  UserRoundPlus,
  PencilLine,
  Mail,
} from "lucide-react";
import EmployeeCard from "@/src/Components/admin/EmployeeCard";
import EmployeeDetails from "@/src/Components/admin/EmployeeDetails";
import EditDetailsModal from "@/src/Components/admin/EditDetailsModal";
import SendMessageModal from "@/src/Components/admin/SendMessageModal";
import AttendanceOverview from "@/src/Components/admin/AttendanceOverview";
import RolesPermissions from "@/src/Components/admin/RolesPermissions";
import { TabSelector } from "@/src/Components/admin/TabSelector";

export default function EmployeeManagementPage() {
  const [activeTab, setActiveTab] = useState("list");
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isMessageOpen, setIsMessageOpen] = useState(false);

  const handleEdit = () => setIsEditOpen(true);
  const handleSendMessage = () => setIsMessageOpen(true);

  const employees = [
    {
      name: "Sarah Johnson",
      position: "Senior Developer",
      department: "Engineering",
      status: "Active",
      attendance: "95%",
      performance: "Excellent",
      salary: "$85,000",
      avatar: "SJ",
      email: "sarah.johnson@rdgroup.com",
      phone: "+1 (555) 123-4567",
      joinDate: "2022-03-15",
      badges: ["Top Performer", "Team Lead", "Innovation Award"],
    },
    {
      name: "Michael Chen",
      position: "Product Manager",
      department: "Product",
      status: "Active",
      attendance: "93%",
      performance: "Excellent",
      salary: "$92,000",
      avatar: "MC",
      email: "michael.chen@rdgroup.com",
      phone: "+1 (555) 234-5678",
      joinDate: "2021-07-20",
      badges: ["Top Performer", "Innovation Award"],
    },
    {
      name: "Emily Davis",
      position: "UX Designer",
      department: "Design",
      status: "Active",
      attendance: "92%",
      performance: "Good",
      salary: "$78,000",
      avatar: "ED",
      email: "emily.davis@rdgroup.com",
      phone: "+1 (555) 345-6789",
      joinDate: "2023-01-10",
      badges: ["Team Lead"],
    },
    {
      name: "David Wilson",
      position: "Marketing Director",
      department: "Marketing",
      status: "Active",
      attendance: "97%",
      performance: "Excellent",
      salary: "$95,000",
      avatar: "DW",
      email: "david.wilson@rdgroup.com",
      phone: "+1 (555) 456-7890",
      joinDate: "2020-11-05",
      badges: ["Top Performer", "Team Lead"],
    },
  ];

  return (
    <div className=" min-h-screen bg-gray-50">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Employee Management
          </h2>
          <p className="text-gray-500 text-sm font-medium">
            Manage your team members, roles, and permissions
          </p>
        </div>

        <div className="flex space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
            <Download className="w-4 h-4" />
            <span>Export Data</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600">
            <UserRoundPlus className="w-4 h-4" />
            <span>Add Employee</span>
          </button>
        </div>
      </div>

      <TabSelector
        tabs={[
          { id: "list", label: "Employee List" },
          { id: "roles", label: "Roles & Permissions" },
          { id: "attendance", label: "Attendance" },
        ]}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div>
        {activeTab === "list" && (
          <div className="grid grid-cols-3 gap-6 items-start">
            <div className="col-span-2 rounded-lg bg-white p-4">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  All Employees ({employees.length})
                </h3>
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search employees..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Filter className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="space-y-4 overflow-y-auto max-h-[70vh] pr-2">
                {employees.map((employee, index) => (
                  <EmployeeCard
                    key={index}
                    employee={employee}
                    selectedEmployee={selectedEmployee}
                    setSelectedEmployee={setSelectedEmployee}
                  />
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <EmployeeDetails
                selectedEmployee={selectedEmployee}
                onEdit={handleEdit}
                onSendMessage={handleSendMessage}
              />
            </div>
          </div>
        )}

        {activeTab === "roles" && <RolesPermissions />}

        {activeTab === "attendance" && <AttendanceOverview />}
      </div>
      <EditDetailsModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        // employee={selectedEmployee}
      />
      <SendMessageModal
        isOpen={isMessageOpen}
        onClose={() => setIsMessageOpen(false)}
        // employee={selectedEmployee}
      />
    </div>
  );
}
