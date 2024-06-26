// this is where the games will be listed
import { useNavigate, useParams } from "react-router-dom"
import { getResultById, getResultsByIds } from "../../services/resultService.jsx"
import { useState, useEffect } from "react"
import "./Results.css"
import { Button } from "reactstrap"

export const ResultsList = () => {
    const [result, setResult] = useState({})
    const [ results, setResults ] = useState([])
    const { resultId } = useParams()

    let navigate = useNavigate()
    
    useEffect(() => {
        getResultById(resultId).then((resultArray) => {
            setResult(resultArray)
            })
            }, [])
            
    //switch case
    switch(result.consoleId) {
        case 1:
            console.log("switch")
            break;
        case 2:
            console.log("xbox")
            break;
        case 3: 
            console.log("playstation")
            break;
        case 4:
            console.log("PC")
            break;
        case 5:
            console.log("all")
            break;
    }
    // genreId, popularityId, difficultyId, playerCountId, consoleId
    useEffect(() => {
        //future Sarah - we need to filter this by resultIds to get the right results to print on this list
        getResultsByIds(result?.genreId, result?.popularityId, result?.difficultyId, result?.playerCountId).then((resultArray) => {
                return setResults(resultArray)
            })
        }
    , [result])


    
    return (
        <div>
            <style>{'body { background-color: navy; }'}</style>
            {results.map((singleResult) => {
                return <div className="results-container" style={{color: 'white'}}>
                    <h1>
                    {singleResult.title}
                    </h1>
                    <p/>
                    {singleResult.console?.type}
                    <p/>
                    {singleResult.genre?.type}
                    <p/>
                    {singleResult.playerCount?.type}
                </div>
                
            })}
                <div>
                    <Button
                    color="primary"
                    href="#"
                    tag="a"
                    onClick={() => {navigate("/Dropdown")}}
                    className="text-center"
                    >
                    Return
                    </Button>
                </div>
        </div>
    )
}