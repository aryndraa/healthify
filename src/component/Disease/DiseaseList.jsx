import {useState} from "react";
import {DiseaseCard} from "./DiseaseCard.jsx";
import {dieases} from "../../pages/Disease/diseaseData.js";

export const DiseaseList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(dieases.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = dieases.slice(startIndex, startIndex + itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4 mb-8 w-full">
        {currentData.map((item, index) => (
          <DiseaseCard
            key={index}
            id={item.id}
            name={item.name}
            deskripsi={item.definisi.substring(0, 140)}
            gejala={item.gejala.find(g => g.name === "umum").list}
          />
        ))}
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-secondary text-white disabled:opacity-50 rounded-xxl"
        >
          Prev
        </button>
        <span className="px-2 py-2 text-lg font-medium">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-secondary text-white disabled:opacity-50 rounded-xxl"
        >
          Next
        </button>
      </div>
    </div>
  );
};
