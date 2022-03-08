import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import deskImg1 from "../assets/desktop-image-hero-1.jpg";
import deskImg2 from "../assets/desktop-image-hero-2.jpg";
import deskImg3 from "../assets/desktop-image-hero-3.jpg";
import mobileImg1 from "../assets/mobile-image-hero-1.jpg";
import mobileImg2 from "../assets/mobile-image-hero-2.jpg";
import mobileImg3 from "../assets/mobile-image-hero-3.jpg";
import angleLeft from "../assets/icon-angle-left.svg";
import angleRight from "../assets/icon-angle-right.svg";

const Hero = ({ counter, setCounter }) => {
  const [deskData, setDeskData] = useState([deskImg1, deskImg2, deskImg3]);
  const [mobileData, setMobileData] = useState([
    mobileImg1,
    mobileImg2,
    mobileImg3,
  ]);
  const [data, setData] = useState(deskData);

  useEffect(() => {
    window.onresize = (e) => {
      //   console.log(e.target);
      if (e.target.innerWidth < 400) {
        console.log("use mobile");
        setData(mobileData);
      } else {
        console.log("use desktop");
        setData(deskData);
      }
    };
  });

  return (
    <div className="flex-1 relative h-full">
      <Navbar />
      <img className="w-full h-full" src={data[counter]} alt="img" />
      <div className="absolute border-2 bg-black border-black w-[125px] h-[45px] bottom-0 right-0 flex items-center justify-evenly md:translate-x-[100%]">
        <div className="flex items-center justify-start flex-1 h-full">
          <img
            className="ml-4 cursor-pointer"
            onClick={() => {
              counter > 0 ? setCounter(counter - 1) : setCounter(counter);
            }}
            src={angleLeft}
            alt="arrow-img"
          />
        </div>
        <div className="flex items-center justify-end flex-1">
          <img
            className="mr-4 cursor-pointer"
            onClick={() => {
              counter < data.length - 1
                ? setCounter(counter + 1)
                : setCounter(counter);
            }}
            src={angleRight}
            alt="arrow-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
