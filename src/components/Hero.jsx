// src/components/Hero.jsx
import { motion } from "framer-motion";
import herobg from "../assets/herobg.png";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${herobg})` }}
      className="relative w-full h-screen mx-auto bg-cover bg-center overflow-hidden"
    >
      {/* Hero text & side accent */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I’m <span className="text-[#915EFF]">Akindu</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Turning ideas into smooth interfaces <br className="sm:block hidden" />
            Scalable Back-Ends and intelligent solutions
          </p>
        </div>
      </div>

      {/* 3D animation canvas */}
      <ComputersCanvas />

      {/* Scroll-down indicator, positioned just under the 3D desk */}
      <div className="absolute left-1/2 bottom-[120px] transform -translate-x-1/2 z-20">
        <a href="#about">
          <div className="w-9 h-16 rounded-3xl border-2 border-white/60 flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
