import React from "react";
import { motion } from "framer-motion";

function WorkButton() {
  return (
    <motion.div
      aria-current="page"
      className="relative"
      whileHover="hover"
      animate="rest"
    >
      <div style={{ width: "300px", height: "60px" }}></div>

      <div className="absolute top-3 left-4 w-full h-15  w-full h-15 flex space-x-10 items-center">
        <img src="/icons/arrow.svg" alt="Description" />
        <a className="font-main font-regular text-[25px] text-gray-dark">
          Get to know me
        </a>
      </div>

      <motion.div
        className="absolute top-0 left-0 border border-gray-dark"
        style={{ originX: 0, height: "100%", borderRadius: "100px" }}
        initial={false}
        variants={{
          rest: {
            width: 60,
          },
          hover: {
            width: 300,
          },
        }}
      ></motion.div>
    </motion.div>
  );
}

export default WorkButton;
