function App() {
  let isLoading = false;
  let pokemonList = [];
  let selectedPokemon = null;

  function fetchPokemonList() {
    showLoader();
    const url = "https://pokeapi.co/api/v2/pokemon";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        pokemonList = data.results;
        selectedPokemon = null;
        renderApp();
      })
      .then(new Promise((resolve) => setTimeout(resolve, 2000)))
      .catch((error) => console.error("Error fetching Pokémon list:", error))
      .finally(hideLoader());
  }

  function fetchPokemonDetails(pokemonName) {
    showLoader();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    fetch(url)
      .then(new Promise((resolve) => setTimeout(resolve, 2000)))
      .then((response) => response.json())
      .then((data) => {
        selectedPokemon = data;
        renderApp();
      })
      .catch((error) => console.error("Error fetching Pokémon details:", error))
      .finally(hideLoader());
  }

  function returnHome() {
    fetchPokemonList();
  }

  function findPokemon(searchInput) {
    const pokemonName = searchInput.toLowerCase();
    if (pokemonName) {
      fetchPokemonDetails(pokemonName);
    }
  }

  function showLoader() {
    isLoading = true;
    renderApp();
  }

  function hideLoader() {
    isLoading = false;
    renderApp();
  }

  function renderApp() {
    ReactDOM.render(
      <div className="body">
        <Header returnHome={returnHome} findPokemon={findPokemon} />
        <div className="main">
          {isLoading && (
            <div className="loader">
              <i className="fa fa-spinner"></i>
            </div>
          )}
          {selectedPokemon ? (
            <PokemonDetails data={selectedPokemon} />
          ) : (
            <PokemonList
              data={pokemonList}
              onPokemonClick={fetchPokemonDetails}
            />
          )}
        </div>
      </div>,
      document.getElementById("root")
    );
  }

  fetchPokemonList();
}
App();
