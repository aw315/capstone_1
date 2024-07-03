import { useEffect, useState } from "react"
import { getAllDifficulties } from "../../services/difficultyServices"
import { getAllGenres } from "../../services/genreServices"
import { getAllConsoles } from "../../services/consoleServices"
import { getAllPopularities } from "../../services/popularityServices"
import { getAllPlayerCounts } from "../../services/playerCountServices"
import { editGame, getGameById } from "../../services/gamesServices"
import { useNavigate, useParams } from "react-router-dom"

export const EditGameForm = () => {
    const [editedGameState, setEditedStateGame] = useState({})
    const [difficultyState, setDifficultyState] = useState([])
    const [genreState, setGenreState] = useState([])
    const [consoleState, setConsoleState] = useState([])
    const [popularityState, setPopularityState] = useState([])
    const [playerCountState, setPlayerCountState] = useState([])

    const navigate = useNavigate()
    const {gamesId} = useParams()

    useEffect(() => {
        getGameById(gamesId).then((gameArray) => {
            setEditedStateGame(gameArray)
        }) 
    }, [])

    useEffect(() => {
        getAllDifficulties().then((difficultyArray) => {
            setDifficultyState(difficultyArray)
        })
    }, [])
    useEffect(() => {
        getAllGenres().then((genreArray) => {
            setGenreState(genreArray)
        })
    }, [])
    useEffect(() => {
        getAllConsoles().then((consoleArray) => {
            setConsoleState(consoleArray)
        })
    }, [])
    useEffect(() => {
        getAllPopularities().then((popularityArray) => {
            setPopularityState(popularityArray)
        })
    }, [])
    useEffect(() => {
        getAllPlayerCounts().then((playerCountArrray) => {
            setPlayerCountState(playerCountArrray)
        })
    }, [])
    
    const handleSave = (event) => {
        event.preventDefault()
            const editedGame = {
                id: gamesId,
                title: editedGameState.title,
                difficultyId: editedGameState.difficultyId,
                genreId: editedGameState.genreId,
                playerCountId: editedGameState.playerCountId,
                popularityId: editedGameState.popularityId,
                consoleId: editedGameState.consoleId
            }
            editGame(editedGame).then(() => {
                navigate("/games")
            })
    }

    return <>
     <form>
         <fieldset>
            <div className="form-group">
                <label>Title : 
                    <input
                            type="text"
                            className="form-control"
                            placeholder="Title of Game"
                            value={editedGameState.title}
                            onChange={(event) => {
                                const gameCopy = {...editedGameState }
                                gameCopy.title = event.target.value
                                setEditedStateGame(gameCopy)
                            }}
                        />
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>Difficulty : 
                        <select
                            className="form-control"
                            placeholder="Difficulty Level"
                            value={editedGameState.difficultyId}
                            onChange={(event) => {
                                const gameCopy = {...editedGameState }
                                gameCopy.difficultyId = event.target.value
                                setEditedStateGame(gameCopy)
                            }}
                        >
                            <option>Select Difficulty</option>
                            {difficultyState.map((difficultyObj) => {
                                return <option key={difficultyObj.id} value={difficultyObj.id}>{difficultyObj.type}</option> })}
                        </select>   
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>Console : 
                        <select
                            className="form-control"
                            placeholder="Type of Console"
                            value={editedGameState.consoleId}
                            onChange={(event) => {
                                const gameCopy = {...editedGameState }
                                gameCopy.consoleId = event.target.value
                                setEditedStateGame(gameCopy)
                            }}
                        >
                            <option>Select Console</option>
                            {consoleState.map((consoleObj) => {
                                return <option key={consoleObj.id} value={consoleObj.id}>{consoleObj.type}</option> })}
                        </select>
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>Popularity : 
                        <select
                            className="form-control"
                            placeholder="Popularity"
                            value={editedGameState.popularityId}
                            onChange={(event) => {
                                const gameCopy = {...editedGameState }
                                gameCopy.popularityId = event.target.value
                                setEditedStateGame(gameCopy)
                            }}
                        >
                            <option>Select Popularity</option>
                            {popularityState.map((popularityObj) => {
                                return <option key={popularityObj.id} value={popularityObj.id}>{popularityObj.type}</option> })}
                        </select>
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>Genre : 
                        <select
                            className="form-control"
                            placeholder="Genre"
                            value={editedGameState.genreId}
                            onChange={(event) => {
                                const gameCopy = {...editedGameState }
                                gameCopy.genreId = event.target.value
                                setEditedStateGame(gameCopy)
                            }}
                        >
                            <option>Select Genre</option>
                            {genreState.map((genreObj) => {
                                return <option key={genreObj.id} value={genreObj.id}>{genreObj.type}</option> })}
                        </select>
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>Player Count : 
                        <select
                            className="form-control"
                            placeholder="Player Count"
                            value={editedGameState.playerCountId}
                            onChange={(event) => {
                                const gameCopy = {...editedGameState }
                                gameCopy.playerCountId = event.target.value
                                setEditedStateGame(gameCopy)
                            }}
                        >
                            <option>Select Player Count</option>
                            {playerCountState.map((playerCountObj) => {
                                return <option key={playerCountObj.id} value={playerCountObj.id}>{playerCountObj.type}</option> })}
                        </select>
                    </label>
                </div>
            </fieldset>       
            <fieldset>
                <div className="form-group">
                    <button className="form-btn btn-info"
                        onClick={(e) => handleSave(e)}
                    >
                        Save Game
                    </button>
                </div>
            </fieldset>                     
        </form>
    </>
    
}