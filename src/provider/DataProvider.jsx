import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { auth } from '../firebase/firebase.init';


export const DataContext = createContext();

const DataProvider = ({children}) => {
    const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);
    const [favourites, setFavourites] = useState([]);
    const [movies2, setMovies2] = useState(null);



      const createUser = (email, password) =>{
         setLoading(true);
         return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    const updateUser = (profile) => {
        return  updateProfile(auth.currentUser, profile);
    }

    //console.log(user);


    const data = {
        user,
        setUser,
        favourites,
        setFavourites,
        createUser,
        signInUser,
        updateUser,
        movies2,
        setMovies2
    };

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;