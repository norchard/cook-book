import Recipe from "./components/Recipe";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import chef from "./assets/4055255.webp";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [recipeList, setRecipeList] = useState([]);
  const [glutenFree, setGlutenFree] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);
  const [next, setNext] = useState("");
  const APP_ID = "ae3ec5e8";
  const APP_KEY = "42f3cab4027b54de258815e9b6e1c81c";

  //{{url}}search?q=biryani&app_id={{app_id}}&app_key={{app_key}}

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchInput(e.target.value);
  };

  async function handleClick(e, url = "") {
    console.log("hi");
    console.log(url);
    if (!url) {
      console.log("hihi");
      const search = searchInput ? `&q=${searchInput}` : "";
      const glutenFreeSearch = glutenFree ? "&health=gluten-free" : "";
      const veganSearch = vegan ? "&health=vegan" : "";
      const vegetarianSearch = vegetarian ? "&health=vegetarian" : "";
      const query = search + glutenFreeSearch + veganSearch + vegetarianSearch;
      url = `https://api.edamam.com/api/recipes/v2?type=public${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    }
    console.log("hihihi");
    console.log(url);
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    if (json._links.next) setNext(json._links.next.href);
    setRecipeList(json.hits);
  }

  return (
    <>
      <Header />
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        recipeList={recipeList}
        setRecipeList={setRecipeList}
        glutenFree={glutenFree}
        setGlutenFree={setGlutenFree}
        vegan={vegan}
        setVegan={setVegan}
        vegetarian={vegetarian}
        setVegetarian={setVegetarian}
        handleChange={handleChange}
        handleClick={handleClick}
      />
      {recipeList.length == 0 && <img id="chef" src={chef} />}
      <div id="recipe-list">
        {recipeList.map((item, i) => (
          <Recipe
            key={i}
            recipe={item.recipe}
            appId={APP_ID}
            appKey={APP_KEY}
          />
        ))}
      </div>
      {next && (
        <input
          type="button"
          onClick={(e) => handleClick(e, next)}
          value="Next page"
        />
      )}
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
