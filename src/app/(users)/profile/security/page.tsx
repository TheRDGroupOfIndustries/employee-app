"use client";
import React, { useState, FC } from "react";
import { MoveLeft, Key, Activity, FileText, ChevronRight } from "lucide-react";

// 1. Define Props for ToggleSwitch
interface ToggleSwitchProps {
  checked: boolean;
  onChange: () => void;
  label: string;
}

// --- Reusable Toggle Switch Component (FC with Props) ---
const ToggleSwitch: FC<ToggleSwitchProps> = ({ checked, onChange, label }) => (
  <div className="flex items-center justify-between w-full">
    <div className="flex items-center gap-3">
      {/* Label and description for the setting */}
      <span className="font-semibold text-lg">{label}</span>
    </div>

    <button
      type="button"
      onClick={onChange}
      className={`${
        checked ? "bg-rose-600" : "bg-gray-300"
      } relative inline-flex h-7 w-12
       cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 shadow-inner`}
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

// 2. Define Props for SettingsLink
interface SettingsLinkProps {
  icon: React.ElementType;
  title: string;
  description: string;
  actionText: string;
}

// --- Reusable Link Item Component (FC with Props) ---
const SettingsLink: FC<SettingsLinkProps> = ({
  icon: Icon,
  title,
  description,
  actionText,
}) => (
  <a
    href="#" // Placeholder for actual routing/action
    onClick={(e) => {
      e.preventDefault();
      console.log(`${title} clicked`);
    }}
    className="flex items-center justify-between p-4 bg-white rounded-lg hover:bg-gray-50 transition duration-150 cursor-pointer"
  >
    <div className="flex items-start gap-4">
      <div className="p-3 bg-rose-100 rounded-full ">
        <Icon className="w-5 h-5 text-rose-600" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800 leading-tight">
          {title}
        </h3>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>
    </div>
    <div className="flex items-center gap-2 text-rose-600 text-sm font-medium">
      <span>{actionText}</span>
      <ChevronRight className="w-4 h-4" />
    </div>
  </a>
);

// --- Main Privacy & Security Settings Component (FC) ---
const PrivacySecuritySettings: FC = () => {
  // State for security and privacy settings (Types are inferred as boolean)
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [isBiometricsEnabled, setIsBiometricsEnabled] = useState(true);
  const [isDataSharingEnabled, setIsDataSharingEnabled] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100/50 flex flex-col items-center text-gray-800">
      {/* 🔹 Top Navbar */}
      <nav className="sticky top-0 z-10 w-full flex items-center gap-5 px-5 py-4 bg-rose-700 shadow-lg">
        <MoveLeft
          className="w-6 h-6 text-white cursor-pointer"
          onClick={() => window.history.back()}
        />
        <h1 className="text-xl text-white font-bold tracking-tight">
          Privacy & Security
        </h1>
      </nav>

      <main className="w-full max-w-xl p-4 sm:p-8">
        {/* Section Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-4">
          Account Security
        </h2>

        <div className="bg-white shadow-xl rounded-2xl p-6 space-y-4">
          {/* Change Password */}
          <SettingsLink
            icon={Key}
            title="Change Password"
            description="Update your current password to keep your account safe."
            actionText="Update"
          />

          {/* 2. Two-Factor Authentication (Toggle) */}
          <div className="py-3 flex flex-col gap-2">
            <ToggleSwitch
              label="Two-Factor Authentication (2FA)"
              checked={is2FAEnabled}
              onChange={() => setIs2FAEnabled(!is2FAEnabled)}
            />
            <p className="text-sm text-gray-500 ml-1">
              {is2FAEnabled
                ? "2FA is active. A code is required when you sign in."
                : "Add an extra layer of protection to your account."}
            </p>
          </div>

          {/* Biometric/Face ID Login (Toggle) */}
          <div className="py-3 flex flex-col gap-2">
            <ToggleSwitch
              label="Biometric Login (Face ID/Fingerprint)"
              checked={isBiometricsEnabled}
              onChange={() => setIsBiometricsEnabled(!isBiometricsEnabled)}
            />
            <p className="text-sm text-gray-500 ml-1">
              {isBiometricsEnabled
                ? "Login via biometrics is enabled."
                : "Enable quick and secure login using your device's biometric scanner."}
            </p>
          </div>
        </div>

        {/* --- Data & Privacy Section --- */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-8">
          Data & Privacy
        </h2>
        <div className="bg-white shadow-xl rounded-2xl p-6 space-y-4">
          {/* Data Sharing Toggle */}
          <div className="py-3 flex flex-col gap-2">
            <ToggleSwitch
              label="Share Usage Data"
              checked={isDataSharingEnabled}
              onChange={() => setIsDataSharingEnabled(!isDataSharingEnabled)}
            />
            <p className="text-sm text-gray-500 ml-1">
              {isDataSharingEnabled
                ? "You are helping us improve the app experience."
                : "Disable to prevent sharing anonymous usage statistics."}
            </p>
          </div>

          {/* Active Sessions */}
          <SettingsLink
            icon={Activity}
            title="Manage Active Sessions"
            description="View devices currently logged into your account."
            actionText="View"
          />

          {/* Privacy Policy */}
          <SettingsLink
            icon={FileText}
            title="Privacy Policy"
            description="Read our terms on how we handle and protect your data."
            actionText="Read"
          />
        </div>

        {/* Security Note */}
        <div className="mt-8 p-4 bg-rose-50 text-rose-700 rounded-xl border border-rose-200 text-sm">
          <p className="font-semibold mb-1">Security Tip:</p>
          <p>
            Always use a strong, unique password and consider enabling 2FA for
            maximum protection.
          </p>
        </div>
      </main>
    </div>
  );
};

export default PrivacySecuritySettings;
