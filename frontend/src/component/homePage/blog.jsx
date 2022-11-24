import React from "react";
import blog1 from "./img/blog1.jpg";
import blog2 from "./img/blog2.jpg";
import blog3 from "./img/blog3.jpg";

export const Blog = () => {
  return (
    <>
      <div className="BlogHeader">
        <h1>Latest blog</h1>
        <div className="Line"></div>
        <div
          className="container hover14"
          style={{ marginTop: "50px", marginBottom: "50px " }}
        >
          <div className="row ">
            <div className="column11 hover14 blogImg1 ">
              <figure className="blogimg1"> </figure>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                odio quod quaerat sed quam, voluptate voluptatem nisi commodi
                reiciendis quos quia nulla expedita ipsam. Quasi, accusamus.
                Accusantium fuga quibusdam nihil?
              </p>
            </div>
            <div className="column22 hover14  ">
              {" "}
              <div className="blogImg2 ">
                <figure className="blogimg2"> </figure>
                <p className="">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Accusantium veniam accusamus adipisci fugit similique fuga
                  nihil? Officiis, alias deleniti ea at accusamus dolor, quos
                  quasi, animi aut ipsum unde dignissimos!
                </p>
              </div>
              <div className="blogImg2" style={{ marginTop: "10px" }}>
                <figure className="blogimg22"> </figure>
                <p className="">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Accusantium veniam accusamus adipisci fugit similique fuga
                  nihil? Officiis, alias deleniti ea at accusamus dolor, quos
                  quasi, animi aut ipsum unde dignissimos!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
