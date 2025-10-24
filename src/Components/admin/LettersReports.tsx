import React from "react";

export const LettersReports = () => {
  const letters = [
    {
      type: "Offer Letter",
      employee: "Mike Chen",
      date: "May 20, 2023",
      status: "Issued",
    },
    {
      type: "Experience Letter",
      employee: "Lisa Wang",
      date: "Jul 15, 2024",
      status: "Pending",
    },
  ];

  return (
    <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {letters.length > 0 ? (
        letters.map((letter, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-2xl p-5 border border-gray-100 hover:shadow-lg transition duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-800">
              {letter.type}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Employee:{" "}
              <span className="font-medium text-gray-700">{letter.employee}</span>
            </p>
            <p className="text-sm text-gray-600">
              Date: <span className="font-medium text-gray-700">{letter.date}</span>
            </p>
            <p className="text-sm text-gray-600">
              Status:{" "}
              <span
                className={`font-medium ${
                  letter.status === "Issued" ? "text-green-600" : "text-yellow-600"
                }`}
              >
                {letter.status}
              </span>
            </p>

            <div className="mt-4">
              <button className="bg-rose-600 text-white text-sm px-4 py-1.5 rounded-lg hover:bg-rose-700 transition">
                View Letter
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="text-gray-500 text-center mt-12">
          <p>No letters or reports available yet.</p>
        </div>
      )}
    </div>
  );
};
