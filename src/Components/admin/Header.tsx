// import React from "react";
// import { Search, Plus, Bell } from "lucide-react";

// export default function Header() {
//   return (
//     <div className="bg-white  shadow-sm px-8 py-5 flex items-center justify-between">
//       <div className="flex items-center space-x-4 flex-1 max-w-xl border border-gray-200  p-2 rounded-lg">
//         <Search className="w-5 h-5 text-gray-400" />
//         <input
//           type="text"
//           placeholder="Search employees, projects, tasks..."
//           className="flex-1 outline-none text-sm"
//         />
//       </div>

//       <div className="flex items-center space-x-4">
//         <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm flex items-center space-x-2 hover:bg-red-600 transition-colors">
//           <Plus className="w-4 h-4" />
//           <span>Quick Add</span>
//         </button>

//         <div className="relative">
//           <Bell className="w-5 h-5 text-gray-600" />
//           <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
//             3
//           </span>
//         </div>

//         <div className="flex items-center space-x-2">
//           <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
//           <span className="text-sm font-medium">Admin</span>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Search, Plus, Bell, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-white shadow-sm px-8 py-5 flex items-center justify-between">
      <div className="flex items-center space-x-4 flex-1 max-w-xl border border-gray-200 p-2 rounded-lg">
        <Search className="w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search employees, projects, tasks..."
          className="flex-1 outline-none text-sm"
        />
      </div>

      <div className="flex items-center space-x-4">
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm flex items-center space-x-2 hover:bg-red-600 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Quick Add</span>
        </button>

        <div className="relative">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </div>

        <div className="relative " >
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-2 focus:outline-none"
          >
            <Image
              className="w-8 h-8 bg-gray-300 rounded-full"
              src="/images/dummy_profile.png"
              alt="Profile"
              width={32}
              height={32}
            />
            <span className="text-sm font-medium">Admin</span>
            <ChevronDown className="w-4 h-4 text-gray-600" />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10 ">
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Profile Setting
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                System Setting
              </button>
              <div className="border-t border-gray-200 my-2"></div>
              <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
