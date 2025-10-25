import React from "react";
import { Eye, Download, Mail } from "lucide-react";

interface Certificate {
  id: string;
  title: string;
  category: string;
  description: string;
  recipient: string;
  issued: string;
  validUntil?: string;
  status: 'active' | 'achievement';
}

interface CertificatesProps {
  certificates: Certificate[];
}

export const Certificates: React.FC<CertificatesProps> = ({ certificates }) => {
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
      {certificates.length > 0 ? (
        <div>
          {certificates.map((cert) => (
            <div key={cert.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {cert.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(cert.category)}`}>
                      {cert.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {cert.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span>{cert.recipient}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>Issued: {cert.issued}</span>
                    </div>
                    {cert.validUntil && (
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Valid until: {cert.validUntil}</span>
                      </div>
                    )}
                  </div>
                </div>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                  {cert.status}
                </span>
              </div>

              <div className="flex gap-3 justify-end">
                <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors font-medium">
                  <Eye className="w-4 h-4" />
                  Preview
                </button>
                <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors font-medium">
                  <Download className="w-4 h-4" />
                  Download
                </button>
                <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors font-medium">
                  <Mail className="w-4 h-4" />
                  Send
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-gray-500 text-center mt-12">
          <p>No certificates available yet.</p>
        </div>
      )}
    </div>
  );
};