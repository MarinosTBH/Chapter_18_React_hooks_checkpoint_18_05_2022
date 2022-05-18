import React, { useState } from "react";
import "./SearchNavbar.css"

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  }

  return (
    
    <div className="nav-container">
                <nav><div >
                    <h1 className="clickable">Getlify</h1>
                </div>
                <ul>
                    <li className="clickable">Home</li>
                    <li className="clickable">Movies</li>
                     </ul>       
                  <form className="search">
              <input
                value={searchValue}
                onChange={handleSearchInputChanges}
                type="text"
              />
              <input onClick={callSearchFunction} type="submit" className="clickableButt" value="SEARCH" />
      </form>
      </nav>
    </div>

);
}

export default Search;