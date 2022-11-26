import { useParams } from "react-router-dom"


export default function MovieDetailPage ({movies}) {
    const movieTitle = useParams()
    console.log(movieTitle)
    const movie = movies.find(movie => movie.title === movieTitle.title)
    console.log(movie)
    return (
        <>
        <h1>{movie.title}</h1>
        <h2>{movie.releaseDate}</h2>
        <img src={movie.posterPath} alt={movie.title}></img>
        <p><strong>Cast: </strong>{movie.cast.join(', ')}</p>
        </>
    )
}