import Image from "next/image";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import { motion } from "framer-motion";
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 xl:mx-10">
        <div className="text-center flex flex-col justify-center xl:pl-30 xl:pt-20 xl:text-left h-full container mx-auto">
          {/* <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            CyberCanvas: Architecting <br />{"Tomorrow's"} Tech <br className="xl:hidden" />
            <span className="text-accent">- My Journey</span>
          </motion.h1> */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            AnalyticsPulse: <br />Powering Decisions with Data <br className="xl:hidden" />
            <span className="text-accent">- My Journey</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 capitalize"
          >
            My portfolio website that aims to convey a sense of innovation, creativity, and progress in the world of technology
          </motion.p>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="xl:flex hide-on-small"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full 
        absolute mix-blend-color-dodge translate-z-0"
        ></div>
        <ParticlesContainer />
        <motion.div variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden" transition={{duration: 1, ease: 'easeInOut'}} className="w-full h-full max-w-[540px] max-h-[490px] absolute -bottom-32 lg:bottom-0 lg:right-[9%]">
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
