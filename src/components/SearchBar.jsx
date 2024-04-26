import React from "react";
import "./SearchBar.css";

export default function SearchBar({
  handleChange,
  handleClick,
  searchInput,
  glutenFree,
  setGlutenFree,
  vegan,
  setVegan,
  vegetarian,
  setVegetarian,
}) {
  return (
    <div id="search-bar">
      <div id="search-module">
        <input
          type="text"
          placeholder="Search here"
          onChange={handleChange}
          value={searchInput}
          id="search-box"
        />
      </div>
      <div id="filter">
        <label htmlFor="gluten-free">
          Gluten Free<span className="checkmark"></span>
        </label>
        <input
          className="checkmark"
          type="checkbox"
          id="gluten-free"
          name="gluten-free"
          value="HTML"
          onChange={() => {
            setGlutenFree(!glutenFree);
          }}
        />
        <label htmlFor="vegan">
          Vegan<span className="checkmark"></span>
        </label>
        <input
          className="checkmark"
          type="checkbox"
          id="vegan"
          name="vegan"
          value="HTML"
          onChange={() => {
            setVegan(!vegan);
          }}
        />
        <label htmlFor="vegetarian">
          Vegetarian<span className="checkmark"></span>
        </label>
        <input
          className="checkmark"
          type="checkbox"
          id="vegetarian"
          name="vegetarian"
          value="HTML"
          onChange={() => {
            setVegetarian(!vegetarian);
          }}
        />
      </div>
      <input
        id="search-button"
        type="button"
        value="Search"
        onClick={handleClick}
      />
    </div>
  );
}
