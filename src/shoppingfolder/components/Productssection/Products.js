import React from "react";
import "./Products.css";

const Products = () => {
  return (
    <div className="products-section">

      {/* Banner 1 */}
      <div className="banner">
       
        <img src="assets/products/p1.png" alt="trolley" />
      </div>

      {/* Banner 2 */}
      <div className="banner">
        
        <img src="assets/products/p2.png" alt="watch" />
      </div>

      {/* Banner 3 */}
      <div className="banner">
        <img src="assets/products/p3.png" alt="shoes" />
      </div>

    </div>
  );
};

export default Products;
