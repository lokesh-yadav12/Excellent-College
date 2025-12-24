import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] // ✅ correct easing
    }
  })
};


const CampusLife = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-12 px-2 sm:px-6 overflow-hidden">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto mb-10"
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl sm:text-4xl font-bold mb-6"
        >
          Campus <span className="text-red-700">Life</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          custom={1}
          className="text-md sm:text-lg text-gray-700 leading-relaxed"
        >
          Building a vibrant community of creative and accomplished
          people from around the world
        </motion.p>
      </motion.div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Card */}
        {[
          {
            title: "Student Life",
            img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
            desc:
              "A residential campus with diverse housing, exceptional dining, and over 600 student organizations",
            link: "Student Affairs →",
            to: "/campus-life/student-life"
          },
          {
            title: "Constructive Dialogue",
            img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
            desc:
              "Uplifting academic freedom, free speech, curiosity, inclusive exchange of ideas, and civic engagement",
            link: "ePluribus →",
            to: "/campus-life/constructive-dialogue"
          },
          {
            title: "Recreation & Wellness",
            img: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d",
            desc:
              "State-of-the-art facilities and fitness programs to encourage movement and play",
            link: "Recreation & Wellness →",
            to: "/campus-life/recreation-wellness"
          }
        ].map((card, i) => (
          <motion.div
            key={card.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
          >
            <Link
              to={card.to}
              className="group block transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-md">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-72 object-cover transform transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-3">
                  {card.title}
                </h3>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  {card.desc}
                </p>

                {/* Animated underline */}
                <span className="relative inline-block text-red-700 font-medium">
                  {card.link}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-700 transition-all duration-300 group-hover:w-full" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => navigate("/campus-life")}
          className="relative overflow-hidden bg-[#b1040e] text-white px-14 py-4 text-lg font-semibold group"
        >
          {/* Gradient sweep */}
          <span className="absolute inset-0 bg-gradient-to-r from-[#b1040e] via-orange-500 to-[#b1040e] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

          <span className="relative z-10">
            More about campus life
          </span>
        </button>
      </div>
      {/* Divider */}
      <div className="max-w-6xl mx-auto border-t border-gray-300 mt-10" />  
    </section>
  );
};

export default CampusLife;
