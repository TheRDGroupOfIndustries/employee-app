"use client";

import React, { useState } from "react";
import { MoveLeft, Mail, MessageSquare, Smartphone } from "lucide-react";

// --- ToggleSwitch Component ---
interface ToggleSwitchProps {
  checked: boolean;
  onChange: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange }) => (
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
);

// --- Main Notification Settings Component ---
const NotificationSettings: React.FC = () => {
  const [emailNotif, setEmailNotif] = useState<boolean>(true);
  const [smsNotif, setSmsNotif] = useState<boolean>(false);
  const [appNotif, setAppNotif] = useState<boolean>(true);

  return (
    <div className="min-h-screen bg-gray-100/50 flex flex-col items-center text-gray-800">
      {/* 🔹 Navbar */}
      <nav className="sticky top-0 z-10 w-full flex items-center gap-5 px-5 py-4 bg-rose-700 shadow-lg">
        <MoveLeft
          className="w-6 h-6 text-white cursor-pointer"
          onClick={() => window.history.back()}
        />
        <h1 className="text-xl text-white font-bold tracking-tight">
          Notification Preferences
        </h1>
      </nav>

      <div className="w-full max-w-4xl p-4 sm:p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-4">
          Manage Your Alerts
        </h2>

        <div className="bg-white shadow-2xl rounded-3xl p-6 sm:p-8 space-y-6">
          {/* Email Notifications */}
          <div className="flex items-start justify-between border-b pb-6 border-gray-100">
            <div className="flex items-start gap-4">
              <div className="bg-rose-100 p-2 rounded-full">
                <Mail className="w-5 h-5 text-rose-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  Email Notifications
                </h3>
                <p className="text-sm text-gray-500 max-w-lg mt-0.5">
                  Get important system announcements, security alerts, and
                  weekly summary reports sent directly to your inbox.
                </p>
              </div>
            </div>
            <div className="pt-1">
              <ToggleSwitch
                checked={emailNotif}
                onChange={() => setEmailNotif(!emailNotif)}
              />
            </div>
          </div>

          {/* SMS Notifications */}
          <div className="flex items-start justify-between border-b pb-6 border-gray-100">
            <div className="flex items-start gap-4">
              <div className="bg-rose-100 p-2 rounded-full">
                <MessageSquare className="w-5 h-5 text-rose-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  SMS Notifications
                </h3>
                <p className="text-sm text-gray-500 max-w-lg mt-0.5">
                  Receive urgent, real-time messages regarding attendance issues
                  or critical task deadlines via text message.
                </p>
              </div>
            </div>
            <div className="pt-1">
              <ToggleSwitch
                checked={smsNotif}
                onChange={() => setSmsNotif(!smsNotif)}
              />
            </div>
          </div>

          {/* App Notifications */}
          <div className="flex items-start justify-between pt-0">
            <div className="flex items-start gap-4">
              <div className="bg-rose-100 p-2 rounded-full">
                <Smartphone className="w-5 h-5 text-rose-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  Mobile Push Notifications
                </h3>
                <p className="text-sm text-gray-500 max-w-lg mt-0.5">
                  Get instant push alerts on your phone for new assignments,
                  chat messages, and in-app activity.
                </p>
              </div>
            </div>
            <div className="pt-1">
              <ToggleSwitch
                checked={appNotif}
                onChange={() => setAppNotif(!appNotif)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;
