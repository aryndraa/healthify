  import { useState } from "react";
  import { IoMenu } from "react-icons/io5";
  import {useDisease} from "../../contexts/DiseaseContext.jsx";

  export const ListWords = ({clearTrigger, setClearTrigger}) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const [activeLetter, setActiveLetter] = useState("all");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {setLetterSelect, letterSelect, setSearch } = useDisease()

    return (
    <div>

      <div className=" hidden sticky top-16   lg:grid 2xl:grid-cols-6 lg:grid-cols-5 gap-2 h-fit  ">
        <button
          key="all"
          onClick={() => {
            setLetterSelect("all");
            setSearch("")
          }}
          className={`2xl:text-2xl  lg:text-lg  lg:h-[60px] lg:w-[60px] 2xl:w-[72px]  2xl:h-[72px]  font-medium flex justify-center items-center  rounded-ful transition rounded-full ${
            letterSelect === "all" ? "bg-secondary text-white" : "bg-white hover:bg-gray-200"
          }`}
        >
          All
        </button>
        {letters.map((letter) => (
          <button
            key={letter}
            onClick={() => {
              setLetterSelect(letter);
              setSearch("")
            }}
            className={`2xl:text-2xl  lg:text-lg  lg:h-[60px] lg:w-[60px] 2xl:w-[72px] 2xl:h-[72px] font-medium flex justify-center items-center  rounded-full transition ${
              letterSelect === letter ? "bg-secondary text-white" : "bg-white hover:bg-gray-200"
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
        Select : {letterSelect}
        <span className="p-3 text-white text-xl bg-secondary rounded-full"><IoMenu/></span>
      </button>

      {isModalOpen && (
        <div className="fixed z-50 inset-0 flex items-center justify-center ">
          <button onClick={() => setIsModalOpen(false)} className="fixed z-50 inset-0 bg-black bg-opacity-50 "></button>
          <div className="bg-white z-50 p-6 rounded-lg shadow-lg w-[90%] max-w-md">
            <h2 className="text-lg font-bold mb-4">Select a Letter</h2>
            <div className="grid grid-cols-6 gap-2">
              <button
                key="All"
                onClick={() => {
                  setSearch("")
                  setLetterSelect("all");
                  setIsModalOpen(false);
                }}
                className={`w-[40px] h-[40px] rounded-full ${
                  letterSelect === "all" ? "bg-secondary text-white" : "bg-gray-200"
                }`}
              >
                All
              </button>
              {letters.map((letter) => (
                <button
                  key={letter}
                  onClick={() => {
                    setSearch("")
                    setLetterSelect(letter);
                    setIsModalOpen(false);
                  }}
                  className={`w-[40px] h-[40px] rounded-full ${
                    letterSelect === letter ? "bg-secondary text-white" : "bg-gray-200"
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
