import React, { useState, useEffect} from "react";
import data from "./../mocks/responseOk.json"

export function useMovie(){
    const [movies, settMovie] = useState([])
    const [hasMovie, setHasMovie] = useState(false)
    const mapDataSearchMovie = (data)=>{
     return  data.map(movie=>{
            return{
                id:movie.imdbID,
                title:movie.Title,
                image:movie.Poster,
                year:movie.Year,
            }
        })
    }
    useEffect(()=>{
        settMovie(mapDataSearchMovie(data.Search))
        if(data.Search.length > 0 ) setHasMovie(true)
    },[])
    return {
        movies, hasMovie
    }
}