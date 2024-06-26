import React, { useState, useEffect } from "react";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from 'reactstrap';
import { getAllConsoles } from "../../services/consoleServices.jsx";
  
  
  export const ConsoleDropdown = ({setSingleConsole}) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const [consoles, setConsoles] = useState([])
    const [platformState, setPlatformState] = useState("Platform")

    useEffect(() =>  {
        getAllConsoles().then((consoleArray) => {
            setConsoles(consoleArray)
        })
      }, [])
  
    
  
    return (
        <div className="dropdown-options">
          {/* console availability */}
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret size="lg">
            {platformState}
          </DropdownToggle>
    
         
          <DropdownMenu>

            <DropdownItem onClick={() => {
                setPlatformState("Platform")
            }}>
                Platform
            </DropdownItem>

        {consoles.map((singleConsole) => {

            return <DropdownItem key={singleConsole.id} onClick={() => {
                setPlatformState(singleConsole.type)
                setSingleConsole(singleConsole.id)
            }}>
                
                {singleConsole.type}
            </DropdownItem>

            })}
    
        </DropdownMenu>
        </Dropdown>
        <p/>
        </div>
      );
    }
    
    // //imported Large button from ReactSrap
    