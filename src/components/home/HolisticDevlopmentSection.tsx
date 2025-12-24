import React, { useRef } from "react";
import { motion, useInView, easeOut } from "framer-motion";
import {
  AcademicCapIcon,
  HeartIcon,
  UsersIcon,
  SparklesIcon,
  LightBulbIcon,
} from "@heroicons/react/24/solid";

// ===================== Animation Variants =====================
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, when: "beforeChildren" },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

// ===================== Holistic Pillars =====================
const pillars = [
  {
    title: "Intellectual Growth",
    description:
      "Beyond rote learning, we cultivate curiosity, creativity, and critical thinking through experiential and inquiry-based learning.",
    icon: LightBulbIcon,
  },
  {
    title: "Social Skills and Community",
    description:
      "Students learn collaboration, empathy, and cultural respect in a diverse, inclusive, and caring school environment.",
    icon: UsersIcon,
  },
  {
    title: "Emotional Well-being",
    description:
      "We nurture emotionally intelligent and resilient students through mindfulness, counseling, and self-awareness programs.",
    icon: HeartIcon,
  },
  {
    title: "Character and Values",
    description:
      "Respect, honesty, and integrity form the foundation of our education — shaping responsible and compassionate citizens.",
    icon: AcademicCapIcon,
  },
  {
    title: "Extracurricular Enrichment",
    description:
      "From sports and arts to leadership clubs, students explore their passions, build confidence, and develop teamwork skills.",
    icon: SparklesIcon,
  },
];

// ===================== Component =====================
const HolisticDevelopmentSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={container}
      className="relative bg-gradient-to-b from-[#FFF8F6] to-[#FDF6F3] py-16 sm:py-24 lg:py-32 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* === Holistic Development Section === */}
        <motion.div variants={fadeUp}>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#690B22] text-center mb-6">
            Overall Development of the Child
          </h2>
          <p className="text-lg sm:text-xl text-[#4B2E2B] text-center max-w-4xl mx-auto mb-16">
            At excellent, our mission extends beyond academics. We are committed
            to nurturing confident, capable, and compassionate individuals —
            shaping both the heart and the mind.
          </p>

          <motion.div
            variants={container}
            className="flex flex-wrap justify-center gap-10"
          >
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.03 }}
                className="bg-white p-10 rounded-2xl border border-[#F1E3D3] shadow-md hover:shadow-xl transition-all duration-300 w-full sm:w-[300px] text-center"
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#690B22] text-[#F1E3D3] mb-6 mx-auto shadow-md">
                  <pillar.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-[#690B22] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-[#4B2E2B] text-base leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HolisticDevelopmentSection;