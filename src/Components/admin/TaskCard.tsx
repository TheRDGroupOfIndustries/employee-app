// src/Components/admin/TaskCard.jsx
import { Calendar, Eye, PencilLine, User } from "lucide-react";
import React from "react";

const TaskCard = ({ task }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 border border-gray-200">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-gray-800">{task.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{task.description}</p>
          <div className="flex items-center space-x-4 mt-2 text-gray-500">
            <span className="flex items-center gap-1 text-xs font-medium">
              <User size={14} />
              {task.assignedTo}
            </span>
            <span className="flex items-center gap-1 text-xs">
              <Calendar size={14} />
              Due: {task.dueDate}
            </span>
          </div>
        </div>
        <div className="flex space-x-2">
          <span
            className={`text-xs font-medium px-3 py-1 rounded-full ${
              task.priority === "high priority"
                ? "bg-red-100 text-red-500"
                : "bg-yellow-100 text-yellow-500"
            }`}
          >
            {task.priority}
          </span>
          <span
            className={`text-xs font-medium px-3 py-1 rounded-full ${
              task.status === "todo"
                ? "bg-gray-100 text-gray-500"
                : task.status === "in progress"
                ? "bg-blue-100 text-blue-500"
                : "bg-green-100 text-green-500"
            }`}
          >
            {task.status}
          </span>
        </div>
      </div>

      <div className="flex justify-end mt-4 gap-2">
        <button className="w-fit py-2 px-4 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600 transition flex items-center justify-center gap-2">
          <PencilLine size={15} />
          <span>Edit Employee</span>
        </button>
 <button className="w-fit py-2 px-4 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600 transition flex items-center justify-center gap-2">          <Eye size={15} />
          <span>View Details</span>
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
