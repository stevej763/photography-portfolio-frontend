import React from "react";
import "./PhotoGallery.css";
import ImageThumbnail from "../imageThumbnail/ImageThumbnail";

export default function PhotoGallery(props) {
  const photos = props.photos.map((photo) => {
    return (
      <ImageThumbnail
        photoName={photo.photoName}
        url={photo.url}
        id={photo.id}
        key={photo.id}
      />
    );
  });
  return <div className="photo-gallery-container">{photos}</div>;
}
