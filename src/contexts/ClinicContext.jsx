import {createContext, useContext, useState} from "react";

const ClinicContext = createContext();

export const ClinicProvider = ({children}) => {
  const [type, setType] = useState([]);
  const [facilities, setFacilities] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <ClinicContext.Provider value={{
      type,
      setType,
      facilities,
      setFacilities,
      search,
      setSearch
    }}>
      {children}
    </ClinicContext.Provider>
  )
}

export const useClinic = () => useContext(ClinicContext);