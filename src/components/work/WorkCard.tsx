import React from "react";
import { motion } from "framer-motion";
import WorkButton from "./WorkButton";

interface Props {
  name: string;
  title1: string;
  title2: string;
  description: string;
}

function WorkCard({ name, title1, title2, description }: Props) {
  return (
    <motion.div
      aria-current="page"
      whileHover="hover"
      animate="rest"
      className="relative"
      initial={false}
      variants={{
        rest: { flex: 1 },
        hover: { flex: 2 },
      }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <motion.div className="relative overflow-hidden rounded-3xl md:h-[780px] h-[500px]">
        <img
          src={`images/${name}.png`}
          alt="Optimized Logo"
          className="w-full h-full object-cover"
        ></img>

        <p className="absolute left-8 bottom-8 font-main font-medium text-[20px] md:text-[39px] text-white">
          {title1}
          <br />
          {title2}
        </p>

        <motion.p
          variants={{
            rest: { opacity: 0 },
            hover: {
              opacity: 1,

              transition: {
                type: "spring",
                stiffness: 120,
                damping: 20,
                delay: 0.5,
              },
            },
          }}
          className="font-main font-regular text-[15px] md:text-[20px] text-white text-right absolute top-8 right-8 w-1/2"
        >
          {description}
        </motion.p>

        <motion.div
          className="absolute bottom-[238px] right-8"
          variants={{
            rest: { opacity: 0 },
            hover: {
              opacity: 1,

              transition: {
                type: "spring",
                stiffness: 120,
                damping: 20,
                delay: 0.5,
              },
            },
          }}
        >
          <motion.div
            aria-current="page"
            className="relative"
            whileHover="hover"
            animate="rest"
          >
            <div style={{ width: "345px", height: "60px" }}></div>

            <div className="absolute top-3 left-4 w-full h-15  w-full h-15 flex space-x-10 items-center">
              <svg
                width="24"
                height="20"
                viewBox="0 0 24 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                className="text-white"
              >
                <path
                  d="M13.7207 19.5211C13.5802 19.3804 13.5013 19.1898 13.5013 18.9911C13.5013 18.7923 13.5802 18.6017 13.7207 18.4611L21.4394 10.7411L1.25066 10.7411C1.05175 10.7411 0.860981 10.662 0.720329 10.5214C0.579678 10.3807 0.50066 10.19 0.50066 9.99106C0.50066 9.79214 0.579678 9.60138 0.720329 9.46073C0.860981 9.32008 1.05175 9.24106 1.25066 9.24106L21.4394 9.24106L13.7207 1.52106C13.5882 1.37888 13.5161 1.19084 13.5195 0.996535C13.5229 0.802234 13.6016 0.616848 13.739 0.479435C13.8765 0.342022 14.0618 0.263311 14.2561 0.259882C14.4504 0.256454 14.6385 0.328577 14.7807 0.461057L23.7807 9.46106C23.9211 9.60168 24 9.79231 24 9.99106C24 10.1898 23.9211 10.3804 23.7807 10.5211L14.7807 19.5211C14.64 19.6615 14.4494 19.7404 14.2507 19.7404C14.0519 19.7404 13.8613 19.6615 13.7207 19.5211Z"
                  fill="#484848"
                />
              </svg>
              <a className="font-main font-regular text-[25px] text-white">
                Let&apos;s see the process
              </a>
            </div>

            <motion.div
              className="absolute top-0 left-0 border border-white"
              style={{ originX: 0, height: "100%", borderRadius: "100px" }}
              initial={false}
              variants={{
                rest: {
                  width: 60,
                },
                hover: {
                  width: 345,
                },
              }}
            ></motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-[148px] right-8"
          variants={{
            rest: { opacity: 0 },
            hover: {
              opacity: 1,

              transition: {
                type: "spring",
                stiffness: 120,
                damping: 20,
                delay: 0.5,
              },
            },
          }}
        >
          <motion.div
            aria-current="page"
            className="relative"
            whileHover="hover"
            animate="rest"
          >
            <div style={{ width: "320px", height: "60px" }}></div>

            <div className="absolute top-3 left-4 w-full h-15  w-full h-15 flex space-x-10 items-center">
              <svg
                width="24"
                height="20"
                viewBox="0 0 24 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                className="text-white"
              >
                <path
                  d="M13.7207 19.5211C13.5802 19.3804 13.5013 19.1898 13.5013 18.9911C13.5013 18.7923 13.5802 18.6017 13.7207 18.4611L21.4394 10.7411L1.25066 10.7411C1.05175 10.7411 0.860981 10.662 0.720329 10.5214C0.579678 10.3807 0.50066 10.19 0.50066 9.99106C0.50066 9.79214 0.579678 9.60138 0.720329 9.46073C0.860981 9.32008 1.05175 9.24106 1.25066 9.24106L21.4394 9.24106L13.7207 1.52106C13.5882 1.37888 13.5161 1.19084 13.5195 0.996535C13.5229 0.802234 13.6016 0.616848 13.739 0.479435C13.8765 0.342022 14.0618 0.263311 14.2561 0.259882C14.4504 0.256454 14.6385 0.328577 14.7807 0.461057L23.7807 9.46106C23.9211 9.60168 24 9.79231 24 9.99106C24 10.1898 23.9211 10.3804 23.7807 10.5211L14.7807 19.5211C14.64 19.6615 14.4494 19.7404 14.2507 19.7404C14.0519 19.7404 13.8613 19.6615 13.7207 19.5211Z"
                  fill="#484848"
                />
              </svg>
              <a className="font-main font-regular text-[25px] text-white">
                Let&apos;s see the result
              </a>
            </div>

            <motion.div
              className="absolute top-0 left-0 border border-white"
              style={{ originX: 0, height: "100%", borderRadius: "100px" }}
              initial={false}
              variants={{
                rest: {
                  width: 60,
                },
                hover: {
                  width: 320,
                },
              }}
            ></motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default WorkCard;
