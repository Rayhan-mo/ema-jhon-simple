import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Products.css";

const Products = (props) => {
  console.log(props.product.name);
  const { img, name, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div className="product-image">
        <img src={img} alt="" />
      </div>
      <div className="product-name">
        <h3>{name}</h3>
        <br />
        <p>
          <small>by:{seller}</small>
        </p>
        <p>${price}</p>
        <p>Only {stock} left in stock - order now</p>
        <button>
          <FontAwesomeIcon icon={faShoppingCart} /> add to cart{" "}
        </button>
      </div>
    </div>
  );
};

export default Products;
