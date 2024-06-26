import React, { useState, useEffect } from "react";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from 'reactstrap';
import { getAllGenres } from "../../services/genreServices.jsx";
  
  
  export const GenreDropdown = ({setSingleGenre}) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const [genres, setGenres] = useState([])
    const [genreState, setGenreState] = useState("Genre")

    useEffect(() =>  {
        getAllGenres().then((genreArray) => {
            setGenres(genreArray)
        })
      }, [])
  
    
  
    return (
        <div className="dropdown-options">
          {/* genre availability */}
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret size="lg">
            {genreState}
          </DropdownToggle>
    
         
          <DropdownMenu>

            <DropdownItem onClick={() => {
                setGenreState("Genre")
            }}>
                Genre
            </DropdownItem>

        {genres.map((singleGenre) => {

            return <DropdownItem key={singleGenre.id} onClick={() => {
                setGenreState(singleGenre.type)
                setSingleGenre(singleGenre.id)
            }}>
                
                {singleGenre.type}
            </DropdownItem>

            })}
    
        </DropdownMenu>
        </Dropdown>
        <p/>
        </div>
      );
    }