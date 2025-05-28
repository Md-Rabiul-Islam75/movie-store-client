import React from 'react';
import { useLoaderData } from 'react-router-dom';
import OneMovie from '../Components/OneMovie';

const AllMovie = () => {
    
    const movies = useLoaderData();
    console.log(movies);


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