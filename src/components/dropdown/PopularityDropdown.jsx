import React, { useState, useEffect } from "react";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from 'reactstrap';
import { getAllPopularities } from "../../services/popularityServices.jsx";
  
  
  export const PopularityDropdown = ({setSinglePopularity}) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const [popularities, setPopularities] = useState([])
    const [popularityState, setPopularityState] = useState("Popularity")

    useEffect(() =>  {
        getAllPopularities().then((popularityArray) => {
            setPopularities(popularityArray)
        })
      }, [])
  
    
  
    return (
        <div className="dropdown-options">
          {/* popularity availability */}
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret size="lg">
            {popularityState}
          </DropdownToggle>
    
         
          <DropdownMenu>

            <DropdownItem onClick={() => {
                setPopularityState("Popularity")
            }}>
                Popularity
            </DropdownItem>

        {popularities.map((singlePopularity) => {

            return <DropdownItem key={singlePopularity.id} onClick={() => {
                setPopularityState(singlePopularity.type)
                setSinglePopularity(singlePopularity.id)
            }}>
                
                {singlePopularity.type}
            </DropdownItem>

            })}
    
        </DropdownMenu>
        </Dropdown>
        <p/>
        </div>
      );
    }