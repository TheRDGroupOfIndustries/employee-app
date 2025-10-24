"use client";
import Modal from "./Modal";
import { Send } from "lucide-react";

export default function AssignTaskModal({ isOpen, onClose }) {
  return (
    <>
      <Modal title="Assign New Task" isOpen={isOpen} onClose={onClose}>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="taskTitle"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Task Title
            </label>
            <input
              id="taskTitle"
              type="text"
              placeholder="Enter task title"
              className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-red-500 outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              placeholder="Enter task description"
              className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-red-500 outline-none"
            />
          </div>
         
          <div>
            <label
              htmlFor="assignTo"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Assign To
            </label>
            <select
              id="assignTo"
              className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-red-500 outline-none"
            >
              <option value="">Select board member</option>
              <option value="member1">Member 1</option>
              <option value="member2">Member 2</option>
              <option value="member3">Member 3</option>
            </select>
          </div>
           <div className="flex space-x-4">
            <div className="flex-1">
              <label
                htmlFor="priority"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Priority
              </label>
              <select
                id="priority"
                className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-red-500 outline-none"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            <div className="flex-1">
              <label
                htmlFor="dueDate"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Due Date
              </label>
              <input
                id="dueDate"
                type="date"
                className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-red-500 outline-none"
              />
            </div>
          </div>

          <div className="flex justify-end mt-5 space-x-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm border border-gray-200"
            >
              Cancel
            </button>
            <button className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600">
              <Send className="w-4 h-4" />
              <span>Assign Task</span>
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
