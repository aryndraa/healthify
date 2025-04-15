export const TabBar = ({ activeTab = 'overview', setActiveTab }) => {
    return (
        <div className="bg-white grid grid-cols-3 w-fit lg:w-full rounded-xl lg:rounded-xxl font-medium ">
            <button
                className={`lg:text-lg 2xl:text-xl px-3 py-3 lg:py-5 2xl:py-6 rounded-xl lg:rounded-xxl transition ease-in-out ${activeTab === 'overview' ? 'bg-trinary' : 'bg-transparent'}`}
                onClick={() => setActiveTab('overview')}
            >
                Overview
            </button>
            <button
                className={`lg:text-lg 2xl:text-xl px-3 py-3 lg:py-5 2xl:py-6 rounded-xl lg:rounded-xxl transition ease-in-out ${activeTab === 'symptom' ? 'bg-trinary' : 'bg-transparent'}`}
                onClick={() => setActiveTab('symptom')}
            >
                Symptom
            </button>
            <button
                className={`lg:text-lg 2xl:text-xl px-3 py-3 lg:py-5 2xl:py-6 rounded-xl lg:rounded-xxl transition ease-in-out ${activeTab === 'treatments' ? 'bg-trinary' : 'bg-transparent'}`}
                onClick={() => setActiveTab('treatments')}
            >
                Treatments
            </button>
        </div>
    );
};
