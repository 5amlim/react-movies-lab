import ActorCard from "./ActorCard"

export default function ActorListPage ({ movies }) {
    const actorsArray = []
    movies.map((movie) =>{
        actorsArray.push(...movie.cast)
    } )

    const actorSet = new Set(actorsArray)
    const uniqueActorsArray = Array.from(actorSet)
    const actors = uniqueActorsArray.map((actor, i) => {
        return (
        <ActorCard key={i} actor={actor} i={i} />
        )
        })

    return (
        <>
        <h1>Actors List</h1>
        {actors}
        </>
    )}
