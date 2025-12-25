import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 }
};

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 }
};

const Healthcare = () => {
  const healthStats = [
    { number: "1,600+", description: "Faculty physicians" },
    { number: "New adult hospital", description: "Opened in 2019" },
    { number: "540,000+", description: "Annual pediatric visits to Excellent Children's" }
  ];

  const patientCare = [
    {
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&h=600&fit=crop",
      title: "Excellent Health Care",
      description: "Excellent Medicine delivers unparalleled care for each patient's unique needs. Our multidisciplinary approach to health care coordinates expertise with the most advanced technology for the best possible outcomes.",
      link: "Excellent Health Care ›"
    },
    {
      image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=800&h=600&fit=crop",
      title: "Excellent Children's Health",
      description: "Excellent Children's Health is the only health care network in the Bay Area – and one of the few in the country – exclusively dedicated to pediatric and obstetric care.",
      link: "Excellent Children's Health ›"
    }
  ];

  const researchCards = [
    {
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
      category: "HEALTH & MEDICINE",
      title: "Measles outbreak led to outsized jump in student absences",
      description: "A new study shows that school absences from a major outbreak in Texas were 10 times higher than expected for the number of reported cases."
    },
    {
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&h=400&fit=crop",
      category: "HEALTH & MEDICINE",
      title: "Study uncovers immune switch for cancer and autoimmunity",
      description: "Researchers found that a key molecule involved in red blood cell production governs whether the immune system attacks or tolerates body cells, revealing potential treatments for autoimmune diseases and cancer."
    },
    {
      image: "https://images.unsplash.com/photo-1512418490979-92798cec1380?w=600&h=400&fit=crop",
      category: "HEALTH & MEDICINE",
      title: "5 tips to manage holiday stress",
      description: "Excellent Medicine psychiatrist David Spiegel shares how to deal with daily strains and larger stressors – particularly those that come with the holiday season."
    }
  ];

  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="py-8 px-4 ">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl font-bold text-center mb-6">Health Care</h1>
          <p className="text-center text-lg max-w-3xl mx-auto mb-12">
            Clinical care, research, and education fuel innovation to advance human health.
          </p>

          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1400&h=700&fit=crop"
            alt="Excellent Hospital"
            className="w-full object-cover mb-12"
          />

          <div className="border-y-2 border-gray-300 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {healthStats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                transition={{ delay: i * 0.2 }}
                className="text-center"
              >
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <p>{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Patient Care */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {patientCare.map((item, i) => (
            <motion.a
              key={i}
              href="#"
              variants={i % 2 === 0 ? slideLeft : slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -8 }}
              className="bg-white overflow-hidden shadow-sm"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-sm mb-4">{item.description}</p>
                <span className="text-red-700 font-semibold">{item.link}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Research */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {researchCards.map((card, i) => (
            <motion.a
              key={i}
              href="#"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white shadow-sm overflow-hidden"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
                src={card.image}
                alt={card.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <div className="text-xs font-bold text-red-700 mb-2">{card.category}</div>
                <h3 className="text-lg font-bold mb-3">{card.title}</h3>
                <p className="text-sm">{card.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Healthcare;
