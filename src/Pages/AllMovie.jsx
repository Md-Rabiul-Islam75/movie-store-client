import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import OneMovie from '../Components/OneMovie';
import { DataContext } from '../provider/DataProvider';

const AllMovie = () => {

    // const {movies2, setMovies2} = useContext(DataContext);

   
    
    const movies = useLoaderData();
    console.log(movies);

    //  setMovies2(movies);

    //  console.log(movies2)


    return (
        <div>
            <h2 className='font-bold'>Total movies: {movies.length}</h2>

            <div className='grid md:grid-cols-3 gap-2'>
            {
                movies.map(movie => <OneMovie key={movie._id} movie = {movie}></OneMovie>)
            }
            </div>

           
        </div>
    );
};

export default AllMovie;