"use client"
import React, { FC } from 'react';
import { 
    MoveLeft, 
    BookOpen,
    FileText,
    Shield,
    Gavel,
    ChevronRight
} from "lucide-react";

// 1. Define Props for SettingsLink
interface SettingsLinkProps {
    icon: React.ElementType;
    title: string;
    description: string;
    actionText: string;
}

// --- Reusable Link Item Component (FC with Props) ---
const SettingsLink: FC<SettingsLinkProps> = ({ icon: Icon, title, description, actionText }) => (
    <a 
        href="#" // Placeholder for actual routing/action
        onClick={(e) => { e.preventDefault(); console.log(`${title} clicked`); }}
        className="flex items-center justify-between p-4 bg-white rounded-lg hover:bg-gray-50 transition duration-150 cursor-pointer border border-gray-100"
    >
        <div className="flex items-start gap-4">
            <div className="p-3 bg-rose-100 rounded-full ">
                <Icon className="w-5 h-5 text-rose-600" />
            </div>
            <div>
                <h3 className="text-lg font-semibold text-gray-800 leading-tight">{title}</h3>
                <p className="text-sm text-gray-500 mt-1">{description}</p>
            </div>
        </div>
        <div className="flex items-center gap-2 text-rose-600 text-sm font-medium">
            <span>{actionText}</span>
            <ChevronRight className="w-4 h-4" />
        </div>
    </a>
);


// --- Main Terms & Privacy Settings Component (FC) ---
const TermsAndPrivacySettings: FC = () => {
    return (
        <div className="min-h-screen bg-gray-100/50 flex flex-col items-center text-gray-800">
            
            {/* 🔹 Top Navbar */}
            <nav className="sticky top-0 z-10 w-full flex items-center gap-5 px-5 py-4 bg-rose-700 shadow-lg">
                <MoveLeft
                    className="w-6 h-6 text-white cursor-pointer"
                    onClick={() => window.history.back()}
                />
                <h1 className="text-xl text-white font-bold tracking-tight">Terms & Privacy</h1>
            </nav>

            <main className="w-full max-w-xl p-4 sm:p-8">
                
                {/* Introduction */}
                <h2 className="text-2xl font-bold text-gray-800 mb-2 mt-4">Legal Documents</h2>
                <p className="text-gray-600 mb-6">
                    Review the official terms, policies, and agreements that govern your use of our service.
                </p>

                <div className="bg-white shadow-xl rounded-2xl p-6 space-y-4">
                    
                    {/* 1. Terms of Service */}
                    <SettingsLink
                        icon={BookOpen}
                        title="Terms of Service"
                        description="The agreement you accept when using our platform."
                        actionText="Read Document"
                    />

                    {/* 2. Privacy Policy */}
                    <SettingsLink
                        icon={Shield}
                        title="Privacy Policy"
                        description="How we collect, use, and protect your personal data."
                        actionText="Read Document"
                    />
                    
                    {/* 3. Cookie Policy */}
                    <SettingsLink
                        icon={Gavel} // Using Gavel for a legal/official look
                        title="Cookie Policy"
                        description="Details about the cookies we use and your preferences."
                        actionText="Review"
                    />
                </div>

                {/* --- Additional Information --- */}
                <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-8">Legal Contact</h2>
                <div className="bg-white shadow-xl rounded-2xl p-6 space-y-4">

                    {/* Contact for Data Requests */}
                    <SettingsLink
                        icon={FileText}
                        title="Data Subject Access Request (DSAR)"
                        description="Request access, correction, or deletion of your data."
                        actionText="Submit Form"
                    />
                </div>
                
                {/* Update Date Note */}
                <div className="mt-8 p-4 bg-rose-50 text-rose-700 rounded-xl border border-rose-200 text-sm text-center">
                    <p>Last updated: September 15, 2025</p>
                    <p className="mt-1 font-semibold">Please review all documents regularly for changes.</p>
                </div>
                
            </main>
        </div>
    );
};

export default TermsAndPrivacySettings;
