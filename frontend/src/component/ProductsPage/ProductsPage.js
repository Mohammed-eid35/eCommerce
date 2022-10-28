import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";

import classes from "./ProductsPage.module.css";

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
];

const ProductsPage = () => {
  return (
    <div className={classes.products}>
      {products.map((product) => (
        <div key={product._id} className={classes.product}>
          <div className={classes.productImg}>
            <a href="#">
              <img src={product.image} alt={product.name} />
            </a>
          </div>
          <div className={classes.hide}>
            <div className={classes.productInfo}>
              <div>{product.name}</div>
              <div>${`${product.price}`}</div>
              <div className={classes.icons}>
                <FaHeart />
                <FaCartPlus />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
