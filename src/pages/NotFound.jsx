
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingBasket } from "lucide-react";

function NotFound() {
  return (
    <div className="not-found-page">
      <div className="error-content">
        <div className="error-icon">🛒</div>

        <h1>4<span>0</span>4</h1>

        <h2>Oops! Page Not Found</h2>

        <p>
          Looks like this page is out of stock!
          The page you are looking for doesn't exist
          or may have been moved.
        </p>

        <Link to="/" className="back-home-btn">
          <ArrowLeft size={19} />
          Back to Home
        </Link>

        <div className="error-decoration">
          <ShoppingBasket size={25} />
          <span>Let's get you back to fresh shopping!</span>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
