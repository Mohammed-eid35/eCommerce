import React from "react";
import './ProductsPage.css'
import { FaHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";

import {  useNavigate } from "react-router-dom";

const products = [
  {
    _id: "1",
    name: "Shirt",
    category: "Shirts",
    image:
      "https://themes.templatescoder.com/xpoge/html/demo/1-0/01_FASHION/images/5.jpg",
    price: 60,
    brand: " Nike",
    rating: 4.5,
    numReviews: 10,
  },
  {
    _id: "2",
    name: "Shirt",
    category: "Shirts",
    image:
      "https://themes.templatescoder.com/xpoge/html/demo/1-0/01_FASHION/images/5.jpg",
    price: 50,
    brand: " Nike",
    rating: 4.2,
    numReviews: 5,
  },
  {
    _id: "3",
    name: "Best Pants",
    category: "Pants",
    image:
      "https://themes.templatescoder.com/xpoge/html/demo/1-0/01_FASHION/images/5.jpg",
    price: 70,
    brand: " Nike",
    rating: 4.5,
    numReviews: 8,
  },
  {
    _id: "4",
    name: "Shirts",
    category: "Shirts",
    image:
      "https://themes.templatescoder.com/xpoge/html/demo/1-0/01_FASHION/images/5.jpg",
    price: 70,
    brand: " Nike",
    rating: 4.5,
    numReviews: 8,
  },
  {
    _id: "1",
    name: "Shirt",
    category: "Shirts",
    image:
      "https://themes.templatescoder.com/xpoge/html/demo/1-0/01_FASHION/images/5.jpg",
    price: 60,
    brand: " Nike",
    rating: 4.5,
    numReviews: 10,
  },
  {
    _id: "2",
    name: "Shirt",
    category: "Shirts",
    image:
      "https://themes.templatescoder.com/xpoge/html/demo/1-0/01_FASHION/images/5.jpg",
    price: 50,
    brand: " Nike",
    rating: 4.2,
    numReviews: 5,
  },
  {
    _id: "3",
    name: "Best Pants",
    category: "Pants",
    image:
      "https://themes.templatescoder.com/xpoge/html/demo/1-0/01_FASHION/images/5.jpg",
    price: 70,
    brand: " Nike",
    rating: 4.5,
    numReviews: 8,
  },
  {
    _id: "4",
    name: "Shirts",
    category: "Shirts",
    image:
      "https://themes.templatescoder.com/xpoge/html/demo/1-0/01_FASHION/images/5.jpg",
    price: 70,
    brand: " Nike",
    rating: 4.5,
    numReviews: 8,
  },
];

const ProductsPage = () => {
  const navigate = useNavigate();

  const productDetailsFun = () => {
    // 👇️ navigate to /contacts
    navigate("/products/:productID");
  };
  return (
    <div className="products">
      {products.map((product) => (
        <div key={product._id} className="product">
          <div className="productImg">
            <a href="" onClick={productDetailsFun}>
              <img src={product.image} alt={product.name} />
            </a>
          </div>
          <div className="hide">
            <div className="productInfo">
              <div>{product.name}</div>
              <div>${`${product.price}`}</div>
            </div>
            <div className="icons">
              <FaHeart />
              <FaCartPlus />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
