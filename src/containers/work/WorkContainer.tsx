"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function WorkContainer() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <div className="flex w-full space-x-3 px-8 p-8 items-center justify-start">
        <span className="whitespace-nowrap font-main font-regular text-[20px] md:text-[25px] text-gray-dark">
          My Work
        </span>
        <motion.div
          style={{
            width: useTransform(scrollYProgress, [0.6, 1.6], ["0%", "100%"]),
            originX: 0,
          }}
          className="h-px bg-gray-dark"
        ></motion.div>
      </div>
      <div className="h-96"></div>
    </>
  );
}

export default WorkContainer;
