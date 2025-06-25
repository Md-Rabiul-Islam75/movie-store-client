import React, { useContext } from "react";
import { data, useLocation, useNavigate } from "react-router-dom";
import { DataContext } from "../provider/DataProvider";
import Swal from "sweetalert2";

const MovieDetails = () => {
  const location = useLocation();
   const navigate = useNavigate();
  const { movie } = location.state || {};

  if (!movie) return <p>No movie data found.</p>;

  const { favourites, setFavourites } = useContext(DataContext);

  const handleFavourite = () => {
    const alreadyExists = favourites.find((fav) => fav._id === movie._id);
    if (alreadyExists) {
      alert("This movie is already in your Favourite list.");
      return;
    }
    setFavourites([...favourites, movie]);
    alert("This movie added to your Favourite list.");
  };

  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure that you want to delete from your favourite one?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/movies/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your movie has been deleted from your favourite list.",
                icon: "success",
              });
            }
          });

        //console.log("delete confirmed.");
        console.log(favourites.length);

        const updatedFavourites = favourites.filter(
          (movie) => movie._id !== _id
        );
        console.log(updatedFavourites.length);
        setFavourites(updatedFavourites);
        navigate('/favourite');
        
      }
    });
  };

  return (
    <div className="p-6">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={movie.moviePoster} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{movie.movieTitle}</h2>
          <div className="flex justify-between">
            <h3>Duration: {movie.movieDuration}</h3>
            <h3>Release Year: {movie.movieReleaseyear}</h3>
            <h3>Genre: {movie.movieGenre}</h3>
          </div>
          <h1>Movie Rating: {movie.movieRating}</h1>
          <div className="flex justify-between">
            <button
              onClick={() => handleDelete(movie._id)}
              className="btn bg-red-500 p-5"
            >
              Delete
            </button>
            <button onClick={handleFavourite} className="btn bg-green-500 p-5">
              Add to Favourite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
