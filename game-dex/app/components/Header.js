function Header({ returnHome, findPokemon }) {
    let searchInput = "";
  
    function handleSearchInput(event) {
      searchInput = event.target.value;
    }
  
    function handleSearch(event) {
      if (event.key === "Enter") {
        findPokemon(searchInput);
      }
    }
  
    function handleSearchButton() {
      findPokemon(searchInput);
    }
  
    return (
      <header>
        <button onClick={returnHome} className="buttons homeButton">
          <i className="fa-solid fa-house"></i>
        </button>
        <div className="searchbar">
          <input
            className="buttons searchFor"
            type="text"
            placeholder="Search..."
            onInput={handleSearchInput}
            onKeyDown={handleSearch}
          />
          <button onClick={handleSearchButton} className="buttons searchButton">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div></div>
      </header>
    );
  }
  
  export default Header;