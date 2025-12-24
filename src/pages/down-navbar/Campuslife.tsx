import React from 'react'
import { motion } from 'framer-motion'
import hostelimage from '../../assets/images/hostel.png';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const slideLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0 }
};

const slideRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0 }
};

const Campuslife = () => {
  return (
    <div className="sm:pt-28 pt-32 sm:px-8 px-4">

      {/* Header */}
      <motion.section
        className="p-10 text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-2xl font-bold mb-4">Campus Life</h1>
        <p className="text-2xl">
          Our thriving residential campus is home to a community of creative and accomplished people from around the world.
        </p>
      </motion.section>

      {/* Main Image */}
      <motion.section
        className="p-8"
        variants={slideLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <a href="#">
          <motion.img
            src={hostelimage}
            alt="Campus Life"
            className="w-full rounded"
            whileHover={{ scale: 1.05 }}
          />
        </a>
      </motion.section>

      {/* Stats */}
      <section className="p-10 grid grid-cols-1 md:grid-cols-3 text-center gap-6">
        {[ "600+", "81", "14,000+" ].map((num, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <h2 className="text-2xl font-bold">{num}</h2>
            <p className="text-2xl">
              {i === 0 && "Organized student groups"}
              {i === 1 && "Undergraduate residences"}
              {i === 2 && "Students living on campus"}
            </p>
          </motion.div>
        ))}
      </section>

      {/* Student Life */}
      <section className="py-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Student Life</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[0,1,2].map((i) => (
            <motion.div
              key={i}
              variants={i % 2 === 0 ? slideLeft : slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <motion.a href="#" whileHover={{ scale: 1.05 }}>
                <img src={hostelimage} alt="Student Life" />
              </motion.a>

              {i === 0 && (
                <>
                  <h3 className="text-lg font-bold mt-4">Student Affairs</h3>
                  <p>Supporting leadership, residential life, career exploration and community engagement.</p>
                  <a className="text-red-700 text-lg">Student Affairs →</a>
                </>
              )}

              {i === 1 && (
                <>
                  <h3 className="text-lg font-bold mt-4">Housing & Dining</h3>
                  <p>Undergraduate and graduate housing with healthy, sustainable dining options.</p>
                  <a className="text-red-700 text-lg">Residential & Dining Enterprises →</a>
                </>
              )}

              {i === 2 && (
                <>
                  <h3 className="text-xl font-bold mt-4">Community Engagement</h3>
                  <p>Programs supporting service, inclusion, and spiritual life.</p>
                  <a className="text-red-700 block">Haas Center for Public Service →</a>
                  <a className="text-red-700 block">Graduate Life Office →</a>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Arts & Culture */}
      <section className="p-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Arts & Culture</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["The Arts", "Museums", "Performing Arts"].map((title, i) => (
            <motion.div
              key={i}
              variants={i % 2 === 0 ? slideLeft : slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.a href="#" whileHover={{ scale: 1.05 }}>
                <img src={hostelimage} alt={title} />
              </motion.a>
              <h3 className="text-xl font-bold mt-4">{title}</h3>
              <p className="text-md">Creative and cultural experiences on campus.</p>
              <a className="text-red-700 text-lg">{title} →</a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Athletics */}
      <section className="p-10 bg-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Athletics, Recreation & Wellness
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Recreation & Wellness", "Cardinal Athletics", "BeWell"].map((item, i) => (
            <motion.div
              key={i}
              variants={i % 2 === 0 ? slideLeft : slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.a href="#" whileHover={{ scale: 1.05 }}>
                <img src={hostelimage} alt={item} />
              </motion.a>
              <h3 className="text-xl font-semibold mt-4">{item}</h3>
              <p className="text-md">Programs supporting student wellbeing.</p>
              <a className="text-red-700 text-lg">{item} →</a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Getting Around */}
      <section className="p-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Getting Around</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-md mb-4">
              Biking, free shuttles, and public safety services operate across campus.
            </p>
            <a className="text-red-700 block">Campus Map →</a>
            <a className="text-red-700 block">Transportation →</a>
            <a className="text-red-700 block">Public Safety →</a>
          </motion.div>

          <motion.a
            href="#"
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={hostelimage} alt="Getting Around" />
          </motion.a>
        </div>
      </section>

    </div>
  )
}

export default Campuslife
