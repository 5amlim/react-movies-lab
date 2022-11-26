export default function ActorCard ({actor, i}) {

    return (
        <>
        <h3>{actor}</h3>
        <img src={`https://picsum.photos/id/${i}/200/300`}></img>
        </>
    )
}