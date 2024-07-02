import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from 'reactstrap';
import { ConsoleDropdown } from './ConsoleDropdown.jsx';
import { DifficultyDropdown } from './DifficultyDropdown.jsx';
import { GenreDropdown } from './GenreDropdown.jsx';
import { PlayerCountDropdown } from './PlayerCountDropdown.jsx';
import { PopularityDropdown } from './PopularityDropdown.jsx';
import { useNavigate } from 'react-router-dom';
import { ResultsList } from '../results/ResultsList.jsx';
import "./DropdownPage.css"
import { addResult } from '../../services/resultService.jsx';


export const DropdownPage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = (selection) => setDropdownOpen((prevState) => !prevState);
  const navigate = useNavigate();
  const [console, setConsole] = useState(0)
  const [genre, setGenre] = useState(0)
  const [difficulty, setDifficulty] = useState(0)
  const [playerCount, setPlayerCount] = useState(0)
  const [popularity, setPopularity] = useState(0)

// game object
// "id": 1,
// "title": "Super Mario Odyssey",
// "difficultyId": 1,
// "genreId": 2,
// "playerCountId": 1,
// "popularityId": 1,
// "consoleId": 4

  const handleSubmit = (event) => {
    event.preventDefault()

   const objectOfIds = {
    consoleId: console,
    genreId: genre,
    difficultyId: difficulty,
    playerCountId: playerCount,
    popularityId: popularity
   }

    addResult(objectOfIds)

   .then((resultId) => {
    navigate(`/results/${resultId}`)

  })
  }

  // handle submit - add navigate? set selections to add a result to database? 



  return (
    <div className="dropdown-options">
      <style>{'body { background-color: navy; }'}</style>
      <h1 className="header" style={{color: 'white'}}>
        Video Game Guru
      </h1>
      <div className="description" style={{color: 'white'}}>
        Find a game that's right for you! From the dropdown menus below, select the options that suit the kind of game you would like to play.
      </div>
    <p/>
    <div className="d-flex p-5 justify-content-center">
      {/* console availability */}
      <ConsoleDropdown setSingleConsole={setConsole} />
      <GenreDropdown setSingleGenre={setGenre} />
      <DifficultyDropdown setSingleDifficulty={setDifficulty}/>
      <PlayerCountDropdown setSinglePlayerCount={setPlayerCount}/>
      <PopularityDropdown setSinglePopularity={setPopularity}/>
    </div>
    {/* <button onClick={handleSubmit}>Submit</button> */}
    <div className="justify-content-center d-flex">
    <Button
      color="primary"
      href="#"
      tag="a"
      onClick={handleSubmit}
      className="text-center"
    >
      Submit
    </Button>
    </div>
  
  </div>
  );
}


