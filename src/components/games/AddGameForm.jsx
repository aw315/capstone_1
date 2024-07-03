import { useEffect, useState } from "react"
import { getAllDifficulties } from "../../services/difficultyServices"
import { getAllGenres } from "../../services/genreServices"
import { getAllConsoles } from "../../services/consoleServices"
import { getAllPopularities } from "../../services/popularityServices"
import { getAllPlayerCounts } from "../../services/playerCountServices"
import { addGame } from "../../services/gamesServices"
import { useNavigate } from "react-router-dom"

export const AddGameForm = () => {
    const [newGame, setNewGame] = useState({
                title: "",
                difficultyId: 0,
                genreId: 0,
                playerCountId: 0,
                popularityId: 0,
                consoleId: 0
    })
    const [difficultyState, setDifficultyState] = useState([])
    const [genreState, setGenreState] = useState([])
    const [consoleState, setConsoleState] = useState([])
    const [popularityState, setPopularityState] = useState([])
    const [playerCountState, setPlayerCountState] = useState([])
    const navigate = useNavigate()
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
            const brandNewGame = {
                title: newGame.title,
                difficultyId: newGame.difficultyId,
                genreId: newGame.genreId,
                playerCountId: newGame.playerCountId,
                popularityId: newGame.popularityId,
                consoleId: newGame.consoleId
            }

            addGame(brandNewGame).then(() => {
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
                            onChange={(event) => {
                                const gameCopy = {...newGame }
                                gameCopy.title = event.target.value
                                setNewGame(gameCopy)
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
                            onChange={(event) => {
                                const gameCopy = {...newGame }
                                gameCopy.difficultyId = event.target.value
                                setNewGame(gameCopy)
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
                            onChange={(event) => {
                                const gameCopy = {...newGame }
                                gameCopy.consoleId = event.target.value
                                setNewGame(gameCopy)
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
                            onChange={(event) => {
                                const gameCopy = {...newGame }
                                gameCopy.popularityId = event.target.value
                                setNewGame(gameCopy)
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
                            onChange={(event) => {
                                const gameCopy = {...newGame }
                                gameCopy.genreId = event.target.value
                                setNewGame(gameCopy)
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
                            onChange={(event) => {
                                const gameCopy = {...newGame }
                                gameCopy.playerCountId = event.target.value
                                setNewGame(gameCopy)
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
                        Add Game
                    </button>
                </div>
            </fieldset>                     
        </form>
    </>
    
}