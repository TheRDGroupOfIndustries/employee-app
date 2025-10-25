import React from "react";
import { Edit, Eye, Download } from "lucide-react";

interface Report {
  id: string;
  title: string;
  category: string;
  description: string;
  recipient: string;
  issued: string;
  validUntil?: string;
  status: 'active' | 'achievement';
}

interface ReportProps {
  reports: Report[];
}

export const LettersReports: React.FC<ReportProps> = ({ reports }) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'completion':
        return 'bg-blue-100 text-blue-700';
      case 'achievement':
        return 'bg-yellow-100 text-yellow-700';
      case 'performance':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="mt-8">
      {reports.length > 0 ? (
        <div>
          {reports.map((report) => (
            <div key={report.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {report.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(report.category)}`}>
                      {report.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {report.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span>{report.recipient}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>Created: {report.issued}</span>
                    </div>
                   
                  </div>
                </div>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                  {report.status}
                </span>
              </div>

              <div className="flex gap-3 justify-end">
                <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors font-medium">
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
                <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors font-medium">
                  <Eye className="w-4 h-4" />
                  Preview
                </button>
                <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors font-medium">
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-gray-500 text-center mt-12">
          <p>No reports available yet.</p>
        </div>
      )}
    </div>
  );
};