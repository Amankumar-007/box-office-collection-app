import React from 'react';
import { motion } from 'framer-motion';

const MovieCard = ({ movie, onClick }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }}
      onClick={onClick}
    >
      <img src={movie.poster} alt={movie.name} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-white">{movie.name} <span className="text-sm font-normal text-gray-500">({movie.year})</span></h3>
        <p className="text-xs text-gray-500 mb-2">{movie.language}</p>
        <div className="flex flex-col gap-1 text-sm">
          <span>Daily: <span className="font-semibold">${movie.dailyCollection}</span></span>
          <span>Weekend: <span className="font-semibold">${movie.weekendCollection}</span></span>
          <span>Total: <span className="font-semibold">${movie.totalCollection}</span></span>
        </div>
      </div>
    </motion.div>
  );
};

export default MovieCard;
