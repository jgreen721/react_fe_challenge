import React, { useState } from "react";
import { Hero, Flex, Card } from "./components";
import lightPic from "./assets/image-about-light.jpg";
import darkPic from "./assets/image-about-dark.jpg";

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="h-screen w-screen bg-white">
      <Flex>
        <Hero counter={counter} setCounter={setCounter} />
        <Card counter={counter} />
      </Flex>
      <div className="flex-col flex md:flex-row justify-evenly items center md:h-[45%]">
        <div className="w-full md:w-[30%]">
          <img className="h-full w-full" src={darkPic} alt="dark-img" />
        </div>
        <div className="p-5 flex-1 flex flex-col items-start justify-center h-full">
          <h3 className="text-xl font-bold uppercase">About our furniture</h3>
          <p style={{ color: "hsl(0, 0%, 63%)" }} className="text-[12px] my-3">
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>
        <div className="w-full md:w-[30%]">
          <img className="h-full w-full" src={lightPic} alt="ligh-img" />
        </div>
      </div>
    </div>
  );
};

export default App;
