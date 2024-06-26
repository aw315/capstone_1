import React, { useState, useEffect } from "react";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from 'reactstrap';
import { getAllDifficulties } from "../../services/difficultyServices.jsx";
  
  
  export const DifficultyDropdown = ({setSingleDifficulty}) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const [difficulties, setDifficulties] = useState([])
    const [difficultyState, setDifficultyState] = useState("Difficulty")

    useEffect(() =>  {
        getAllDifficulties().then((difficultyArray) => {
            setDifficulties(difficultyArray)
        })
      }, [])
  
    
  
    return (
        <div className="dropdown-options">
          {/* difficulty availability */}
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret size="lg">
            {difficultyState}
          </DropdownToggle>
    
         
          <DropdownMenu>

            <DropdownItem onClick={() => {
                setDifficultyState("Difficulty")
            }}>
                Difficulty
            </DropdownItem>

        {difficulties.map((singleDifficulty) => {

            return <DropdownItem key={singleDifficulty.id} onClick={() => {
                setDifficultyState(singleDifficulty.type)
                setSingleDifficulty(singleDifficulty.id)
            }}>
                
                {singleDifficulty.type}
            </DropdownItem>

            })}
    
        </DropdownMenu>
        </Dropdown>
        <p/>
        </div>
      );
    }