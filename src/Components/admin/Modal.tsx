"use client";
import React from "react";
import { X } from "lucide-react";

export default function Modal({ title, children, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      className={`fixed inset-0 bg-white/10 bg-opacity-10 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out`}
    >
      <div
        tabIndex={-1}
        className="bg-white rounded-xl shadow-lg w-[420px] p-6 relative focus:outline-none"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 id="modal-title" className="text-lg font-semibold text-gray-800">
            {title}
          </h2>
          <button
            aria-label="Close"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div>{children}</div>
      </div>
    </div>
  );
}
