import React from "react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CharacterCard from "./characterCard";

const BarraDeBusqueda = () => {
    const [searchCharacter, setSearchCharacter] = useState()
    const [searchInput, setSearchInput] = useState("")
    const navigate = useNavigate()
    const urlData = useLocation()
    const querryParamas = new URLSearchParams(urlData.search)
    const nameCharacter = querryParamas.get('name')
// console.log(searchCharacter);

    // useEffect(() => {
    //     fetch(`https://rickandmortyapi.com/api/character/?name=${nameCharacter}`)
    //     .then((data) => data.json())
    //     .then((searchCharacter) => setSearchCharacter(searchCharacter))
    // }, [nameCharacter])

    const handleSearch = () => {
        navigate(`?name=${searchInput}`)
    }


    return(
        <div>
            <input type="text" id='searchInput' placeholder='Search...' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
            <input type="text" />
            <button type='button' onClick={handleSearch}>search</button>
            <div>
                {searchCharacter &&(
                    <div>
                         
                    </div>
                )}
            </div>
        </div>
        
    )
}

export default BarraDeBusqueda;