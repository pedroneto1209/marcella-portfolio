import React from "react";
import { motion } from "framer-motion";

interface Props {
  name: string;
  description: string;
}

function SkillsCard({ name, description }: Props) {
  return (
    <motion.div
      aria-current="page"
      whileHover="hover"
      animate="rest"
      className="flex flex-col justify-between items-start skill-cards bg-brand rounded-3xl w-40 md:w-80 px-8 py-[60px] z-20"
    >
      <img
        src={`/icons/Icon=${name}.svg`}
        alt="Description"
        className="h-[60px]"
      />

      <div className="flex flex-col items-start space-y-2">
        <h2 className="font-main font-bold text-[20px] md:text-[31px] text-white">
          {name}
        </h2>

        <motion.div
          className="w-full"
          initial={false}
          variants={{
            rest: { opacity: 0, height: 0 },
            hover: { opacity: 1, height: "20px" },
          }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
          <div className="flex flex-col items-start space-y-3">
            <div className="w-full h-px bg-white"></div>
            <h2 className="font-main font-medium text-[13px] md:text-[16px] text-white">
              {description}
            </h2>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default SkillsCard;
