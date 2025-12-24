import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import { Variants } from "framer-motion";

const HeroSection = () => {
    const [showOverlay, setShowOverlay] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => setShowOverlay(false), 10000);
        return () => clearTimeout(timer);
    }, []);

   const textVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
  exit: {
    opacity: 0,
    y: -40,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};


    return (
        <div
            className="hero-section relative w-full h-screen sm:h-[100vh] overflow-hidden flex items-center justify-center"
            style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2048)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat',
                paddingTop: 'env(safe-area-inset-top)',
                paddingBottom: 'env(safe-area-inset-bottom)',
            }}
        >
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/50 z-10" />

            {/* Additional gradient overlays for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40 z-10" />

            {/* Animated Text Overlay */}
            <AnimatePresence>
                {showOverlay && (
                    <motion.div
                        className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20 px-4 sm:px-6"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <motion.h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
                            Excellence in Education
                        </motion.h2>

                        <motion.p
                            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-[90%] sm:max-w-[70%] font-light"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            Nurturing young minds with quality education since 1990
                        </motion.p>

                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                             onClick={() => navigate("/about")}
                            className="px-8 py-3 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 shadow-lg"
                        >
                            Explore More
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Scroll Indicator - appears after overlay fades */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: showOverlay ? 0 : 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-1.5 h-1.5 bg-white rounded-full"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default HeroSection;