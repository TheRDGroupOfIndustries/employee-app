"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CalendarCheck2,
  CalendarDays,
  Wallet,
  User,
} from "lucide-react";

interface NavItem {
  name: string;
  icon: React.ReactNode;
  path: string;
}

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { name: "Dashboard", icon: <LayoutDashboard size={22} />, path: "/" },
    { name: "Attendance", icon: <CalendarCheck2 size={22} />, path: "/attendance" },
    { name: "Leaves", icon: <CalendarDays size={22} />, path: "/leaves" },
    { name: "Salary", icon: <Wallet size={22} />, path: "/salary" },
    { name: "Profile", icon: <User size={22} />, path: "/profile" },
  ];

  return (
    <nav className="sticky bg-white  bottom-0 z-20">
      <div className="flex justify-between items-center px-3 py-2">
        {navItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <Link
              key={item.name}
              href={item.path}
              className={`flex flex-col items-center justify-center w-full py-2 transition-all duration-200 ${
                isActive ? "text-red-600" : "text-gray-500 hover:text-red-500"
              }`}
            >
              <div className="flex flex-col items-center">
                <span
                  className={`transition-transform duration-200 ${
                    isActive ? "scale-110" : "scale-100"
                  }`}
                >
                  {item.icon}
                </span>
                <span className="text-[11px] font-medium mt-1">
                  {item.name}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
