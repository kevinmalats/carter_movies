import React from "react"
import "./App.css"
import {useMovie} from "./hooks/useMovie";
import {Movies} from "./components/Movies";
import {Form} from "./components/Form";
export function App(){
    const { hasMovie, movies } = useMovie();


    return(
        <div className="page">
            <header>
                <title>Buscador de películas</title>
                <h1>Buscador de películas</h1>
                <Form/>

            </header>
            <main>

                <Movies movies={movies} hasMovie={hasMovie}/>
            </main>
        </div>
    )
}