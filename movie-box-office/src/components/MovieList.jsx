import React from 'react';
import MovieCard from './MovieCard';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
};

const MovieList = ({ movies, onMovieClick }) => {
  if (!movies || movies.length === 0) {
    return <div className="text-center text-gray-500 py-8">No movies found.</div>;
  }
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onClick={() => onMovieClick(movie)} />
      ))}
    </motion.div>
  );
};

export default MovieList;
