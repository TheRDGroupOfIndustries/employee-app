"use client";
import Modal from "./Modal";
import { Send } from "lucide-react";

export default function CreateProjectModal({ isOpen, onClose }) {
  return (
    <>
      <Modal title="Create New Project" isOpen={isOpen} onClose={onClose}>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="projectName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Project Name
            </label>
            <input
              id="projectName"
              type="text"
              placeholder="Enter project name"
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
              placeholder="Enter project description"
              className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-red-500 outline-none"
            />
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
                htmlFor="status"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Status
              </label>
              <select
                id="status"
                className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-red-500 outline-none"
              >
                <option value="planning">Planning</option>
                <option value="active">Active</option>
                <option value="on hold">On Hold</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>

          <div className="flex space-x-4">
            <div>
              <label
                htmlFor="startDate"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Start Date
              </label>
              <input
                id="startDate"
                type="date"
                className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-red-500 outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="endDate"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                End Date
              </label>
              <input
                id="endDate"
                type="date"
                className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-red-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="teamMembers"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Team Members
            </label>
            <input
              id="teamMembers"
              type="text"
              placeholder="Enter team member names (comma separated)"
              className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-red-500 outline-none"
            />
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
              <span>Create Project</span>
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
