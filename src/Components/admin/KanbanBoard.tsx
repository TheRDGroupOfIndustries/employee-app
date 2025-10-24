"use client";
import { Link, MessageCircle, Plus } from "lucide-react";
import { useState } from "react";

const KanbanBoard = ({ tasks }) => {
  const [taskList, setTaskList] = useState(tasks);

  const moveTask = (taskId, newStatus) => {
    setTaskList((prevTasks) =>
      prevTasks.map((task) =>
        task.id === parseInt(taskId) ? { ...task, status: newStatus } : task
      )
    );
  };

  const statuses = ["To Do", "In Progress", "Review", "Completed"];

  // Background colors for each column
  const statusColors = {
    "To Do": "bg-gray-100",
    "In Progress": "bg-blue-100",
    Review: "bg-yellow-100",
    Completed: "bg-green-100",
  };

  return (
    <div className="text-gray-500">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-800">Task Board</h3>
        <button className="flex font-medium items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600">
          <Plus className="w-4 h-4" />
          <span>Add Task</span>
        </button>
      </div>

      <div className="flex gap-4">
        {statuses.map((status) => {
          const tasksForStatus = taskList.filter(
            (task) => task.status === status
          );

          return (
            <div
              key={status}
              className={`w-1/4 p-4 rounded-lg shadow-sm ${statusColors[status]} `}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const taskId = e.dataTransfer.getData("text/plain");
                moveTask(taskId, status);
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {status}
                </h2>
                <span className="bg-white text-gray-700 rounded-full px-3 py-1 text-xs font-medium shadow">
                  {tasksForStatus.length}
                </span>
              </div>

              <div className="space-y-4 items-start">
                {tasksForStatus.map((task) => (
                  <div
                    key={task.id}
                    className={`p-4 rounded-lg shadow-md border border-gray-200 cursor-pointer bg-white`}
                    draggable
                    onDragStart={(e) =>
                      e.dataTransfer.setData("text/plain", task.id)
                    }
                  >
                    <h3 className="font-medium text-gray-800">{task.title}</h3>
                    <p className="text-sm text-gray-600">{task.description}</p>
                    <div className="flex justify-between mt-2 text-xs text-gray-500">
                      <span>{task.assignee}</span>
                      <div className="flex space-x-2 items-center">
                        <span className="flex items-center space-x-1">
                          <Link size={14} />
                          <span>{task.link}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <MessageCircle size={14} />
                          <span>{task.comment}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KanbanBoard;
