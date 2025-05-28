import React, { useEffect, useState } from 'react';
import { data } from 'react-router-dom';
import Movie from './Movie';

const FeaturedMovies = () => {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
         fetch('movies.json')
         .then(res => res.json())
         .then(data => setMovies(data))
    },[])
    return (
        <div className=''>
            <h2>Count of Featured Movies here: {movies.length}</h2>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
             {
                movies.map(movie => <Movie key={movie.id} movie = {movie}></Movie>)
             }
            </div>

            
        </div>
    );
};

export default FeaturedMovies;