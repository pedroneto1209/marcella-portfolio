"use client";
import ProfileImage from "@/components/profile/ProfileImage";
import { motion } from "framer-motion";
import React from "react";

function ProfileContainer() {
  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20, delay: 3 }}
      >
        <div className="flex flex-col space-y-3 px-8 pt-40 md:pt-20">
          <h1 className="font-main font-semibold text-[61px] text-black">
            Be Different
          </h1>
          <h1 className="font-main font-semibold text-[61px] text-black">
            Be Effective
          </h1>
          <h1 className="font-main font-semibold text-[61px] text-black">
            Be Created
          </h1>
        </div>
      </motion.div>
      <ProfileImage />
    </>
  );
}

export default ProfileContainer;
