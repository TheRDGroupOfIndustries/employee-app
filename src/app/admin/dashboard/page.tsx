// import React from 'react'

// const AdminDashboard = () => {
//   return (
//     <div>AdminDashboard</div>
//   )
// }

// export default AdminDashboard



import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  FolderKanban, 
  Bell, 
  Wrench, 
  Calendar, 
  BarChart3,
  Search,
  Plus,
  Menu,
  TrendingUp,
  FileText,
  Clock,
  CheckCircle2,
  DollarSign
} from 'lucide-react';

export default function Dashboard() {
  const stats = [
    {
      title: 'Total Employees',
      value: '247',
      change: '+12 from last month',
      icon: Users,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Active Projects',
      value: '18',
      change: '+3 from last month',
      icon: FolderKanban,
      color: 'text-green-500',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Pending Tasks',
      value: '64',
      change: '-8 from last month',
      icon: FileText,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50'
    },
    {
      title: 'This Month Revenue',
      value: '$124K',
      change: '+15% from last month',
      icon: DollarSign,
      color: 'text-red-500',
      bgColor: 'bg-red-50'
    }
  ];

  const activities = [
    {
      name: 'Sarah Johnson',
      action: 'completed project milestone',
      time: '2 hours ago',
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      action: 'submitted expense report',
      time: '4 hours ago',
      avatar: 'MC'
    },
    {
      name: 'Emily Davis',
      action: 'requested time off',
      time: '6 hours ago',
      avatar: 'ED'
    },
    {
      name: 'David Wilson',
      action: 'updated project status',
      time: '8 hours ago',
      avatar: 'DW'
    }
  ];

  const meetings = [
    {
      title: 'Board of Directors Meeting',
      time: '2:00 PM',
      attendees: '8 attendees',
      badge: 'BOARD',
      badgeColor: 'bg-red-100 text-red-600'
    },
    {
      title: 'Project Review - Q4 Campaign',
      time: '3:30 PM',
      attendees: '12 attendees',
      badge: 'PROJECT',
      badgeColor: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'HR Policy Discussion',
      time: 'Tomorrow 10:00 AM',
      attendees: '6 attendees',
      badge: 'HR',
      badgeColor: 'bg-green-100 text-green-600'
    }
  ];

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: Users, label: 'Employee Management', active: false },
    { icon: Briefcase, label: 'BoD & Management', active: false },
    { icon: FolderKanban, label: 'Project Management', active: false },
    { icon: Bell, label: 'Notifications', active: false },
    { icon: Wrench, label: 'HR Tools', active: false },
    { icon: Calendar, label: 'Meetings', active: false },
    { icon: BarChart3, label: 'Analytics & Reports', active: false }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold text-red-500">The RD Group</h1>
          <p className="text-xs text-gray-500">Connect Admin</p>
        </div>
        
        <nav className="p-4 space-y-1">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm transition-colors ${
                item.active 
                  ? 'bg-red-500 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-white border-b px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4 flex-1 max-w-xl">
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
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <span className="text-sm font-medium">Admin</span>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>
            <p className="text-gray-500 text-sm">Welcome back! Here's what's happening at The RD Group today.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-gray-600 text-sm mb-1">{stat.title}</p>
                    <h3 className="text-3xl font-bold text-gray-800">{stat.value}</h3>
                  </div>
                  <div className={`${stat.bgColor} p-3 rounded-lg`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
                <p className={`text-xs ${stat.change.includes('-') ? 'text-red-500' : 'text-green-500'}`}>
                  {stat.change}
                </p>
              </div>
            ))}
          </div>

          {/* Recent Activities and Meetings */}
          <div className="grid grid-cols-2 gap-6">
            {/* Recent Activities */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b flex items-center justify-between">
                <h3 className="font-semibold text-gray-800">Recent Activities</h3>
                <button className="text-red-500 text-sm hover:text-red-600">View All</button>
              </div>
              
              <div className="p-6 space-y-4">
                {activities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-sm font-medium text-gray-600">
                      {activity.avatar}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-800">
                        <span className="font-medium">{activity.name}</span>{' '}
                        <span className="text-gray-600">{activity.action}</span>
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Today's Meetings */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b flex items-center justify-between">
                <h3 className="font-semibold text-gray-800">Today's Meetings</h3>
                <Calendar className="w-5 h-5 text-gray-400" />
              </div>
              
              <div className="p-6 space-y-4">
                {meetings.map((meeting, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-gray-800 text-sm">{meeting.title}</h4>
                      <span className={`text-xs px-2 py-1 rounded ${meeting.badgeColor} font-medium`}>
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
          </div>
        </div>
      </div>
    </div>
  );
}