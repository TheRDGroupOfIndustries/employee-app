"use client";

import React from "react";
import {
    CalendarCheck,
    ClipboardList,
    Clock,
    FileText,
    Briefcase,
     Bell,
} from "lucide-react";

// Use React.FC (Function Component) for proper typing
const Dashboard: React.FC = () => {
    return (
        // The h-[90vh] class is likely meant for the entire screen minus a potential larger bottom nav or header
        <div className="h-[90vh]">
            {/* 🔹 Top Navbar */}
            <nav className="sticky top-0 z-10 flex justify-between items-center px-5 py-4 bg-rose-700 shadow-md">
                <h1 className="text-lg text-white font-bold tracking-wide">
                    The RD Group Connect
                </h1>
                <Bell className="w-6 h-6 text-white" />
            </nav>

            {/* 🔹 Welcome Section */}
            <section className="px-5 mt-6 ">
                <div className="bg-rose-600 backdrop-blur-md rounded-2xl p-5 shadow-lg">
                    <h1 className="text-xl font-semibold text-white">Welcome back, Sarah 👋</h1>
                    <p className="text-sm opacity-90 mt-1 text-white">
                        Ready to make today productive?
                    </p>
                </div>
            </section>

            {/* 🔹 Stats Section */}
            <section className="px-5 mt-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                    {/* Attendance Stat */}
                    <div className="bg-white/10 p-4 rounded-2xl shadow-md hover:bg-white/20 transition cursor-pointer">
                        <CalendarCheck className="mx-auto w-6 h-6 mb-2" />
                        <p className="text-sm opacity-80">Attendance</p>
                        <h2 className="font-bold text-lg text-green-500">Checked In</h2>
                    </div>
                    {/* Tasks Stat */}
                    <div className="bg-white/10 p-4 rounded-2xl shadow-md hover:bg-white/20 transition cursor-pointer">
                        <ClipboardList className="mx-auto w-6 h-6 mb-2" />
                        <p className="text-sm opacity-80">Tasks</p>
                        <h2 className="font-bold text-lg text-blue-500 ">3 Pending</h2>
                    </div>
                </div>
            </section>

            {/* 🔹 Quick Actions */}
            <section className="px-5 mt-8 pb-10"> {/* Added pb-10 for bottom padding */}
                <h2 className="text-lg font-semibold mb-3">Quick Actions</h2>
                <div className="grid grid-cols-2 gap-4">
                    {/* Upcoming Meeting */}
                    <div className="bg-white/10 p-4 rounded-2xl flex flex-col items-center hover:bg-white/20 transition cursor-pointer">
                        <Clock className="w-6 h-6 mb-2" />
                        <p className="text-sm text-center">Upcoming Meeting</p>
                    </div>
                    {/* Mark Attendance */}
                    <div className="bg-white/10 p-4 rounded-2xl flex flex-col items-center hover:bg-white/20 transition cursor-pointer">
                        <CalendarCheck className="w-6 h-6 mb-2" />
                        <p className="text-sm text-center">Mark Attendance</p>
                    </div>
                    {/* Submit Task Report */}
                    <div className="bg-white/10 p-4 rounded-2xl flex flex-col items-center hover:bg-white/20 transition cursor-pointer">
                        <FileText className="w-6 h-6 mb-2" />
                        <p className="text-sm text-center">Submit Task Report</p>
                    </div>
                    {/* Apply Leave */}
                    <div className="bg-white/10 p-4 rounded-2xl flex flex-col items-center hover:bg-white/20 transition cursor-pointer">
                        <Briefcase className="w-6 h-6 mb-2" />
                        <p className="text-sm text-center">Apply Leave</p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Dashboard;