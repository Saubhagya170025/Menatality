import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { tools } from "../constants/"; // Import tools instead of services
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ToolCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-black rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
      </Tilt>
);

const Tools = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>The Tools You Need....</p>
        <h2 className={styles.sectionHeadText}>Tools & Resources</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Here are the best tools to help you in your mental health journey. We've gathered all the necessary resources you need to keep track of your mental well-being.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {tools.map((tool, index) => (
          <ToolCard key={tool.title} index={index} {...tool} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tools, "tools");
