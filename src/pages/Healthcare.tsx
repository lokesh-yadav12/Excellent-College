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


const Healthcare = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-6 sm:py-10 px-4 sm:px-6 overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <h2 className="text-3xl sm:text-4xl  font-bold mb-6">
          Health <span className="text-[#b1040e]">Care</span>
        </h2>
        <p className="text-md sm:text-lg text-gray-700 leading-relaxed">
          Advancing human health through innovative research,
          <br />
          education, and compassionate care
        </p>
      </motion.div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          {
            title: "Excellent Medicine",
            desc:
              "Leading a worldwide revolution in precision health through biomedical research, education, and clinical enterprises",
            link: "/healthcare/medicine",
            img:
              "https://images.unsplash.com/photo-1581092335397-9583eb92d232",
          },
          {
            title: "Excellent Health Care",
            desc:
              "Leveraging expertise and advanced technology to deliver unparalleled care for every patient’s unique needs",
            link: "/healthcare/health-care",
            img:
              "https://images.unsplash.com/photo-1579154204601-01588f351e67",
          },
          {
            title: "Excellent Children’s Health",
            desc:
              "One of the few networks exclusively dedicated to pediatric and obstetric care",
            link: "/healthcare/children",
            img:
              "https://images.unsplash.com/photo-1581092335397-9583eb92d232",
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

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-500" />
              </div>

              {/* Content */}
              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-3 relative inline-block">
                  {item.title}
                  {/* Underline animation */}
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#b1040e] transition-all duration-500 group-hover:w-full"></span>
                </h3>

                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>

                <span className="text-sm font-semibold text-[#b1040e] inline-flex items-center gap-1">
                  Learn more
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
        className="flex justify-center mt-12"
      >
        <button
          onClick={() => navigate("/healthcare")}
          className="relative overflow-hidden px-14 py-4 text-lg font-semibold text-white bg-[#b1040e] group"
        >
          <span className="relative z-10">More about health care</span>

          {/* Gradient sweep */}
          <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-700 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
        </button>
      </motion.div>
      {/* Divider */}
      <div className="max-w-6xl mx-auto border-t border-gray-300 mt-10" />  
    </section>
  );
};

export default Healthcare;
