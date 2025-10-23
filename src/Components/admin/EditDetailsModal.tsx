"use client";

import Modal from "./Modal";
import { Save } from "lucide-react";

export default function EditDetailsModal({ isOpen, onClose }) {
  return (
    <>
      <Modal title="Edit Employee Details" isOpen={isOpen} onClose={onClose}>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="text"
            placeholder="Position"
            className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="text"
            placeholder="Department"
            className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
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
            <Save className="w-4 h-4" />
            <span>Save Changes</span>
          </button>
        </div>
      </Modal>
    </>
  );
}
