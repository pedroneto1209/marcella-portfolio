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
      className="flex flex-col justify-between items-start skill-cards bg-brand rounded-3xl w-40 md:w-80 px-2 md:px-8 py-6 md:py-[60px]"
    >
      <img
        src={`/icons/Icon=${name}.svg`}
        alt="Description"
        className="h-[60px]"
      />

      <div className="flex flex-col items-start space-y-2">
        <h2 className="font-main font-bold text-[18px] md:text-[31px] text-white">
          {name}
        </h2>

        <motion.div
          className="w-full overflow-hidden"
          initial={false}
          variants={{
            rest: { height: 0, opacity: 0 },
            hover: {
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: 0.4 },
                opacity: { delay: 0.4, duration: 0.2 },
              },
            },
          }}
        >
          <div className="flex flex-col items-start space-y-3">
            <div className="w-full h-px bg-white"></div>
            <h2 className="font-main font-medium text-[9px] md:text-[16px] text-white">
              {description}
            </h2>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default SkillsCard;
