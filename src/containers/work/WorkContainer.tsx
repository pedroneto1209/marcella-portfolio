"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import WorkCard from "@/components/work/WorkCard";
import WorkButton from "@/components/work/WorkButton";
import Link from "next/link";

function WorkContainer() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <div className="flex space-x-3 p-8 items-center justify-start">
        <span
          id="my-work"
          className="whitespace-nowrap font-main font-regular text-[20px] md:text-[25px] text-gray-dark"
        >
          My Work
        </span>
        <motion.div
          style={{
            width: useTransform(scrollYProgress, [0.05, 0.1], ["0%", "100%"]),
            originX: 0,
          }}
          className="h-px bg-gray-dark"
        ></motion.div>
      </div>
      <div className="flex flex-col space-y-3">
        <div className="flex flex-col md:flex-row space-y-3 md:space-x-3 px-8 items-center justify-center">
          <WorkCard
            name="card-trst"
            title1="TRST"
            title2="INNOVATIONS INC"
            description="REDESIGNED THE TRST SITE, SHOWCASING INNOVATIVE MOBILE AND BIOMETRIC SOLUTIONS FOR ACCESS, PAYMENTS, AND VERIFICATION"
            link2="https://trstinc.ca/"
          />
          <WorkCard
            name="card-machine"
            title1="MACHINE"
            title2="TOOL COMPONENTS"
            description="REDESIGNED AND PUBLISHED THE MACHINE TOOLS SITE USING WIX, DELIVERING A COMPLETE WEB SOLUTION"
            link2="https://www.machinetoolcomponents.com/"
          />
          <WorkCard
            name="card-kalyst"
            title1="KALYST"
            title2="PAYMENT GATEWAY"
            description="DESIGNED AND DEVELOPED THE COMPANY SITE, INCLUDING DASHBOARDS FOR PAYMENT GATEWAY MANAGEMENT"
            link2="https://kalyst.com.br/"
          />
        </div>

        <div className="flex flex-col md:flex-row space-y-3 md:space-x-3 px-8 items-center justify-center">
          <WorkCard
            name="card-baja"
            title1="MANGUE"
            title2="BAJA"
            description="DASHBOARD FOR MONITORING DYNAMIC DATA CHARTS OF UFPE'S BAJA PROJECT CAR"
            link1="https://medium.com/@marcellaclopes/creating-a-real-time-dashboard-for-mangue-baja-using-design-sprint-d5012e1b401d"
          />
          <WorkCard
            name="card-doebem"
            title1="NGO"
            title2="DOEBEM"
            description="LEAD OF NGO WEBSITE REDESIGN TO INCREASE DONATIONS"
            link2="https://www.doebem.org.br/"
            link1="https://medium.com/@marcellaclopes/creating-a-real-time-dashboard-for-mangue-baja-using-design-sprint-d5012e1b401d"
          />
          <WorkCard
            name="card-byte"
            title1="BYTE"
            title2="CRIATIVO"
            description="CREATION OF A LANDING PAGE FOR A NEW COMPANY TO ESTABLISH ITS MARKET PRESENCE"
            link2="https://www.bytecriativotech.com.br/"
            link1="https://medium.com/@marcellaclopes/designing-a-software-house-landing-page-a-double-diamond-approach-9ba2be1deb8f"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between px-8 py-20 md:items-end">
        <p className="font-main pb-8 font-medium text-[30px] md:text-[48px] text-black text-left">
          I&apos;M A
          <br />
          PSYCHOLOGIST
          <br />
          WHO DISCOVERED
          <br />
          HERSELF IN
          <br />
          DESIGN
        </p>
        <Link href="/about">
          <WorkButton />
        </Link>
      </div>
    </>
  );
}

export default WorkContainer;
