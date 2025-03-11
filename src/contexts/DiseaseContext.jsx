import {createContext, useContext, useState} from "react";

const DiseaseContext = createContext();

export const DiseaseProvider = ({children}) => {
  const [letterSelect, setLetterSelect] = useState("all");
  const [search, setSearch] = useState("");

  return (
    <DiseaseContext.Provider value={{
      letterSelect,
      setLetterSelect,
      search,
      setSearch
    }}>
      {children}
    </DiseaseContext.Provider>
  )
}

export const useDisease = () => useContext(DiseaseContext);