import React from "react";
import { Link } from "react-router-dom";
import "./PortfolioHeader.css";

export default function PortfolioHeader() {
  return (
    <div className="header-container">
      <div className="header">
        <Link to="/">
          <h1>Steve J Photos</h1>
        </Link>
      </div>
      <hr className="header-ruler" />
    </div>
  );
}
