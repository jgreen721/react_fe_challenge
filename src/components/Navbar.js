import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [links, setLinks] = useState(["Home", "Shop", "About", "Contact"]);
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <div className="p-1 absolute w-full flex justify-between md:justify-start md:ml-10 items-center text-white">
      <HiMenu
        onClick={() => setToggleNav(!toggleNav)}
        className="ml-5 scale-150 cursor-pointer transition hover:text-gray-200 md:hidden"
      />
      <h2 className="text-3xl">room</h2>
      <div className="flex justify-evenly w-[10%] opacity-0 md:w-[50%] md:opacity-100 ml-10">
        {links.map((l, idx) => (
          <p key={idx} className="text-base cursor-pointer hover:text-black">
            {l}
          </p>
        ))}
      </div>
      <MobileNav toggleNav={toggleNav} setToggleNav={setToggleNav} />
    </div>
  );
};

export default Navbar;
