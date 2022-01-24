import React, { useState } from "react";
import { addPhoto } from "../../api/PhotosApi";
import "./AddPhotoForm.css";

export default function AddPhotoForm(props) {
  const [photoName, setPhotoName] = useState("test");
  const [photoDescription, setPhotoDescription] = useState("no description");
  const [photoAltText, setPhotoAltText] = useState("To lazy");
  const [photoCategory, setPhotoCategory] = useState("please enter");
  const [photoFile, setPhotoFile] = useState(null);

  const handlePhotoNameChange = (event) => {
    setPhotoName(event.target.value);
  };

  const handlePhotoDescriptionChange = (event) => {
    setPhotoDescription(event.target.value);
  };

  const handlePhotoAltTextChange = (event) => {
    setPhotoAltText(event.target.value);
  };

  const handlePhotoCategoryChange = (event) => {
    setPhotoCategory(event.target.value);
  };

  const handlePhotoFileChange = (event) => {
    setPhotoFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await addPhoto(
      photoName,
      photoDescription,
      photoAltText,
      photoCategory,
      photoFile
    );
    console.log(response);
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="photo-name">Photo Name:</label>
          <input
            name="photo-name"
            type="text"
            value={photoName}
            onChange={handlePhotoNameChange}
            placeholder="photo name"
          />
        </div>
        <div>
          <label htmlFor="photo-description">Photo description:</label>
          <input
            name="photo-name"
            type="text"
            value={photoDescription}
            onChange={handlePhotoDescriptionChange}
            placeholder="photo description"
          />
        </div>
        <div>
          <label htmlFor="photo-alt">Photo alt text:</label>
          <input
            name="photo-alt"
            type="text"
            value={photoAltText}
            onChange={handlePhotoAltTextChange}
            placeholder="photo alt"
          />
        </div>
        <div>
          <label htmlFor="photo-category">Category:</label>
          <select value={photoCategory} onChange={handlePhotoCategoryChange}>
            {props.categories.map((category) => {
              return (
                <option key={category.id} value={category.id}>
                  {category.title}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label htmlFor="photo-file">Photo file</label>
          <input
            name="photo-file"
            type="file"
            onChange={handlePhotoFileChange}
          />
        </div>
        <input type="submit" value="Upload Photo" />
      </form>
    </div>
  );
}
