import { Calendar, Clock3, Edit, Eye, Users } from "lucide-react";

export const NotificationCard = ({ notification }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high priority":
        return "bg-red-100 text-red-600";
      case "medium priority":
        return "bg-yellow-100 text-yellow-600";
      case "low priority":
        return "bg-green-100 text-green-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "announcement":
        return "bg-blue-100 text-blue-600";
      case "alert":
        return "bg-orange-100 text-orange-600";
      case "reminder":
        return "bg-purple-100 text-purple-600";
      case "update":
        return "bg-teal-100 text-teal-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "sent":
        return "bg-green-100 text-green-700";
      case "scheduled":
        return "bg-blue-100 text-blue-700";
      case "draft":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-semibold text-gray-800">
              {notification.title}
            </h3>

            <span
              className={`px-2 py-1 rounded text-xs font-medium ${getTypeColor(
                notification.type
              )}`}
            >
              {notification.type}
            </span>

            <span
              className={`px-2 py-1 rounded text-xs font-medium ${getPriorityColor(
                notification.priority
              )}`}
            >
              {notification.priority}
            </span>
          </div>

          <p className="text-sm text-gray-600 mb-3">
            {notification.description}
          </p>
        </div>

        {/* Right-side column for status & read count */}
        <div className="flex flex-col items-end gap-1">
          <span
            className={`px-3 py-1 rounded text-xs font-medium ${getStatusColor(
              notification.status
            )}`}
          >
            {notification.status}
          </span>

          {notification.readCount && (
            <div className="flex items-center gap-1">
              <div className="text-xs text-gray-500 flex items-center gap-1">
                {notification.readCount} read
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center flex-wrap gap-4 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <span className="font-medium flex items-center gap-1">
              <Users className="w-3 h-3" /> Recipients:
            </span>
            {notification.recipients}
          </span>

          <span className="flex items-center gap-1">
            <span className="font-medium flex items-center gap-1">
              <Clock3 className="w-3 h-3" /> Created:
            </span>
            {notification.created}
          </span>

          {notification.scheduled && (
            <span className="flex items-center gap-1">
              <span className="font-medium flex items-center gap-1">
                <Calendar className="w-3 h-3" /> Scheduled:
              </span>
              {notification.scheduled}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 px-4 py-2 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600 transition-colors">
            <Edit className="w-4 h-4" />
            <span>Edit</span>
          </button>
          <button className="flex items-center gap-1 px-4 py-2 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600 transition-colors">
            <Eye className="w-4 h-4" />
            <span>View Details</span>
          </button>
        </div>
      </div>
    </div>
  );
};
