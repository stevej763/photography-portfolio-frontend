import React, { useState } from "react";
import "./AddCategoryForm.css";
import { addCategory } from "../../api/CategoriesApi";

export default function AddCategoryForm() {
  const [categoryName, setCategoryName] = useState("");
  const [thumbnail, setFile] = useState(undefined);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await addCategory(categoryName, thumbnail);
    console.log(response);
  };

  const handleCategoryNameChange = (event) => {
    setCategoryName(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Categroy Name:</label>
          <input
            name="categoryName"
            type="text"
            value={categoryName}
            onChange={handleCategoryNameChange}
          />
        </div>
        <div>
          <label htmlFor="category-name">Categroy Thumbnail</label>
          <input
            name="categoryThumbnail"
            type="file"
            onChange={handleFileChange}
          />
        </div>
        <input type="submit" value="Add Category" />
      </form>
    </div>
  );
}
