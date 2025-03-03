import React from "react";

interface ComingSoonCardProps {
  title: string;
  description: string;
}

const ComingSoonCard: React.FC<ComingSoonCardProps> = ({ title, description }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md text-center transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
      <span className="mt-4 inline-block bg-blue-500 text-white px-3 py-1 text-sm rounded-md">
        Coming Soon
      </span>
    </div>
  );
};

export default ComingSoonCard;
