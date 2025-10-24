import { ChevronRight } from "lucide-react";

export default function EmployeeCard({
  employee,
  selectedEmployee,
  setSelectedEmployee,
}) {
  const isSelected = selectedEmployee?.name === employee.name;

  return (
    <div
      onClick={() => setSelectedEmployee(employee)}
      className={`bg-white rounded-lg p-4 cursor-pointer border transition-all ${
        isSelected
          ? "border-red-500 shadow-md"
          : "border-gray-200 hover:border-red-200 hover:shadow-sm"
      }`}
    >
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-sm font-medium text-gray-600">
          {employee.avatar}
        </div>

        <div className="flex-1 flex justify-between items-center">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <h4 className="font-semibold text-gray-800">{employee.name}</h4>
              <span className="text-xs px-2 py-0.5 bg-green-100 text-green-600 rounded-full font-medium">
                {employee.status}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-1">
              {employee.position} • {employee.department}
            </p>
            <div className="flex items-center space-x-4 text-xs text-gray-500 font-medium">
              <span>Attendance: {employee.attendance}</span>
              <span>Performance: {employee.performance}</span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col items-end text-right">
              <p className="font-semibold text-gray-800">{employee.salary}</p>
              <p className="text-xs text-gray-500 font-medium">Annual</p>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
