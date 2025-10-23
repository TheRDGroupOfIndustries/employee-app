"use client";
import React from "react";
import { MoveLeft, Headphones, Phone, Mail, ChevronRight, LucideIcon } from "lucide-react";

// ✅ Type definitions
interface LinkProps {
  href: string;
  children: React.ReactNode;
}

interface SupportOptionProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLink: string;
}

// --- Link Wrapper ---
const Link: React.FC<LinkProps> = ({ href, children }) => (
  <a href={href} className="no-underline">
    {children}
  </a>
);

// --- Support Option Card ---
const SupportOption: React.FC<SupportOptionProps> = ({
  icon: Icon,
  title,
  description,
  actionLink,
}) => (
  <Link href={actionLink}>
    <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-200 cursor-pointer border border-gray-100">
      {/* Left: Icon + Text */}
      <div className="flex items-start gap-4">
        <div className="p-3 bg-rose-100 rounded-full">
          <Icon className="w-6 h-6 text-rose-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 leading-tight">
            {title}
          </h3>
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        </div>
      </div>

      {/* Right Arrow */}
      <ChevronRight className="w-5 h-5 text-gray-400" />
    </div>
  </Link>
);

// --- Main Help & Support Component ---
const HelpAndSupport: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100/50 flex flex-col items-center text-gray-800">
      {/* 🔹 Navbar */}
      <nav className="sticky top-0 z-10 w-full flex items-center gap-5 px-5 py-4 bg-rose-700 shadow-lg">
        <MoveLeft
          className="w-6 h-6 text-white cursor-pointer"
          onClick={() => window.history.back()}
        />
        <h1 className="text-xl text-white font-bold tracking-tight">
          Help & Support
        </h1>
      </nav>

      {/* 🔹 Main Section */}
      <main className="w-full max-w-3xl p-5 sm:p-8">
        <div className="flex items-center gap-3 mb-6 mt-4">
          <Headphones className="text-rose-600 w-7 h-7" />
          <h1 className="text-2xl font-bold text-gray-800">Support Center</h1>
        </div>

        <p className="text-md text-gray-600 mb-8">
          Need assistance with your account, reports, or app features? Choose a
          support channel below.
        </p>

        {/* 🔹 Support Options */}
        <div className="space-y-4">
          <SupportOption
            icon={Phone}
            title="Call Support Hotline"
            description="Speak directly to our 24/7 technical team for immediate help."
            actionLink="tel:+919876543210"
          />

          <SupportOption
            icon={Mail}
            title="Email Technical Support"
            description="Send us your query and get a response within 6 business hours."
            actionLink="mailto:support@roopshree.in"
          />
        </div>
      </main>
    </div>
  );
};

export default HelpAndSupport;
