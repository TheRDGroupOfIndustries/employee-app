// import React from "react";

// const activities = [
//   { name: "Sarah Johnson", action: "completed project milestone", time: "2 hours ago", avatar: "SJ" },
//   { name: "Michael Chen", action: "submitted expense report", time: "4 hours ago", avatar: "MC" },
//   { name: "Emily Davis", action: "requested time off", time: "6 hours ago", avatar: "ED" },
//   { name: "David Wilson", action: "updated project status", time: "8 hours ago", avatar: "DW" },
// ];

// export default function Activities() {
//   return (
//     <div className="bg-white rounded-lg shadow-sm border">
//       <div className="p-6 border-b flex items-center justify-between">
//         <h3 className="font-semibold text-gray-800">Recent Activities</h3>
//         <button className="text-red-500 text-sm hover:text-red-600">View All</button>
//       </div>

//       <div className="p-6 space-y-4">
//         {activities.map((activity, index) => (
//           <div key={index} className="flex items-start space-x-3">
//             <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-sm font-medium text-gray-600">
//               {activity.avatar}
//             </div>
//             <div className="flex-1">
//               <p className="text-sm text-gray-800">
//                 <span className="font-medium">{activity.name}</span>{" "}
//                 <span className="text-gray-600">{activity.action}</span>
//               </p>
//               <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React from "react";

const activities = [
  {
    name: "Sarah Johnson",
    action: "completed project milestone",
    time: "2 hours ago",
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    action: "submitted expense report",
    time: "4 hours ago",
    avatar: "MC",
  },
  {
    name: "Emily Davis",
    action: "requested time off",
    time: "6 hours ago",
    avatar: "ED",
  },
  {
    name: "David Wilson",
    action: "updated project status",
    time: "8 hours ago",
    avatar: "DW",
  },
];

export default function Activities() {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Header */}
      <div className="p-6 border-b border-gray-100 flex items-center justify-between">
        <h3 className="font-semibold text-gray-800">Recent Activities</h3>
        <button className="text-gray-500 text-sm hover:text-gray-600 transition-colors">
          View All
        </button>
      </div>

      {/* Activity List */}
      <div className="p-6 space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-start justify-between p-3 rounded-lg hover:shadow-md transition-shadow duration-200"
          >
            {/* Left Section - Avatar + Info */}
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-sm font-medium text-gray-600">
                {activity.avatar}
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-800">
                  <span className="font-medium">{activity.name}</span>{" "}
                  <span className="text-gray-600">{activity.action}</span>
                </p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
            </div>

            {/* Right Section - Ellipsis menu */}
            <button className="text-gray-400 hover:text-gray-600">
              &#8230;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
