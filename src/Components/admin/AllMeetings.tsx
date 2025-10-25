import React from "react";
import { Edit, Video, Eye } from "lucide-react";

interface AllMeeting {
  id: string;
  title: string;
  tags: string[];
  description: string;
  date: string;
  time: string;
  duration: string;
  location: string;
  organizer: string;
  attendees: string[];
  agenda: string[];
}

interface AllMeetingsProps {
  meetings: AllMeeting[];
}

export const AllMeetings: React.FC<AllMeetingsProps> = ({ meetings }) => {
  const getTagColor = (tag: string) => {
    switch (tag.toLowerCase()) {
      case 'board':
        return 'bg-purple-100 text-purple-700';
      case 'scheduled':
        return 'bg-blue-100 text-blue-700';
      case 'all hands':
        return 'bg-blue-100 text-blue-700';
      case 'completed':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="mt-8">
      {meetings.length > 0 ? (
        <div>
          {meetings.map((meeting) => (
            <div key={meeting.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {meeting.title}
                    </h3>
                    {meeting.tags.map((tag, index) => (
                      <span key={index} className={`px-3 py-1 rounded-full text-xs font-medium ${getTagColor(tag)}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    {meeting.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{meeting.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{meeting.time} ({meeting.duration})</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{meeting.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span>{meeting.organizer}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-1">Attendees:</p>
                    <p className="text-sm text-gray-600">{meeting.attendees.join(", ")}</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-1">Agenda:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {meeting.agenda.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-gray-400">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 justify-end">
                <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors font-medium">
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
                <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors font-medium">
                  <Video className="w-4 h-4" />
                  Join Online
                </button>
                <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors font-medium">
                  <Eye className="w-4 h-4" />
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-gray-500 text-center mt-12">
          <p>No past meetings available yet.</p>
        </div>
      )}
    </div>
  );
};