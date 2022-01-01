import React from "react";
import { useParams } from "react-router";
import CategoryPageHeading from "../../components/categoryPageHeading/CategoryPageHeading";
import PortfolioHeader from "../../components/portfolioHeader/PortfolioHeader";
import PhotoGallery from "../../components/photoGallery/PhotoGallery";
import "./Category.css";

export default function Category() {
  const { title } = useParams();

  const photos = [
    {
      photoName: "photo1",
      id: "1",
      description: "Photo 1 description",
      url: "https://stevejonesphotos.co.uk/wp-content/uploads/2021/11/6A8DB73C-295C-471A-82D3-216DFD3AEF8B-scaled.jpeg",
      categories: [1, 2, 3],
    },
    {
      photoName: "photo2",
      id: "2",
      description: "Photo 2 description",
      url: "https://stevejonesphotos.co.uk/wp-content/uploads/2021/06/0DEECBF1-6F54-4EF0-AB6F-7E052F4C6BFC-scaled.jpeg",
      categories: [1],
    },
    {
      photoName: "photo3",
      id: "3",
      description: "Photo 3 description",
      url: "https://stevejonesphotos.co.uk/wp-content/uploads/2021/06/0DEECBF1-6F54-4EF0-AB6F-7E052F4C6BFC-scaled.jpeg",
      categories: [1, 6],
    },
    {
      photoName: "photo4",
      id: "4",
      description: "Photo 4 description",
      url: "https://stevejonesphotos.co.uk/wp-content/uploads/2021/06/0A219B89-C563-42B7-8608-0548712E6EB0-scaled.jpeg",
      categories: [1, 2, 5],
    },
  ];

  return (
    <div className="category-page">
      <PortfolioHeader />
      <CategoryPageHeading title={title} />
      <PhotoGallery photos={photos} />
    </div>
  );
}
