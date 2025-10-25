import React from "react";
import Image from "next/image";
     import { Eye, Printer } from "lucide-react";

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
      <div className="flex gap-4 items-center">
        <div className="">
          <Image
            src={member.image}
            alt="Profile picture"
            width={100}
            height={100}
            className="rounded-full"
          ></Image>
        </div>
        <div className="">
          <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
          <p className="text-sm text-gray-400 font-medium">{member.role}</p>
          <p className="text-sm text-gray-400 font-medium">
            {member.department}
          </p>
        </div>
      </div>

      {/* Details */}
<div className="mt-4 space-y-2 font-semibold text-sm text-gray-700">
  <div className="flex justify-between">
    <span className="font-semibold text-gray-500">Employee ID:</span>
    <span>{member.id}</span>
  </div>

  <div className="flex justify-between">
    <span className="font-semibold text-gray-500">Join Date:</span>
    <span>{member.joinDate}</span>
  </div>

  <div className="flex justify-between">
    <span className="font-semibold text-gray-500">Email:</span>
    <span className="truncate max-w-[150px] sm:max-w-[250px] text-right">
      {member.email}
    </span>
  </div>
</div>



      {/* Action Buttons */}
 
<div className="mt-4 flex justify-center gap-3">
  <button className="flex items-center justify-center gap-2 bg-rose-600 w-full text-white text-sm px-4 py-1.5 rounded-lg hover:bg-rose-700 transition">
    <Eye size={16} />
    View ID
  </button>

  <button className="flex items-center justify-center gap-2 bg-rose-600 w-full text-white text-sm px-4 py-1.5 rounded-lg hover:bg-rose-700 transition">
    <Printer size={16} />
    Print
  </button>
</div>

    </div>
  );
};
