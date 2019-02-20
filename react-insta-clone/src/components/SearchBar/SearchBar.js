import React from 'react';
import './SearchBar.scss';

import camera from "../../Images/searchBarCamera.svg";

import { Nav, NavItem, NavLink } from 'reactstrap';

const SearchBar = props => {
    const [search, setSearchedPosts] = useState(props.posts);

    handleChanges = e => {
        setSearchedPosts(e.target.value)
    }

    return(
        <div className="navbar">
            <div className="leftNav">
                <img src={require("../../Images/searchBarCamera.svg")} />
                <h1>Instagram</h1>
            </div>
            
            <form onSubmit={e => props.newSearch(e, e.target.value) }>
                <input 
                    id="navSearch" 
                    type="text" 
                    placeholder="Search"
                    value={search}
                    onChange={e => handleChanges(e)}
                />
            </form>

            <div className="rightNav">
                <img src={require("../../Images/searchBarEye.svg")} />
                <img src={require("../../Images/searchBarHeart.svg")} />
                <img src={require("../../Images/searchBarPerson.svg")} />
            </div>
        </div>
    );
}

export default SearchBar;