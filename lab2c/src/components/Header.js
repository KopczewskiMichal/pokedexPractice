const Header = ({ returnHome, findPokemon }) => {
  return (
    <header>
      <button onClick={ returnHome } className="buttons homeButton">
        <i className="fa-solid fa-house"></i>
      </button>
      <div className="searchbar">
        <input
          className="buttons searchFor"
          type="text"
          placeholder="Search..."
        ></input>
        <button onClick={ findPokemon } className="buttons searchButton">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div></div>
    </header>
  );
};
