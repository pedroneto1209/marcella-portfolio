"use client";
import React from "react";
import SkillsCard from "@/components/skills/SkillsCard";
import { motion, useScroll, useTransform } from "framer-motion";

function SkillsContainer() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="h-[6500px]">
      <div
        className="w-full h-screen bg-black rounded-3xl"
        style={{ position: "sticky", top: "0", marginTop: "150px" }}
      >
        <svg viewBox="0 0 1000 500">
          <motion.path
            id="myPath"
            className="text-white"
            fill="none"
            strokeWidth="45"
            stroke="currentColor"
            d="M-100 250 C 200 10, 200 10, 350 300 S 650 350 700 200 S 800 0 1100 150"
            pathLength={useTransform(scrollYProgress, [0.25, 0.4], ["0", "1"])}
          />

          <text className="font-main font-semibold text-[20px]">
            <textPath xlinkHref="#myPath" dominantBaseline="middle">
              PRODUCT DESIGN * UX DESIGN * UI DESIGN * PSYCHOLOGY * PRODUCT
              DESIGN * UX DESIGN * UI DESIGN * PSYCHOLOGY * PRODUCT DESIGN * UX
              DESIGN * UI DESIGN * PSYCHOLOGY * PRODUCT DESIGN * UX DESIGN * UI
              DESIGN * PSYCHOLOGY
            </textPath>
          </text>
        </svg>
      </div>

      <div className="relative z-20 w-full">
        <div className="absolute left-8 md:left-40 lg:left-96">
          <SkillsCard />
        </div>
        <div className="absolute right-8 top-[700px] md:right-40 lg:right-96 md:top-[900px]">
          <SkillsCard />
        </div>
        <div className="absolute left-8 top-[1400px] md:left-80 lg:left-[600px] md:top-[1800px]">
          <SkillsCard />
        </div>
        <div className="absolute right-8 top-[2100px] md:right-20 lg:right-[200px] md:top-[2700px]">
          <SkillsCard />
        </div>
        <div className="absolute left-8 top-[2800px] md:left-40 lg:left-96 md:top-[3600px]">
          <SkillsCard />
        </div>
        <div className="absolute right-8 top-[3500px] md:right-40 lg:right-96 md:top-[4500px]">
          <SkillsCard />
        </div>
        <div className="absolute right-8 top-[4200px] md:right-40 lg:right-96 md:top-[5400px]">
          <div className="skill-cards rounded-3xl w-40 md:w-80"></div>
        </div>
      </div>
    </div>
  );
}

export default SkillsContainer;
