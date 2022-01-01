import React, { useState, useEffect } from "react";
import "./PhotoCategoryView.css";
import CategoryThumbnail from "../categoryThumbnail/CategoryThumbnail";
import { getCategories } from "../../api/CategoriesApi";

export default function PhotoCategoryView() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((response) => {
      setCategories(response);
    });
  }, []);

  const categoryList = categories.map((category) => {
    return (
      <CategoryThumbnail
        key={category.id}
        thumbnailLink={category.thumbnailUrl}
        title={category.title}
        pageLink={"/category/" + category.slug + "/" + category.id}
      />
    );
  });

  return (
    <div className="categories-container">
      <div className="category-listings">{categoryList}</div>
    </div>
  );
}
