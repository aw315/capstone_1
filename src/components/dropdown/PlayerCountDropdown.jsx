import React, { useState, useEffect } from "react";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from 'reactstrap';
import { getAllPlayerCounts } from "../../services/playerCountServices.jsx";
  
  
  export const PlayerCountDropdown = ({setSinglePlayerCount}) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const [playerCounts, setPlayerCounts] = useState([])
    const [playerCountState, setPlayerCountState] = useState("Player Count")

    useEffect(() =>  {
        getAllPlayerCounts().then((playerCountArray) => {
            setPlayerCounts(playerCountArray)
        })
      }, [])
  
    
  
    return (
        <div className="dropdown-options">
          {/* playerCount availability */}
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret size="lg">
            {playerCountState}
          </DropdownToggle>
    
         
          <DropdownMenu>

            <DropdownItem onClick={() => {
                setPlayerCountState("Player Count")
            }}>
                Player Count
            </DropdownItem>

        {playerCounts.map((singlePlayerCount) => {

            return <DropdownItem key={singlePlayerCount.id} onClick={() => {
                setPlayerCountState(singlePlayerCount.type)
                setSinglePlayerCount(singlePlayerCount.id)
            }}>
                
                {singlePlayerCount.type}
            </DropdownItem>

            })}
    
        </DropdownMenu>
        </Dropdown>
        <p/>
        </div>
      );
    }