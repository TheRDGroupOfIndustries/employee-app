import React from "react";

export const Certificates = () => {
  const certificateList = [
    {
      title: "Employment Certificate",
      issuedTo: "John Smith",
      issueDate: "Jun 15, 2024",
      issuedBy: "HR Department",
    },
    {
      title: "Appreciation Certificate",
      issuedTo: "Sarah Johnson",
      issueDate: "Sep 1, 2024",
      issuedBy: "HR Department",
    },
  ];

  return (
    <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {certificateList.length > 0 ? (
        certificateList.map((cert, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-2xl p-5 border border-gray-100 hover:shadow-lg transition duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-800">
              {cert.title}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Issued To:{" "}
              <span className="font-medium text-gray-700">{cert.issuedTo}</span>
            </p>
            <p className="text-sm text-gray-600">
              Issue Date:{" "}
              <span className="font-medium text-gray-700">{cert.issueDate}</span>
            </p>
            <p className="text-sm text-gray-600">
              Issued By:{" "}
              <span className="font-medium text-gray-700">{cert.issuedBy}</span>
            </p>

            <div className="mt-4">
              <button className="bg-rose-600 text-white text-sm px-4 py-1.5 rounded-lg hover:bg-rose-700 transition">
                View Certificate
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="text-gray-500 text-center mt-12">
          <p>No certificates available yet.</p>
        </div>
      )}
    </div>
  );
};
