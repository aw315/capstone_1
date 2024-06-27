// this is where the games will be listed
import { useNavigate, useParams } from "react-router-dom"
import { getAllPlatformsResultsByIds, getResultById, getResultsByConsoleId6, getResultsByConsoleId7, getResultsByConsoleId8, getResultsByConsoleId9, getSinglePlatformResultsByIds } from "../../services/resultService.jsx"
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

useEffect(() => {
    //switch case
    switch(result.consoleId) {
        default:   getSinglePlatformResultsByIds(result?.genreId, result?.popularityId, result?.difficultyId, result?.playerCountId, result?.consoleId).then((resultArray) => {
                return setResults(resultArray)})
                console.log("default")
            break;
        case 5:
            getAllPlatformsResultsByIds(result?.genreId, result?.popularityId, result?.difficultyId, result?.playerCountId).then((resultArray) => {
                return setResults(resultArray)
            })
            console.log("5")
            break;
        case 6: 
            getResultsByConsoleId6(result?.genreId, result?.popularityId, result?.difficultyId, result?.playerCountId).then((resultArray) => {
                return setResults(resultArray)
            })
            console.log("6")
            break;
        case 7:
            getResultsByConsoleId7(result?.genreId, result?.popularityId, result?.difficultyId, result?.playerCountId).then((resultArray) => {
                    return setResults(resultArray)
                })
                console.log("7")
            break;
        case 8:
            getResultsByConsoleId8(result?.genreId, result?.popularityId, result?.difficultyId, result?.playerCountId).then((resultArray) => {
                    return setResults(resultArray)
                })
                console.log("8")
            break;
        case 9:
            getResultsByConsoleId9(result?.genreId, result?.popularityId, result?.difficultyId, result?.playerCountId).then((resultArray) => {
                    return setResults(resultArray)
                })
                console.log("9")
            break;            
    }
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