"use client";

import Image from "next/image";
import { Briefcase, Mail, Phone } from "lucide-react";

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

export const MemberCard = ({ member }: { member: Member }) => {
  const statusClasses =
    member.status === "active"
      ? "bg-green-100 text-green-700"
      : member.status === "busy"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-gray-200 text-gray-500";

  return (
    <div className="bg-white rounded-xl shadow p-4 border border-gray-100 hover:shadow-lg transition">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-2">
        <Image
          src={member.image}
          alt={member.name}
          width={60}
          height={60}
          className="rounded-full"
        />
        <div>
          <h2 className="font-semibold text-gray-800">{member.name}</h2>
          <p className="text-sm text-gray-500">{member.role}</p>
          <span
            className={`inline-block text-xs px-3 py-0.5 rounded-full font-semibold mb-2 ${statusClasses}`}
          >
            {member.status.charAt(0).toUpperCase() + member.status.slice(1)}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="mt-3 text-sm text-gray-600 space-y-1">
        <p className="flex items-center gap-2">
          <Briefcase size={16} />
          {member.department}
        </p>
        <p className="flex items-center gap-2">
          <Mail size={16} />
          {member.email}
        </p>
        <p className="flex items-center gap-2">
          <Phone size={16} />
          {member.phone}
        </p>
      </div>

      {/* Tasks */}
      <div className="flex justify-center items-center gap-12 mt-4 text-sm">
        <div className="flex flex-col items-center">
          <p className="text-red-500 font-semibold text-2xl">{member.activeTasks}</p>
          <p className="text-gray-500 text-xs font-medium">Active Tasks</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-green-600 font-semibold text-2xl">{member.completedTasks}</p>
          <p className="text-gray-500 text-xs font-medium">Completed</p>
        </div>
      </div>

      <button className="mt-4 w-full bg-red-500 font-medium text-white py-2 rounded-lg hover:bg-red-600 text-sm">
        Assign Task
      </button>
    </div>
  );
};
