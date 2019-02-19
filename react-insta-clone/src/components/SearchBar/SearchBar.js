import React from 'react';
import './SearchBar.scss';

import camera from "../../Images/searchBarCamera.svg";

import { Nav, NavItem, NavLink } from 'reactstrap';

const SearchBar = () => {
    return(
        <div className="navbar">
            <div className="leftNav">
                <img src={require("../../Images/searchBarCamera.svg")} />
                <h1>Instagram</h1>
            </div>
            
            <input id="navSearch" type="text" placeholder="Search" />

            <div className="rightNav">
                <img src={require("../../Images/searchBarEye.svg")} />
                <img src={require("../../Images/searchBarHeart.svg")} />
                <img src={require("../../Images/searchBarPerson.svg")} />
            </div>
        </div>
    );
}

export default SearchBar;