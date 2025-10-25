"use client";

import React from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

interface MetricCard {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
}

interface DepartmentPerformance {
  name: string;
  employees: number;
  activeProjects: number;
  performance: number;
}

interface ChartDataPoint {
  month: string;
  attendance: number;
  productivity: number;
  projects: number;
}

interface AnalyticsData {
  metrics: MetricCard[];
  chartData: ChartDataPoint[];
  departments: DepartmentPerformance[];
}

interface AnalyticsDashboardProps {
  data?: AnalyticsData;
}

const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({ data }) => {
  // ✅ Default Data (used if no data prop is passed)
  const defaultMetrics: MetricCard[] = [
    { title: "Employee Attendance", value: "94.2%", change: "+2.1%", isPositive: true },
    { title: "Task Completion Rate", value: "87.5%", change: "-1.3%", isPositive: false },
    { title: "Project Success Rate", value: "92.8%", change: "+4.2%", isPositive: true },
    { title: "Employee Satisfaction", value: "4.6", change: "+0.3%", isPositive: true },
  ];

  const defaultChartData: ChartDataPoint[] = [
    { month: "Jul", attendance: 60, productivity: 50, projects: 40 },
    { month: "Aug", attendance: 45, productivity: 30, projects: 55 },
    { month: "Sep", attendance: 40, productivity: 50, projects: 35 },
    { month: "Oct", attendance: 35, productivity: 55, projects: 50 },
    { month: "Nov", attendance: 40, productivity: 45, projects: 45 },
    { month: "Dec", attendance: 30, productivity: 60, projects: 55 },
  ];

  const defaultDepartments: DepartmentPerformance[] = [
    { name: "Engineering", employees: 24, activeProjects: 8, performance: 92 },
    { name: "Marketing", employees: 12, activeProjects: 5, performance: 88 },
    { name: "Sales", employees: 18, activeProjects: 6, performance: 85 },
    { name: "HR", employees: 8, activeProjects: 3, performance: 90 },
  ];

  // Use provided data or fallback to defaults
  const metrics = data?.metrics || defaultMetrics;
  const chartData = data?.chartData || defaultChartData;
  const departments = data?.departments || defaultDepartments;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* ✅ Metric Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-4"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-sm text-gray-500">{metric.title}</h3>
              <div
                className={`flex items-center gap-1 text-xs font-medium ${
                  metric.isPositive ? "text-green-600" : "text-red-600"
                }`}
              >
                {metric.isPositive ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
                {metric.change}
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-800">{metric.value}</p>
          </div>
        ))}
      </div>

      {/* ✅ Zigzag Chart Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        

        {/* Zigzag Bar Chart */}
        <div className="flex items-end justify-between h-64 gap-2">
          {chartData.map((data, index) => {
            // Create zigzag pattern: alternating heights like a building
            // Heights: 52 (small), 64 (big), 52 (small), 64 (big)...
            const heights = ['h-40', 'h-52', 'h-44', 'h-56', 'h-48', 'h-60'];
            const barHeight = heights[index] || 'h-52';
            
            return (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div 
                  className={`w-full flex flex-col-reverse bg-gray-100 overflow-hidden rounded-t ${barHeight}`}
                >
                  <div
                    className="w-full bg-green-500"
                    style={{ height: `${data.projects}%` }}
                  ></div>
                  <div
                    className="w-full bg-blue-500"
                    style={{ height: `${data.productivity}%` }}
                  ></div>
                  <div
                    className="w-full bg-red-500"
                    style={{ height: `${data.attendance}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-500 mt-2">{data.month}</span>
              </div>
            );
          })}
        </div>
        <div className="mt-6 flex justify-center items-center">
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded"></div>
                <span className="text-gray-600">Attendance</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                <span className="text-gray-600">Productivity</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                <span className="text-gray-600">Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Department Performance */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">
          Department Performance
        </h2>
        <div className="space-y-6">
          {departments.map((dept, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-base font-semibold text-gray-800 mb-1">
                  {dept.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {dept.employees} employees · {dept.activeProjects} active projects
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-red-500 h-full rounded-full"
                    style={{ width: `${dept.performance}%` }}
                  ></div>
                </div>
                <span className="text-lg font-bold text-gray-800 w-12 text-right">
                  {dept.performance}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;