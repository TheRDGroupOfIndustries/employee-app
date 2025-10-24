import React from "react";

interface EmployeeIdProps {
  member: {
    name: string;
    role: string;
    department: string;
    email: string;
    id: string;
    joinDate: string;
    image: string;
  };
}

export const HrToolsCards: React.FC<EmployeeIdProps> = ({ member }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-5 border border-gray-100 hover:shadow-lg transition duration-300">
      {/* Profile Image */}
      <div className="flex flex-col items-center">
        <img
          src={member.image}
          alt={member.name}
          className="w-24 h-24 rounded-full object-cover border-4 border-rose-200 mb-3"
        />
        <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
        <p className="text-sm text-rose-600 font-medium">{member.role}</p>
      </div>

      {/* Details */}
      <div className="mt-4 text-sm text-gray-600 space-y-1">
        <p>
          <span className="font-semibold text-gray-700">Department:</span>{" "}
          {member.department}
        </p>
        <p>
          <span className="font-semibold text-gray-700">Employee ID:</span>{" "}
          {member.id}
        </p>
        <p>
          <span className="font-semibold text-gray-700">Join Date:</span>{" "}
          {member.joinDate}
        </p>
        <p>
          <span className="font-semibold text-gray-700">Email:</span>{" "}
          {member.email}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 flex justify-center gap-3">
        <button className="bg-rose-600 text-white text-sm px-4 py-1.5 rounded-lg hover:bg-rose-700 transition">
          View ID
        </button>
        <button className="border border-rose-500 text-rose-600 text-sm px-4 py-1.5 rounded-lg hover:bg-rose-50 transition">
          Print
        </button>
      </div>
    </div>
  );
};
