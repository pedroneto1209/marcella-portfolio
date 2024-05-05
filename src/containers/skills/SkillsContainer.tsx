"use client";
import React from "react";
import SkillsCard from "@/components/skills/SkillsCard";
import { motion, useScroll, useTransform } from "framer-motion";

function SkillsContainer() {
  const { scrollYProgress } = useScroll();
  const cards: string[] = [
    "Design System",
    "Design Thinking",
    "Information Architecture",
    "Persona",
    "Prototype",
    "Responsive Design",
    "Usability Test",
    "User Flow",
    "User Journey",
    "UX Research",
    "Wireframe",
  ];

  return (
    <div className="h-[7600px] md:h-[9100px]">
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
        <div className="absolute left-[10%] md:left-[10%] lg:left-[20%] top-[0px] lg:top-[0px]">
          <SkillsCard name={cards[0]} />
        </div>
        <div className="absolute left-[60%] md:left-[50%] lg:left-[70%] top-[600px] lg:top-[700px]">
          <SkillsCard name={cards[1]} />
        </div>
        <div className="absolute left-[10%] md:left-[30%] lg:left-[40%] top-[1200px] lg:top-[1400px]">
          <SkillsCard name={cards[2]} />
        </div>
        <div className="absolute left-[60%] md:left-[10%] lg:left-[10%] top-[1800px] lg:top-[2100px]">
          <SkillsCard name={cards[3]} />
        </div>
        <div className="absolute left-[10%] md:left-[50%] lg:left-[70%] top-[2400px] lg:top-[2800px]">
          <SkillsCard name={cards[4]} />
        </div>
        <div className="absolute left-[60%] md:left-[30%] lg:left-[50%] top-[3000px] lg:top-[3500px]">
          <SkillsCard name={cards[5]} />
        </div>
        <div className="absolute left-[10%] md:left-[10%] lg:left-[20%] top-[3600px] lg:top-[4200px]">
          <SkillsCard name={cards[6]} />
        </div>
        <div className="absolute left-[60%] md:left-[50%] lg:left-[60%] top-[4200px] lg:top-[4900px]">
          <SkillsCard name={cards[7]} />
        </div>
        <div className="absolute left-[10%] md:left-[30%] lg:left-[70%] top-[4800px] lg:top-[5600px]">
          <SkillsCard name={cards[8]} />
        </div>
        <div className="absolute left-[60%] md:left-[10%] lg:left-[20%] top-[5400px] lg:top-[6300px]">
          <SkillsCard name={cards[9]} />
        </div>
        <div className="absolute left-[10%] md:left-[50%] lg:left-[45%] top-[6000px] lg:top-[7000px]">
          <SkillsCard name={cards[10]} />
        </div>
      </div>
    </div>
  );
}

export default SkillsContainer;
