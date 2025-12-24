import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";

type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  description: string;
};

const stats: Stat[] = [
  {
    value: 6699,
    description: "Inventions created by federally funded excellent research",
  },
  {
    value: 3029,
    description: "U.S. patents based on federally funded excellent research",
  },
  {
    value: 400,
    suffix: "+",
    description:
      "Start-up companies founded based on federally funded research at excellent",
  },
  {
    value: 350000,
    suffix: "+",
    description:
      "Jobs created by companies that started with federally funded excellent research",
  },
  {
    value: 94,
    prefix: "$",
    suffix: " Billion",
    description:
      "Private investment in start-up companies that grew out of federally funded excellent research",
  },
  {
    value: 11,
    prefix: "$",
    suffix: "+ trillion",
    description:
      "Market value of the top 30 companies founded by excellent alumni",
  },
];

const AnimatedNumber = ({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1400; // smooth, not aggressive
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      start = Math.floor(eased * value);
      setCount(start);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const ResearchSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-10 px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-4xl mx-auto mb-6"
      >
        <h2 className="text-3xl sm:text-4xl text-red-700 font-bold mb-6">Research</h2>
        <p className="text-md sm:text-lg text-gray-700 leading-relaxed">
          Driving discoveries vital to our world, our health, and our
          intellectual life
        </p>
      </motion.div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto border-t border-gray-300 mb-10" />

      {/* Stats */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-10 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: index * 0.08,
              ease: "easeOut",
            }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-2 tracking-tight">
              <AnimatedNumber
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
            </h3>
            <p className="text-gray-700 leading-relaxed max-w-sm mx-auto">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto border-t border-gray-300 mt-10" />

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex justify-center mt-10"
      >
        <button
          onClick={() => navigate("/research")}
          className="relative overflow-hidden bg-[#b1040e] text-white px-12 py-4 text-lg font-semibold group"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-red-700 via-orange-500 to-red-700 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
          <span className="relative z-10">More about research</span>
        </button>
      </motion.div>
      
    </section>
  );
};

export default ResearchSection;
