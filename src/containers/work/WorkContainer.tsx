"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import WorkCard from "@/components/work/WorkCard";
import WorkButton from "@/components/work/WorkButton";

function WorkContainer() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <div className="flex space-x-3 p-8 items-center justify-start">
        <span className="whitespace-nowrap font-main font-regular text-[20px] md:text-[25px] text-gray-dark">
          My Work
        </span>
        <motion.div
          style={{
            width: useTransform(scrollYProgress, [0.6, 1], ["0%", "100%"]),
            originX: 0,
          }}
          className="h-px bg-gray-dark"
        ></motion.div>
      </div>
      <div className="flex space-x-3 px-8 items-center justify-center">
        <WorkCard
          name="card-byte"
          title1="BYTE"
          title2="CRIATIVO"
          description="CREATION OF THE WEBSITE FOR A NEW COMPANY WITH THE AIM OF CONSOLIDATION IT WITHIN THE MARKET"
        />
        <WorkCard
          name="card-doebem"
          title1="ONG"
          title2="DOEBEM"
          description="CREATION OF THE WEBSITE FOR A NEW COMPANY WITH THE AIM OF CONSOLIDATION IT WITHIN THE MARKET"
        />
        <WorkCard
          name="card-mais"
          title1="MAIS"
          title2="VALUE"
          description="CREATION OF THE WEBSITE FOR A NEW COMPANY WITH THE AIM OF CONSOLIDATION IT WITHIN THE MARKET"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between px-8 py-20 md:items-end">
        <p className="font-main pb-8 font-medium text-[30px] md:text-[48px] text-black text-left">
          I'M A
          <br />
          PSYCHOLOGIST
          <br />
          WHO DISCOVERED
          <br />
          HERSELF IN
          <br />
          DESIGN
        </p>
        <WorkButton />
      </div>
    </>
  );
}

export default WorkContainer;
