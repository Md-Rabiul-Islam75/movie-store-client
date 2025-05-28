import React, { createContext, useState } from 'react';


export const DataContext = createContext();

const DataProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [favourite, setFavourite] = useState([]);

    const data = {
        user,
        setUser,
        favourite,
        setFavourite
    };

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;