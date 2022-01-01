import React from "react";
import CategoryThumbnail from "../categoryThumbnail/CategoryThumbnail";
import "./PhotoCategoryView.css";

export default function PhotoCategoryView() {
  const demoCategories = [
    { title: "Holidays", id: 1 },
    { title: "People", id: 2 },
    { title: "Animals", id: 3 },
    { title: "Dinsaours", id: 4 },
    { title: "Dogs", id: 5 },
    { title: "Cats", id: 6 },
    { title: "Birds", id: 7 },
    { title: "UK", id: 8 },
    { title: "Canada", id: 9 },
    { title: "USA", id: 10 },
  ];

  const thumbnailLink =
    "https://stevejonesphotos.co.uk/wp-content/uploads/2021/06/9E82242D-9762-4AD2-9ADE-7996829D6D51-scaled.jpeg";

  const pageLink = "/category/";

  const demoCategoryList = demoCategories.map((category) => {
    return (
      <CategoryThumbnail
        key={category.id}
        thumbnailLink={thumbnailLink}
        title={category.title}
        pageLink={pageLink + category.title + "/" + category.id}
      />
    );
  });

  return (
    <div className="categories-container">
      <div className="category-listings">{demoCategoryList}</div>
    </div>
  );
}
