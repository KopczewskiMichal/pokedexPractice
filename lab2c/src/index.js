function App() {
  async function get20Pokemon() {
    const url = "https://pokeapi.co/api/v2/pokemon";

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      PokemonList(json);
      await new Promise((resolve) => setTimeout(resolve, 500));
    } catch (error) {
      console.error(error.message);
    }
  }
  async function getData(pokemonName) {
    searchInput = pokemonName;
    const url = `https://pokeapi.co/api/v2/pokemon/${searchInput}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();

    //   await new Promise((resolve) => setTimeout(resolve, 500));

      PokemonDetails(json);

    } catch (error) {
      console.error(error.message);
    }
  }

  function returnHome() {
    get20Pokemon();
  }

  function findPokemon() {
    getData();
  }

  function renderApp() {
    ReactDOM.render(
      <div className="body">
        <Header returnHome={returnHome} findPokemon={findPokemon} />
        <div className="main">
          <PokemonList />
          <PokemonDetails details={getData} />
        </div>
      </div>,
      document.getElementById("root")
    );
  }

  get20Pokemon();
}

ReactDOM.render(<App />, document.getElementById("root"));
