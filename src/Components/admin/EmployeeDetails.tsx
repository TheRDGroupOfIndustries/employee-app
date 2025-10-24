import { PencilLine, Mail, UserCircle2 } from "lucide-react";

export default function EmployeeDetails({
  selectedEmployee,
  onEdit,
  onSendMessage,
}) {
  if (!selectedEmployee) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-20 text-center">
        <UserCircle2 className="w-16 h-16 text-gray-300 mb-4" />
        <h4 className="text-gray-800 font-semibold text-lg mb-2">All Employees</h4>
        <p className="text-sm text-gray-500">Select an employee to view details</p>
      </div>
    );
  }


  return (
    <div className="space-y-5">
      <div className="flex flex-col items-center text-center border-gray-200">
        <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-xl font-medium text-gray-600 mb-3">
          {selectedEmployee.avatar}
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-1">
          {selectedEmployee.name}
        </h3>
        <p className="text-sm text-gray-600">{selectedEmployee.position}</p>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-gray-800 mb-3">
          Contact Information
        </h4>
        <div className="space-y-2">
          <p className="text-sm text-gray-600">{selectedEmployee.email}</p>
          <p className="text-sm text-gray-600">{selectedEmployee.phone}</p>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-gray-800 mb-3">
          Performance Badges
        </h4>
        <div className="flex flex-wrap gap-2">
          {selectedEmployee.badges.map((badge, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-medium"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-gray-800 mb-3">Quick Stats</h4>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Join Date</span>
            <span className="text-sm font-medium text-gray-800">
              {selectedEmployee.joinDate}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Department</span>
            <span className="text-sm font-medium text-gray-800">
              {selectedEmployee.department}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Attendance</span>
            <span className="text-sm font-medium text-gray-800">
              {selectedEmployee.attendance}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-3 pt-4">
        <button
          onClick={onEdit}
          className="w-full py-2 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600 transition-colors flex items-center justify-center space-x-2"
        >
          <PencilLine size={15} />
          <span>Edit Employee</span>
        </button>
        <button
          onClick={onSendMessage}
          className="w-full py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
        >
          <Mail size={15} />
          <span>Send Message</span>
        </button>
      </div>
    </div>
  );
}
