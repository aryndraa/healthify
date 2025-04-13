import {useEffect, useState} from "react";
import {DiseaseCard} from "./DiseaseCard.jsx";
import {dieases} from "../../pages/Disease/diseaseData.js";
import {useDisease} from "../../contexts/DiseaseContext.jsx";
import {useNavigate} from "react-router-dom";

export const DiseaseList = ({loading}) => {
  const {search, setSearch, letterSelect, setLetterSelect} = useDisease()
  const [filteredData, setFilteredData] = useState(dieases);

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

  useEffect(() => {
    let filtered = dieases;

    if (search && search.length > 0 && letterSelect === "all") {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredData(filtered);
    }

    if (letterSelect && letterSelect !== "all" && search.length  === 0 ) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().startsWith(letterSelect.toLowerCase())
      );
      setFilteredData(filtered);
    }

  }, [search, letterSelect])
  console.log(letterSelect)
  console.log(filteredData)
  console.log(search);

  if(letterSelect !== "all" && filteredData.length === 0 ) {
    return (
      <div className="w-full text-center py-10 text-zinc-500 text-lg">
        {/*<img src="https://media-hosting.imagekit.io/a7b52d1339f6480f/error-404.png?Expires=1838969916&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=W7z35NCrsF4Hg4ATD8kObmyTcSULYZ1dDGFlGThyxvFv1EwomkTiG~nWnkyYWo7HAmKcJxA5p7VXug2pFh~OUAlpOCBQZ4oqIeTe11xpUFQAdBrS8YIVn6lE97xR~3J6zSspR~UNYwGxHU~BW~s3B170CdUXYczJdbxa4tZzTPvuvZ~p0FmTi8e62p4WLr-sMFV4eb1Th848-5wKnMMMgnISqWHZ~MdLkaNough99nl7obe8TCE1DNJ2XPijBn-vfGZQ0qua66hj2trJ0~e4d3DOM7ckn6z7hZPADw63sz-igD~xsuoeDuLdrCAUAUyDCSK-KsZojaVnt5Z85CnlAQ__" alt="No results" className="mx-auto w-40 mb-4" />*/}
        <h1 className="text-5xl mb-4">404 Not Found</h1>
        <p>No Diseases found.</p>
        <button onClick={() => setLetterSelect("all")} className="mt-4 underline text-blue-500">
          Reset Search
        </button>
      </div>
    )
  }

  if(letterSelect !== "all" ) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2   gap-4 mb-8 w-full">
        {filteredData.map((item, index) => (
          <DiseaseCard
            key={index}
            id={item.id}
            name={item.name}
            deskripsi={item.definisi.substring(0, 140)}
            gejala={item.gejala.find(g => g.name === "umum").list}
            loading={loading}
          />
        ))}
      </div>
    )
  }



  if (search.length === 0 && letterSelect === "all") {
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
  }

  if(search.length > 0 && filteredData.length === 0) {
    return (
      <div className="w-full text-center py-10 text-zinc-500 text-lg">
        {/*<img src="https://media-hosting.imagekit.io/a7b52d1339f6480f/error-404.png?Expires=1838969916&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=W7z35NCrsF4Hg4ATD8kObmyTcSULYZ1dDGFlGThyxvFv1EwomkTiG~nWnkyYWo7HAmKcJxA5p7VXug2pFh~OUAlpOCBQZ4oqIeTe11xpUFQAdBrS8YIVn6lE97xR~3J6zSspR~UNYwGxHU~BW~s3B170CdUXYczJdbxa4tZzTPvuvZ~p0FmTi8e62p4WLr-sMFV4eb1Th848-5wKnMMMgnISqWHZ~MdLkaNough99nl7obe8TCE1DNJ2XPijBn-vfGZQ0qua66hj2trJ0~e4d3DOM7ckn6z7hZPADw63sz-igD~xsuoeDuLdrCAUAUyDCSK-KsZojaVnt5Z85CnlAQ__" alt="No results" className="mx-auto w-40 mb-4" />*/}
        <h1 className="text-5xl mb-4">404 Not Found</h1>
        <p>No Diseases found.</p>
        <button onClick={() => setSearch("")} className="mt-4 underline text-blue-500">
          Reset Search
        </button>
      </div>
    )
  }


  if(search.length > 0 && filteredData.length > 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2   gap-4 mb-8 w-full">

        {filteredData.map((item, index) => (
          <DiseaseCard
            key={index}
            id={item.id}
            name={item.name}
            deskripsi={item.definisi.substring(0, 140)}
            gejala={item.gejala.find(g => g.name === "umum").list}
            loading={loading}
          />
        ))}
      </div>
    )
  }

};
