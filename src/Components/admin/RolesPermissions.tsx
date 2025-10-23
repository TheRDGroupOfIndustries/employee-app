"use client";
import { Check } from "lucide-react";

// Type for role permissions
interface Role {
  name: string;
  permissions: string[];
}

// Reusable RoleCard component
const RoleCard = ({ role }: { role: Role }) => {
  return (
    <div className="p-4 rounded-lg border border-gray-200 hover:border-red-200 hover:shadow">
      <h4 className="text-md font-medium mb-2 text-gray-800">{role.name}</h4>
      {role.permissions.map((perm, index) => (
        <p className="flex items-center gap-2 mb-2" key={index}>
          <Check className="text-green-600 w-4 h-4" /> <span>{perm}</span>
        </p>
      ))}
      <button className="w-full px-4 py-2 text-gray-800 font-medium rounded-lg border border-gray-200 hover:shadow-xs hover:border-red-200">
        Assign Role
      </button>
    </div>
  );
};

// Main RolesPermissions component
const RolesPermissions = () => {
  const roles: Role[] = [
    { name: "Admin", permissions: ["Full Access"] },
    { name: "Manager", permissions: ["Team Management", "Project Access", "Reports"] },
    { name: "Employee", permissions: ["Basic Access", "Time Tracking"] },
    { name: "HR", permissions: ["Employee Records", "Payroll", "Recruitment"] },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm text-gray-500">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Roles & Permissions Management
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {roles.map((role, index) => (
          <RoleCard key={index} role={role} />
        ))}
      </div>
    </div>
  );
};

export default RolesPermissions;
