import React from "react";
import { Link } from "react-router-dom";
import "./CategoryPageHeading.css";

export default function CategoryPageHeading(props) {
  return (
    <div>
      <div className="category-page-heading">
        <h3 className="category-page-heading-text">{props.title}</h3>
      </div>
      <hr className="category-ruler" />
    </div>
  );
}
