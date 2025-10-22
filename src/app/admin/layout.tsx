"use client";

import Sidebar from "@/src/Components/admin/Sidebar";
import "../globals.css";
import Header from "@/src/Components/admin/Header";
import { useState } from "react";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <html lang="en">
      <body className="flex bg-gray-50 min-h-screen overflow-hidden">
        {/* Sidebar - fixed on the left */}
        <div
          className={`fixed left-0 top-0 h-screen ${
            collapsed ? "w-20" : "w-64"
          } bg-white shadow-sm z-50 transition-all duration-300`}
        >
          <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        </div>

        {/* Main area */}
        <div
          className={`flex flex-col w-full h-screen transition-all duration-300 ${
            collapsed ? "ml-20" : "ml-64"
          }`}
        >
          {/* Header - fixed at top */}
          <div
            className={`fixed top-0 z-40 bg-white transition-all duration-300 ${
              collapsed ? "left-20" : "left-64"
            } right-0`}
          >
            <Header />
          </div>

          {/* Scrollable content */}
          <main className="flex-1 mt-[70px] overflow-y-auto p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
