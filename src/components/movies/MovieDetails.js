import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';




function MovieDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    async function getMovieById(id) {
        const res = await axios('https://ancient-caverns-16784.herokuapp.com/movies/' + id);
        setMovie(res.data);
    }
    
    useEffect(() => { 
        getMovieById(movieId); 
    }, [movieId]);

    if(movie) {
        console.log(movie);
        return (
            <>
                <h1>{ movie.Title }({ movie.Year }) &nbsp; &nbsp; &nbsp; &#11088;{movie.imdbRating}/10</h1>
                <h5 style={{position: 'absolute', right: 930}}>{movie.imdbVotes}</h5>
                <h6>{movie.Rated} &#x0007C; {movie.Runtime} &#x0007C; {movie.Genre} &#x0007C; {movie.Released}({movie.Country})</h6>
                <img src={ movie.Poster } alt="Movie Poster" />
                <p>{movie.Plot}</p>
                <h6>Director: {movie.Director} </h6>
                <h6>Writers: {movie.Writer}</h6>
                <h6>Stars: {movie.Actors}</h6> 

                <h6> {movie.Ratings.map(rating => <> {rating.Source}: {rating.Value} <br></br> </>)} </h6>


                
            </>
        );
    } else {
        return <h1>Loading ...</h1>;
    }
  
    

}



export default MovieDetails;
