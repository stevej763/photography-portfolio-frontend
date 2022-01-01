import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import CategoryPageHeading from "../../components/categoryPageHeading/CategoryPageHeading";
import PortfolioHeader from "../../components/portfolioHeader/PortfolioHeader";
import PhotoGallery from "../../components/photoGallery/PhotoGallery";
import "./Category.css";
import { getCategoryTitleFromId } from "../../api/CategoriesApi";

export default function Category() {
  const { id } = useParams();
  const [title, setTitle] = useState([]);

  useEffect(() => {
    getCategoryTitleFromId(id).then((response) => {
      setTitle(response.title);
    });
  }, [id]);

  return (
    <div className="category-page">
      <PortfolioHeader />
      <CategoryPageHeading title={title} />
      <PhotoGallery categoryId={id} />
    </div>
  );
}
