"use client";
import Modal from "./Modal";
import { Send } from "lucide-react";

export default function SendMessageModal({ isOpen, onClose }) {
  return (
    <>
      <Modal title="Send Message" isOpen={isOpen} onClose={onClose}>
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-semibold text-gray-600">
            SJ
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">Sarah Johnson</h4>
            <p className="text-sm text-gray-500">Senior Developer</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="Enter message subject"
              className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-red-500 outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Type your message here..."
              className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-red-500 outline-none"
            />
          </div>

          <div>
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
            <span>Send Message</span>
          </button>
        </div>
      </Modal>
    </>
  );
}
