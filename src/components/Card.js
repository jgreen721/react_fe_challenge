import React, { useState } from "react";
import { data } from "../data.js";
import arrowImg from "../assets/icon-arrow.svg";

const Card = ({ counter }) => {
  const [cardData, setCardData] = useState(data);
  return (
    <div className="bg-white p-5 flex flex-col justify-center items-start flex-1 h-full">
      <h1 className="text-4xl my-2 font-bold">{cardData[counter].title}</h1>
      <p style={{ color: "hsl(0, 0%, 63%)" }} className="text-[12px] my-2">
        {cardData[counter].blurb}
      </p>

      <div className="flex my-5">
        <p style={{ letterSpacing: "4px" }} className="text-base font-bold">
          SHOP NOW{" "}
        </p>
        <img className="ml-5" src={arrowImg} alt="arrow-img" />
      </div>
    </div>
  );
};

export default Card;
