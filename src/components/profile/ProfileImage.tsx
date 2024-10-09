"use client";

import React from "react";
import { motion } from "framer-motion";

function ProfileImage() {
  return (
    <motion.div
      initial={{ padding: "0 0 0 0" }}
      animate={{ padding: "32px 32px 32px 32px" }}
      transition={{ type: "spring", stiffness: 120, damping: 20, delay: 3 }}
      className="relative"
    >
      <motion.img
        initial={{ borderRadius: 0 }}
        animate={{ borderRadius: "24px" }}
        transition={{ type: "spring", stiffness: 120, damping: 20, delay: 3 }}
        src="/images/profile.jpeg"
        alt="Optimized Logo"
        width={0}
        height={0}
        sizes="100vw"
        className="w-screen h-screen object-cover"
      />

      <div className="absolute top-0 left-0 w-full h-full">
        <svg viewBox="0 0 1000 500">
          <motion.path
            id="myPath"
            className="text-brand"
            fill="none"
            strokeWidth="45"
            stroke="currentColor"
            d="M-100 250 C 200 10, 200 10, 350 300 S 650 350 700 200 S 800 0 1100 150"
            pathLength="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3 }}
          />

          <motion.text
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20,
              delay: 3,
            }}
            fill="white"
            className="font-main font-semibold text-[20px]"
          >
            <textPath xlinkHref="#myPath" dominantBaseline="middle">
              PRODUCT DESIGN * UX DESIGN * UI DESIGN * PSYCHOLOGY * PRODUCT
              DESIGN * UX DESIGN * UI DESIGN * PSYCHOLOGY * PRODUCT DESIGN * UX
              DESIGN * UI DESIGN * PSYCHOLOGY * PRODUCT DESIGN * UX DESIGN * UI
              DESIGN * PSYCHOLOGY
            </textPath>
          </motion.text>
        </svg>
      </div>
    </motion.div>
  );
}

export default ProfileImage;
