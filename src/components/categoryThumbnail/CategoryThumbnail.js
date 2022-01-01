import React from "react";
import "./CategoryThumbnail.css";

export default function CategoryThumbnail(props) {
  return (
    <a className="thumbnail-container" href={props.pageLink}>
      <img
        className="category-thumbnail-image"
        src={props.thumbnailLink}
        alt="template thumbnail"
      />
      <div className="thumbnail-category-title">
        <h3 className="thumbnail-category-title-text">{props.title}</h3>
      </div>
    </a>
  );
}
