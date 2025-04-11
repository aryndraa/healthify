import {createContext, useContext, useState} from "react";

const PharmacyContext = createContext();

export const PharmacyProvider = ({children}) => {
  const [type, setType] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <PharmacyContext.Provider value={{
      type,
      setType,
      search,
      setSearch
    }}>
      {children}
    </PharmacyContext.Provider>
  )
}

export const usePharmacy = () => useContext(PharmacyContext);