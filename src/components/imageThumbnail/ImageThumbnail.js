import React from "react";
import "./ImageThumbnail.css";

export default function ImageThumbnail(props) {
  return (
    <a className="gallery-image-container" href={props.url}>
      <img
        className="gallery-image-thumbnail"
        src={props.url}
        alt={props.alt}
      />
      <p>{props.photoName}</p>
    </a>
  );
}
