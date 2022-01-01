import React from "react";
import "./Homepage.css";
import PortfolioHeader from "../../components/portfolioHeader/PortfolioHeader";
import PhotoCategoryView from "../../components/photoCategoryView/PhotoCategoryView";

export default function Homepage() {
  return (
    <div>
      <PortfolioHeader />
      <PhotoCategoryView />
    </div>
  );
}
