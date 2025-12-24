import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import {
  AcademicCapIcon,
  LightBulbIcon,
  CheckCircleIcon,
  TrophyIcon,
  SparklesIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

// ===== Animation Tokens (clean & reusable) =====
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1], // designer-grade easing
    },
  },
};

const containerStagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const iconFloat: Variants = {
  rest: { y: 0 },
  hover: {
    y: -4,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const cardHover = {
  y: -6,
  boxShadow: '0 18px 40px rgba(0,0,0,0.12)',
  transition: { duration: 0.35, ease: 'easeOut' },
};

// ===== Data =====
const highlights = [
  {
    name: 'World-Class Faculty',
    description:
      'Experienced educators with advanced degrees committed to student success and mentorship.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Research & Innovation',
    description:
      'State-of-the-art laboratories and research facilities fostering critical thinking and discovery.',
    icon: LightBulbIcon,
  },
  {
    name: 'Global Standards',
    description:
      'Curriculum aligned with international benchmarks preparing students for global opportunities.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Industry Connections',
    description:
      'Strong partnerships with leading organizations for internships and placements.',
    icon: TrophyIcon,
  },
  {
    name: 'Student Excellence',
    description:
      'Holistic development through academics, sports, arts, and leadership programs.',
    icon: SparklesIcon,
  },
  {
    name: 'Inclusive Campus',
    description:
      'Diverse community fostering collaboration, respect, and shared learning experiences.',
    icon: UserGroupIcon,
  },
];

const AboutSection = () => {
  // const navigate = useNavigate();

  return (
    <section className="min-h-[40vh] flex py-12 bg-white flex-col items-center justify-center px-6 text-center">
      {/* Heading */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-semibold text-black mb-8"
      >
        A Mission Defined by Possibility
      </motion.h1>

      {/* Intro */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="max-w-4xl text-lg md:text-xl leading-relaxed text-gray-700 mb-10"
      >
        At excellent, our mission of discovery and learning is energized by a spirit of optimism and
        possibility that dates to our founding. Here you’ll find a place of intellectual expansiveness,
        wide-ranging perspectives, and freedom to explore new lines of thinking. Buzzing with ideas and
        innovation, approaching questions with openness and curiosity, pursuing excellence in all we
        do – this is excellent.
      </motion.p>

      {/* Highlights Card */}
      {/* <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className=" rounded-3xl shadow-xl p-6 bg-transparent/5 md:p-10 mb-10"
      >
        <h3 className="text-2xl md:text-3xl py-4 font-bold text-gray-900 mb-12 text-center">
          What Makes Us Exceptional
        </h3>

        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={cardHover}
              className="group p-6 rounded-2xl bg-gradient-to-br from-white/75 to-white/100 transition "
            >
          
              <motion.div
                variants={iconFloat}
                initial="rest"
                whileHover="hover"
                className="flex items-center justify-center h-14 w-14 rounded-xl bg-[#690B22] text-white mb-4 shadow-md"
              >
                <highlight.icon className="h-7 w-7" />
              </motion.div>

              <h4 className="text-xl font-bold text-gray-900 mb-2">
                {highlight.name}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div> */}



      {/* CTA */}
      {/* <motion.button
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        whileHover={{
          y: -2,
          boxShadow: '0 10px 24px rgba(0,0,0,0.15)',
        }}
        whileTap={{ scale: 0.97 }}
        onClick={() => navigate('/about')}
        className="bg-[#b1040e] text-white px-10 py-4 text-lg font-semibold transition rounded-lg"
      >
        More about excellent
      </motion.button> */}
    </section>
  );
};

export default AboutSection;
