import React from 'react';
import { Mail, Settings, PlayCircle, Heart, LifeBuoy } from 'lucide-react';

// 🔹 Import your background image
import studentsBg from '@/assets/images/college.png';
// (image ko apne assets me rakho)

const Students = () => {
	return (
		<div className="w-full sm:px-20 min-h-screen">
			{/* ================= HERO SECTION ================= */}
			<section
				className="relative h-[100vh] flex items-center justify-center text-white"
				style={{
					backgroundImage: `url(${studentsBg})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				{/* Overlay */}
				<div className="absolute inset-0 bg-black/55" />

				{/* Content */}
				<div className="relative z-10 max-w-6xl px-6 text-center ">
					<h1 className="text-4xl md:text-5xl font-bold mb-4 sm:pt-48">Gateway for Students</h1>
					<p className="text-lg md:text-xl text-gray-200">
						Resources, offices and services that support students
					</p>

					{/* ================= QUICK LINKS ================= */}
					<div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
						<StudentCard icon={<Mail size={36} />} title="Email & Calendar" desc="Launch webmail" />

						<StudentCard icon={<Settings size={36} />} title="Axess" desc="Register, pay bills, and more" />

						<StudentCard icon={<PlayCircle size={36} />} title="Canvas" desc="Course management" />

						<StudentCard icon={<Heart size={36} />} title="Mental Health" desc="Resources for students" />

						<StudentCard
							icon={<LifeBuoy size={36} />}
							title="Services & Support"
							desc="Submit a help request"
						/>
					</div>
				</div>
			</section>

			{/* ================= GENERAL ACADEMIC RESOURCES ================= */}
			<section className="bg-[#f9f6ef] py-8">
				<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
					{/* LEFT SIDE */}
					<div className="lg:col-span-2">
						<h2 className="text-2xl font-bold text-[#8c1515] mb-8">GENERAL ACADEMIC RESOURCES</h2>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<ResourceItem
								title="excellent Bulletin"
								desc="Information on degrees, requirements, policies"
							/>

							<ResourceItem
								title="Navigate Classes"
								desc="A robust search tool to explore excellent classes"
							/>

							<ResourceItem title="Academic Calendar" desc="Key academic dates and deadlines" />

							<ResourceItem title="Student Services" desc="Student records, grades, degree progress" />

							<ResourceItem title="Libraries" desc="Collections, study spaces, course reserves" />

							<ResourceItem
								title="Learning Resources"
								desc="Tutoring, coaching, learning hub, and more"
							/>

							<ResourceItem
								title="Excellent Bookstore"
								desc="Textbooks, course materials, technology, and more"
							/>
						</div>
					</div>

					{/* RIGHT SIDE - STUDENT NEWS */}
					<div className="bg-white border-t-4 border-[#8c1515] shadow-md p-8 text-center h-fit">
						<div className="flex justify-center mb-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-10 h-10"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M19 7H5m14 0a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2m14 0V5a2 2 0 00-2-2H7a2 2 0 00-2 2v2"
								/>
							</svg>
						</div>

						<h3 className="text-xl font-bold mb-6">STUDENT NEWS</h3>

						<div className="space-y-4 text-blue-700 font-medium">
							<a href="#" className="block hover:underline">
								excellent Report
							</a>
							<hr />
							<a href="#" className="block hover:underline">
								From the President and Provost
							</a>
							<hr />
							<a href="#" className="block hover:underline">
								excellent Daily
							</a>
                            <hr />
								<a href="#" className="block hover:underline">
									Sexual Assault Support & Resources
								</a>
						</div>
					</div>
				</div>
			</section>
	<hr className="border-gray-300" />

			{/* ================= UNDERGRAD / GRADUATE & SUPPORT ================= */}
			<section className="bg-[#f9f6ef] py-8">
				<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
					{/* LEFT CONTENT */}
					<div className="lg:col-span-2 space-y-16">
						{/* ===== FOR UNDERGRADUATES ===== */}
						<div>
							<h2 className="text-2xl font-bold text-[#8c1515] mb-6">FOR UNDERGRADUATES</h2>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
								<div>
									<a href="#" className="text-blue-700 font-semibold text-lg hover:underline">
										Vice Provost for Undergraduate Education
									</a>
									<p className="text-gray-700 mt-1">Information on degrees, requirements, policies</p>
								</div>

								<div>
									<a href="#" className="text-blue-700 font-semibold text-lg hover:underline">
										Explore Majors
									</a>
									<p className="text-gray-700 mt-1">Your launchpad to explore majors and programs</p>
								</div>
							</div>
						</div>

						<hr className="border-gray-300" />

						{/* ===== FOR GRADUATE STUDENTS ===== */}
						<div>
							<h2 className="text-2xl font-bold text-[#8c1515] mb-6">FOR GRADUATE STUDENTS</h2>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
								<div>
									<a href="#" className="text-blue-700 font-semibold text-lg hover:underline">
										Vice Provost for Graduate Education
									</a>
									<p className="text-gray-700 mt-1">Information on degrees, requirements, policies</p>
								</div>

								<div>
									<a href="#" className="text-blue-700 font-semibold text-lg hover:underline">
										Graduate Life
									</a>
									<p className="text-gray-700 mt-1">
										Supporting graduate students and their families
									</p>
								</div>

								<div>
									<a href="#" className="text-blue-700 font-semibold text-lg hover:underline">
										Postdoctoral Affairs
									</a>
									<p className="text-gray-700 mt-1">Hub for all postdoctoral appointments</p>
								</div>
							</div>
						</div>
					</div>

					{/* RIGHT SIDEBAR */}
					<div className="space-y-12">
						{/* ===== SAFETY & SUPPORT ===== */}
						<div className="bg-white border-t-4 border-[#8c1515] shadow-md p-8 text-center">
							<div className="flex justify-center mb-4">🛡️</div>

							<h3 className="text-xl font-bold mb-6">SAFETY & SUPPORT</h3>

							<div className="space-y-4 text-blue-700 font-medium">
								<a href="#" className="block hover:underline">
									Public Safety
								</a>
								<hr />
								<a href="#" className="block hover:underline">
									5-SURE Safe Rides
								</a>
								
							</div>
						</div>
	<hr className="border-gray-300" />
						{/* ===== HEALTH & FITNESS ===== */}
						<div className="bg-white border-t-4 border-[#8c1515] shadow-md p-8 text-center">
							<div className="flex justify-center mb-4">🏃‍♂️</div>

							<h3 className="text-xl font-bold mb-6">HEALTH & FITNESS</h3>

							<div className="space-y-4 text-blue-700 font-medium">
								<a href="#" className="block hover:underline">
									Vaden Health Services
								</a>
								<hr />
								<a href="#" className="block hover:underline">
									Recreation & Wellness
								</a>
								{/* <hr />
								<a href="#" className="block hover:underline">
									Counseling Services
								</a> */}
							</div>
						</div>
					</div>
				</div>
			</section>
            	<hr className="border-gray-300" />
            {/* ================= STUDYING BEYOND CAMPUS ================= */}
<section className="bg-[#f9f6ef] py-10">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">

    {/* LEFT CONTENT */}
    <div className="lg:col-span-2 space-y-16">

      <div>
        <h2 className="text-2xl font-bold text-[#8c1515] mb-8">
          STUDYING BEYOND CAMPUS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div>
            <a href="#" className="text-blue-700 font-semibold text-lg hover:underline">
              Bing Overseas Studies
            </a>
            <p className="text-gray-700 mt-1">
              Excellent programs to study abroad
            </p>
          </div>

          <div>
            <a href="#" className="text-blue-700 font-semibold text-lg hover:underline">
              Excellent in Washington
            </a>
            <p className="text-gray-700 mt-1">
              Study and learn in the nation’s capital
            </p>
          </div>

          <div>
            <a href="#" className="text-blue-700 font-semibold text-lg hover:underline">
              Hopkins Marine Station
            </a>
            <p className="text-gray-700 mt-1">
              Marine science programs in Monterey Bay
            </p>
          </div>

          <div>
            <a href="#" className="text-blue-700 font-semibold text-lg hover:underline">
              Excellent at Peking University
            </a>
            <p className="text-gray-700 mt-1">
              Excellent research and education center in Beijing
            </p>
          </div>

          <div>
            <a href="#" className="text-blue-700 font-semibold text-lg hover:underline">
              Bechtel International Center
            </a>
            <p className="text-gray-700 mt-1">
              Hub for international students, programs, and events
            </p>
          </div>

          <div>
            <a href="#" className="text-blue-700 font-semibold text-lg hover:underline">
              Off-Campus Learning Opportunities
            </a>
            <p className="text-gray-700 mt-1">
              Search off-campus research and travel opportunities
            </p>
          </div>

        </div>
      </div>

    



    </div>

    {/* RIGHT SIDEBAR */}
    <div className="space-y-12">

      {/* ===== HEALTH & FITNESS ===== */}
      <div className="bg-white border-t-4 border-[#8c1515] shadow-md p-8 text-center">
        <div className="flex justify-center mb-4">
          🩺
        </div>

        <h3 className="text-xl font-bold mb-6">HEALTH & FITNESS</h3>

        <div className="space-y-4 text-blue-700 font-medium">
          <a href="#" className="block hover:underline">Vaden Health Center</a>
          <hr />
          <a href="#" className="block hover:underline">Bridge Peer Counseling</a>
          <hr />
          <a href="#" className="block hover:underline">Recreation & Wellness</a>
        </div>
      </div>
      	

     

    </div>
  </div>
</section>

<hr className="border-gray-300" />
{/* ================= STUDENT LIFE ================= */}
<section className="bg-[#f9f6ef] py-10">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">

    {/* LEFT CONTENT */}
    <div className="lg:col-span-2">
      <h2 className="text-2xl font-bold text-[#8c1515] mb-10">
        STUDENT LIFE
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        <div>
          <a href="#" className="text-blue-700 font-semibold text-lg hover:underline">
            Student Affairs
          </a>
          <p className="text-gray-700 mt-1">
            Life and experiences outside the classroom
          </p>
        </div>

        <div>
          <a href="#" className="text-blue-700 font-semibold text-lg hover:underline">
            ASSU
          </a>
          <p className="text-gray-700 mt-1">
            Excellent’s student government association
          </p>
        </div>

        <div>
          <a href="#" className="text-blue-700 font-semibold text-lg hover:underline">
            Religious & Spiritual Life
          </a>
          <p className="text-gray-700 mt-1">
            Nurturing spiritual and religious life on campus
          </p>
        </div>

        <div>
          <a href="#" className="text-blue-700 font-semibold text-lg hover:underline">
            Career Education
          </a>
          <p className="text-gray-700 mt-1">
            Explore career paths and opportunities
          </p>
        </div>

        <div>
          <a href="#" className="text-blue-700 font-semibold text-lg hover:underline">
            Office of Accessible Education
          </a>
          <p className="text-gray-700 mt-1">
            Supporting Excellent students with disabilities
          </p>
        </div>

        <div>
          <a href="#" className="text-blue-700 font-semibold text-lg hover:underline">
            Cardinal Service
          </a>
          <p className="text-gray-700 mt-1">
            Public service opportunities and programs
          </p>
        </div>

        <div>
          <a href="#" className="text-blue-700 font-semibold text-lg hover:underline">
            Mental Health Resources
          </a>
          <p className="text-gray-700 mt-1">
            Services & programs to support student well-being
          </p>
        </div>

      </div>
    </div>

    {/* RIGHT SIDEBAR */}
    <div className="bg-white border-t-4 border-[#8c1515] shadow-md p-8 text-center h-fit">

      <div className="flex justify-center mb-4">
        👥
      </div>

      <h3 className="text-xl font-bold mb-6">
        COMMUNITY CENTERS
      </h3>

      <div className="space-y-4 text-blue-700 font-medium">
        <a href="#" className="block hover:underline">
          Asian American Activities Center
        </a>
        <hr />
        <a href="#" className="block hover:underline">
          Black Community Services Center
        </a>
        <hr />
        <a href="#" className="block hover:underline">
          El Centro Chicano y Latino
        </a>
        <hr />
        <a href="#" className="block hover:underline">
          Queer Student Resources
        </a>
        <hr />
        <a href="#" className="block hover:underline">
          The Markaz: Resource Center
        </a>
        <hr />
        <a href="#" className="block hover:underline">
          Native American Cultural Center
        </a>
      </div>

    </div>

  </div>
</section>


		</div>
	);
};

export default Students;

/* ================= CARD COMPONENT ================= */

const StudentCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => {
	return (
		<div className="flex flex-col items-center text-center text-white group cursor-pointer">
			<div className="mb-3 group-hover:scale-110 transition-transform duration-300">{icon}</div>
			<h3 className="font-semibold text-lg underline underline-offset-4">{title}</h3>
			<p className="text-sm text-gray-200 mt-1">{desc}</p>
		</div>
	);
};

/* ================= RESOURCE ITEM ================= */

const ResourceItem = ({ title, desc }: { title: string; desc: string }) => {
	return (
		<div>
			<a href="#" className="text-blue-700 font-semibold text-lg hover:underline">
				{title}
			</a>
			<p className="text-gray-700 mt-1">{desc}</p>
		</div>
	);
};
