"use client";

import React from "react";
import { MoveLeft } from "lucide-react";
const page = () => {
  return (
    <div className="h-[90vh]">
      {/* 🔹 Top Navbar */}
      <nav className="sticky top-0 z-10 flex justify-between items-center px-5 py-4 bg-rose-700 shadow-md">
        <MoveLeft
          className="w-6 h-6 text-white"
          onClick={() => window.history.back()}
        />
        <h1 className="text-lg text-white font-bold tracking-wide">
          The RD Group Connect
        </h1>
      </nav>
    </div>
  );
};

export default page;
