import {createContext, useContext, useState} from "react";

const ClinicContext = createContext();

export const ClinicProvider = ({children}) => {
  const [type, setType] = useState("");
  const [distance, setDistance] = useState("asc");
  const [search, setSearch] = useState("");

  return (
    <ClinicContext.Provider value={{
      type,
      setType,
      distance,
      setDistance,
      search,
      setSearch
    }}>
      {children}
    </ClinicContext.Provider>
  )
}

export const useClinic = () => useContext(ClinicContext);