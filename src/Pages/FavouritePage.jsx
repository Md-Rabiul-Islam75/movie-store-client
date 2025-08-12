import React, { useContext } from 'react';
import { DataContext } from '../provider/DataProvider';
import OneFavComp from '../Components/OneFavComp';

const FavouritePage = () => {
    const { favourites } = useContext(DataContext);
    console.log(favourites);
    return (
        <div>
            <h3>No. of favourite movie here: {favourites.length}</h3>
            
            <div className='grid grid-cols-1 md:grid-cols-3'>
            {
                favourites.map(oneFav => <OneFavComp favourite = {oneFav}></OneFavComp>)
            }
            </div>
           

        </div>
    );
};

export default FavouritePage;