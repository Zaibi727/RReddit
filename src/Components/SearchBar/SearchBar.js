import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    render() { 
        return(
            <div className="SearchBar">
             <span className="search-icon"><i class="fa fa-search fa-lg"></i></span>
               <input className="searchbar-input"
                   type="text"
                   name="search"
                   placeholder="Search"
               />
            </div> 
        );
    }
}
 
export default SearchBar;