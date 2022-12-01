import React from "react";
import "./Home.css";
import gall1 from "./img/gall1.jpg";
import gall2 from "./img/gall2.jpg";
import gall3 from "./img/gall3.jpg";
import gall4 from "./img/gall4.jpg";
import gall5 from "./img/gall5.jpg";
import icon1 from "./img/icon1.svg";

export const Gallery = () => {
  return (
    <>
      <div
        className="container hover14"
        style={{ marginTop: "50px", marginBottom: "50px " }}
      >
        <div className="row ">
          <div className="column1 hover14">
            <figure>
              {" "}
              <img src={gall2} alt="" />
            </figure>
          </div>
          <div className="column2 hover14 ">
            {" "}
            <figure>
              {" "}
              <img src={gall1} alt="" />
            </figure>
            <figure>
              {" "}
              <img src={gall3} alt="" />
            </figure>
          </div>
          <div className="column3 hover14">
            {" "}
            <figure>
              {" "}
              <img src={gall4} alt="" />
            </figure>
            <figure>
              {" "}
              <img src={gall5} id="gall5" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};
