import React from "react";
import backgroundImg from "../assets/mountain_bg.jpg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div
        className="content-div bg-top"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundPosition: "center",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-end h-full">
          <p className="text-zinc-300">Hello Visitor</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            FullStack & Company
          </h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 2 }}
            className="text-4xl sm:text-7xl font-bold text-[#4473fd] mt-4"
          >
            Explore Our Mission
          </motion.h2>
          <motion.p
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{
              delay: 0.6,
              duration: 2,
              type: "spring",
              stiffness: 60,
            }}
            className="static mt-16 max-w-[800px] text-[#47b5d6] text-lg mb-16 lg:max-w-[600px]"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui,
            voluptates dolorum consectetur eligendi saepe nemo similique quas
            eum odio dolores voluptas.
          </motion.p>
          <div className="absolute right-40 mb-12">
            <motion.button
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              className="text-white group border-2 px-6 py-3 my-6 lg:flex hidden items-center hover:bg-pink-800 hover:border-pink-800 rounded-md"
            >
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <ArrowRightAltIcon className="ml-3" />
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
