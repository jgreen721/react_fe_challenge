import React from "react";

const Flex = ({ children }) => {
  return (
    <div className="w-full md:flex bg-red-500 h-100% md:h-[60%]">
      {children}
    </div>
  );
};

export default Flex;
