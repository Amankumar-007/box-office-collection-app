import React from 'react';
import { motion } from 'framer-motion';

const SearchBar = ({ search, setSearch, onSearch }) => {
  return (
    <motion.form
      className="flex flex-col sm:flex-row gap-2 items-center mb-6"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={e => { e.preventDefault(); onSearch(); }}
    >
      <input
        type="text"
        placeholder="Movie Name"
        className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={search.name}
        onChange={e => setSearch({ ...search, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Year"
        className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={search.year}
        onChange={e => setSearch({ ...search, year: e.target.value })}
      />
      <input
        type="text"
        placeholder="Language"
        className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={search.language}
        onChange={e => setSearch({ ...search, language: e.target.value })}
      />
      <motion.button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
      >
        Search
      </motion.button>
    </motion.form>
  );
};

export default SearchBar;
