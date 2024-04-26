import React, { Component } from "react";
import "./Recipe.css";

export default class Recipe extends Component {
  render() {
    const {
      uri,
      url,
      label: name,
      images: {
        SMALL: { url: image },
      },
      cuisineType: cuisine,
    } = this.props.recipe;

    console.log(this.props.recipe);

    return (
      <div className="card">
        <img className="image" src={image} />
        <div className="content">
          <div>
            <h3 className="title">{name}</h3>
            <p>{cuisine}</p>
          </div>
          <a href={url} className="recipe-button">
            See the recipe
          </a>
        </div>
      </div>
    );
  }
}
