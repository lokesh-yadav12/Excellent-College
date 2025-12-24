import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { allInfoData, DepartmentType } from "../data/allInfoData";

const Allinfo: React.FC = () => {
  const params = useParams();
  const type = params.type as DepartmentType | undefined;

  const data = type ? allInfoData[type] : undefined;

  if (!data) {
    return (
      <div className="p-10 text-center text-gray-600">
        No data available
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Left Heading */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-8 px-10"
      >
        <h2 className="text-2xl font-bold text-gray-800">
          Institute <span className="text-red-700">Information</span>
        </h2>
      </motion.div>

      {/* Header */}
      <div className="bg-black text-white py-8 px-10 mt-6">
        <h1 className="text-3xl font-bold">{data.title}</h1>
      </div>

      {/* List */}
      <div className="max-w-6xl mx-auto mt-8 bg-white shadow-lg rounded-lg">
        <div className="grid grid-cols-12 bg-gray-100 p-4 font-semibold">
          <div className="col-span-10">Description</div>
          <div className="col-span-2 text-center">Action</div>
        </div>

        {data.items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="grid grid-cols-12 p-4 border-t hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="col-span-10 text-gray-700">{item}</div>
            <div className="col-span-2 text-center">
              <a 
                href="#" 
                className="text-[#b24a2f] hover:text-[#8c3724] font-medium transition-colors duration-200 inline-flex items-center gap-1"
              >
                Learn More 
                <span className="transition-transform duration-200 inline-block hover:translate-x-1">→</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Allinfo;