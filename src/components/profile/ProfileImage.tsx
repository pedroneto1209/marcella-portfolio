"use client";

import React from "react";
import { motion } from "framer-motion";

function ProfileImage() {
  return (
    <motion.div
      initial={{ padding: "0 0 0 0" }}
      animate={{ padding: "0 32px 0 32px" }}
      transition={{ type: "spring", stiffness: 120, damping: 20, delay: 3 }}
    >
      <motion.img
        initial={{ borderRadius: 0 }}
        animate={{ borderRadius: "24px" }}
        transition={{ type: "spring", stiffness: 120, damping: 20, delay: 3 }}
        src="/profile.png"
        alt="Optimized Logo"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full"
      />
    </motion.div>
  );
}

export default ProfileImage;
