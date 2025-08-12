import React from 'react';
import Banner from '../Components/Banner';
import FeaturedMovies from '../Components/FeaturedMovies';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
            {/* <h2>Hi! This is Home page.....</h2> */}
            {/* Banner */}
            <Banner></Banner>
            {/* Featured Movies */}
            <FeaturedMovies></FeaturedMovies>
        </div>
    );
};

export default Home;