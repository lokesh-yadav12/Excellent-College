import React, { useEffect, useState } from 'react';
import dpslogo from '../../assets/images/college.png';

interface DPSLoadingProps {
  duration?: number;
  onLoadingComplete?: () => void;
}

const DPSLoading: React.FC<DPSLoadingProps> = ({
  duration = 3000,
  onLoadingComplete,
}) => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDone(true);
      setTimeout(() => onLoadingComplete?.(), 600);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onLoadingComplete]);

  return (
    <div
      className={`w-full min-h-screen px-4 flex items-center justify-center transition-opacity duration-700 ${
        done ? 'opacity-90' : 'opacity-100'
      }`}
    >
      {/* ===== FULL PAGE CONTENT ===== */}
      <div className="flex flex-col items-center justify-center text-center space-y-8">
        
        {/* ===== LOGO + RINGS ===== */}
        <div className="relative flex items-center justify-center">
          
          {/* Soft pulse */}
          <div
            className="absolute w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(105,11,34,0.18), transparent 70%)',
              animation: 'pulseSoft 3s ease-in-out infinite',
            }}
          />

          {/* Rotating ring */}
          <div
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full p-[3px]"
            style={{
              background:
                'conic-gradient(from 0deg, transparent 0%, #690B22 50%, transparent 100%)',
              animation: 'spinSlow 4s linear infinite',
            }}
          >
            <div className="w-full h-full bg-white rounded-full shadow-lg" />
          </div>

          {/* Logo */}
          <div
            className="absolute w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-xl"
            style={{
              animation: 'floatLogo 2.8s ease-in-out infinite',
              boxShadow: '0 12px 28px rgba(105,11,34,0.3)',
            }}
          >
            <img
              src={dpslogo}
              alt="University Logo"
              className="w-full h-full object-contain p-2"
            />
          </div>
        </div>

        {/* ===== TEXT ===== */}
        <div className="space-y-2 px-1 text-center max-w-xs sm:max-w-md">
          <h1
            className="text-xs sm:text-xl md:text-2xl font-bold tracking-[0.2em] break-words"
            style={{
              color: '#690B22',
              animation: 'fadeUp 1.2s ease forwards',
            }}
          >
            EXCELLENCE <br/>UNIVERSITY
          </h1>

          <p
            className="text-[11px] sm:text-sm text-gray-600 tracking-wide"
            style={{ animation: 'fadeUp 1.6s ease forwards' }}
          >
            Inspiring Knowledge.<br/> Empowering Futures.
          </p>
        </div>

        {/* ===== LOADING DOTS ===== */}
        <div className="flex space-x-2 pt-2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-2 h-2 rounded-full bg-[#690B22]"
              style={{
                animation: `dotBounce 1.4s ease-in-out ${i * 0.15}s infinite`,
                opacity: 0.6,
              }}
            />
          ))}
        </div>
      </div>

      {/* ===== ANIMATIONS ===== */}
      <style>
        {`
          @keyframes spinSlow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes pulseSoft {
            0%, 100% { transform: scale(1); opacity: 0.15; }
            50% { transform: scale(1.18); opacity: 0.22; }
          }

          @keyframes floatLogo {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }

          @keyframes dotBounce {
            0%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-6px); }
          }

          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default DPSLoading;
