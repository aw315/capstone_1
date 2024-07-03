import { useEffect, useState } from "react";
import { getAllGames } from "../../services/gamesServices";
import { GameCard } from "./Game";
import { Link } from "react-router-dom";

export const GamesList = () => {
    const [allGames, setAllGames] = useState([])

    const getAndSetGames = () => {
        getAllGames().then((gamesArray) => {
            setAllGames(gamesArray)
        })
    }

    useEffect(() => {
        getAndSetGames()
    }, [])


return (
<>
<h1>GAMES</h1>
<Link to={`/games/create`}> <button>Add</button></Link>
    {allGames.map((singleGame) => {
        return <GameCard key={singleGame.id} singleGame={singleGame} getAndSetGames={getAndSetGames}/>
    })}
    </>
)
}