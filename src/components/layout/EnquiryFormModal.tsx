import React from 'react';
import { X } from 'lucide-react';

interface EnquiryFormModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const EnquiryFormModal: React.FC<EnquiryFormModalProps> = ({ isOpen, onClose }) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4">
			<div className="bg-white rounded-2xl shadow-lg w-full max-w-2xl relative p-4 sm:p-6 overflow-y-auto max-h-[90vh]">
				{/* Close Button */}
				<button
					onClick={onClose}
					className="absolute top-2 right-2 sm:top-3 sm:right-3 text-gray-600 hover:text-black z-10"
				>
					<X size={20} className="sm:w-6 sm:h-6" />
				</button>

				<h2 className="text-xl sm:text-2xl font-semibold text-center text-[#690B22] mb-4 pr-8">ENQUIRE FORM</h2>

				<form className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
					{/* <div>
						<label className="block text-xs sm:text-sm font-medium text-gray-700">Choose Academics *</label>
						<select className="w-full border rounded-lg p-2 mt-1 text-sm">
							<option>CBSE</option>
							<option>ICSE</option>
							<option>State Board</option>
						</select>
					</div> */}

					{/* <div>
						<label className="block text-xs sm:text-sm font-medium text-gray-700">
							Choose Academic Year *
						</label>
						<select className="w-full border rounded-lg p-2 mt-1 text-sm">
							<option>Select Academic Year</option>
							<option>2024–2025</option>
							<option>2025–2026</option>
						</select>
					</div> */}

					<div>
						<label className="block text-xs sm:text-sm font-medium text-gray-700">Student Name *</label>
						<input
							type="text"
							placeholder="Enter Student's Full Name"
							className="w-full border rounded-lg p-2 mt-1 text-sm"
							required

						/>
					</div>

					<div>
						<label className="block text-xs sm:text-sm font-medium text-gray-700">Date of Birth *</label>
						<input type="date" className="w-full border rounded-lg p-2 mt-1 text-sm" required />
					</div>

					{/* <div>
						<label className="block text-xs sm:text-sm font-medium text-gray-700">Gender *</label>
						<div className="flex items-center gap-3 mt-1">
							<label className="text-sm">
								<input type="radio" name="gender" className="mr-1" /> Male
							</label>
							<label className="text-sm">
								<input type="radio" name="gender" className="mr-1" /> Female
							</label>
						</div>
					</div> */}

					{/* <div>
						<label className="block text-xs sm:text-sm font-medium text-gray-700">Select Grade *</label>
						<select className="w-full border rounded-lg p-2 mt-1 text-sm">
							<option>Select Academic Year First</option>
							<option>Grade 1</option>
							<option>Grade 2</option>
						</select>
					</div> */}

					<div>
						<label className="block text-xs sm:text-sm font-medium text-gray-700">Father Name *</label>
						<input
							type="text"
							placeholder="Enter Father's Full Name"
							className="w-full border rounded-lg p-2 mt-1 text-sm"
							required

						/>
					</div>

					<div>
						<label className="block text-xs sm:text-sm font-medium text-gray-700">Current Class </label>
						<input
							type="text"
							placeholder="Enter current class"
							className="w-full border rounded-lg p-2 mt-1 text-sm"
						/>
					</div>

					<div>
						<label className="block text-xs sm:text-sm font-medium text-gray-700">Primary Phone *</label>
						<input
							type="tel"
							placeholder="Enter Phone Number"
							className="w-full border rounded-lg p-2 mt-1 text-sm"
							required

						/>
					</div>

					<div>
						<label className="block text-xs sm:text-sm font-medium text-gray-700">Alternate Phone</label>
						<input
							type="tel"
							placeholder="Enter Phone Number"
							className="w-full border rounded-lg p-2 mt-1 text-sm"
						/>
					</div>

					<div className="sm:col-span-2">
						<label className="block text-xs sm:text-sm font-medium text-gray-700">Enquiry *</label>
						<textarea
							placeholder="Enter Enquiry Details"
							className="w-full border rounded-lg p-2 mt-1 text-sm"
							rows={2}
							required
						/>
					</div>

					<div className="sm:col-span-2 flex flex-col sm:flex-row justify-center items-center gap-3 mt-4">
						{/* Submit Button */}
						<button
							type="submit"
							className="bg-[#690B22] text-white px-6 py-2 rounded-lg shadow hover:bg-[#4E0819] transition-all text-sm sm:text-base w-full sm:w-auto"
						>
							SUBMIT
						</button>

						{/* WhatsApp Button */}
						<a
							href="https://wa.me/918989697401"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-5 py-2 rounded-lg shadow hover:bg-[#1EBE5B] transition-all text-sm sm:text-base w-full sm:w-auto"
						>
							{/* WhatsApp Icon (SVG inline for no dependency) */}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="w-5 h-5"
							>
								<path d="M20.52 3.48A11.92 11.92 0 0 0 12 0a11.92 11.92 0 0 0-8.52 3.48A11.92 11.92 0 0 0 0 12a11.92 11.92 0 0 0 3.48 8.52A11.92 11.92 0 0 0 12 24a11.92 11.92 0 0 0 8.52-3.48A11.92 11.92 0 0 0 24 12a11.92 11.92 0 0 0-3.48-8.52zM12 22.2a10.16 10.16 0 0 1-5.46-1.56l-.39-.23-3.9 1 1-3.8-.25-.4A10.09 10.09 0 0 1 1.8 12a10.2 10.2 0 0 1 20.4 0A10.2 10.2 0 0 1 12 22.2zm5.65-6.74c-.31-.16-1.83-.9-2.11-1-.28-.1-.48-.16-.68.16-.19.31-.77 1-.94 1.21-.17.22-.35.25-.65.09-.31-.16-1.31-.48-2.49-1.54a9.1 9.1 0 0 1-1.68-2.08c-.18-.31 0-.48.13-.64.13-.16.31-.35.47-.54.16-.19.22-.31.34-.52.11-.22.06-.41-.03-.57-.09-.16-.68-1.64-.94-2.24-.25-.6-.5-.52-.68-.53h-.57c-.19 0-.48.07-.73.34s-.96.94-.96 2.28 1 2.65 1.16 2.83c.16.19 1.92 2.93 4.63 4.1.65.28 1.16.45 1.55.58.65.21 1.24.18 1.7.11.52-.08 1.83-.74 2.09-1.45.26-.7.26-1.3.18-1.45-.07-.16-.28-.25-.59-.41z" />
							</svg>
							<span>WhatsApp</span>
						</a>
					</div>
				</form>
			</div>
		</div>
	);
};

export default EnquiryFormModal;
