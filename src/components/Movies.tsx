export function Movies({movies, hasMovie}){
    function ListMovies({movies}){
        return(
            <ul className="movies">
                {
                    movies.map(movie=>(
                        <li key={movie.id} className="movie">
                            <h3>{movie.title}</h3>
                            <p>{movie.year}</p>
                            <img src={movie.image}alt={`data from movie ${movie.title}`}/>
                        </li>
                    ))

                }
            </ul>
        )
    }
    return(

            hasMovie ?
                (
                    <ListMovies movies={movies}/>
                ):(
                    <p> No hay data para mostrar </p>
                )
    )
}