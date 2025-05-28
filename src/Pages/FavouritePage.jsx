import React, { useContext } from 'react';
import { DataContext } from '../provider/DataProvider';

const FavouritePage = () => {
    const { favourite } = useContext(DataContext);
    console.log(favourite);
    return (
        <div>
            <h3>No of favourite movie here: {favourite.length}</h3>
        </div>
    );
};

export default FavouritePage;