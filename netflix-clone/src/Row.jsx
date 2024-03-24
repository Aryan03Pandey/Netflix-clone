import React, { useEffect, useState } from 'react'; 
import "./Row.css";
import axios from './axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Row({title, fetchURL, isLargeRow = false}) {

    const [movies, setMovies] = useState([]);
    const [trailerURL, setTrailerURL] = useState("");

    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchURL])

    const opts = {
        height: "300px",
        width: "100%",
        playerVars: {
            autoplay: "1",
        }
    };

    const handleClick = (movie) => {
        if(trailerURL){
            setTrailerURL("");
        }
        else{
            movieTrailer(movie?.name || "")
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerURL(urlParams.get('v'));
            }).catch(error => console.log(error));
        }
    }

  return (
    <div className='row'>
        <h2>{title}</h2>

        <div className='row-posters'>
        {movies.map((item) => {
                return (<img className={`row-poster ${isLargeRow && "row-posterLarge"}`} 
                key = {item.id}
                onClick={() => handleClick(item)}
                src={`${base_url}${
                    isLargeRow ? item.poster_path : item.backdrop_path
                }`} alt="" />)
            })}
        </div>

        {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}

        
    </div>
  )
}

export default Row;