import "./searchbar.css";

import * as Icon from "react-bootstrap-icons";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <input type="text" id="search" placeholder="Search..." />
      <label htmlFor="search">
        <Icon.Search />
      </label>
    </div>
  );
};

export default SearchBar;
