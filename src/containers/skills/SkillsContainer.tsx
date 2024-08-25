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
    <>
      <div className="h-[7600px] md:h-[9100px]">

      <div
          className="w-full h-[600px] bg-black rounded-t-3xl"
        ></div>
        

        <div className="relative z-20 w-full">
          <div className="absolute left-[10%] md:left-[10%] lg:left-[20%] top-[0px] lg:top-[0px]">
            <SkillsCard
              name={cards[0]}
              description="Lorem ipsum dolor pedro alves de oliveira neto"
            />
          </div>
          <div className="absolute left-[60%] md:left-[50%] lg:left-[70%] top-[600px] lg:top-[700px]">
            <SkillsCard
              name={cards[1]}
              description="Lorem ipsum dolor pedro alves de oliveira neto"
            />
          </div>
          <div className="absolute left-[10%] md:left-[30%] lg:left-[40%] top-[1200px] lg:top-[1400px]">
            <SkillsCard
              name={cards[2]}
              description="Lorem ipsum dolor pedro alves de oliveira neto"
            />
          </div>
          <div className="absolute left-[60%] md:left-[10%] lg:left-[10%] top-[1800px] lg:top-[2100px]">
            <SkillsCard
              name={cards[3]}
              description="Lorem ipsum dolor pedro alves de oliveira neto"
            />
          </div>
          <div className="absolute left-[10%] md:left-[50%] lg:left-[70%] top-[2400px] lg:top-[2800px]">
            <SkillsCard
              name={cards[4]}
              description="Lorem ipsum dolor pedro alves de oliveira neto"
            />
          </div>
          <div className="absolute left-[60%] md:left-[30%] lg:left-[50%] top-[3000px] lg:top-[3500px]">
            <SkillsCard
              name={cards[5]}
              description="Lorem ipsum dolor pedro alves de oliveira neto"
            />
          </div>
          <div className="absolute left-[10%] md:left-[10%] lg:left-[20%] top-[3600px] lg:top-[4200px]">
            <SkillsCard
              name={cards[6]}
              description="Lorem ipsum dolor pedro alves de oliveira neto"
            />
          </div>
          <div className="absolute left-[60%] md:left-[50%] lg:left-[60%] top-[4200px] lg:top-[4900px]">
            <SkillsCard
              name={cards[7]}
              description="Lorem ipsum dolor pedro alves de oliveira neto"
            />
          </div>
          <div className="absolute left-[10%] md:left-[30%] lg:left-[70%] top-[4800px] lg:top-[5600px]">
            <SkillsCard
              name={cards[8]}
              description="Lorem ipsum dolor pedro alves de oliveira neto"
            />
          </div>
          <div className="absolute left-[60%] md:left-[10%] lg:left-[20%] top-[5400px] lg:top-[6300px]">
            <SkillsCard
              name={cards[9]}
              description="Lorem ipsum dolor pedro alves de oliveira neto"
            />
          </div>
          <div className="absolute left-[10%] md:left-[50%] lg:left-[45%] top-[6000px] lg:top-[7000px]">
            <SkillsCard
              name={cards[10]}
              description="Lorem ipsum dolor pedro alves de oliveira neto"
            />
          </div>
        </div>

        <div
          className="w-full h-screen bg-black rounded-b-3xl"
          style={{ position: "sticky", top: "0"}}
        >
          <svg viewBox="0 0 1000 500">
            <motion.path
              id="myPath2"
              className="text-white"
              fill="none"
              strokeWidth="30"
              stroke="currentColor"
              d="M-100 250 C 50 0, 300 300, 300 300 S 300 300 300 300 S 450 500 650 400 S 600 -100 500 100 S 900 100 1100 250"
              pathLength={useTransform(
                scrollYProgress,
                [0.15, 0.8],
                ["0", "1"]
              )}
            />

            <text className="font-main font-semibold text-[20px]">
              <textPath xlinkHref="#myPath2" dominantBaseline="middle">
                PRODUCT DESIGN * UX DESIGN * UI DESIGN * PSYCHOLOGY * PRODUCT
                DESIGN * UX DESIGN * UI DESIGN * PSYCHOLOGY * PRODUCT DESIGN *
                UX DESIGN * UI DESIGN * PSYCHOLOGY * PRODUCT DESIGN * UX DESIGN
                * UI DESIGN * PSYCHOLOGY
              </textPath>
            </text>
          </svg>
        </div>
      </div>
      <p className="font-main font-regular text-[20px] md:text-[25px] text-gray-dark text-right px-8 py-20">
        I offer support and attentive listening,
        <br />
        maintain clear communication with
        <br />
        stakeholders to align all aspects of the
        <br />
        project. Their project becomes my own,
        <br />
        and I am committed to deliver the
        <br />
        optimal digital solution for their needs.
      </p>
    </>
  );
}

export default SkillsContainer;
