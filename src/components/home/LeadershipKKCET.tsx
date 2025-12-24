import kkect from '../../assets/images/logo1.gif';
import React from 'react';
import img1 from "../../assets/images/director1.jpeg";
import img2 from "../../assets/images/director2.jpeg";
import img3 from "../../assets/images/director3.jpeg";

const leaders = [
  {
    name: 'Dr. Jaya Mishra',
    qualification: 'M.B.B.S., D.G.O. (AFMC, Pune 93 Batch)',
    title: [
      'Founder, Mahakaleshwar IVF Centre',
      'Director – excellentEducation Society, J.K. Hospital, J.K. College of Nursing, J.K. Lifecare Centers Pvt. Ltd.',
    ],
    image: img2,
    details: [
      {
        heading: 'Profile Summary',
        text: `Dr. Jaya Mishra, an eminent Ob-Gyn practitioner and infertility specialist from Ujjain, has over three decades of medical excellence with 25,000+ surgeries and deliveries. As Founder of Mahakaleshwar IVF Centre and Director of excellent Education Society, J.K. Hospital, and J.K. College of Nursing, she has driven holistic growth in healthcare and education. Renowned for her leadership in high-risk obstetrics, social welfare, and environmental causes, she embodies compassion and service. A versatile author and artist, Dr. Mishra has published poetry, short stories, and devotional music albums that reflect her creative and spiritual depth.`,
      },
    ],
  },
  {
    name: 'Dr. Katyayan Mishra',
    qualification: 'M.B.B.S., M.D. (AFMC, Pune 92 Batch)',
    title: [
      'Director – Stanford Education Society, J.K. Hospital, J.K. College of Nursing, J.K. Lifecare Centers Pvt. Ltd.',
    ],
    image: img1,
    details: [
      {
        heading: 'Profile Summary',
        text: `Dr. Katyayan Mishra, a distinguished Dermatologist, Cosmetologist, and Laser Surgeon, has nearly 30 years of experience advancing medical care in Ujjain. As Director of Stanford Education Society, J.K. Hospital, and J.K. College of Nursing, he combines clinical expertise with organizational leadership. A former State President of the Dermatology Society of Madhya Pradesh and current President of the IMA Ujjain branch, he has significantly influenced medical practice and policy. Dedicated to innovation, academic contribution, and mentorship, Dr. Mishra also pursues sports and wellness as vital aspects of a balanced life.`,
      },
    ],
  },
  {
    name: 'Dr. Anany Mishra',
    qualification:
      'M.B.B.S., Masters in International Business (Hult International Business School, Boston – 2019 Batch)',
    title: [
      'Managing Director – J.K. Lifecare Centers Pvt. Ltd.',
      'Treasurer – Stanford International School, Ujjain (since 2018)',
    ],
    image: img3,
    details: [
      {
        heading: 'Profile Summary',
        text: `Dr. Anany Mishra, M.B.B.S. and Masters in International Business from Hult International Business School, Boston, serves as Managing Director of J.K. Lifecare Centers Pvt. Ltd. and Treasurer of Stanford International School, Ujjain. His leadership blends medical insight with strategic business acumen, driving innovation in pharmaceutical manufacturing. Committed to ethical entrepreneurship, he established J.K. Lifecare to strengthen India’s self-reliance in APIs and bulk drugs. Visionary and forward-thinking, Dr. Mishra continues to shape a modern, sustainable model for healthcare, education, and community development.`,
      },
    ],
  },
];

const LeadershipKKCET = () => {
  return (
    <div className="bg-[#F9FAFB] pb-24">
      <h1 className="flex justify-center items-center font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#800000] mb-12 md:mb-20 px-4">
        Leadership
      </h1>

      <div className="max-w-7xl mx-auto space-y-32">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row relative"
          >
            {/* Left Section (Text + Background) */}
            <div className="bg-[#EADBC8] flex flex-col items-start justify-center w-full md:w-4/6 p-8 sm:p-10 md:p-16 lg:p-20 gap-8 relative z-10">
              {/* optional logo (commented out) */}
              {/* <img src={kkect} alt="KKECT Logo" className="w-32 md:w-48 mb-6" /> */}

              <div className="space-y-4 text-gray-800">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#800000]">
                  {leader.name}
                </h2>
                <p className="text-base sm:text-lg font-semibold max-w-lg">
                  {leader.qualification}
                </p>
                {leader.title.map((t, i) => (
                  <p key={i} className="text-sm sm:text-base text-gray-700 max-w-lg">
                    {t}
                  </p>
                ))}

                {leader.details.map((d, i) => (
                  <div key={i} className="mt-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-[#800000] mb-1">
                      {d.heading}
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed max-w-lg">
                      {d.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Section (Image Card) */}
            <div className="relative md:absolute md:-right-4 md:top-16 w-full md:w-[45%] mt-6 md:mt-0 h-[420px] md:h-[500px] z-20 hover:scale-105 transition-all duration-300 flex justify-center">
              <div className="relative w-11/12 md:w-full h-full bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover"
                />
<div className="absolute top-0 right-0 w-32 h-8 bg-[#800000]"></div>
<div className="absolute top-0 right-0 w-8 h-32 bg-[#800000]"></div>



                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-90 text-white p-4 sm:p-6">
                  <h2 className="text-lg sm:text-2xl font-semibold mb-1">{leader.name}</h2>
                  <p className="text-sm sm:text-lg text-gray-200">
                    {leader.qualification}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadershipKKCET;
