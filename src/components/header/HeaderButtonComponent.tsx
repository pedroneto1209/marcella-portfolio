import { motion } from "framer-motion";

interface Props {
  name: string;
  redirect: string;
  trgt: string;
}

function HeaderButtonComponent({ name, redirect, trgt }: Props) {
  return (
    <li>
      <motion.a
        href={redirect}
        target={trgt}
        className="inline-block font-main font-regular text-[20px] text-gray-dark"
        aria-current="page"
        whileHover="hover"
        animate="rest"
      >
        {name}
        <motion.div
          className="w-full h-px bg-gray-dark"
          style={{ originX: 0 }}
          initial={false}
          variants={{
            rest: {
              scaleX: 0,
            },
            hover: {
              scaleX: 1,
            },
          }}
        ></motion.div>
      </motion.a>
    </li>
  );
}

export default HeaderButtonComponent;
