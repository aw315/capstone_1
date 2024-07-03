import { Link } from "react-router-dom"
import { deleteGame } from "../../services/gamesServices"

export const GameCard = ({singleGame, getAndSetGames}) => {

    const handleDelete = (id) => {
        deleteGame(id).then(() => {
            getAndSetGames()
        })
    }
    return<>
    <div>
                    <h1>
                    {singleGame?.title}
                    </h1>
                    <p/>
                    {singleGame?.console?.type}
                    <p/>
                    {singleGame?.genre?.type}
                    <p/>
                    {singleGame?.playerCount?.type}

        <Link to={`/games/${singleGame?.id}`}> <button>Edit</button></Link>
        <button onClick={() => {handleDelete(singleGame?.id)}}>Delete</button>
    </div>
    </>
}