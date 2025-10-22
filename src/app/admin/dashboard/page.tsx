// import Activities from "@/src/Components/admin/Activities";

// import Meetings from "@/src/Components/admin/Meetings";

// import StatsGrid from "@/src/Components/admin/StatsGrid";
// import React from "react";

// export default function AdminDashboard() {
//   return (
//     <div className="flex h-screen bg-gray-50">
//       <div className="p-2">
//         <div className="mb-8">
//           <h2 className="text-2xl font-bold text-gray-800">
//             Dashboard Overview
//           </h2>
//           <p className="text-gray-500 text-sm font-medium">
//             Welcome back! Here's what's happening at The RD Group today.
//           </p>
//         </div>
//         <StatsGrid />
//         <div className="grid grid-cols-2 gap-6">
//           <Activities />
//           <Meetings />
//         </div>
//       </div>
//     </div>
//   );
// }


import Activities from "@/src/Components/admin/Activities";
import Meetings from "@/src/Components/admin/Meetings";
import StatsGrid from "@/src/Components/admin/StatsGrid";
import React from "react";
import { Download } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      <div className="p-2 w-full">
        {/* Header Section */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Dashboard Overview
            </h2>
            <p className="text-gray-500 text-sm font-medium">
              Welcome back! Here's what's happening at The RD Group today.
            </p>
          </div>

          {/* Export Button */}
          <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors">
            <Download className="w-4 h-4" />
            <span>Export Report</span>
          </button>
        </div>

        {/* Stats Grid */}
        <StatsGrid />

        {/* Activities and Meetings */}
        <div className="grid grid-cols-2 gap-6">
          <Activities />
          <Meetings />
        </div>
      </div>
    </div>
  );
}
