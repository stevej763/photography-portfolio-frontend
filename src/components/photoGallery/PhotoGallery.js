import React, { useState, useEffect } from "react";
import "./PhotoGallery.css";
import ImageThumbnail from "../imageThumbnail/ImageThumbnail";
import getPhotosByCategory from "../../api/PhotosApi";

export default function PhotoGallery(props) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPhotosByCategory(props.categoryId).then((response) => {
      setPhotos(response);
    });
  }, [props.categoryId]);

  const photoList = photos.map((photo) => {
    return (
      <ImageThumbnail
        photoName={photo.title}
        url={photo.thumbnailUrl}
        id={photo.id}
        key={photo.id}
      />
    );
  });
  return <div className="photo-gallery-container">{photoList}</div>;
}
