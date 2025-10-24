"use client";
import Modal from "./Modal";
import { Calendar, Clock, Send } from "lucide-react";

export default function ScheduleMeet({ isOpen, onClose }) {
  return (
    <Modal title="Schedule Meeting" isOpen={isOpen} onClose={onClose}>
      {/* Scrollable Container */}
      <div className="max-h-[70vh] overflow-y-auto pr-2 space-y-4">
        {/* Meeting Title */}
        <div>
          <label
            htmlFor="meetTitle"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Meeting Title
          </label>
          <input
            id="meetTitle"
            type="text"
            placeholder="Enter meeting title"
            className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-rose-500 outline-none"
          />
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            rows={3}
            placeholder="Enter meeting description"
            className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-rose-500 outline-none resize-none"
          />
        </div>

        {/* Meeting Type */}
        <div>
          <label
            htmlFor="meetType"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Meeting Type
          </label>
          <select
            id="meetType"
            className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-rose-500 outline-none"
          >
            <option value="">Select meeting type</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Location / Link
          </label>
          <input
            id="location"
            type="text"
            placeholder="Enter meeting location or link"
            className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-rose-500 outline-none"
          />
        </div>

        {/* Date and Time */}
        <div className="flex space-x-4">
          <div className="flex-1">
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-2 top-2.5 w-4 h-4 text-gray-400" />
              <input
                id="date"
                type="date"
                className="w-full border border-gray-300 rounded-lg p-2 pl-8 text-sm focus:ring-2 focus:ring-rose-500 outline-none"
              />
            </div>
          </div>
          <div className="flex-1">
            <label
              htmlFor="time"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Time
            </label>
            <div className="relative">
              <Clock className="absolute left-2 top-2.5 w-4 h-4 text-gray-400" />
              <input
                id="time"
                type="time"
                className="w-full border border-gray-300 rounded-lg p-2 pl-8 text-sm focus:ring-2 focus:ring-rose-500 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Duration */}
        <div>
          <label
            htmlFor="duration"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Duration (in minutes)
          </label>
          <input
            id="duration"
            type="number"
            placeholder="Enter duration"
            className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-rose-500 outline-none"
          />
        </div>

        {/* Attendance */}
        <div>
          <label
            htmlFor="attendance"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Attendance
          </label>
          <select
            id="attendance"
            className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-rose-500 outline-none"
          >
            <option value="">Select attendees</option>
            <option value="team">Entire Team</option>
            <option value="specific">Specific Members</option>
          </select>
        </div>

        {/* Agenda Items */}
        <div>
          <label
            htmlFor="agenda"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Agenda Items
          </label>
          <textarea
            id="agenda"
            rows={3}
            placeholder="List the meeting agenda items"
            className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-rose-500 outline-none resize-none"
          />
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-end mt-5 space-x-3 border-t pt-3">
        <button
          onClick={onClose}
          className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm border border-gray-200"
        >
          Cancel
        </button>
        <button className="flex items-center space-x-2 bg-rose-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-rose-700">
          <Send className="w-4 h-4" />
          <span>Schedule Meeting</span>
        </button>
      </div>
    </Modal>
  );
}
