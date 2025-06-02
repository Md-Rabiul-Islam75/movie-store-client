import React, { createContext, useState } from 'react';


export const DataContext = createContext();

const DataProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [favourites, setFavourites] = useState([]);

    const data = {
        user,
        setUser,
        favourites,
        setFavourites
    };

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;