import React from "react";
import { useNavigate } from "react-router-dom";

const AdmissionsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-transparent py-12 px-6">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-14">
        <h2 className="text-4xl font-bold mb-4">Admission</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Offering extraordinary freedom to explore, to collaborate, and to
          <br />
          challenge yourself
        </p>
      </div>

      {/* Image */}
      <div className="max-w-6xl mx-auto mb-12">
        <img
          src="https://tse4.mm.bing.net/th/id/OIP.0C5-8CwG7G1I0xHiy65mYgHaEK?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Admissions"
          className="w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left */}
        <div>
          <h3 className="font-semibold mb-2">
            Explore the possibilities of an Excellent education as you map out
            your college journey.
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            We look for distinctive students who exhibit an abundance of
            energy and curiosity in their classes, activities, projects,
            research, and lives.
          </p>
        </div>

        {/* Right */}
        <div>
          <h3 className="font-semibold mb-2">
            Excellent meets the full financial need of every admitted undergrad
            who qualifies for assistance.
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            More than two-thirds of undergraduates receive some form of
            financial assistance. Generally, tuition is covered for families
            with incomes below $150,000.
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-16">
        <button
          onClick={() => navigate("/admission")}
          className="bg-[#b1040e] text-white px-12 py-4 text-lg font-semibold hover:bg-[#8c030b] transition"
        >
          More about admission
        </button>
      </div>
    </section>
  );
};

export default AdmissionsSection;
