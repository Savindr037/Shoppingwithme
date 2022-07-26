import React from 'react';
import './SearchBox.css';
import search_icon from '../../src/logo/search-icon25.svg'

const SearchBox = () => {
    return (
        <>
            <div className="searchBoxCntnr">
                <div className="searchBox">
                    <input type="text" id="nav-search-input-field" className='nav-search-inputField' name="field-keywords" autoComplete="off" placeholder="Search" dir="auto" />
                    <span className='nav-search-iconCntnr' onClick={() => alert("further process is under development")}>
                    <img src={search_icon} className="search-icon" alt="" />
                    </span>
                </div>
            </div>
        </>
    )
}

export default SearchBox