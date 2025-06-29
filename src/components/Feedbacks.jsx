// src/components/Feedbacks.jsx

import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className="bg-[#110f25] p-6 rounded-2xl w-full sm:w-[320px]"
  >
    {/* Big opening quote */}
    <p className="text-white font-black text-[40px] leading-none">"</p>

    {/* Testimonial text */}
    <p className="mt-4 text-white text-[16px] leading-[24px]">
      {testimonial}
    </p>

    {/* Author info */}
    <div className="mt-6 flex justify-between items-center">
      <div>
        <p className="text-white font-bold text-[14px] flex items-center">
          <span className="text-blue-400">@</span>
          <span className="ml-1">{name}</span>
        </p>
        <p className="mt-1 text-secondary text-[12px]">
          {designation} of {company}
        </p>
      </div>
      <img
        src={image}
        alt={`feedback_by-${name}`}
        className="w-12 h-12 rounded-full object-cover"
      />
    </div>
  </motion.div>
);

const Feedbacks = () => (
  <div className="mt-12 bg-[#1b0e33] rounded-2xl p-8">
    {/* Header */}
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What others say</p>
      <h2 className={styles.sectionHeadText}>Testimonials.</h2>
    </motion.div>

    {/* Cards row */}
    <div className="mt-8 flex flex-wrap justify-center gap-7">
      {testimonials.map((t, i) => (
        <FeedbackCard key={t.name} index={i} {...t} />
      ))}
    </div>
  </div>
);

export default SectionWrapper(Feedbacks, "");
