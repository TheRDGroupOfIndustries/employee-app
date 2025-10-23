export  const TabSelector = ({ tabs, activeTab, setActiveTab }) => (
  <div className="flex space-x-6 bg-gray-100 w-fit rounded-lg p-1 mb-6 transition-all duration-300 ease-in-out">
    {tabs.map((tab) => (
      <button
        key={tab.id}
        onClick={() => setActiveTab(tab.id)}
        className={`p-2 text-sm font-medium transition-all duration-300 ease-in-out cursor-pointer ${
          activeTab === tab.id
            ? "text-red-500 bg-white rounded-lg shadow-sm"
            : "border-transparent text-gray-600 hover:text-gray-800"
        }`}
      >
        {tab.label}
      </button>
    ))}
  </div>
);