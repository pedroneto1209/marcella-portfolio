"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import HeaderButtonComponent from "../../components/header/HeaderButtonComponent";

function HeaderContainer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "85px" }}
      transition={{ type: "spring", stiffness: 120, damping: 20, delay: 4 }}
    >
      <nav className="px-8 pt-8 pb-3">
        <div className="flex items-center justify-between">
          <span className="font-brand font-bold text-[31px] text-brand">
            Marcella.
          </span>

          <button
            onClick={() => setIsOpen(!isOpen)}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center w-10 h-4 justify-center md:hidden focus:outline-none"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <svg
              className={`${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 40 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="1" x2="40" y2="1" stroke="#484848" />
              <line y1="13" x2="40" y2="13" stroke="#484848" />
              <line y1="25" x2="40" y2="25" stroke="#484848" />
            </svg>
          </button>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-row space-x-5 items-center">
              <HeaderButtonComponent name="Home" redirect="#" trgt=""/>
              <HeaderButtonComponent name="About" redirect="https://drive.google.com/file/d/1HpruuEpz2lR-zojiLVeB52WvnGXHeykL/view?usp=sharing" trgt="_blank"/>
              <HeaderButtonComponent name="Contact" redirect="#" trgt=""/>

              <div className="flex flex-row space-x-2 items-center">
                <HeaderButtonComponent name="EN" redirect="#" trgt=""/>
                <HeaderButtonComponent name="PT" redirect="#" trgt=""/>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="block pl-8 pb-2 md:hidden" id="navbar-default">
          <ul className="flex flex-col space-y-1">
            <HeaderButtonComponent name="Home" redirect="#" trgt=""/>
            <HeaderButtonComponent name="About" redirect="https://drive.google.com/file/d/1HpruuEpz2lR-zojiLVeB52WvnGXHeykL/view?usp=sharing" trgt="_blank"/>
            <HeaderButtonComponent name="Contact" redirect="#" trgt=""/>

            <div className="flex flex-row space-x-2 items-center">
              <HeaderButtonComponent name="EN" redirect="#" trgt=""/>
              <HeaderButtonComponent name="PT" redirect="#" trgt=""/>
            </div>
          </ul>
        </div>
      )}
      <div className="w-full h-px bg-gray-dark"></div>
    </motion.div>
  );
}

export default HeaderContainer;
