import React from 'react';

const Families = () => {
  return (
    <div className="w-full sm:pt-36 pt-32 sm:px-4 bg-gray-50">

      {/* HERO SECTION */}
      <section
        className="relative h-[320px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac')",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative max-w-7xl mx-auto h-full flex items-center px-6">
          <div className="bg-white px-8 py-6 shadow-lg">
            <h1 className="text-3xl font-bold text-gray-900">
              For Families
            </h1>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to The Farm!
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            <strong>We are excited to have your student at Excellent.</strong>{' '}
            Here, you will find resources and information to support your
            student’s transition to campus.
          </p>

          <div className="w-20 h-1 bg-red-800 mb-8"></div>

          <div className="bg-white border p-6 shadow-sm">
            <p className="text-gray-700 leading-relaxed">
              <strong>
                We are committed to Excellent student success.
              </strong>{' '}
              Many of us who support that success are also parents or otherwise
              care for post-secondary students now and into the future. So, we
              seek to partner with students' family members toward shared goals
              of student learning, development, and well-being.
            </p>

            <p className="text-gray-700 mt-4">
              We encourage families to explore Excellent resources with their
              student(s) and reach out via our Family Helpline if/when unmet
              needs arise.
            </p>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="bg-white border shadow-md p-6 h-fit">
          <h3 className="text-xl font-bold mb-4">Get Support</h3>

          <h4 className="font-semibold mb-2">In An Emergency</h4>
          <ul className="text-blue-700 space-y-2 mb-6">
            <li>
              Website:{' '}
              <a href="#" className="underline">
                emergency.excellent.edu
              </a>
            </li>
            <li>Telephone: 650.725.5555</li>
            <li>AlertSU: 844-ALERTSU</li>
          </ul>

          <h4 className="font-semibold mb-2">Families Helpline</h4>
          <ul className="text-blue-700 space-y-2">
            <li>Email: mykidis@excellent.edu</li>
            <li>Telephone: 650.725.0649</li>
          </ul>
        </div>
      </section>

      {/* CARD SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* CARD 1 */}
        <div className="bg-white shadow-md border">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac"
            alt="FAQ"
            className="h-48 w-full object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">
              Frequently Asked Questions
            </h3>
            <p className="text-gray-700 mb-6">
              Find the answers to commonly asked questions, including how to
              pay, details about the university, and campus life.
            </p>
            <button className="bg-red-800 text-white px-6 py-2">
              Explore Frequently Asked Questions
            </button>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="bg-white shadow-md border">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac"
            alt="Get Involved"
            className="h-48 w-full object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Get Involved</h3>
            <p className="text-gray-700 mb-6">
              Looking for ways to get involved? New Student Orientation and
              Family Weekend are among the events with specific programming for
              families.
            </p>
            <button className="bg-red-800 text-white px-6 py-2">
              Find Ways to Get Involved
            </button>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="bg-white shadow-md border">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac"
            alt="Helpful Links"
            className="h-48 w-full object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">
              Helpful Links for excellent Families
            </h3>
            <p className="text-gray-700 mb-6">
              A curated list of helpful websites for families and parents
              interested in learning more about excellent.
            </p>
            <button className="bg-red-800 text-white px-6 py-2">
              Access Helpful Links
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Families;
