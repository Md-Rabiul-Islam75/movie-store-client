import React from 'react';
import movie1 from '../../src/assets/movie1.avif'
import movie2 from '../../src/assets/movie2.avif'
import movie3 from '../../src/assets/movie3.avif'
import movie4 from '../../src/assets/movie4.avif'



const Banner = () => {
    return (
        <div>
             <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={movie1}
            className="w-full h-[450px]"
          />
          <div className="absolute left-5 right-5 top-[220px] flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
            
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={movie2}
            className="w-full h-[450px]"
          />
          <div className="absolute left-5 right-5 top-[220px] flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={movie3}
            className="w-full h-[450px]"
          />
          <div className="absolute left-5 right-5 top-[220px] flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={movie4}
            className="w-full h-[450px]"
          />
          <div className="absolute left-5 right-5 top-[220px] flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Banner;