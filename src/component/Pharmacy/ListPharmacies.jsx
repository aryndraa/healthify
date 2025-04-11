import { PharmacyClinicCard } from "../PharmacyClinicCard.jsx"
import {pharmacies} from "./../../pages/Pharmacy/pharmachyData.js" // Pastikan path dan file ini benar
import { useEffect, useState } from "react";
import { usePharmacy } from "./../../contexts/PharmacyContext";

export const ListPharmacies = ({isLoading}) => {
  const { type, search, setSearch } = usePharmacy();
  const [filteredData, setFilteredData] = useState(pharmacies);

  useEffect(() => {
    let filtered = pharmacies;

    if (type && type.length > 0) {
      filtered = filtered.filter((item) => type.includes(item.type));
    }

    if (search && search.length > 0) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredData(filtered);
  }, [type, search]);

  if(filteredData.length === 0) {
    return (
      <div className="w-full text-center py-10 text-zinc-500 text-lg">
        {/*<img src="https://media-hosting.imagekit.io/a7b52d1339f6480f/error-404.png?Expires=1838969916&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=W7z35NCrsF4Hg4ATD8kObmyTcSULYZ1dDGFlGThyxvFv1EwomkTiG~nWnkyYWo7HAmKcJxA5p7VXug2pFh~OUAlpOCBQZ4oqIeTe11xpUFQAdBrS8YIVn6lE97xR~3J6zSspR~UNYwGxHU~BW~s3B170CdUXYczJdbxa4tZzTPvuvZ~p0FmTi8e62p4WLr-sMFV4eb1Th848-5wKnMMMgnISqWHZ~MdLkaNough99nl7obe8TCE1DNJ2XPijBn-vfGZQ0qua66hj2trJ0~e4d3DOM7ckn6z7hZPADw63sz-igD~xsuoeDuLdrCAUAUyDCSK-KsZojaVnt5Z85CnlAQ__" alt="No results" className="mx-auto w-40 mb-4" />*/}
        <h1 className="text-5xl mb-4">404 Not Found</h1>
        <p>No pharmacies found.</p>
        <button onClick={() => setSearch("")} className="mt-4 underline text-blue-500">
          Reset Search
        </button>
      </div>
    );

  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2  lg:gap-4 rounded-xl">
      {
        filteredData.map((item) => (
          <PharmacyClinicCard
            key={item.id}
            img={item.image}
            name={item.name}
            type={item.type}
            id={item.id}
            loading={isLoading}
          />
        ))
      }
    </div>
  );
};
