import { createContext, useContext, useState } from 'react';

const DrugContext = createContext();

export const DrugProvider = ({ children }) => {
    const [search, setSearch] = useState('');
    const [type, setType] = useState('');
    const [level, setLevel] = useState('');

    return (
        <DrugContext.Provider
            value={{
                search,
                setSearch,
                type,
                level,
                setLevel,
                setType,
            }}
        >
            {children}
        </DrugContext.Provider>
    );
};

export const useDrug = () => useContext(DrugContext);
