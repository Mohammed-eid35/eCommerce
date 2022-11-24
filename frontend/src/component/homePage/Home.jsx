import React from "react";
import "./Home.css";
import back1 from "./img/back1.jpg";
import backk3 from "./img/backk3.jpg";
import back3 from "./img/back3.jpg";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import AwesomeSliderStyles from "react-awesome-slider";
import Shopping_Concepts_60 from "../login/img/Shopping_Concepts_60.jpg";
import { Slide } from "react-reveal";
import { Gallery } from "./gallary";
import { Testimoniols } from "./testimoniols";
import { LogoSwiper } from "./logSlider";
import { Blog } from "./blog";
import { FetchingData } from "./fetchingData";
import { motion } from "framer-motion";
export const Home = (props) => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const styleAnim1 = {
    "--item": 1,
  };
  const styleAnim2 = {
    "--item": 2,
  };
  function template({ rotate, x }) {
    return `rotate(${rotate}) translatey(${x})`;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 1000 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -1000 }}
      transition={{ duration: 2.5 }}
    >
      <AutoplaySlider
        cssModule={AwesomeSliderStyles}
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
        className="sliderHome"
        
      >
        <div data-src={back3} id="slider1_content" >
          <div className="back1Content">
            <p className="backPara1 wave" >
              {" "}
              <span style={styleAnim1}>summer</span>{" "}
              <span style={styleAnim2}>collections</span>{" "}
            </p>
            <Slide right>
              {" "}
              <div className="backparaContainer">
                <p className="backPara">Fall-winter</p>
                <p className="backPara">collections 2023</p>
              </div>
            </Slide>
            <Slide left>
              <div className="backpara2Container">
                <p className="backpara2" id="backpara2">
                  A specialist label creating luxury essentials.Ethically
                  crafted
                </p>

                <p className="backpara2">
                  with an unwavering commitment to exceptional quality
                </p>
                <button className="hvr-sweep-to-left " > shop Now</button>
              </div>
            </Slide>
          </div>
        </div>
        <div data-src={back1}>
          <div className="back1Content">
            <p className="backPara1 wave">
              {" "}
              <span style={styleAnim1}>summer</span>{" "}
              <span style={styleAnim2}>collections</span>{" "}
            </p>
            <Slide right>
              {" "}
              <div className="backparaContainer">
                <p className="backPara">Fall-winter</p>
                <p className="backPara">collections 2023</p>
              </div>
            </Slide>
            <Slide left>
              <div className="backpara2Container">
                <p className="backpara2" id="backpara2">
                  A specialist label creating luxury essentials.Ethically
                  crafted
                </p>

                <p className="backpara2">
                  with an unwavering commitment to exceptional quality
                </p>
                <button className="hvr-sweep-to-left "> shop Now</button>
              </div>
            </Slide>
          </div>
        </div>

        <div data-src={backk3}>
          <div className="back1Content">
            <p className="backPara1 wave">
              {" "}
              <span style={styleAnim1}>summer</span>{" "}
              <span style={styleAnim2}>collections</span>{" "}
            </p>
            <Slide right>
              {" "}
              <div className="backparaContainer">
                <p className="backPara">Fall-winter</p>
                <p className="backPara">collections 2023</p>
              </div>
            </Slide>
            <Slide left>
              <div className="backpara2Container">
                <p className="backpara2" id="backpara2">
                  A specialist label creating luxury essentials.Ethically
                  crafted
                </p>

                <p className="backpara2">
                  with an unwavering commitment to exceptional quality
                </p>
                <button className="hvr-sweep-to-left "> shop Now</button>
              </div>
            </Slide>
          </div>
        </div>
      </AutoplaySlider>
      <Gallery />
      <Testimoniols />
      <LogoSwiper />
      <Blog />
    </motion.div>
  );
};
