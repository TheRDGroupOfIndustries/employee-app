import { Eye, PencilLine } from "lucide-react";

const getPriorityClass = (priority) => {
  switch (priority) {
    case "high":
      return "bg-red-100 text-red-700";
    case "medium":
      return "bg-yellow-100 text-yellow-700";
    case "low":
      return "bg-green-100 text-green-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

export const ProjectCard = ({ project }) => {
  const priorityClass = getPriorityClass(project.priority);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            {project.title}
          </h3>
          {/* Add description or other text below if needed */}
          <p className="text-sm text-gray-600 mt-1">{project.description}</p>
        </div>
        <div className="flex space-y-2 items-center flex-col items-end">
          <span className="inline-block whitespace-nowrap py-1 px-3 rounded-full text-xs font-medium bg-green-100 text-green-700">
            {project.status}
          </span>
          <span
            className={`inline-block py-1 px-3 rounded-full text-xs font-medium ${priorityClass} whitespace-nowrap`}
          >
            {project.priority} priority
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-medium text-gray-700">Progress</span>
          <span className="text-sm font-medium text-gray-700">
            {project.progress}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div
            className="bg-red-500 h-1.5 rounded-full"
            style={{ width: `${project.progress}%` }}
          ></div>
        </div>
      </div>

      {/* Dates and Budget */}
      <div className="grid grid-cols-2 gap-y-2 text-sm mb-4 border-b pb-4 border-gray-100">
        <div>
          <p className="text-gray-500">Start Date:</p>
          <p className="font-medium text-gray-700">{project.startDate}</p>
        </div>
        <div>
          <p className="text-gray-500">End Date:</p>
          <p className="font-medium text-gray-700">{project.endDate}</p>
        </div>
        <div>
          <p className="text-gray-500">Budget:</p>
          <p className="font-medium text-gray-700">${project.budget}</p>
        </div>
        <div>
          <p className="text-gray-500">Spent:</p>
          <p className="font-medium text-red-500">${project.spent}</p>
        </div>
      </div>

      {/* Team Members */}
      <div className="mb-4">
        <p className="text-sm text-gray-500 mb-2">Team Members:</p>
        <div className="flex flex-wrap gap-2 text-xs">
          {project.teamMembers.map((member, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
            >
              {member.split(" ")[0]}{" "}
              {/* Show first name only to match the brevity in the image */}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end mt-2 gap-2">
        <button className="w-fit py-2 px-4 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600 transition flex items-center justify-center gap-2">
          <PencilLine size={15} />
          <span>Edit </span>
        </button>
        <button className="w-fit py-2 px-4 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600 transition flex items-center justify-center gap-2">
          <Eye size={15} />
          <span>View Tasks</span>
        </button>
      </div>
    </div>
  );
};
