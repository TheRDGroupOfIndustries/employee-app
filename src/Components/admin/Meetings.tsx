// import React from "react";
// import { Calendar } from "lucide-react";

// const meetings = [
//   { title: "Board of Directors Meeting", time: "2:00 PM", attendees: "8 attendees", badge: "BOARD", badgeColor: "bg-red-100 text-red-600" },
//   { title: "Project Review - Q4 Campaign", time: "3:30 PM", attendees: "12 attendees", badge: "PROJECT", badgeColor: "bg-blue-100 text-blue-600" },
//   { title: "HR Policy Discussion", time: "Tomorrow 10:00 AM", attendees: "6 attendees", badge: "HR", badgeColor: "bg-green-100 text-green-600" },
// ];

// export default function Meetings() {
//   return (
//     <div className="bg-white rounded-lg shadow-sm border">
//       <div className="p-6 border-b flex items-center justify-between">
//         <h3 className="font-semibold text-gray-800">Today's Meetings</h3>
//         <Calendar className="w-5 h-5 text-gray-400" />
//       </div>

//       <div className="p-6 space-y-4">
//         {meetings.map((meeting, index) => (
//           <div key={index} className="border rounded-lg p-4">
//             <div className="flex items-start justify-between mb-2">
//               <h4 className="font-medium text-gray-800 text-sm">{meeting.title}</h4>
//               <span className={`text-xs px-2 py-1 rounded ${meeting.badgeColor} font-medium`}>
//                 {meeting.badge}
//               </span>
//             </div>
//             <p className="text-sm text-gray-600 mb-1">{meeting.time}</p>
//             <p className="text-xs text-gray-500">{meeting.attendees}</p>
//           </div>
//         ))}

//         <button className="w-full text-center text-sm text-gray-600 hover:text-gray-800 py-2">
//           View All Meetings
//         </button>
//       </div>
//     </div>
//   );
// }


import React from "react";
import { Calendar } from "lucide-react";

const meetings = [
  {
    title: "Board of Directors Meeting",
    time: "2:00 PM",
    attendees: "8 attendees",
    badge: "BOARD",
    badgeColor: "bg-red-100 text-red-600",
  },
  {
    title: "Project Review - Q4 Campaign",
    time: "3:30 PM",
    attendees: "12 attendees",
    badge: "PROJECT",
    badgeColor: "bg-blue-100 text-blue-600",
  },
  {
    title: "HR Policy Discussion",
    time: "Tomorrow 10:00 AM",
    attendees: "6 attendees",
    badge: "HR",
    badgeColor: "bg-green-100 text-green-600",
  },
];

export default function Meetings() {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="p-6 border-b border-gray-100 flex items-center justify-between">
        <h3 className="font-semibold text-gray-800">Today's Meetings</h3>
        <Calendar className="w-5 h-5 text-gray-400" />
      </div>

      <div className="p-6 space-y-4">
        {meetings.map((meeting, index) => (
          <div
            key={index}
            className="rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 bg-gray-50"
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-medium text-gray-800 text-sm">
                {meeting.title}
              </h4>
              <span
                className={`text-xs px-2 py-1 rounded ${meeting.badgeColor} font-medium`}
              >
                {meeting.badge}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-1">{meeting.time}</p>
            <p className="text-xs text-gray-500">{meeting.attendees}</p>
          </div>
        ))}

        <button className="w-full text-center text-sm text-gray-600 hover:text-gray-800 py-2">
          View All Meetings
        </button>
      </div>
    </div>
  );
}
