import React from "react";

const MobileNav = ({ toggleNav, setToggleNav }) => {
  return (
    <div
      className={
        toggleNav
          ? "bg-white p-3 text-black absolute top-0 left-0 flex justify-between w-full transition duration-3s "
          : "bg-white p-3 text-black absolute top-0 left-0 flex justify-between w-full translate-x-[-125%] transition duration-3s"
      }
    >
      <div className="h-full flex items-center justify-center w-[20%]">
        <h2
          onClick={() => setToggleNav(!toggleNav)}
          className="text-2xl cursor-pointer"
        >
          &times;
        </h2>
      </div>
      <div className="flex justify-evenly items-center w-[80%]">
        <h2 className="text-xl cursor-pointer hover:text-gray-400">home</h2>
        <h2 className="text-xl cursor-pointer hover:text-gray-400">shop</h2>
        <h2 className="text-xl cursor-pointer hover:text-gray-400">about</h2>
        <h2 className="text-xl cursor-pointer hover:text-gray-400">contact</h2>
      </div>
    </div>
  );
};

export default MobileNav;
