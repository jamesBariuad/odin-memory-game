interface FetchNewPokesButtonProps{
    fetchNewPokes: ()=>void
}

const FetchNewPokesButton = ({fetchNewPokes}:FetchNewPokesButtonProps) => {
  return (
    <div><button className="btn btn-secondary z-3" onClick={fetchNewPokes}>Fetch New Pokes</button></div>
  )
}

export default FetchNewPokesButton