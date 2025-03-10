export const TabBar = ({ activeTab = "overview", setActiveTab }) => {
  return (
    <div className="bg-white grid grid-cols-3 w-full rounded-xxl font-medium">
      <button
        className={`text-xl py-6  rounded-xxl transition ease-in-out ${activeTab === "overview" ? "bg-trinary" : "bg-transparent"}`}
        onClick={() => setActiveTab("overview")}
      >
        Overview
      </button>
      <button
        className={`text-xl py-6  rounded-xxl transition ease-in-out ${activeTab === "symptom" ? "bg-trinary" : "bg-transparent"}`}
        onClick={() => setActiveTab("symptom")}
      >
        Symptom
      </button>
      <button
        className={`text-xl py-6  rounded-xxl transition ease-in-out ${activeTab === "treatments" ? "bg-trinary" : "bg-transparent"}`}
        onClick={() => setActiveTab("treatments")}
      >
        Treatments
      </button>
    </div>
  );
};
