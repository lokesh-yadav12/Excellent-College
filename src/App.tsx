import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { lazy, Suspense, useState } from 'react';
import MainLayout from './components/layout/MainLayout';
import DPSLoading from './components/ui/Loading';
// import Graduate from './pages/Academics/Graduate';


import News from './pages/down-navbar/News';
import Allinfo from './pages/Allinfo';

// 🧭 Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));
const Healthcare = lazy(() => import('./pages/down-navbar/Healthcare'));
const Location = lazy(() => import('./pages/Location'));
const AboutUs = lazy(() => import('./pages/down-navbar/About'));
const Academics = lazy(() => import('./pages/down-navbar/Academics'));
 const Admission = lazy(() => import('./pages/down-navbar/Admission'));
 const Event = lazy(() => import('./pages/down-navbar/Event'));
// const ContactUs = lazy(() => import('./pages/ContactUs'));
const Administration = lazy(() => import('./pages/Administration'));
const Research = lazy(() => import('./pages/down-navbar/Research'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Alumni = lazy(() => import('./pages/up-navbar/Alumni'));
const Families = lazy(() => import('./pages/up-navbar/Families'));
const Visitors = lazy(() => import('./pages/up-navbar/Visitors'));
const Faculty = lazy(() => import('./pages/up-navbar/Faculty'));
const Campuslife = lazy(() => import('./pages/down-navbar/Campuslife'));
const Athletics = lazy(() => import('./pages/down-navbar/Athletics'));
const Students = lazy(() => import('./pages/up-navbar/Students'));

function App() {
	const [isInitialLoading, setIsInitialLoading] = useState(true);

	const handleInitialLoadingComplete = () => {
		setIsInitialLoading(false);
	};

	// 🌀 Initial loader before full render
	if (isInitialLoading) {
		return (
			<div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100 overflow-hidden">
				<div className="scale-[2]">
					<DPSLoading
						duration={2000}
						onLoadingComplete={handleInitialLoadingComplete}
					/>
				</div>
			</div>
		);
	}

	return (
		<Suspense
			fallback={
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100 overflow-hidden">
					<div className="scale-[2]">
						<DPSLoading />
					</div>
				</div>
			}
		>
			<Routes>
				{/* 🏠 Main Layout Wrapper */}
				<Route
					path="/"
					element={
						<MainLayout>
							<Outlet />
						</MainLayout>
					}
				>
					{/* ✅ Main Pages */}
					<Route index element={<Home />} />
					<Route path="students" element={<Students />} />
					<Route path="faculty" element={<Faculty />} />
					<Route path="visitors" element={<Visitors />} />
					<Route path="families" element={<Families />} />
					<Route path="healthcare" element={<Healthcare />} />
					<Route path="campuslife" element={<Campuslife />} />
					<Route path="athletics" element={<Athletics />} />
					<Route path="admission" element={<Admission />} />
					<Route path="events" element={<Event />} />	
					<Route path="news" element={<News />} />
					<Route path="alumni" element={<Alumni />} />
					<Route path="about" element={<AboutUs />} />

					<Route path="/all-info/:type" element={<Allinfo />} />

					{/* <Route path="legacy" element={<Legacy />} /> */}
					{/* <Route path="graduate" element={<Graduate />} /> */}
					<Route path="location" element={<Location />} />
					<Route path="academics" element={<Academics />} />
					{/* <Route path="admissions" element={<Admissions />} /> */}
					<Route path="administration" element={<Administration />} />
					<Route path="research" element={<Research />} />
					{/* <Route path="facilities" element={<Facilities />} /> */}
					<Route path="CampusLife" element={<Campuslife />} />
					{/* <Route path="contact" element={<ContactUs />} /> */}

					{/* 🚫 Catch-all for invalid routes */}
					<Route path="*" element={<Navigate to="/404" replace />} />
				</Route>

				{/* 🧱 Standalone 404 page */}
				<Route
					path="/404"
					element={
						<MainLayout>
							<NotFound />
						</MainLayout>
					}
				/>
			</Routes>
		</Suspense>
	);
}

export default App;
