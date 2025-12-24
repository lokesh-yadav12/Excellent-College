import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  }),
};


const AthleteSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-8 px-4 sm:px-6 overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto mb-10"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Athletics
        </h2>
        <p className="text-md sm:text-lg text-gray-700 leading-relaxed">
          Providing student-athletes the opportunity to achieve excellence
          <br />
          both in competition and in the classroom
        </p>
      </motion.div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          {
            title: "Home of Champions",
            desc:
              "Stanford’s 137 NCAA championships are the most for any university, a product of an unrivaled culture.",
            link: "/athletics/champions",
            img:
              "https://images.unsplash.com/photo-1547347298-4074fc3086f0",
            label: "National Championships",
          },
          {
            title: "Olympic Excellence",
            desc:
              "Produced medalists in every Olympics since 1912, totaling 335 medals from 196 Olympians",
            link: "/athletics/olympics",
            img:
              "https://images.unsplash.com/photo-1509228468518-180dd4864904",
            label: "Medals",
          },
          {
            title: "Multidimensional Impact",
            desc:
              "Student-athletes creating local, national, and global impact through leadership and advocacy",
            link: "/athletics/impact",
            img:
              "https://images.unsplash.com/photo-1521412644187-c49fa049e84d",
            label: "Athlete Stories",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link
              to={item.link}
              className="group block relative overflow-hidden"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-72 object-cover transform transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-500" />
              </div>

              {/* Content */}
              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-3 relative inline-block">
                  {item.title}
                  {/* Underline sweep */}
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#b1040e] transition-all duration-500 group-hover:w-full"></span>
                </h3>

                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>

                <span className="text-sm font-semibold text-[#b1040e] inline-flex items-center gap-1">
                  {item.label}
                  <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex justify-center mt-12 mb-12"
      >
        <button
          onClick={() => navigate("/athletics")}
          className="relative overflow-hidden px-14 py-4 text-lg font-semibold text-white bg-[#b1040e] group"
        >
          <span className="relative z-10">More about athletics</span>

          {/* Gradient sweep animation */}
          <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-700 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
        </button>
      </motion.div>
    </section>
  );
};

export default AthleteSection;
