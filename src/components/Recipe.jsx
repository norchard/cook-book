import React, { Component } from "react";
import "./Recipe.css";

export default class Recipe extends Component {
  render() {
    const {
      dishType,
      source,
      url,
      label: name,
      images: {
        SMALL: { url: image },
      },
      cuisineType: cuisine,
    } = this.props.recipe;

    return (
      <div className="card">
        <img className="image" src={image} />
        <div className="content">
          <div>
            <h3 className="title">{name}</h3>
            <h4 className="source">{source}</h4>
            <p className="details">
              {cuisine} / {dishType[0]}
            </p>
          </div>
          <a href={url} className="recipe-button">
            See the recipe
          </a>
        </div>
      </div>
    );
  }
}
