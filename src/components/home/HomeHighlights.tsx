import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import moto1 from "@/assets/images/motopic.png";
// import mottoImage from "@/assets/images/moto-home-img.png";
// import visionImage from "@/assets/images/vision-home-img.png";
// import missionImage from "@/assets/images/mission-home-img.png";

interface HighlightItem {
  title: string;
  slogan: string;
  desc: string;
  bgGradient: string;
  titleColor: string;
  sloganColor: string;
  buttonColor: string;
  accentColor: string;
  image: string;
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),

  hover: {
    y: -10,
    scale: 1.02,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};


// const floatAnimation = {
//   animate: {
//     y: [0, -10, 0],
//     transition: {
//       duration: 4,
//       repeat: Infinity,
//       ease: "easeInOut",
//     },
//   },
// };

const highlights: HighlightItem[] = [
  {
    title: "MOTTO",
    slogan: "नहि ज्ञानेन सदृशं",
    desc: "Taken from the Bhagavad Gita, this phrase emphasizes the supreme value and purity of Knowledge — the guiding light that shapes intellect and wisdom.",
    bgGradient: "bg-gradient-to-br from-[#FDE68A] to-[#BFDBFE]",
    titleColor: "#B45309",
    sloganColor: "#B45309",
    buttonColor: "#B45309",
    accentColor: "#60A5FA",
    image: moto1,
  },
  {
    title: "VISION",
    slogan: "EMPOWERING STUDENTS\nTO CHANGE THE WORLD",
    desc: "Empowering every learner to reach their full potential and make a positive, lasting contribution to society.",
    bgGradient: "bg-gradient-to-br from-[#F5DAA7] to-[#A7F3D0]",
    titleColor: "#065F46",
    sloganColor: "#059669",
    buttonColor: "#065F46",
    accentColor: "#34D399",
    image: moto1,
  },
  {
    title: "MISSION",
    slogan: "NURTURING MINDS,\nSHAPING FUTURES",
    desc: "We believe in nurturing multi-dimensional growth through classroom learning, co-curricular engagement, and innovative thinking.",
    bgGradient: "bg-gradient-to-br from-[#F1E3D3] to-[#FDE68A]",
    titleColor: "#92400E",
    sloganColor: "#B45309",
    buttonColor: "#92400E",
    accentColor: "#F59E0B",
    image: moto1,
  },
];

const HomeHighlights: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleViewMore = (section: string) => {
    const sectionMap: Record<string, string> = {
      MOTTO: "motto",
      VISION: "vision",
      MISSION: "vision",
    };
    navigate(`/legacy?section=${sectionMap[section] || "motto"}`);
  };

  return (
    <div className="flex flex-col lg:flex-row w-[90%] mx-auto rounded-2xl overflow-hidden mt-16 px-8 sm:px-10 md:px-14 lg:px-16 pt-12 pb-12">
      {highlights.map((item, idx) => (
        <motion.div
          key={idx}
          className={`flex-1 ${item.bgGradient} px-10 sm:px-12 lg:px-14 pt-16 pb-28 relative min-h-[600px] flex flex-col justify-between transition-all duration-500`}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          custom={idx}
          whileHover="hover"
        >
          {/* TEXT */}
          <div className="max-w-sm">
            <h2
              className="text-[38px] font-extrabold tracking-wide"
              style={{ color: item.titleColor }}
            >
              {item.title}
            </h2>

            <motion.p
              className="mt-4 font-bold text-[18px] whitespace-pre-line leading-tight"
              style={{ color: item.sloganColor }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {item.slogan}
            </motion.p>

            <motion.p
              className="mt-3 text-gray-700 text-sm leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {item.desc}
            </motion.p>

            {/* BUTTON */}
            <motion.button
              className="mt-5 text-sm font-semibold border-b-2 border-transparent transition-all duration-300 relative z-20"
              style={{ color: item.buttonColor }}
              onHoverStart={() => setHoveredIndex(idx)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => handleViewMore(item.title)}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.15 }}
            >
              <AnimatePresence mode="wait">
                {hoveredIndex === idx ? (
                  <motion.span
                    key="hover"
                    initial={{ x: 10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex items-center"
                  >
                    View More{" "}
                    <motion.span
                      className="ml-1"
                      style={{ color: item.accentColor }}
                    >
                      ›
                    </motion.span>
                  </motion.span>
                ) : (
                  <motion.span
                    key="default"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex items-center"
                  >
                    <motion.span
                      className="mr-1"
                      style={{ color: item.accentColor }}
                    >
                      ›
                    </motion.span>{" "}
                    View More
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* IMAGE with floating animation */}
          <motion.img
            src={item.image}
            alt={item.title}
            className="absolute bottom-0 left-4 w-[300px] lg:w-[380px] object-contain drop-shadow-md "
           
          />
        </motion.div>
      ))}
    </div>
  );
};

export default HomeHighlights;
