import React, {useState} from 'react';
import './SearchBar.scss';

const SearchBar = props => {
    const [search, setSearch] = useState("");

    return(
        <div className="navbar">
            <div className="leftNav">
                <img src={require("../../Images/searchBarCamera.svg")} alt="Camera Icon" />
                <h1>Instagram</h1>
            </div>
            
            <form onSubmit={e => props.searchPosts(e, search)}>
                <input 
                    id="navSearch" 
                    type="text" 
                    placeholder="Search"
                    value={search}
                    onChange = {e => setSearch(e.target.value)}
                />
            </form>

            <div className="rightNav">
                <img src={require("../../Images/searchBarEye.svg")} alt="Eye Icon" />
                <img src={require("../../Images/searchBarHeart.svg") } alt="Heart Icon" />
                <img src={require("../../Images/searchBarPerson.svg")} alt="Person Icon" />
            </div>
        </div>
    );
}

export default SearchBar;