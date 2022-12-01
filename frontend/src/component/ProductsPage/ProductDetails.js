import React from "react";
import "./productdetails.css";
import { FaHeart, FaStar } from "react-icons/fa";
const ProductDetails = (props) => {
  return (
    <div className="ProductContainer">
      <div className="product-imgs">
        <div className="img">
          <img src="https://themes.templatescoder.com/xpoge/html/demo/1-0/01_FASHION/images/5.jpg" />
        </div>
        <div class="pagination">
          <a href="#">&laquo;</a>
          <a href="#">1</a>
          <a class="active" href="#">
            2
          </a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">6</a>
          <a href="#">&raquo;</a>
        </div>
      </div>
      <div className="productInfo">
        <div className="product-name">Stylish Blue Shirt</div>
        <div className="stars">
          <span className="checked">
            <FaStar />
          </span>
          <span className="checked">
            <FaStar />
          </span>
          <span className="checked">
            <FaStar />
          </span>
          <span className="checked">
            <FaStar />
          </span>
          <span className="">
            <FaStar />
          </span>
        </div>
        <div className="review">5.0 out of(1256) reviews</div>
        <span className="product-price">$67</span>
        <div className="product-size">Size: </div>
        <div className="product-quantity">Quantity:</div>
        <div className="buy">
          <button class="button">Add To Cart</button>
          <span className="icon">
            <FaHeart></FaHeart>
          </span>
        </div>
        <p class="product-description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt ut
          rem soluta nemo facere ea maiores deleniti iste voluptatum tenetur
          enim sunt qui mollitia distinctio non sit, reprehenderit esse modi?
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
