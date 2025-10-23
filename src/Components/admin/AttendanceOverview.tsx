"use client";
import React from "react";
import Image from "next/image";

const attendanceData = [
  {
    name: "Sarah Johnson",
    role: "Senior Developer",
    avatar: "/images/dummy_profile.png",
    thisWeek: "40/40 hrs",
    thisMonth: "168/172 hrs",
    overall: "98%",
    status: "On Time",
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
   avatar: "/images/dummy_profile.png",
    thisWeek: "40/40 hrs",
    thisMonth: "168/172 hrs",
    overall: "95%",
    status: "On Time",
  },
  {
    name: "Emily Davis",
    role: "UX Designer",
   avatar: "/images/dummy_profile.png",
    thisWeek: "40/40 hrs",
    thisMonth: "168/172 hrs",
    overall: "92%",
    status: "On Time",
  },
  {
    name: "David Wilson",
    role: "Marketing Director",
  avatar: "/images/dummy_profile.png",
    thisWeek: "40/40 hrs",
    thisMonth: "168/172 hrs",
    overall: "97%",
    status: "On Time",
  },
];

export default function AttendanceOverview() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-6">
        Attendance Overview
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-600">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-2">Employee</th>
              <th className="py-2">This Week</th>
              <th className="py-2">This Month</th>
              <th className="py-2">Overall</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((emp, i) => (
              <tr key={i} className=" hover:bg-gray-100 transition">
                <td className="py-3 flex items-center space-x-3 px-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src={emp.avatar}
                      alt={emp.name}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{emp.name}</p>
                    <p className="text-xs text-gray-500">{emp.role}</p>
                  </div>
                </td>
                <td className="py-3 font-medium">{emp.thisWeek}</td>
                <td className="py-3 font-medium">{emp.thisMonth}</td>
                <td className="py-3 font-medium">{emp.overall}</td>
                <td className="py-3">
                  <span className="text-xs font-medium bg-green-100 text-green-700 px-3 py-1 rounded-full">
                    {emp.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
