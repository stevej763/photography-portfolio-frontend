import React, { useState, useEffect } from "react";
import PortfolioHeader from "../../components/portfolioHeader/PortfolioHeader";
import "./Admin.css";
import AddCategoryForm from "../../components/addCategoryForm/AddCategoryForm";
import AddPhotoForm from "../../components/addPhotoForm/AddPhotoForm";
import { getCategories } from "../../api/CategoriesApi";

export default function Admin() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((response) => {
      setCategories(response);
    });
  }, []);

  return (
    <div>
      <PortfolioHeader />
      <div className="admin-page-container">
        <AddCategoryForm />
        <AddPhotoForm categories={categories} />
      </div>
    </div>
  );
}
