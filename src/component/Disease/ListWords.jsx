  import { useState } from "react";
  import { IoMenu } from "react-icons/io5";

  export const ListWords = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const [activeLetter, setActiveLetter] = useState("All");
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
    <div className="flex lg:justify-start justify-end">

      <div className=" hidden  lg:grid 2xl:grid-cols-6 lg:grid-cols-5 gap-2 h-fit  ">
        <button
          key="All"
          onClick={() => setActiveLetter("All")}
          className={`2xl:text-2xl  lg:text-lg min-h-[52px] min-w-[52px] lg:h-[60px] lg:w-[60px] 2xl:w-[72px]  2xl:h-[72px]  font-medium flex justify-center items-center  rounded-ful transition rounded-full ${
            activeLetter === "All" ? "bg-secondary text-white" : "bg-white hover:bg-gray-200"
          }`}
        >
          All
        </button>
        {letters.map((letter) => (
          <button
            key={letter}
            onClick={() => setActiveLetter(letter)}
            className={`2xl:text-2xl  lg:text-lg min-h-[52px] min-w-[52px] lg:h-[60px] lg:w-[60px] 2xl:w-[72px] 2xl:h-[72px] font-medium flex justify-center items-center  rounded-full transition ${
              activeLetter === letter ? "bg-secondary text-white" : "bg-white hover:bg-gray-200"
            }`}
          >
            {letter}
          </button>
        ))}
      </div>

      {/* Mobile View Modal */}
      <button
        className="lg:hidden pl-6 p-2 w-full flex justify-between gap-4 items-center bg-white font-semibold rounded-full"
        onClick={() => setIsModalOpen(true)}
      >
        Select : {activeLetter}
        <span className="p-3 text-white text-xl bg-secondary rounded-full"><IoMenu/></span>
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
            <h2 className="text-lg font-bold mb-4">Select a Letter</h2>
            <div className="grid grid-cols-6 gap-2">
              <button
                key="All"
                onClick={() => {
                  setActiveLetter("All");
                  setIsModalOpen(false);
                }}
                className={`w-[40px] h-[40px] rounded-full ${
                  activeLetter === "All" ? "bg-secondary text-white" : "bg-gray-200"
                }`}
              >
                All
              </button>
              {letters.map((letter) => (
                <button
                  key={letter}
                  onClick={() => {
                    setActiveLetter(letter);
                    setIsModalOpen(false);
                  }}
                  className={`w-[40px] h-[40px] rounded-full ${
                    activeLetter === letter ? "bg-secondary text-white" : "bg-gray-200"
                  }`}
                >
                  {letter}
                </button>
              ))}
            </div>
            <div className="flex justify-end">
              <button
                className="mt-4 px-4 py-2 bg-gray-800 text-white  rounded-full"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>

    );
  };
