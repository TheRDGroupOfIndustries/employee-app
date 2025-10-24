import React from "react";
import { Users, Folder,  SquareCheckBig, CircleDollarSign } from "lucide-react";

const stats = [
  {
    title: "Total Employees",
    value: "247",
    change: "+12 from last month",
    icon: Users,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    title: "Active Projects",
    value: "18",
    change: "+3 from last month",
    icon: Folder ,
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
    title: "Pending Tasks",
    value: "64",
    change: "-8 from last month",
    icon: SquareCheckBig ,
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
  {
    title: "This Month Revenue",
    value: "$124K",
    change: "+15% from last month",
    icon: CircleDollarSign ,
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-xl px-6  py-6 shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-gray-600 text-sm mb-1">{stat.title}</p>
              <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
            </div>
            <div className={`${stat.bgColor} p-3 rounded-lg`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
          </div>
          <p
            className={`text-xs font-medium ${
              stat.change.includes("-") ? "text-red-500" : "text-green-500"
            }`}
          >
            {stat.change}
          </p>
        </div>
      ))}
    </div>
  );
}
