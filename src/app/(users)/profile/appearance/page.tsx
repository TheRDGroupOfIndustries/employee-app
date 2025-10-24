"use client";
import React, { useState } from "react";
import { MoveLeft, Moon, Sun, Type } from "lucide-react";

// ✅ Define types for props
interface ToggleSwitchProps {
  checked: boolean;
  onChange: () => void;
  label: string;
}

// --- Reusable Toggle Switch Component ---
const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange, label }) => (
  <div className="flex items-center justify-between w-full">
    <div className="flex items-center gap-3">
      {/* Icon based on state */}
      <div className="p-2 rounded-full bg-gray-100">
        {checked ? (
          <Moon className="w-5 h-5 text-rose-600" />
        ) : (
          <Sun className="w-5 h-5 text-gray-500" />
        )}
      </div>
      <span className="font-semibold text-lg">{label}</span>
    </div>

    <button
      type="button"
      onClick={onChange}
      className={`${
        checked ? "bg-rose-600" : "bg-gray-300"
      } relative inline-flex h-7 w-12 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 shadow-inner`}
      role="switch"
      aria-checked={checked}
    >
      <span
        aria-hidden="true"
        className={`${
          checked ? "translate-x-5" : "translate-x-0"
        } pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
      />
    </button>
  </div>
);

// --- Main Appearance Settings Component ---
const AppearanceSettings: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
 
  return (
    <div className="min-h-screen bg-gray-100/50 flex flex-col items-center text-gray-800">
      {/* 🔹 Top Navbar */}
      <nav className="sticky top-0 z-10 w-full flex items-center gap-5 px-5 py-4 bg-rose-700 shadow-lg">
        <MoveLeft
          className="w-6 h-6 text-white cursor-pointer"
          onClick={() => window.history.back()}
        />
        <h1 className="text-xl text-white font-bold tracking-tight">Appearance</h1>
      </nav>

      <main className="w-full max-w-xl p-4 sm:p-8">
        {/* Section Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-4">Display Preferences</h2>

        <div className="bg-white shadow-xl rounded-2xl p-6 space-y-8 divide-y divide-gray-100">
          {/* 1️⃣ Dark Mode Toggle */}
          <div className="py-2">
            <ToggleSwitch
              label="Dark Mode"
              checked={isDarkMode}
              onChange={() => setIsDarkMode(!isDarkMode)}
            />
            <p className="text-sm text-gray-500 mt-2 ml-14">
              {isDarkMode
                ? "Dark theme activated for better viewing in low light."
                : "Light theme is currently active."}
            </p>
          </div>

          
        </div>
 
      </main>
    </div>
  );
};

export default AppearanceSettings;
