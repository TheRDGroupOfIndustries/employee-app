"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Briefcase,
  FolderKanban,
  Bell,
  Wrench,
  Calendar,
  BarChart3,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/admin/dashboard" },
  { icon: Users, label: "Employee Management", href: "/admin/employee-management" },
  { icon: Briefcase, label: "BoD & Management", href: "/admin/board-management" },
  { icon: FolderKanban, label: "Project Management", href: "/admin/project-management" },
  { icon: Bell, label: "Notifications", href: "/admin/internal-communication" },
  { icon: Wrench, label: "HR Tools", href: "/admin/hr-tools" },
  { icon: Calendar, label: "Meetings", href: "/admin/meetings" },
  { icon: BarChart3, label: "Analytics & Reports", href: "/admin/reports" },
];

export default function Sidebar({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
}) {
  const pathname = usePathname();

  return (
    <div
      className={`h-full flex flex-col transition-all duration-300 ${
        collapsed ? "w-20" : "w-62"
      }`}
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-300 flex items-center justify-between">
        {!collapsed && (
          <div>
            <h1 className="text-xl font-bold text-red-500">The RD Group</h1>
            <p className="text-xs text-gray-500">Connect Admin</p>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-md hover:bg-gray-100 transition"
        >
          {collapsed ? (
            <ChevronRight className="w-5 h-5 text-gray-600" />
          ) : (
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          )}
        </button>
      </div>

      {/* Menu */}
      <nav className="p-4 space-y-1 flex-1 overflow-y-auto">
        {menuItems.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <Link key={index} href={item.href} passHref>
              <button
                className={`w-full flex items-center ${
                  collapsed ? "justify-center" : "justify-start space-x-3"
                } px-4 py-3 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "bg-red-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {!collapsed && <span>{item.label}</span>}
              </button>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
